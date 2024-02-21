<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import QuoteList from './Partials/QuoteList.vue';
import FilterForm from './Partials/FilterForm.vue';

const props = defineProps({
    quotes: Object,
    agencies: Array,
    params: Object,
})

</script>

<template>
    <AppLayout title="Cotizaciones">
        <template #header>
            <div class="flex justify-between items-baseline gap-4">

                <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                    Cotizaciones
                </h2>
            </div>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">

                <div class="mb-4">
                    <FilterForm :params="props.params" />
                </div>

                <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                    <QuoteList :params="props.params" :agencies="props.agencies" :quotes="props.quotes" />
                </div>
            </div>
        </div>
    </AppLayout>
</template>
