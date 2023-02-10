<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import SectionBorder from '@/Components/SectionBorder.vue';
import SyncInvoiceCoupon from '@/Pages/Invoices/Partials/SyncInvoiceCoupon.vue';
import CouponList from './Partials/CouponList.vue';

defineProps({
    invoice: Object,
    coupons: Object
});
</script>

<template>
    <AppLayout title="Invoice Coupons">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Assign coupons to invoices
            </h2>
        </template>

        <div>
            <div class="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8">
                <SyncInvoiceCoupon 
                    :invoice="invoice"
                    
                    />

                <SectionBorder />

                <CouponList 
                    class="mt-10 sm:mt-0"
                    :coupons="coupons"
                    :invoice="invoice" />
            </div>
        </div>
    </AppLayout>
</template>
