<script setup>
    import AppLayout from '@/Layouts/AppLayout.vue';
    import FormQuote from '@/Pages/Quotes/partials/FormQuote.vue';
</script> 
    
<template>

    <AppLayout title="Home">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Panel de Cotizaciones Freetravelers
            </h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                    <FormQuote />
                </div>
            </div>
        </div>
    </AppLayout>
    
</template>
    