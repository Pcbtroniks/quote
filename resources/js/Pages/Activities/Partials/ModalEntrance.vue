<script setup>
import Swal from 'sweetalert2';

import { useForm } from '@inertiajs/inertia-vue3';
import { reactive, defineEmits, ref } from 'vue';

import FormError from '@/Pages/Activities/Partials/FormError.vue';

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
console.log(props.fields);
if(props.fields.filter_prices.length == 0) {
    props.fields.filter_prices = {
        low: {
            adult: [{amount: 0}],
            kid: [{amount: 0}]
        },
        high: {
            adult: [{amount: 0}],
            kid: [{amount: 0}]
        }
    }
}

</script>
<template>
    <section v-if="show" class="overlay w-full h-full absolute top-0 left-0 bg-black bg-opacity-50">
        <main id="content" role="main" class=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-xl mx-auto p-6 my-10">
        <div class="mt-7 bg-white  rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700">
        <div class="p-4 sm:p-7">
            <div class="text-center">
            <h1 class="block text-2xl font-bold text-gray-800 dark:text-white">Editando {{ props.fields.name ?? 'Actividad' }}</h1>
            <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
                <!-- Editando {{ props.fields.name ?? 'Actividad' }} -->
                <!-- <a class="text-blue-600 decoration-2 hover:underline font-medium" href="#">
                Login here
                </a> -->
            </p>
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
                    <p class="hidden mt-2 text-sm text-gray-600 dark:text-gray-400">Precios por temporada</p>
                    <button type="button" @click="switchAccordion('prices')" class="text-white font-bold bg-sky-400 py-4">{{ unfold.prices ? 'Cambiar a modificar descuentos (%)' : 'Cambiar a modificar Precio ($)'}}</button>

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

                        <div class="w-full mb-4">
                            <label for="entrance" class="block text-sm font-bold ml-1 mb-2 dark:text-white">Entrada</label>
                            <div class="relative">
                            <input v-model="props.fields.discounts.entrance" type="number" name="entrance" id="entrance" class="w-full py-3 px-4 block border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm">
                            </div>
                            <FormError :msg="form.errors.entrance"/>
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