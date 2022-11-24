<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import CreateInvoiceForm from '@/Pages/Invoices/Partials/CreateInvoiceForm.vue';
import ListInvoice from './Partials/ListInvoice.vue';

const props = defineProps({
    invoices: Object
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
                <CreateInvoiceForm />
            </div>
        </div>

        <div>
            <div class="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8">
                <ListInvoice :invoices="props.invoices" />
            </div>
        </div>
    </AppLayout>
</template>
