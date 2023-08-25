<script setup>
import { useForm } from '@inertiajs/inertia-vue3';
import { reactive, defineEmits } from 'vue';

import FormError from './Partials/FormError.vue';

const props = defineProps({
    fields: Object,
    show: Boolean,
    filters: Object
})

const form = useForm({
    activity_id: null,
    zone_id: null,
    name: null,
    adult_low: null,
    kid_low: null,
    adult_high: null,
    kid_high: null,
    entrance: null,
    tour: null,
    pack: null,
    pack_double: null,
    pack_multiple: null,
});

const unfold = reactive({
    prices: false,
    discounts: true
});

const emit = defineEmits(['close']);


const switchAccordion = (accordion) => {
    if (accordion === 'prices') {
        unfold.prices = !unfold.prices;
        unfold.discounts = !unfold.discounts;
    } else if (accordion === 'discounts') {
        unfold.prices = !unfold.prices;
        unfold.discounts = !unfold.discounts;
    }
};

const preSubmit = () => {
    form.activity_id = props.fields.id;
    // Discount fields
    form.name = props.fields.name;
    form.entrance = props.fields.discounts.entrance;
    form.tour = props.fields.discounts.tour;
    form.pack = props.fields.discounts.pack;
    form.pack_double = props.fields.discounts.pack_double;
    form.pack_multiple = props.fields.discounts.pack_multiple;
    // Prices fields
    form.adult_low = props.fields.filter_prices.low.adult[0].amount;
    form.kid_low = props.fields.filter_prices.low.kid[0].amount;
    form.adult_high = props.fields.filter_prices.high.adult[0].amount;
    form.kid_high = props.fields.filter_prices.high.kid[0].amount;
    // Zone fields
    form.zone_id = props.filters.zone;
}

const submit = () => {
    preSubmit();
    form.post(route('activities.update', props.fields.id), {
        preserveScroll: true,
        onSuccess: () => {
            Swal.fire({
                title: '¡Actualizado!',
                text: 'La actividad ha sido actualizada correctamente.',
                icon: 'success',
                confirmButtonText: 'Aceptar',
                confirmButtonColor: '#3B82F6',
            }).then((result) => {
                if (result.isConfirmed) {
                    emit('close');
                }
            })
        }
    });
}

</script>
<template>
    <section v-if="show" class="overlay w-full h-full absolute top-0 left-0 bg-black bg-opacity-50">
        <main id="content" role="main" class=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-xl mx-auto p-6 my-10">
        <div class="mt-7 bg-white  rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700">
        <div class="p-4 sm:p-7">
            <div class="text-center">
            <h1 class="block text-2xl font-bold text-gray-800 dark:text-white">Editando {{ props.fields.name ?? 'Actividad' }}</h1>
            </div>

            <div class="mt-5">
            <form @submit.prevent="submit">
                <div class="grid gap-y-4">
                    
                    <div>
                        <label for="name" class="block text-sm font-bold ml-1 mb-2 dark:text-white">Nombre de la actividad: {{ props.fields.name ?? 'Actividad' }}</label>
                        <div class="relative">
                        <input v-model="props.fields.name" type="text" id="name" name="name" class="w-full py-3 px-4 block border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm" aria-describedby="email-error">
                        </div>
                        <FormError :msg="form.errors.name"/>
                    </div>

                    <!-- Prices by Season -->
                    <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">Modo edición</p>
                    <button type="button" @click="switchAccordion('prices')" class="text-white font-bold bg-sky-400 py-4">{{ unfold.prices ? 'Cambiar a modificar % descuentos' : 'Cambiar a modificar $ Precios'}}</button>
                    
                    <div :class="unfold.prices == false ? 'h-0 overflow-y-hidden' : 'h-full overflow-y-auto'">
                        <!-- Low Season -->
                    <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">Temporada baja</p>
                    <div class="flex justify-between flex-col items-center ">

                        <div class="w-full mb-4">
                            <label for="adult_low" class="block text-sm font-bold ml-1 mb-2 dark:text-white">Adulto (Temporada Baja)</label>
                            <div class="relative">
                            <input step="0.01" v-model="props.fields.filter_prices.low.adult[0].amount" type="number" name="adult_low" id="adult_low" class="w-full py-3 px-4 block border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm">
                            </div>
                            <FormError :msg="form.errors.adult_low"/>
                        </div>

                        <div class="w-full">
                            <label for="minor_low" class="block text-sm font-bold ml-1 mb-2 dark:text-white">Menor (Temporada Baja)</label>
                            <div class="relative w-full">
                            <input step="0.01" v-model="props.fields.filter_prices.low.kid[0].amount" type="number" name="minor_low" id="minor_low" class="w-full py-3 px-4 block border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm">
                            </div>
                            <FormError :msg="form.errors.minor_low"/>
                        </div>

                    </div>

                    <!-- High Season -->
                    <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">Temporada Alta</p>
                    <div class="flex justify-between flex-col">

                        <div class="mb-4">
                            <label for="adult_high" class="block text-sm font-bold ml-1 mb-2 dark:text-white">Adulto (Temporada Alta)</label>
                            <div class="relative">
                            <input step="0.01" v-model="props.fields.filter_prices.high.adult[0].amount" type="number" name="adult_high" id="adult_high" class="w-full py-3 px-4 block border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm">
                            </div>
                            <FormError :msg="form.errors.adult_high"/>
                        </div>

                        <div>
                            <label for="minor_high" class="block text-sm font-bold ml-1 mb-2 dark:text-white">Menor (Temporada Alta)</label>
                            <div class="relative">
                            <input step="0.01" v-model="props.fields.filter_prices.high.kid[0].amount" type="number" name="minor_high" id="minor_high" class="w-full py-3 px-4 block border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm">
                            </div>
                            <FormError :msg="form.errors.minor_high"/>
                        </div>

                    </div>
                    </div>
                    
                    <div :class="unfold.discounts == false ? 'h-0 overflow-y-hidden' : 'h-full overflow-y-auto'">
                        <!-- Low Season -->
                    <div class="flex justify-between flex-col items-center ">

                        <div class="w-full">
                            <label for="tour" class="block text-sm font-bold ml-1 mb-2 dark:text-white">Tour (Solo)</label>
                            <div class="relative w-full">
                            <input v-model="props.fields.discounts.tour" type="number" name="tour" id="tour" class="w-full py-3 px-4 block border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm">
                            </div>
                            <FormError :msg="form.errors.tour"/>
                        </div>

                    </div>

                    <div class="flex justify-between flex-col">

                        <div class="mb-4">
                            <label for="pack" class="block text-sm font-bold ml-1 mb-2 dark:text-white">Tour (Paquete)</label>
                            <div class="relative">
                            <input v-model="props.fields.discounts.pack" type="number" name="pack" id="pack" class="w-full py-3 px-4 block border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm">
                            </div>
                            <FormError :msg="form.errors.pack"/>
                        </div>

                        <div>
                            <label for="pack_double" class="block text-sm font-bold ml-1 mb-2 dark:text-white">Paquete #2</label>
                            <div class="relative">
                            <input v-model="props.fields.discounts.pack_double" type="number" name="pack_double" id="pack_double" class="w-full py-3 px-4 block border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm">
                            </div>
                            <FormError :msg="form.errors.pack_double"/>
                        </div>

                        <div>
                            <label for="pack_multiple" class="block text-sm font-bold ml-1 mb-2 dark:text-white">Paquete #3 o mas</label>
                            <div class="relative">
                            <input v-model="props.fields.discounts.pack_multiple" type="number" name="pack_multiple" id="pack_multiple" class="w-full py-3 px-4 block border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm">
                            </div>
                            <FormError :msg="form.errors.pack_multiple"/>
                        </div>

                    </div>
                    </div>
                
                                    <!-- Current active edition mode -->
                <p class="text-sm text-gray-600 dark:text-gray-400">Actualizando: {{ unfold.prices ? 'Precios ($)'  : 'Descuentos (%)' }}</p>
                <button type="submit" class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">Guardar Cambios</button>
                <button @click="$emit('close')" type="button" class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">Cerrar Modal</button>
                </div>
            </form>
            </div>
        </div>
        </div>
    </main>
    </section>
</template>