<script setup>
    import AppLayout from '@/Layouts/AppLayout.vue';
    import CreateFormQuote from '@/Pages/Quoter/partials/CreateFormQuote.vue';

defineProps(['parks','zones'])
</script> 
    
<template>

    <AppLayout title="Freetravelers reservaciones">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Reservaciones Freetravelers
            </h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                    <CreateFormQuote :parks="parks" :zones="zones"/>
                </div>
            </div>
        </div>
    </AppLayout>
    
</template>
    