<script setup>
    import AppLayout from '@/Layouts/AppLayout.vue';
    import QuotePDF from '@/Pages/Quotes/Preview/QuotePDF.vue';
    import AddConfirmationKeyForm from '@/Pages/Quotes/partials/AddConfirmationKeyForm.vue';


    defineProps({
        quote: Object
    });
</script> 
    
<template>
    <AppLayout title="Previzulizar Cotización">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Cotización
            </h2>
        </template>

        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">

        
        </div>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">

                <AddConfirmationKeyForm :coupon="quote.coupon" class="mb-4"/>

                <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                    <QuotePDF :quote="quote" />
                </div>
            </div>
        </div>
    </AppLayout>
</template>
