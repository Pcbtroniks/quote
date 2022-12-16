<script setup>
import { useForm } from '@inertiajs/inertia-vue3';

const props = defineProps({
    fields: Object,
    show: Boolean
})

const form = useForm({
    name: props.fields.name,
    adult_low: null,
    child_low: null,
    adult_high: null,
    child_high: null,
    entrance: null,
    tour: null,
    pack: null,
    pack_double: null,
    pack_multiple: null,
}); 
</script>
<template>
    <Transition name="modal">
    <section @wheel.prevent  @touchmove.prevent @scroll.prevent v-if="show" class="overlay w-full h-screen fixed top-0 left-0 bg-black bg-opacity-50 overflow-hidden">
        <main id="content" role="main" class=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-xl mx-auto p-6">
        <div class="mt-7 bg-white  rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700">
        <div class="p-4 sm:p-7">
            <div class="text-center">
            <h1 class="block text-2xl font-bold text-gray-800 dark:text-white">Editar Costos</h1>
            <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Editar {{ form.name ?? 'Actividad' }}
                <!-- <a class="text-blue-600 decoration-2 hover:underline font-medium" href="#">
                Login here
                </a> -->
            </p>
            </div>

            <div class="mt-5">
            <form>
                <div class="grid gap-y-4">
                    
                    <div>
                        <label for="name" class="block text-sm font-bold ml-1 mb-2 dark:text-white">Nombre de la actividad</label>
                        <div class="relative">
                        <input v-model="form.name" type="text" id="name" name="name" class="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm" required aria-describedby="email-error">
                        </div>
                        <p class="hidden text-xs text-red-600 mt-2" id="email-error">Please include a valid email address so we can get back to you</p>
                    </div>
                    <div>
                        <label for="adult_low" class="block text-sm font-bold ml-1 mb-2 dark:text-white">Nombre de la actividad</label>
                        <div class="relative">
                        <input v-model="form.name" type="text" id="name" name="name" class="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm" required aria-describedby="email-error">
                        </div>
                        <p class="hidden text-xs text-red-600 mt-2" id="email-error">Please include a valid email address so we can get back to you</p>
                    </div>

                <button type="submit" class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">Guardar Cambios</button>
                <button @click="$emit('close')" type="button" class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">Cerrar Modal</button>
                </div>
            </form>
            </div>
        </div>
        </div>
    </main>
    </section>
</Transition>
</template>