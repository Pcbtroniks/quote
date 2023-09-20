<script setup>
    import AppLayout from '@/Layouts/AppLayout.vue';
    import SectionBorder from '@/Components/SectionBorder.vue';
    import QuotePDF from '@/Pages/Quotes/Preview/QuotePDF.vue';
    import AddConfirmationKeyForm from '@/Pages/Quotes/partials/AddConfirmationKeyForm.vue';
    import CouponQuoteActions from '../partials/CouponQuoteActions.vue';
    import SendCouponEmailForm from '@/Pages/Quotes/partials/SendCouponEmailForm.vue';

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

                <CouponQuoteActions :quote="quote" />

                <SectionBorder />

                <AddConfirmationKeyForm v-if="quote.coupon?.status == 'created'" :coupon="quote.coupon" class="mb-4"/>

                <SendCouponEmailForm v-if="quote.coupon?.status == 'confirmed'" :coupon="quote.coupon" :quote="quote" class="mb-4"/>

                <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                    <QuotePDF :quote="quote" />
                </div>
            </div>
        </div>
    </AppLayout>
</template>
