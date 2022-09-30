<script setup>

import FormSection from '@/Components/FormSection.vue';
import { useForm } from '@inertiajs/inertia-vue3';
import { Inertia } from '@inertiajs/inertia';
import { reactive } from 'vue';

const prices = {
    adults: 100,
    kids: 50,
    season: 'baja'
}

let Cost = reactive({ total: 0 });

const CalculateCost = () => {
    const costAdults = form.adultos * prices.adults;
    const costKids = form.menores * prices.kids;

    const totalCost = costAdults + costKids;

    Cost.total = totalCost;
}

    const form = useForm({
        fechaReservacion:  new Date().toISOString().split('T')[0],
        tipoReservacion: null,
        FechaActividad: null,
        nombreTitular: '',
        adultos: 0,
        menores: 0,
        infantes: 0,
        parque: null,
        nacionales: true,
        precioPublico: true,
        costo: true,
        notas: true,
    })

    function submit(){

        Inertia.post(route('quote.store'), form);
    
    }

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const today = new Date().toLocaleDateString(undefined, options);


</script>
    
<template>

    <div>
        <div class="p-6 sm:px-20 bg-white border-b border-gray-200">

            <div class="mt-4 text-2xl text-center">
                Nueva reservación 
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
                        Costo {{ Cost.total > 0 ? Cost.total + '$ usd' : '' }} 
                    </summary>
                
                    <hr class="my-2 scale-x-150"/>
                
                    <div class="text-sm -m-4 -mt-2 p-4 bg-gray-50">
                        <p class="mb-4">( Precios x temporada {{ prices.season }} )</p>
                        <p>Adultos: {{ `${form.adultos} x ${prices.adults} = ${form.adultos * prices.adults}` }}</p>
                        <p>Menores: {{ `${form.menores} x ${prices.kids} = ${form.menores * prices.kids}` }}</p>
                        <p>Infantes - no pagan</p>
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

                        <div class="-mx-3 flex flex-wrap">
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

                        <!-- Reservation Type -->

                        <div class="mb-5">
                            <label class="mb-3 block text-base font-medium text-[#07074D]">
                            Tipo de reservación?
                            </label>
                            <div class="flex items-center space-x-6">
                            <div class="flex items-center">
                                <input
                                type="radio"
                                name="radio1"
                                id="radioButton1"
                                class="h-5 w-5"
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
                                type="radio"
                                name="radio1"
                                id="radioButton2"
                                class="h-5 w-5"
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
                                type="radio"
                                name="radio1"
                                id="radioButton3"
                                class="h-5 w-5"
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
                                    <label
                                      for="fName"
                                      class="mb-3 block text-base font-medium text-[#07074D]"
                                    >
                                      Nombre del titular
                                    </label>
                                    <input
                                      type="text"
                                      name="fName"
                                      id="fName"
                                      placeholder="Nombre del titular"
                                      class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    />
                                </div>
                            </div>

                        </div>

                        <!-- Craw -->

                        <div class="flex flex-wrap justify-between">

                            <div class="mb-5 w-28">
                                <label
                                for="adultos"
                                class="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                Adultos
                                </label>
                                <input
                                    type="number"
                                    name="adultos"
                                    id="adultos"
                                    v-model="form.adultos"
                                    placeholder="0"
                                    min="0"
                                    class="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>

                            <div class="mb-5 w-28">
                                <label
                                for="menores"
                                class="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                Menores
                                </label>
                                <input
                                type="number"
                                name="menores"
                                id="menores"
                                v-model="form.menores"
                                placeholder="0"
                                min="0"
                                class="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
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
                        <div class="-mx-3 flex flex-wrap">

                            <div class="w-full px-3">
                                <div class="mb-5">

                                    <label
                                      for="fName"
                                      class="mb-3 block text-base font-medium text-[#07074D]"
                                    >
                                        Parque
                                    </label>
                                    <input
                                      type="text"
                                      name="fName"
                                      id="fName"
                                      placeholder=""
                                      class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    />

                                </div>
                            </div>

                        </div>

                        <!-- Nationals -->

                        <div class="mb-5">

                            <label class="mb-3 block text-base font-medium text-[#07074D]">
                                Nacionales?
                            </label>

                            <div class="flex items-center space-x-6">

                                <div class="flex items-center">

                                    <input
                                      type="radio"
                                      name="nacionales"
                                      id="nacionales1"
                                      class="h-5 w-5"
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
                                      @change="CalculateCost()"
                                    />
                                    <label
                                      for="nacionales2"
                                      class="pl-3 text-base font-medium text-[#07074D]"
                                    >
                                      No
                                    </label>

                                </div>

                            </div>

                        </div>

                        <!-- Public Price  -->
                        
                        <div class="-mx-3 flex flex-wrap">

                            <div class="w-full px-3">
                                <div class="mb-5">
                                    <label
                                      for="fName"
                                      class="mb-3 block text-base font-medium text-[#07074D]"
                                    >
                                      Precio Publico
                                    </label>
                                    <input
                                      type="text"
                                      name="fName"
                                      id="fName"
                                      placeholder="$"
                                      class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    />
                                </div>
                            </div>

                        </div>

                        <!-- Coste -->

                        <!-- <div class="-mx-3 flex flex-wrap">

                            <div class="w-full px-3">
                                <div class="mb-5">
                                    <label
                                      for="fName"
                                      class="mb-3 block text-base font-medium text-[#07074D]"
                                    >
                                      Costo
                                    </label>
                                    <input
                                      type="text"
                                      name="fName"
                                      id="fName"
                                      placeholder="$"
                                      class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    />
                                </div>
                            </div>

                        </div> -->

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
