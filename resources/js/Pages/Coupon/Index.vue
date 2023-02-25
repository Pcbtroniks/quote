<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import CouponPDF from '@/Pages/Coupon/Sections/CouponPDF.vue';

defineProps({
    quote: Object
});
</script> 
    
<template>


        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">

        
        </div>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                    <CouponPDF :quote="quote" />
                </div>
            </div>
        </div>
</template>
