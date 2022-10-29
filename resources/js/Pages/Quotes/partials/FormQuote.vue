<script setup>

import FormSection from '@/Components/FormSection.vue';
import { useForm } from '@inertiajs/inertia-vue3';
import { reactive, watchEffect } from 'vue';

import { today , tipoReserva, getSeason } from './Providers/Data.js';

import InputNumber from './InputNumber.vue';
import InputLabel from './InputLabel.vue';
import InputRange from './InputRange.vue';
import InputText from './InputText.vue';
import Summary from './Summary.vue';
import InputDate from './InputDate.vue';

import Swal from 'sweetalert2'

const props = defineProps({
    parks: Array,
    zones: Array
});

const form = useForm({
    fechaReservacion:  new Date().toISOString().split('T')[0],
    fechaActividad: null,
    precioPublico: true,
    tipoReservacion: 1,
    nacionales: false,
    nombreTitular: '',
    importeVenta: 0,
    parque1: {
            pickup: "15:50",
            activity: 1,
            hotel: 10,
        },
    pickUp: null,
    infantes: 0,
    notas: null,
    adultos: 0,
    menores: 0,
    zona: null,
    season: 'low',
    parque: [
        {
            pickup: "12:00",
            activity: 11,
            hotel: 10,
        },
        {
            pickup: "12:00",
            activity: 12,
            hotel: 10,
        }
    ],
})

const QuoteProgress = reactive({
    season: 'low',
    hotels: [],
    tours: [],
    nPackTours: 0,
    tour: {
        activity: 0,
        pickup: "12:00",
        hotel: null,

    },
    resume: {
        total: {
            adults: 0,
            minors: 0,
        }
    },
    prices: {
        totalPublicPrice: 0,
        totalAgencyPrice: 0,
        reference: 0,
        cost: {
            adult: 0,
            minor: 0,
        },
        profit: {
            percentage: 5,
            amount: 0
        }
    }
});

const getTours = async () => {
    
    const res = await fetch(route('tours'));
    QuoteProgress.tours = await res.json();

}

const getHotels = async () => {

    const res = await fetch(route('hotels', {'zone': form.zona == 1  ? form.zona : 2} ));
    QuoteProgress.hotels = await res.json();

}

const getPrice = async (activity, zone, season) => {

    const res = await fetch(route('prices', { activity, zone, season }))
    const data = await res.json();

    return data;

}

const getCost = () => {

QuoteProgress.resume.total.adults = form.adultos * QuoteProgress.prices.cost.adult;
QuoteProgress.resume.total.minors = form.menores * QuoteProgress.prices.cost.minor;

QuoteProgress.prices.totalPublicPrice = QuoteProgress.resume.total.adults + QuoteProgress.resume.total.minors;
QuoteProgress.prices.totalPublicPrice = QuoteProgress.prices.totalPublicPrice.toFixed(2);
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
    
    const prices = await getPrice(form.parque, form.nacionales ? 4 : 5 , form.season);
    
    QuoteProgress.prices.cost.adult = prices.adult.amount;
    QuoteProgress.prices.cost.minor = prices.minor.amount;
    
    getCost();
}
const getTourCost = async () => {
    
    // return console.log(form);
    const prices = await getPrice(form.parque.activity, form.zona, form.season);
    // return console.log(prices);
    QuoteProgress.prices.cost.adult = prices.adult.amount;
    QuoteProgress.prices.cost.minor = prices.minor.amount;
    
    getCost();
}

const hasAmount = (n) => {
    return n > 0 ? n + '$ usd' : ''
}

watchEffect(() => {
    form.nacionales = form.tipoReservacion != 1 ? false : form.nacionales ;
});

watchEffect(() => {
    form.season = getSeason(form.fechaActividad);
});

watchEffect(() => {
    console.log(QuoteProgress.nPackTours);
});

const setTour = () => {
    form.parque = QuoteProgress.tour;
}

function preSubmit(){

form.tipoReservacion = tipoReserva(form.tipoReservacion);

}

function submit(){

preSubmit();

form.post(route('quote.store'));

}

</script>

    
<template>

    <div>
        <div class="p-6 sm:px-20 bg-white border-b border-gray-200">

            <div class="mt-4 text-2xl text-center">
                Nueva cotización 
                <p class="text-lg">Fecha de hoy: {{ today }}</p>
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
                        <!-- Precio al publico {{ Cost.total > 0 ? ApplyFormula() + '$ usd' : '' }}  -->
                    </template>

                    <template #content>
                        <p class="mb-4">( Temporada {{ QuoteProgress.season }}, Tarifa {{ form.nacionales ? 'Nacional' : 'Internacional' }})</p>
                        <p>A nombre de: {{ form.nombreTitular }}</p>
                        <br>
                        <p>Adultos: {{ `${form.adultos} x ${QuoteProgress.prices.cost.adult} = ${form.adultos * QuoteProgress.prices.cost.adult}` }}</p>
                        <p>Menores: {{ `${form.menores} x ${QuoteProgress.prices.cost.minor} = ${form.menores * QuoteProgress.prices.cost.minor}` }}</p>
                        <p>Infantes: {{ `${form.infantes}` }} - no pagan</p>
                        <br>

                        <p>Tipo de reserva: {{ tipoReserva(form.tipoReservacion) }}</p>
                        <br>
                        <p>Precio sugerido al publico: {{ QuoteProgress.prices.totalPublicPrice }} </p>
                        <p>Costo para la agencia: {{ QuoteProgress.prices.totalAgencyPrice }}</p>
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

                        <div class="-mx-3 flex flex-wrap">
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
                                        v-model="form.parque"
                                        id="park"
                                        name="parque" 
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
                        <!-- N Pack tours -->
                        <div v-if="form.tipoReservacion ==  3 && QuoteProgress.nPackTours != 0" class="-mx-3 flex flex-wrap">

                            <div v-for="act in QuoteProgress.nPackTours" class="w-full px-3">
                                
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
                                        <option value="null" selected disabled> -- Seleccione un tour -- </option>
                                        <option class="capitalize" v-for="tour in QuoteProgress.tours" :value="tour.id">{{ tour.name }}</option>
                                    </select>

                                </div>

                                <div class="mb-5">
                                    <InputLabel for="zone">
                                        Zona
                                    </InputLabel>
                                    <select
                                        v-model="form.zona"
                                        @change="() => { getHotels() }"
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
                                            @input="() => setTour()"
                                            @change="getTourCost()"
                                            v-model="QuoteProgress.tour.hotel"
                                            v-if="QuoteProgress.hotels"
                                            name="pickUpZone"
                                            id="pickUpZone"
                                            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                            >
                                            <option value="null" selected disabled>-- Seleccione un hotel --</option>
                                            <option v-if="QuoteProgress.hotels" class="capitalize" v-for="h in QuoteProgress.hotels" :value="h.id">{{ h.name }}</option>
                                    </select>

                                </div>

                                <hr>
                                <br>
                                <!-- End v-for -->
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
                                        @change="() => { getHotels() }"
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

                            <div class="mb-5">

                                <InputLabel 
                                      for="pickUpZone">
                                          Hotel del pickup
                                </InputLabel>
                                  
                                <select
                                        @input="() => setTour()"
                                        @change="getTourCost()"
                                        v-model="QuoteProgress.tour.hotel"
                                        v-if="QuoteProgress.hotels"
                                        name="pickUpZone"
                                        id="pickUpZone"
                                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                        >
                                        <option value="null" selected disabled>-- Seleccione un hotel --</option>
                                        <option v-if="QuoteProgress.hotels" class="capitalize" v-for="h in QuoteProgress.hotels" :value="h.id">{{ h.name }}</option>
                                </select>

                            </div>

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