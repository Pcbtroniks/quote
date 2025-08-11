<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import CreateFormQuote from '@/Pages/Quoter/partials/CreateFormQuote.vue';

defineProps(['parks','zones', 'errors'])
</script> 
    
<template>

    <AppLayout title="Freetravelers - cotizador">
        <template #header>
            <h2 class="font-semibold text-xl text-white leading-tight">
                Reservaciones
            </h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                    <CreateFormQuote :parks="parks" :zones="zones" :errors="errors"/>
                </div>
            </div>
        </div>
    </AppLayout>
    
</template>
    