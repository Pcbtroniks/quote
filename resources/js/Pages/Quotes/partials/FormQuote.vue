<script setup>

import {prices , parks , tours , today , tipoReserva , profit as pr, zones } from './Providers/Data.js';
import FormSection from '@/Components/FormSection.vue';
import { useForm } from '@inertiajs/inertia-vue3';
import { Inertia } from '@inertiajs/inertia';
import { reactive, ref, watchEffect } from 'vue';

import InputNumber from './InputNumber.vue';
import InputLabel from './InputLabel.vue';
import InputRange from './InputRange.vue';
import InputText from './InputText.vue';
import Summary from './Summary.vue';
import InputDate from './InputDate.vue';

const profit = ref(pr.max);

const form = useForm({
    fechaReservacion:  new Date().toISOString().split('T')[0],
    FechaActividad: null,
    precioPublico: true,
    tipoReservacion: 1,
    nacionales: false,
    nombreTitular: '',
    importeVenta: 0,
    parque: null,
    pickUp: null,
    infantes: 0,
    notas: null,
    adultos: 0,
    menores: 0,
    zona: null,
})

function preSubmit(){

    form.tipoReservacion = tipoReserva(form.tipoReservacion);

}

function submit(){

    preSubmit();

    Inertia.post(route('quote.store'), form);

}

let Cost = reactive({ total: 0, sugested: 0 });

const ApplyFormula = () => {

    CalculateCost();

    form.importeVenta = Cost.total * ( ( 100 - profit.value ) / 100 );

    return form.importeVenta;

}

const CalculateCost = () => {
    
    const costAdults = form.adultos * prices.adults;
    const costKids = form.menores * prices.kids;
    const totalCost = costAdults + costKids;
    Cost.total = totalCost;

    Cost.sugested = Cost.total * ( ( 100 - pr.max ) / 100 );
    form.precioPublico = Cost.total;
}

const getZone = () => {
    form.pickUp = zones[form.zona];
}

const getPickUpTime = () => {

}

const Current = ref(0);


// Entradas

watchEffect(() => {
    form.nacionales = form.tipoReservacion != 1 ? false : form.nacionales ;
    console.log(form.nacionales);
});

</script>
    
<template>

    <div>
        <div class="p-6 sm:px-20 bg-white border-b border-gray-200">

            <div class="mt-4 text-2xl text-center">
                Nueva reservación 
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
                        Precio al publico {{ Cost.total > 0 ? Cost.total + '$ usd' : '' }} 
                        <!-- Precio al publico {{ Cost.total > 0 ? ApplyFormula() + '$ usd' : '' }}  -->
                    </template>

                    <template #content>
                        <p class="mb-4">( Temporada {{ prices.season }}, Tarifa {{ form.nacionales ? 'Nacional' : 'Internacional' }})</p>
                        <p>A nombre de: {{ form.nombreTitular }}</p>
                        <br>
                        <p>Adultos: {{ `${form.adultos} x ${prices.adults} = ${form.adultos * prices.adults}` }}</p>
                        <p>Menores: {{ `${form.menores} x ${prices.kids} = ${form.menores * prices.kids}` }}</p>
                        <p>Infantes: {{ `${form.infantes}` }} - no pagan</p>
                        <br>

                        <p>Tipo de reserva: {{ tipoReserva(form.tipoReservacion) }}</p>
                        <br>
                        <p>Precio sugerido al publico: {{ Current }} </p>
                        <p>Costo para la agencia: {{ Cost.sugested }}</p>
                        <p>Ganancia de vendedor: {{ Cost.total > 0 ? ( Current - Cost.sugested ) + '$ usd' : '' }}</p>
                        <p>
                            <small>Calcular precio {{ `min: ${Cost.sugested} - max: ${Cost.total}` }}</small>
                        </p>
                        <InputRange v-model="Current" :min="Cost.sugested" :max="Cost.total" />
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
                                    Fecha de actividad
                                </InputLabel>

                                <InputDate 
                                    v-model="form.FechaActividad" 
                                    :id-name="'fechaAvtidad'"  />
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
                                        @change="ApplyFormula()"
                                        v-model="form.parque"
                                        id="park"
                                        name="parque" 
                                        class="capitalize w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                        >
                                        <option value="null" selected disabled>-- Seleccione un parque --</option>
                                        <option class="capitalize" v-for="park in parks" :value="park">{{ park }}</option>
                                    </select>

                                </div>
                            </div>

                        </div>

                        <!-- Tour -->
                        <div v-if="form.tipoReservacion ==  2 || form.tipoReservacion ==  3" class="-mx-3 flex flex-wrap">

                            <div class="w-full px-3">
                                <div class="mb-5">

                                    <label
                                      for="fName"
                                      class="mb-3 block text-base font-medium text-[#07074D]"
                                    >
                                        Tour
                                    </label>
                                    <select 
                                        name="park" 
                                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                        >
                                        <option value="null" selected disabled>-- Seleccione un tour --</option>
                                        <option class="capitalize" v-for="tour in tours" value="{{ tour }}">{{ tour }}</option>
                                    </select>

                                </div>
                            </div>

                        </div>

                        <!-- Zona  -->
                        
                        <div v-if="form.tipoReservacion ==  2 || form.tipoReservacion ==  3" class="-mx-3 flex flex-wrap">

                            <div class="w-full px-3">
                                <div class="mb-5">
                                    <InputLabel for="zone">
                                        Zona
                                    </InputLabel>
                                    <select
                                        v-model="form.zona"
                                        @change="() => {ApplyFormula(); getZone()}"
                                        id="zone"
                                        name="zone" 
                                        class="capitalize w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                        >
                                        <option value="null" selected disabled>-- Seleccione su zona --</option>
                                        <option  value="playaDelCarmen">Playa del Carmen</option>
                                        <option class="capitalize" value="Cancun">Cancun</option>
                                        <option class="capitalize" value="rivieraMaya">Riviera Maya</option>
                                    </select>
                                </div>
                            </div>

                        </div>

                        <!-- Pick Up Hotel -->

                        <div v-if="form.zona !== null && form.tipoReservacion != 'entrada'" class="-mx-3 flex flex-wrap">
    
                          <div class="w-full px-3">

                              <div class="mb-5">

                                  <InputLabel 
                                      for="pickUpZone">
                                          Hotel del pickup
                                  </InputLabel>
                                  
                                  <select 
                                        name="pickUpZone"
                                        id="pickUpZone"
                                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                        >
                                        <option value="null" selected disabled>-- Seleccione un hotel --</option>
                                        <option class="capitalize" v-for="z in form.pickUp" value="{{ z }}">{{ z }}</option>
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