<script setup>

import FormSection from '@/Components/FormSection.vue';
import { useForm } from '@inertiajs/inertia-vue3';
import { Inertia } from '@inertiajs/inertia';
import { reactive, ref } from 'vue';
import {prices,
        parks ,
        tours ,
        today ,
        amounts,
        profit as pr
    } from './Providers/Data.js';
import InputText from './InputText.vue';
import InputLabel from './InputLabel.vue';
import InputNumber from './InputNumber.vue';

const profit = ref(pr.max);
const importes = ref(amounts);

const tipoReserva = function(){
    const types = ['No especificada', 'Entrada', 'Parque', 'Tour'];
    return types[form.tipoReservacion];
}

const form = useForm({
    fechaReservacion:  new Date().toISOString().split('T')[0],
    tipoReservacion: 1,
    FechaActividad: null,
    nombreTitular: '',
    adultos: 0,
    menores: 0,
    infantes: 0,
    parque: null,
    nacionales: false,
    precioPublico: true,
    costo: true,
    notas: true,
})

function submit(){

    Inertia.post(route('quote.store'), form);

}

let Cost = reactive({ total: 0, sugested: 0 });

const ApplyFormula = () => {

    CalculateCost();

    const result = Cost.total * ( ( 100 - profit.value ) / 100 );

    return result;

}

const CalculateCost = () => {
    
    const costAdults = form.adultos * prices.adults;
    const costKids = form.menores * prices.kids;
    const totalCost = costAdults + costKids;
    Cost.total = totalCost;

    Cost.sugested = Cost.total * ( ( 100 - pr.max ) / 100 );

}

const Current = ref(0);

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
                <section class="ml-2 w-full h-screen pt-20">
                    <details class="w-96 bg-white p-4 rounded-xl shadow-md group mx-auto overflow-hidden max-h-[56px] open:!max-h-[400px] transition-[max-height] duration-500 overflow-hidden">
                    <summary
                        class="outline-none cursor-pointer focus:font-bold text-2xl font-semibold marker:text-transparent group-open:before:rotate-90  before:origin-center relative before:w-[18px] before:h-[18px] before:transition-transform before:duration-200 before:-left-1 before:top-2/4 before:-translate-y-2/4 before:absolute before:bg-no-repeat before:bg-[length:18px_18px] before:bg-center before:bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20class%3D%22h-6%20w-6%22%20fill%3D%22none%22%20viewBox%3D%220%200%2024%2024%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%3E%0A%20%20%3Cpath%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20d%3D%22M9%205l7%207-7%207%22%20%2F%3E%0A%3C%2Fsvg%3E')]"
                    >
                        Precio al publico {{ Cost.total > 0 ? Cost.total + '$ usd' : '' }} 
                        <!-- Precio al publico {{ Cost.total > 0 ? ApplyFormula() + '$ usd' : '' }}  -->
                    </summary>
                
                    <hr class="my-2 scale-x-150"/>
                
                    <div class="text-sm -m-4 -mt-2 p-4 bg-gray-50">
                        <p class="mb-4">( Temporada {{ prices.season }}, Tarifa {{ form.nacionales ? 'Nacional' : 'Internacional' }})</p>
                        <p>A nombre de: {{ form.nombreTitular }}</p>
                        <br>
                        <p>Adultos: {{ `${form.adultos} x ${prices.adults} = ${form.adultos * prices.adults}` }}</p>
                        <p>Menores: {{ `${form.menores} x ${prices.kids} = ${form.menores * prices.kids}` }}</p>
                        <p>Infantes: {{ `${form.infantes}` }} - no pagan</p>
                        <br>

                        <p>Tipo de reserva: {{ tipoReserva() }}</p>
                        <br>
                        <p>Precio sugerido al publico: {{ Current }} </p>
                        <p>Costo para la agencia: {{ Cost.sugested }}</p>
                        <p>Ganancia de vendedor: {{ Cost.total > 0 ? ( Current - Cost.sugested ) + '$ usd' : '' }}</p>
                        <!-- <p>
                            <small>Porcentaje de ganancia {{ profit }}% sobre el precio</small>
                        </p> -->
                        <!-- <input v-model="profit" type="range" min="0" :max="15" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" /> -->
                        <p>
                            <small>Calcular precio {{ `min: ${Cost.sugested} - max: ${Cost.total}` }}</small>
                        </p>
                        <input v-model="Current" type="range" :min="Cost.sugested" :max="Cost.total" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" />

                    </div>
                    </details>
                </section>
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

                        <!-- Reservation Date -->

                        <div class="hidden -mx-3 flex flex-wrap">
                            <div class="w-full px-3 ">
                            <div class="mb-5">
                                <label
                                for="date"
                                class="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                Fecha de reservación
                                </label>
                                <input
                                type="date"
                                name="fechaReservacion"
                                v-model="form.fechaReservacion"
                                id="date"
                                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                disabled
                                />
                            </div>
                            </div>
                        </div>

                        <!-- Nationals -->

                        <div class="mb-5">

                            <small class="text-gray-400">Descuento para  mexicanos, presentar INE o pasaporte.</small>

                            <label for="nacionalesId" class="flex items-center cursor-pointer text-base font-medium text-[#07074D]">
                                
                                <span class="mr-2">Nacionales?</span>
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
                                
                            <!-- <div class="flex items-center space-x-6">

                                <div class="flex items-center">

                                    <input
                                    type="radio"
                                    name="nacionales"
                                    id="nacionales1"
                                    class="h-5 w-5"
                                    checked
                                    @change="CalculateCost"
                                    />
                                    <label
                                    for="nacionales1"
                                    class="pl-3 text-base font-medium text-[#07074D]"
                                    >
                                    Si
                                    </label>

                                </div>

                                <div class="flex items-center">
                                    
                                    <input
                                    type="radio"
                                    name="nacionales"
                                    id="nacionales2"
                                    class="h-5 w-5"
                                    @change="CalculateCost"
                                    />
                                    <label
                                    for="nacionales2"
                                    class="pl-3 text-base font-medium text-[#07074D]"
                                    >
                                    No
                                    </label>

                                </div>

                            </div> -->

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
                                <label
                                for="date"
                                class="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                Fecha de actividad
                                </label>
                                <input
                                type="date"
                                name="date"
                                id="date"
                                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                            </div>
                        </div>

                        <!-- Name of owner -->

                        <div class="-mx-3 flex flex-wrap">
                          
                            <div class="w-full px-3">

                                <div class="mb-5">

                                    <InputLabel 
                                        for="QuoteTitular">
                                            Nombre del titular
                                    </InputLabel>
                                    
                                    <InputText 
                                        placeholder="Nombre..."
                                        id="QuoteTitular" 
                                        name="QuoteTitular"  
                                        v-model="form.nombreTitular" />

                                </div>

                            </div>

                        </div>

                        <!-- Craw -->

                        <div class="flex flex-wrap justify-between">

                            <div class="mb-5 w-28">
                                
                                <InputLabel
                                    for="adultos"
                                    >
                                        Adultos
                                </InputLabel>

                                <InputNumber
                                    :idn="adultos"
                                    v-model="form.adultos"
                                />

                            </div>

                            <div class="mb-5 w-28">
                                <InputLabel for="menores">
                                    Menores
                                </InputLabel>
                                <InputNumber
                                    name="menores"
                                    id="menores"
                                    v-model="form.menores"
                                />
                            </div>

                            <br>
                            <br>

                            <div class="mb-5 w-28">
                                <label
                                for="infantes"
                                class="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                Infantes
                                </label>
                                <input
                                type="number"
                                name="infantes"
                                id="infantes"
                                v-model="form.infantes"
                                placeholder="0"
                                min="0"
                                class="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>

                        </div>

                        <!-- Park -->
                        <div v-if="form.tipoReservacion == 1" class="-mx-3 flex flex-wrap">

                            <div class="w-full px-3">
                                <div class="mb-5">

                                    <label
                                      for="fName"
                                      class="mb-3 block text-base font-medium text-[#07074D]"
                                    >
                                        Parque
                                    </label>
                                    <select 
                                        @change="ApplyFormula()"
                                        name="park" 
                                        class="capitalize w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                        >
                                        <option value="null" selected disabled>-- Seleccione un parque --</option>
                                        <option class="capitalize" v-for="park in parks" value="{{ park }}">{{ park }}</option>
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
                                    <label
                                      for="zona"
                                      class="mb-3 block text-base font-medium text-[#07074D]"
                                    >
                                      Zona
                                    </label>
                                    <input
                                      type="text"
                                      name="zona"
                                      id="zona"
                                      placeholder=""
                                      class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    />
                                </div>
                            </div>

                        </div>

                        <!-- Notes Text Area -->

                        <div class="-mx-3 flex flex-wrap">

                            <div class="w-full px-3">
                                <div class="mb-5">
                                    <label
                                      for="fName"
                                      class="mb-3 block text-base font-medium text-[#07074D]"
                                    >
                                        Notas
                                    </label>
                                    <textarea
                                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    name="" id="" cols="30" rows="10"></textarea>
                                </div>
                            </div>

                        </div>

                        <!-- Submit Button -->
                        <!-- <div>
                            <button
                              class="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
                            >
                              Enviar Cotización
                            </button>
                        </div> -->

                    </div>

                </div>
                <!-- Form -->

                <!-- <JetButton class="mt-4"> Enviar </JetButton> -->
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