<script setup>
import { useForm, usePage } from '@inertiajs/inertia-vue3';
import { watchPostEffect, reactive, ref } from 'vue';
import FormSection from '@/Components/FormSection.vue';

import { getSeason } from '@/Services/Providers.js'
import {
  QuoteProgress, getTours, getPrice, loadHotels, getPickup,
} from './Providers/Services.js';
import {
  Today, parseQuoteType, fixedAdd, hasAmount, zoneToString,
} from './Providers/Helpers.js';

import TextError from '../../../Shared/TextError.vue';
import InputNumber from './InputNumber.vue';
import InputLabel from './InputLabel.vue';
import InputText from './InputText.vue';
import Summary from './Summary.vue';
import Alert from '@/Components/Alert.vue';
import InputDate from './InputDate.vue';
import ShowCosts from './ShowCosts.vue';
import ShowCostsModal from './ShowCostsModal.vue';
const props = defineProps({
  parks: Array,
  zones: Array,
  errors: Object,
});
QuoteProgress.prices.profit.percentage = usePage().props.value.user.current_team.sale_amount_percentage;

const form = useForm({
  fechaReservacion: new Date().toISOString().split('T')[0],
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
});

const getCost = () => {
  QuoteProgress.resume.total.adults = form.adultos * QuoteProgress.prices.cost.adult;
  QuoteProgress.resume.total.minors = form.menores * QuoteProgress.prices.cost.minor;

  QuoteProgress.prices.totalPublicPrice = fixedAdd(QuoteProgress.resume.total.adults, QuoteProgress.resume.total.minors);
  form.precioPublico = QuoteProgress.prices.totalPublicPrice;
  form.importeVenta = getComputedPrice().toFixed(2);
  QuoteProgress.prices.totalAgencyPrice = form.importeVenta;

  QuoteProgress.prices.reference = (QuoteProgress.prices.totalPublicPrice - QuoteProgress.prices.totalAgencyPrice).toFixed(2);

  console.log(QuoteProgress);
};

const getComputedPrice = () => QuoteProgress.prices.totalPublicPrice * ((100 - QuoteProgress.prices.profit.percentage) / 100);

const getParkCost = async () => {
  const prices = await getPrice(form.actividad, form.nacionales ? 4 : 5, form.season);

  QuoteProgress.prices.cost.adult = prices.adult.amount;
  QuoteProgress.prices.cost.minor = prices.minor.amount;

  getCost();
};

watchPostEffect(() => {
  form.season = getSeason(form.fechaActividad);
  if (form.actividad) getCost();
});

watchPostEffect(() => {
  if(form.tipoReservacion == 3 && Activities.activityList.length == 0){
    Activities.setMinTourPackage()
  }
  if (form.actividad && form.tipoReservacion == 1) {
    getParkCost()
  };
  return [form.adultos, form.menores];
});

watchPostEffect(() => {
  form.nacionales = form.tipoReservacion != 1 ? false : form.nacionales;
});

watchPostEffect(() => {
  resetPrices();
  return [form.tipoReservacion];
});

watchPostEffect(() => {
  const arr = [];
  const len = QuoteProgress.nPackTours;
  for (let i = 0; i < len; i++) {
    arr.push({
      key: (i + 1),
      activity: null,
      zone: null,
      hotel: null,
      pickup: null,
      activity_date: null,
      public_price: 0,
      agency_price: 0,
    });
  }
  QuoteProgress.nTours = arr;
});

function preSubmit() {
  if (form.tipoReservacion != 1) {
    form.actividad = Activities.activityList;
    form.precioPublico = Activities.calculatePublicPrice();
  }
  if(form.tipoReservacion == 1 && form.nacionales){
    form.zona = 4;
  }
  form.tipoReservacion = parseQuoteType(form.tipoReservacion);
  resetPrices();
}

function submit() {
  preSubmit();

  form.post(route('quoter.store'), {
    preserveScroll: true,
    onSuccess: (response) => {
      console.log(response);
      Swal.fire(
        'Nueva cotizacion generada',
        'Hemos guardado la cotizacion',
        'success'
        ).then(function() {
            location.reload();
        })
    },
    onError: (response) => {
      Swal.fire(
        'Ups! Algo salio mal',
        'No hemos podido guardar la cotizacion, por favor intenta de nuevo.',
        'error'
        ).then(function() {
            location.reload();
        })
      console.log(response);
    },
  });
  if (props.errors) {
    console.log(props.errors);
  }
}
function resetPrices() {
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
      amount: 0,
    },
  };
}
function resetForm() {
  location.reload();
}
function applyAgencyDiscount(Price, discount = 5) {
  return Number(Price * ((100 - discount) / 100)).toFixed(2);
}
function pickupNotAvailable() {
  alert('Lo sentimos actualmente no tenemos pickups disponibles');
  return 'Lo sentimos, por el momento no tenemos un pickup disponible, porfavor pongase en contacto con uno de nuestros agentes al: 998-168-9378.';
}

class postActivities {
  activityList;

  NumberOfActivities;

  hotelList;

  publicPrice;

  minTourPackage;

  constructor() {
    this.activityList = [];
    this.NumberOfActivities = 1;
    this.hotelList = {};
    this.publicPrice = 0;
    this.minTourPackage = 2;
  }

  getFirstTour(index = 0) {
    return this.activityList[index] ?? false;
  }

  setTour(activitity) {
    if(this.getFirstTour()){
      this.activityList.pop();
      resetPrices();
    }
    this.addActivity(1, activitity, form.season, 1);
  }

  async setTourHotel(hotel, index = 0) {
    this.activityList[index].hotel = hotel;
    this.activityList[index].pickup = await getPickup(this.activityList[index].activity, hotel).then((data) => data?.pickup_time) ?? '00:00:00';
    this.activityList[index].public_price = await this.getActivityPublicPrice(index);
    QuoteProgress.prices.totalPublicPrice = this.calculatePublicPrice();
  }
    
  async getActivityPublicPrice(index) {
    const price = await getPrice(this.activityList[index].activity, this.activityList[index].zone, form.season).then((data) => data) ?? 0;
    return fixedAdd((form.adultos * Number(price.adult.amount)), (form.menores * Number(price.minor.amount)));
  }

  setMinTourPackage(n = 2) {
    this.minTourPackage = n;
    this.resetActivities();
    for(let i = 0; i < this.minTourPackage; i++){
      this.addActivity();
    }
  }

  setActivity(index, activity){
    this.activityList[index].activity = activity;
  }

  setActivityDate(index, date){
    this.activityList[index].season = getSeason(date);
    this.activityList[index].activity_date = date;
  }

  setActivityZone(index, zone){
    this.activityList[index].zone = zone;
  }

  addActivity(key = this.activityList.length + 1, activitity, season = form.season, zone = null, hotel = null, pickup = null, activity_date = form.fechaActividad) {
    const act = {
      key,
      activity: activitity,
      season,
      zone,
      hotel,
      pickup,
      activity_date,
      type: parseQuoteType(form.tipoReservacion),
      adults: form.adultos,
      minors: form.menores,
      infants: form.infantes,
      public_price: 0,
    };

    this.activityList.push(act);
  }

  resetActivities() {
    this.activityList = [];
    resetPrices();
  }

  async loadHotels(zone) {
    this.hotelList = await loadHotels(zone, this.hotelList);
    return this.hotelList;
  }

  describe() {
    return console.log({
      length: this.activityList.length,
      'Number of tours': QuoteProgress.nPackTours,
      activities: this.activityList,
      hotels: this.hotelList,
    });
  }

  calculatePublicPrice() {
    return this.activityList.reduce((acc, { public_price }) => (acc + Number(public_price)), 0);
  }

  async applyAgencyCost(index)
  {
    const costAdults = form.adultos * await this.getActivityPublicPrice(this.activityList[index].activity, form.zona, form.season).then((data) => data.adult.amount);
    const costMinors = form.menores * await this.getActivityPublicPrice(this.activityList[index].activity, form.zona, form.season).then((data) => data.minor.amount);

  }

  activityAt(n) {
    n = Math.trunc(n) || 0;
    if (n < 0) n += this.length;
    if (n < 0 || n >= this.length) return undefined;
    return this.activityList[n];
  }

  async isHotelListByZoneLoaded(zoneID) {
    if (this.hotelList[zoneToString(zoneID)]?.length && this.hotelList[zoneToString(zoneID)].length > 0) {
      return true;
    }
    await this.loadHotels(zoneID);
    return true;
  }

  async getHotelListByZone(zoneID) {
    return await this.hotelList[zoneToString(zoneID)];
  }
}

const Activities = reactive(new postActivities());

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
                    </template>
                </Summary>

                <!-- <ShowCosts :activities="Activities.activityList" class="p-4" /> -->
                <ShowCostsModal :activities="form" :activityList="Activities.activityList" class="p-4"/>

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
                                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
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
                                      for="parque"
                                      class="mb-3 block text-base font-medium text-[#07074D]"
                                    >
                                        Tour
                                    </label>
                                    <select
                                        @change="Activities.setTour($event.target.value)"
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

                            <div class="w-full px-3" v-if="Activities.getFirstTour()">
                                <div class="mb-5">
                                    <InputLabel for="zone">
                                        Zona
                                    </InputLabel>
                                    <select
                                        v-model="Activities.getFirstTour().zone"
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

                                <div class="mb-5" v-if="Activities.getFirstTour()?.zone">

                                    <InputLabel
                                        for="pickUpZone">
                                            Hotel del pickup
                                    </InputLabel>

                                    <select
                                        @change="Activities.setTourHotel($event.target.value)"
                                        v-model="Activities.getFirstTour().hotel"
                                        name="pickUpZone"
                                        id="pickUpZone"
                                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    >
                                            <option value="null" selected disabled>-- Seleccione un hotel para su pickup --</option>
                                            <option class="capitalize" v-if="Activities.isHotelListByZoneLoaded(Activities.getFirstTour().zone)" v-for="h in Activities.hotelList[zoneToString(Activities.getFirstTour().zone)]" :value="h.id">{{ h.name }}</option>
                                    </select>

                                </div>

                            </div>

                            <!-- Tour Pick Up -->
                            <div v-if="Activities.getFirstTour().pickup" class="-mx-3 flex flex-wrap">

                                <Alert :msg="Activities.getFirstTour().pickup == '00:00:00' ? 'Lo sentimos, por el momento no tenemos un pickup disponible, estamos trabajando en ello.' : `Su pickup sera a las: ${Activities.getFirstTour().pickup.slice(0,5)} hrs. en el hotel especificado, procure tener al menos 15 minutos de antelación.`" />

                            </div>

                        </div>

                        <!-- Pack Section -->
                        <div v-if="form.tipoReservacion ==  3" class="-mx-3 flex flex-wrap">

                            <div class="mb-5 w-28">

                                <InputLabel for="number_of_activitys">
                                        Numero de actividades
                                </InputLabel>

                                <InputNumber
                                    @input.number="Activities.setMinTourPackage($event.target.value)"
                                    :value="Activities.minTourPackage"
                                    min="2"
                                    id-name="number_of_activitys"
                                />

                            </div>

                        </div>

                        <!-- N Pack tours | ntoursdiv-->
                        <div v-if="form.tipoReservacion == 3" class="-mx-3 flex flex-wrap">

                            <div v-for="( act, index ) in Activities.activityList" class="w-full px-3">

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
                                        @change="Activities.setActivity(act.key - 1, $event.target.value)"
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
                                        @change="Activities.setActivityDate(index, $event.target.value)"
                                        :min="new Date().toISOString().split('T')[0]"
                                        :id-name="'fechaActividad'+act.key"  />
                                </div>

                                <div class="mb-5">
                                    <InputLabel for="zone">
                                        Zona
                                    </InputLabel>
                                    <select
                                        v-model="act.zone"
                                        @change="Activities.isHotelListByZoneLoaded($event.target.value)"
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
                                        v-if="Activities.isHotelListByZoneLoaded(act.zone)"
                                        v-model="act.hotel"
                                        @change="Activities.setTourHotel($event.target.value, act.key - 1)"
                                        name="pickUpZone"
                                        id="pickUpZone"
                                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                        >
                                        <option value="null" selected disabled>-- Seleccione un hotel --</option>
                                        <option class="capitalize" v-for="h in Activities.hotelList[zoneToString(act.zone)]" :value="h.id">{{ h.name }}</option>
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
                                    <textarea
                                    v-model="form.notas"
                                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    name="note" id="notes" cols="30" rows="1" placeholder="Notas (opcional)"></textarea>
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
