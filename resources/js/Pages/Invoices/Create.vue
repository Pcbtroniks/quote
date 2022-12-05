<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import CreateInvoiceForm from '@/Pages/Invoices/Partials/CreateInvoiceForm.vue';
import InvoiceList from './Partials/InvoiceList.vue';

const props = defineProps({
    invoices: Object,
    providers: Array,
});
</script>

<template>
    <AppLayout title="Add New Invoice">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Create New Invoice
            </h2>
        </template>

        <div>
            <div class="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8">
                <CreateInvoiceForm :providers="props.providers"  />
            </div>
        </div>

        <div>
            <div class="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8">
                <InvoiceList :invoices="props.invoices" />
            </div>
        </div>
    </AppLayout>
</template>
