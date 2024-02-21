<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import QuoteDetail from './Partials/QuoteDetail.vue';
const props = defineProps({
    quote: Object,
})

const back = () => {
    window.history.back();
}
</script>

<template>
    <AppLayout title="Cotización">
        <template #header>
            <div class="flex justify-between items-baseline gap-4">
                <h2 class="font-semibold text-xl text-gray-800 leading-tight"> 
                    <span class="cursor-pointer text-gray-400 hover:text-gray-600" @click.native="back">
                        Cotizaciones 
                    </span>
                    <span class="text-gray-300"> / </span>
                     Cotización
                </h2>
            </div>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="">
                    <QuoteDetail :quote="quote" />
                </div>
            </div>
        </div>
    </AppLayout>
</template>
