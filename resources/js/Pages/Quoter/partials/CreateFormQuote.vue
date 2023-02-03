<script setup>

import FormSection from '@/Components/FormSection.vue';
import { useForm, usePage } from '@inertiajs/inertia-vue3';
import { watchPostEffect } from 'vue';

import { QuoteProgress, getSeason, getTours, getHotels, getPrice, loadHotels, getActivityPickup, getPickup } from './Providers/Services.js';
import { Today, parseQuoteType, fixedAdd, hasAmount, zoneToString } from './Providers/Helpers.js';

import TextError from '../../../Shared/TextError.vue';
import InputNumber from './InputNumber.vue';
import InputLabel from './InputLabel.vue';
import InputRange from './InputRange.vue';
import InputText from './InputText.vue';
import Summary from './Summary.vue';
import Alert from '@/Components/Alert.vue';
import InputDate from './InputDate.vue';

const props = defineProps({
    parks: Array,
    zones: Array,
    errors: Object,
});
QuoteProgress.prices.profit.percentage = usePage().props.value.user.current_team.sale_amount_percentage;

const form = useForm({
    fechaReservacion:  new Date().toISOString().split('T')[0],
    fechaActividad: null,
    precioPublico: 0,
    tipoReservacion: 1,
    nacionales: false,
    nombreTitular: '',
    importeVenta: 0,
    pickUp: null,
    infantes: 0,
    notas: null,
    adultos: 1,
    menores: 0,
    zona: 5,
    season: 'low',
    actividad: null,
    activitities: [],
})

const getCost = () => {

QuoteProgress.resume.total.adults = form.adultos * QuoteProgress.prices.cost.adult;
QuoteProgress.resume.total.minors = form.menores * QuoteProgress.prices.cost.minor;

QuoteProgress.prices.totalPublicPrice = fixedAdd(QuoteProgress.resume.total.adults, QuoteProgress.resume.total.minors);
form.precioPublico = QuoteProgress.prices.totalPublicPrice;
form.importeVenta = getComputedPrice().toFixed(2);
QuoteProgress.prices.totalAgencyPrice = form.importeVenta;

QuoteProgress.prices.reference = (QuoteProgress.prices.totalPublicPrice - QuoteProgress.prices.totalAgencyPrice).toFixed(2);

console.log(QuoteProgress);

}

const getComputedPrice = () => {
return QuoteProgress.prices.totalPublicPrice * ( ( 100 - QuoteProgress.prices.profit.percentage ) / 100 );
}

const getParkCost = async () => {
    
    const prices = await getPrice(form.actividad, form.nacionales ? 4 : 5 , form.season);
    
    QuoteProgress.prices.cost.adult = prices.adult.amount;
    QuoteProgress.prices.cost.minor = prices.minor.amount;
    
    getCost();
}

const getTourCost = async (activity, zona , season ) => {
    
    const prices = await getPrice(activity, zona, season);
    
    QuoteProgress.prices.cost.adult = prices.adult.amount;
    QuoteProgress.prices.cost.minor = prices.minor.amount;
    
    getCost();
}


watchPostEffect(() => {
    form.season = getSeason(form.fechaActividad);
    if(form.actividad) getCost();
});

watchPostEffect(() => {
    if(form.actividad && form.tipoReservacion == 1) getParkCost();
    if(form.actividad && form.tipoReservacion == 2) getTourCost(QuoteProgress.tour.activity, form.zona, form.season);
    if(QuoteProgress.nTours.length > 0 && form.tipoReservacion == 3) {
        QuoteProgress.nTours.forEach(( act ) => {
            handlePackActivity(act);
        });
    };
    return [form.adultos, form.menores];
});

watchPostEffect(() => {
    form.nacionales = form.tipoReservacion != 1 ? false : form.nacionales;
});

watchPostEffect(() => {
    resetPrices();
    return [form.tipoReservacion, QuoteProgress.nTours];
})

watchPostEffect(() => {

    var arr = [];
    var len = QuoteProgress.nPackTours;
    for (var i = 0; i < len; i++) {
             arr.push({
                    "key": (i + 1),
                    "activity": null,
                    "zone": null,
                    "hotel": null,
                    "pickup": null,
                    "activity_date": null,
                    "public_price": 0,
                    "agency_price": 0
            });
    }
    QuoteProgress.nTours = arr;
});

const loadPackPrice = async(activity, zone, season, key) => {
    const price = await getPrice(activity, zone, season);
    QuoteProgress.nTours[key].public_price = fixedAdd((form.adultos * Number(price.adult.amount)), (form.menores * Number(price.minor.amount)));
    form.precioPublico = QuoteProgress.prices.totalPublicPrice = QuoteProgress.nTours.reduce((acc, { public_price }) => (acc + Number(public_price)) , 0);
    form.importeVenta = applyAgencyDiscount(form.precioPublico);
    console.group()
        console.log('Quote');
        console.info(QuoteProgress.nTours);
        console.log('Form');
        console.table(form);
    console.groupEnd()
}

const setTour = async ( activity, hotel ) => {
    QuoteProgress.tour.pickup = await getPickup(activity, hotel).then(data => data.pickup_time) ?? '00:00:00';
    form.actividad = QuoteProgress.tour;
    console.log('se ha añadido el pickup y seteado la actividad tour');
}

function preSubmit(){
    if(form.tipoReservacion == 3){
        form.actividad = QuoteProgress.nTours;
    }    
    form.tipoReservacion = parseQuoteType(form.tipoReservacion);
    resetPrices();
}

function submit()
{
    preSubmit();

    form.post(route('quoter.store'), {
        preserveScroll: true,
        onSuccess: (response) => {
            console.log(response);
        },
        onError: (response) => {
            console.log(response);
        }
    });
    if(props.errors){
        console.log(props.errors);
    }
}
function resetPrices(){
    QuoteProgress.prices = {
        totalPublicPrice: 0,
        totalAgencyPrice: 0,
        reference: 0,
        cost: {
            adult: 0,
            minor: 0,
        },
        profit: {
            percentage: usePage().props.value.user.current_team.sale_amount_percentage,
            amount: 0
        }
    };
}

function resetForm() {
    location.reload();
}
function applyAgencyDiscount( Price, discount =  5){
    return Number(Price * ( ( 100 - discount ) / 100 )).toFixed(2);
}
function pickupNotAvailable(){
    alert('Lo sentimos actualmente no tenemos pickups disponibles')
    return 'Lo sentimos, por el momento no tenemos un pickup disponible, porfavor pongase en contacto con uno de nuestros agentes al: 998-168-9378.';
}

function handlePackActivity(act){
    if(!act.activity || !act.zone) return null;
    form.precioPublico = 0;
    loadPackPrice(act.activity, act.zone, form.season, (act.key - 1));
    getActivityPickup((act.key - 1), act.activity, act.hotel);
}

class postActivities {
    activityList;
    NumberOfActivities;
    hotelList;

    constructor() {
        this.activityList = [];
        this.NumberOfActivities = 1;
        this.hotelList = {};
    }

    setTour(activitity){
        this.addActivity(1, activitity, form.season, form.zona);
    }
    async setTourZone(key = 1, zone){
        this.activityAt(key - 1).zone = zone;
        await this.loadHotels( zone );
    }
    setTourHotel(key = 1, hotel){
        this.activityAt(key - 1).hotel = hotel;
    }
    setEntrance(activitity){
        this.addActivity(1,activitity, form.season, form.zona);
    }
    setPack(activitity, key){
        this.addActivity(key, activitity, form.season, form.zona);
    }

    addActivity(key = this.activityList.length + 1, activitity, season = null, zone = null, hotel = null, pickup = null, activity_date = form.fechaActividad){
        const act = {
            'key': key,
            'activity': activitity,
            'season': null,
            'zone': null,
            'hotel': null,
            'pickup': null,
            'activity_date': null,

            'adults': form.adultos,
            'minors': form.menores,
        };

        this.activityList.push(act);
    }

    async loadHotels(zone){
        this.hotelList = await loadHotels(zone, this.hotelList);
    }

    async isHotelAvailable(zoneID){
        console.log(await this.hotelList[zoneToString(zoneID)]);
        return await this.getHotels(zoneToString(zoneID)) ?? false;
    }

    async getHotels(zoneID){
        console.log(await this.hotelList[zoneToString(zoneID)]);
        return await this.hotelList[zoneToString(zoneID)];
    }

    describe(){
        return console.log({
            'length': this.activityList.length,
            'Number of tours': QuoteProgress.nPackTours,
            'activities': this.activityList,
            'hotels': this.hotelList
        });
    }

    activityAt(n){
        n = Math.trunc(n) || 0;
        if (n < 0) n += this.length;
        if (n < 0 || n >= this.length) return undefined;
        return this.activityList[n];
    }
}

const QuoteType = (NumberOfTOurs) => {
    if(NumberOfTOurs == 2) return 'pack_double';
    else if(NumberOfTOurs >= 3) return 'pack_triple';
    else return parseQuoteType(form.tipoReservacion);
}

const Activities = new postActivities();


const showActivities = () => {
    return console.log(Activities);
}
const showQuote = () => {
    return console.log(QuoteProgress);
}
const showForm = () => {
    return console.log(form);
}
</script>

    
<template>

    <div>
        <div class="p-6 sm:px-20 bg-white border-b border-gray-200">

            <div class="mt-4 text-2xl text-center">
                Nueva Cotización
                <p class="text-lg">Fecha de hoy: {{ Today }}</p>
            </div>
        
        </div>

        <FormSection @submitted="submit">

            <template #title>
                <div class="md:mx-14 md:my-10 font-bold">Resumen de la reserva.</div>
            </template>
            <template #description>
                <!-- component -->
                <Summary>

                    <template #header>
                        Precio al publico {{ hasAmount(QuoteProgress.prices.totalPublicPrice) }} 
                    </template>

                    <template #content class="overflow-hidden">
                        <p class="mb-4">( Temporada {{ form.season == 'low' ? 'Baja' : 'Alta'}}, Tarifa {{ form.nacionales ? 'Nacional' : 'Internacional' }})</p>
                        <p>A nombre de: {{ form.nombreTitular }}</p>
                        <br>
                        <p>Adultos: {{ `${form.adultos} x $${QuoteProgress.prices.cost.adult} = $${form.adultos * QuoteProgress.prices.cost.adult}` }}</p>
                        <p>Menores: {{ `${form.menores} x $${QuoteProgress.prices.cost.minor} = $${form.menores * QuoteProgress.prices.cost.minor}` }}</p>
                        <p>Infantes: {{ `${form.infantes}` }} - no pagan</p>
                        <br>

                        <p>Tipo de reserva: {{ parseQuoteType(form.tipoReservacion) }}</p>
                        <br>
                        <p>Precio sugerido al publico: ${{ QuoteProgress.prices.totalPublicPrice }} </p>
                        <p>Precio Publico con el descuento: ${{ QuoteProgress.prices.totalAgencyPrice }}</p>
                        <!-- <p>Costo para la agencia: ${{ QuoteProgress.prices.totalAgencyPrice }}</p> -->
                        <!-- <p>Ganancia de vendedor: {{ hasAmount( QuoteProgress.prices.reference ) }}</p> -->
                        <!-- <p>
                            <small>Calcular precio {{ `min: ${QuoteProgress.prices.totalAgencyPrice} - max: ${QuoteProgress.prices.totalPublicPrice}` }}</small>
                        </p>
                        <InputRange v-model.number="QuoteProgress.prices.reference" :min.number="form.importeVenta" :max.number="QuoteProgress.prices.totalPublicPrice" /> -->
                    </template>
                </Summary>

            </template>

            <template #form>

                <div class="col-span-6">
                    <div class="max-w-xl text-sm text-gray-600">
                        Por favor llene el siguiente formulario para poder realizar su cotización.
                    </div>
                </div>

                <!-- Form -->
                <div class="flex items-center justify-center px-12 pt-4 col-span-6 sm:col-span-4">

                    <div class="mx-auto w-full max-w-[550px]">

                        <!-- Nationals -->

                        <div v-if="form.tipoReservacion == 1" class="mb-5">

                            <small class="text-gray-400">Descuento para  mexicanos, presentar INE o pasaporte.</small>

                            <label for="nacionalesId" class="flex items-center cursor-pointer text-base font-medium text-[#07074D]">
                                
                                <span class="mr-2">Nacionales? {{ form.nacionales ? 'Si' : 'No' }}</span>
                                <!-- toggle -->
                                <div class="relative">
                                    <input
                                        v-model="form.nacionales"
                                        id="nacionalesId"
                                        type="checkbox"
                                        class="hidden" />
                                    <!-- path -->
                                    <div
                                        class="toggle-path bg-gray-200 w-9 h-5 rounded-full shadow-inner"
                                    ></div>
                                    <!-- crcle -->
                                    <div
                                        class="toggle-circle absolute w-3.5 h-3.5 bg-white rounded-full shadow inset-y-0 left-0"
                                    ></div>
                                </div>

                            </label>
                                
                        </div>

                        <!-- Reservation Type -->

                        <div class="mb-5">
                            <label class="mb-3 block text-base font-medium text-[#07074D]">
                            Tipo de reservación?
                            </label>
                            <div class="flex items-center space-x-6">
                            <div class="flex items-center">
                                <input
                                value="1"
                                type="radio"
                                name="tipoReservacion"
                                id="radioButton1"
                                checked
                                class="h-5 w-5"
                                v-model="form.tipoReservacion"
                                />
                                <label
                                for="radioButton1"
                                class="pl-3 text-base font-medium text-[#07074D]"
                                >
                                Entrada
                                </label>
                            </div>
                            <div class="flex items-center">
                                <input
                                @click="() => getTours()"
                                value="2"
                                type="radio"
                                name="tipoReservacion"
                                id="radioButton2"
                                class="h-5 w-5"
                                v-model="form.tipoReservacion"
                                />
                                <label
                                for="radioButton2"
                                class="pl-3 text-base font-medium text-[#07074D]"
                                >
                                Tour
                                </label>
                            </div>
                            <div class="flex items-center">
                                <input
                                    @click="() => getTours()"
                                    value="3"
                                    type="radio"
                                    name="tipoReservacion"
                                    id="radioButton3"
                                    class="h-5 w-5"
                                    v-model="form.tipoReservacion"
                                />
                                <label
                                for="radioButton3"
                                class="pl-3 text-base font-medium text-[#07074D]"
                                >
                                Paquete
                                </label>
                            </div>
                        </div>
                        <TextError :message="props.errors.tipoReservacion" />
                        </div>

                        <!-- Activity Date -->

                        <div v-if="form.tipoReservacion" class="-mx-3 flex flex-wrap">
                            <div class="w-full px-3 ">
                            <div class="mb-5">
                                <InputLabel for="fechaAvtidad">
                                    Fecha de actividad <span v-if="form.errors.fechaActividad" class="text-red-500">* Por favor llene este campo</span>
                                </InputLabel>

                                <InputDate
                                    required
                                    v-model="form.fechaActividad"
                                    :min="new Date().toISOString().split('T')[0]"
                                    :id-name="'fechaActividad'"  />
                            </div>
                            </div>
                        </div>

                        <!-- Holder name -->

                        <div class="-mx-3 flex flex-wrap">
                          
                            <div class="w-full px-3">

                                <div class="mb-5">

                                    <InputLabel 
                                        for="QuoteTitular">
                                            Nombre del titular
                                    </InputLabel>
                                    
                                    <InputText 
                                        required=""
                                        placeholder="Aa"
                                        id="QuoteTitular" 
                                        name="nombreTitular"  
                                        v-model="form.nombreTitular" />
                                    <TextError :message="props.errors.nombreTitular" />

                                </div>

                            </div>

                        </div>

                        <!-- Craw -->

                        <div class="flex flex-wrap justify-between">

                            <div class="mb-5 w-28">
                                
                                <InputLabel for="adultos">
                                        Adultos
                                </InputLabel>

                                <InputNumber
                                    id-name="adultos"
                                    v-model="form.adultos"
                                />
                                <TextError :message="props.errors.adultos" />

                            </div>

                            <div class="mb-5 w-28">
                                
                                <InputLabel for="menores">
                                    Menores
                                </InputLabel>

                                <InputNumber
                                    id-name="menores"
                                    v-model="form.menores"
                                />

                            </div>

                            <br>
                            <br>

                            <div class="mb-5 w-28">

                                <InputLabel for="infantes">
                                    Infantes
                                </InputLabel>
                                
                                <InputNumber
                                    id-name="infantes"
                                    v-model="form.infantes"
                                />
                            </div>

                        </div>

                        <!-- Park -->
                        <div v-if="form.tipoReservacion == 1" class="-mx-3 flex flex-wrap">

                            <div class="w-full px-3">
                                <div class="mb-5">

                                    <InputLabel for="park">
                                        Parque
                                    </InputLabel>
                                    <select 
                                        @change="getParkCost()"
                                        v-model="form.actividad"
                                        id="park"
                                        name="parque"
                                        ref="park"
                                        class="capitalize w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                        >
                                        <option value="null" disabled selected>-- Seleccione un parque --</option>
                                        <option class="capitalize" v-for="park in props.parks" :value="park.id">{{ park.name }}</option>
                                    </select>

                                </div>
                            </div>

                        </div>

                        <!-- Tour Section -->
                        <div v-if="form.tipoReservacion ==  2" class="-mx-3 flex flex-wrap">

                            <div class="w-full px-3">
                                <div class="mb-5">

                                    <label
                                      for="fName"
                                      class="mb-3 block text-base font-medium text-[#07074D]"
                                    >
                                        Tour
                                    </label>
                                    <select
                                        @change="event => Activities.addActivity(1, event.target.value)"
                                        v-if="QuoteProgress.tours"
                                        name="parque" 
                                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                        >
                                        <option value="null" selected disabled>-- Seleccione un tour --</option>
                                        <option class="capitalize" v-for="tour in QuoteProgress.tours" :value="tour.id">{{ tour.name }}</option>
                                    </select>

                                </div>
                            </div>

                            <!-- Tour Zone -->

                            <div class="w-full px-3">
                                <div class="mb-5">
                                    <InputLabel for="zone">
                                        Zona
                                    </InputLabel>
                                    <select
                                        v-model="form.zona"
                                        @change="Activities.setTourZone( 1, $event.target.value )"
                                        id="zone"
                                        name="zone" 
                                        class="capitalize w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                        >
                                        <option value="null" selected disabled>-- Seleccione su zona --</option>
                                        <option v-for="zone in zones"  :value="zone.id">{{ zone.name }}</option>
                                    </select>
                                </div>
                            </div>

                            <!-- Tour Hotel -->

                            <div class="w-full px-3">

                                <div class="mb-5" v-if="Activities.activityAt(1-1)">

                                    <InputLabel 
                                        for="pickUpZone">
                                            Hotel del pickup
                                    </InputLabel>
                                    
                                    <select
                                        @input="Activities.setTourHotel(1, $event.target.value)"
                                        
                                        v-model="QuoteProgress.tour.hotel"
                                        v-if="Activities.isHotelAvailable(Activities.activityAt(0).zone)"
                                        name="pickUpZone"
                                        id="pickUpZone"
                                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    >
                                            <option value="null" selected disabled>-- Seleccione un hotel --</option>
                                            <option v-if="Activities.isHotelAvailable(Activities.activityAt(0).zone)" class="capitalize" v-for="h in Activities.getHotels(Activities.activityAt(0).zone)" :value="h.id">{{ h.name }}</option>
                                    </select>

                                </div>

                            </div>

                            <!-- Tour Pick Up -->
                            <div v-if="form.tipoReservacion ==  2 && QuoteProgress.tour.pickup" class="-mx-3 flex flex-wrap">

                                <Alert :msg="QuoteProgress.tour.pickup == '00:00:00' ? 'Lo sentimos, por el momento no tenemos un pickup disponible, estamos trabajando en ello.' : `Su pickup sera a las: ${QuoteProgress.tour.pickup.slice(0,5)} hrs. en el hotel especificado, procure tener al menos 15 minutos de antelación.`" />

                            </div>

                        </div>

                        <!-- Pack Section -->
                        <div v-if="form.tipoReservacion ==  3" class="-mx-3 flex flex-wrap">

                            <div class="mb-5 w-28">
                                
                                <InputLabel for="number_of_activitys">
                                        Numero de actividades
                                </InputLabel>

                                <InputNumber
                                    v-model.number="QuoteProgress.nPackTours"
                                    min="2"
                                    id-name="number_of_activitys"
                                />

                            </div>

                        </div>

                        
                        <!-- N Pack tours | ntoursdiv-->
                        <div v-if="form.tipoReservacion ==  3 && QuoteProgress.nTours != 0" class="-mx-3 flex flex-wrap">

                            <div v-for="act in QuoteProgress.nTours" class="w-full px-3">
                                
                                <h2>Actividad {{ act.key }} </h2>
                                <div class="mb-5">

                                    <label
                                        for="fName"
                                        class="mb-3 block text-base font-medium text-[#07074D]"
                                    >
                                        Tour
                                    </label>
                                    <select
                                        v-model="act.activity"
                                        @change="handlePackActivity(act)"
                                        v-if="QuoteProgress.tours"
                                        name="Activity" 
                                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                        >
                                        <option value="null" selected disabled> -- Seleccione un tour -- </option>
                                        <option class="capitalize" v-for="tour in QuoteProgress.tours" :value="tour.id">{{ tour.name }}</option>
                                    </select>

                                </div>

                                <div class="mb-5">
                                    <InputLabel :for="'fechaAvtidad'+act.key">
                                        Fecha de actividad <span v-if="form.errors.fechaActividad" class="text-red-500">* Por favor llene este campo</span>
                                    </InputLabel>

                                    <InputDate
                                        required
                                        v-model="act.activity_date"
                                        :min="new Date().toISOString().split('T')[0]"
                                        :id-name="'fechaActividad'+act.key"  />
                                </div>

                                <div class="mb-5">
                                    <InputLabel for="zone">
                                        Zona
                                    </InputLabel>
                                    <select
                                        v-model="act.zone"
                                        @input="(event) => loadHotels(event.target.value)"
                                            id="zone"
                                            name="zone" 
                                            class="capitalize w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                        >
                                        <option value="null" selected disabled>-- Seleccione su zona --</option>
                                        <option v-for="zone in zones"  :value="zone.id">{{ zone.name }}</option>
                                    </select>
                                </div>

                                <div class="mb-5">

                                    <InputLabel 
                                        for="pickUpZone">
                                            Hotel del pickup
                                    </InputLabel>
                                    
                                    <select
                                        v-model="act.hotel"
                                        @change="handlePackActivity(act)"
                                        v-show="QuoteProgress.hotels"
                                        name="pickUpZone"
                                        id="pickUpZone"
                                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                        >
                                        <option value="null" selected disabled>-- Seleccione un hotel --</option>
                                        <option v-if="QuoteProgress.hotels[zoneToString(act.zone)]" class="capitalize" v-for="h in QuoteProgress.hotels[zoneToString(act.zone)]" :value="h.id">{{ h.name }}</option>
                                    </select>

                                </div>

                                <div class="mb-5" v-if="act.pickup">
                                    <Alert :msg="act.pickup == '00:00:00' ? pickupNotAvailable() : `Su pickup sera a las: ${act.pickup.slice(0,5)}.\n Precio publico de la actividad ${act.key}: $${act.public_price}, su precio de agencia: ${applyAgencyDiscount(act.public_price)}`" />
                                </div>

                                <hr>
                                <br>
                                <!-- End v-for -->
                            </div>

                        </div>

                        <!-- Notes Text Area -->
                        <div class="-mx-3 flex flex-wrap">

                            <div class="w-full px-3">
                                <div class="mb-5">
                                    <InputLabel
                                      for="notes"
                                    >
                                        Notas
                                    </InputLabel>
                                    <textarea
                                    v-model="form.notas"
                                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    name="note" id="notes" cols="30" rows="10"></textarea>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
                <!-- Form -->

            </template>

            <template #actions>
                <button
                type="button"
                @click="showQuote"
                class="hover:shadow-form rounded-md mr-16 bg-amber-500 py-3 px-8 text-center text-base font-semibold text-white outline-none"
              >
                Mostrar Cotización
              </button>
                <button
                type="button"
                @click="showForm"
                class="hover:shadow-form rounded-md mr-16 bg-amber-500 py-3 px-8 text-center text-base font-semibold text-white outline-none"
              >
                Mostrar Form
              </button>
                <button
                type="button"
                @click="showActivities"
                class="hover:shadow-form rounded-md mr-16 bg-amber-500 py-3 px-8 text-center text-base font-semibold text-white outline-none"
              >
                Mostrar Actividades
              </button>
                <button
                type="button"
                @click="resetForm()"
                class="hover:shadow-form rounded-md mr-16 bg-red-500 py-3 px-8 text-center text-base font-semibold text-white outline-none"
              >
                Reiniciar Cotización
              </button>
              <button
                class="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
              >
                Guardar Cotización
              </button>
            </template>
                
        </FormSection>
    </div>

</template>

<style scoped>
.toggle-path {
    transition: background 0.3s ease-in-out;
}
.toggle-circle {
    top: 0.2rem;
    left: 0.25rem;
    transition: all 0.3s ease-in-out;
}
input:checked ~ .toggle-circle {
    transform: translateX(100%);
}
input:checked ~ .toggle-path {
    background-color:#2536eb;
}
</style>