<script setup>

import FormSection from '@/Components/FormSection.vue';
import { useForm } from '@inertiajs/inertia-vue3';
import { watchEffect } from 'vue';

import { QuoteProgress, getSeason, getTours, getHotels, getPrice, loadHotels, getActivityPickup, getPickup } from './Providers/Services.js';
import { Today, parseQuoteType, fixedAdd } from './Providers/Helpers.js';

import InputNumber from './InputNumber.vue';
import InputLabel from './InputLabel.vue';
import InputRange from './InputRange.vue';
import InputText from './InputText.vue';
import Summary from './Summary.vue';
import InputDate from './InputDate.vue';

const props = defineProps({
    parks: Array,
    zones: Array
});

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
    zona: null,
    season: 'low',
    actividad: null,
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

const hasAmount = (n) => {
    return n > 0 ? '$' + n  : ''
}

watchEffect(() => {
    form.nacionales = form.tipoReservacion != 1 ? false : form.nacionales ;
});

watchEffect(() => {
    form.season = getSeason(form.fechaActividad);
});

watchEffect(() => {

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
                    "public_price": null,
                    "agency_price": null
            });
    }
    QuoteProgress.nTours = arr;
});

const loadPrices = async(activity, zone, season, key) => {
    const price = await getPrice(activity, zone, season);
    
    QuoteProgress.nTours[key].public_price = fixedAdd((form.adultos * Number(price.adult.amount)), (form.menores * Number(price.minor.amount)));
    form.precioPublico = fixedAdd(form.precioPublico, QuoteProgress.nTours[key].public_price);
    form.importeVenta += form.precioPublico * ( ( 100 - QuoteProgress.prices.profit.percentage ) / 100 );
    console.log(QuoteProgress.nTours);
    console.log(form);
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
}

function submit(){

preSubmit();

form.post(route('quote.store'));
location.reload();

}

</script>

    
<template>

    <div>
        <div class="p-6 sm:px-20 bg-white border-b border-gray-200">

            <div class="mt-4 text-2xl text-center">
                Nueva cotización 
                <p class="text-lg">Fecha de hoy: {{ Today }}</p>
            </div>
        
        </div>

        <FormSection @submitted="submit">

            <template #title>
                <div class="md:mx-14 md:my-10 font-bold">Resumen de la cotización.</div>
            </template>
            <template #description>
                <!-- component -->
                <Summary>

                    <template #header>
                        Precio al publico {{ hasAmount(QuoteProgress.prices.totalPublicPrice) }} 
                    </template>

                    <template #content>
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
                        <p>Costo para la agencia: ${{ QuoteProgress.prices.totalAgencyPrice }}</p>
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
                                        placeholder="Aa"
                                        id="QuoteTitular" 
                                        name="nombreTitular"  
                                        v-model="form.nombreTitular" />

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

                        <!-- Tour -->
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
                                        v-model="QuoteProgress.tour.activity"
                                        v-if="QuoteProgress.tours"
                                        name="parque" 
                                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                        >
                                        <option value="null" selected disabled>-- Seleccione un tour --</option>
                                        <option class="capitalize" v-for="tour in QuoteProgress.tours" :value="tour.id">{{ tour.name }}</option>
                                    </select>

                                </div>
                            </div>

                        </div>

                        <!-- Paquete -->
                        <div v-if="form.tipoReservacion ==  3" class="-mx-3 flex flex-wrap">

                            <div class="mb-5 w-28">
                                
                                <InputLabel for="number_of_activitys">
                                        Numero de actividades
                                </InputLabel>

                                <InputNumber
                                    v-model.number="QuoteProgress.nPackTours"
                                    id-name="number_of_activitys"
                                />

                            </div>

                        </div>

                        <!-- Zona  -->
                        <div v-if="form.tipoReservacion ==  2" class="-mx-3 flex flex-wrap">

                            <div class="w-full px-3">
                                <div class="mb-5">
                                    <InputLabel for="zone">
                                        Zona
                                    </InputLabel>
                                    <select
                                        v-model="form.zona"
                                        @change="getHotels( $event.target.value )"
                                        id="zone"
                                        name="zone" 
                                        class="capitalize w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                        >
                                        <option value="null" selected disabled>-- Seleccione su zona --</option>
                                        <option v-for="zone in zones"  :value="zone.id">{{ zone.name }}</option>
                                    </select>
                                </div>
                            </div>

                        </div>

                        <!-- Pick Up Hotel -->
                        <div v-if="form.zona !== null && form.tipoReservacion == 2" class="-mx-3 flex flex-wrap">

                            <div class="w-full px-3">

                                <div class="mb-5" v-if="QuoteProgress.tour.activity">

                                    <InputLabel 
                                        for="pickUpZone">
                                            Hotel del pickup
                                    </InputLabel>
                                    
                                    <select
                                        @input="setTour(QuoteProgress.tour.activity, $event.target.value)"
                                        @change="getTourCost(QuoteProgress.tour.activity, form.zona, form.season)"
                                        v-model="QuoteProgress.tour.hotel"
                                        v-if="QuoteProgress.hotels"
                                        name="pickUpZone"
                                        id="pickUpZone"
                                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    >
                                            <option value="null" selected disabled>-- Seleccione un hotel --</option>
                                            <option v-if="Array.isArray(QuoteProgress.hotels)" class="capitalize" v-for="h in QuoteProgress.hotels" :value="h.id">{{ h.name }}</option>
                                    </select>

                                </div>

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
                                            @input="loadPrices(act.activity, act.zone, form.season, (act.key - 1))"
                                            @focusout="getActivityPickup((act.key - 1), act.activity, act.hotel)"
                                            v-model="act.hotel"
                                            v-if="QuoteProgress.hotels"
                                            name="pickUpZone"
                                            id="pickUpZone"
                                            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                            >
                                            <option value="null" selected disabled>-- Seleccione un hotel --</option>
                                            <option v-if="QuoteProgress.hotels[act.zone == 1 ? 'cancun' : 'rm']" class="capitalize" v-for="h in QuoteProgress.hotels[act.zone == 1 ? 'cancun' : 'rm']" :value="h.id">{{ h.name }}</option>
                                    </select>

                                </div>

                                <div class="mb-5" v-if="act.pickup">
                                    <InputLabel>
                                        Hora de su pickup
                                    </InputLabel>
                                    <InputText
                                        disabled
                                        aria-disabled="true"
                                        :value="act.pickup.slice(0,5)"
                                        />
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
                class="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
              >
                Enviar Cotización
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