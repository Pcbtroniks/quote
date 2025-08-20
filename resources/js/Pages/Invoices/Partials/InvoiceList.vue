<script setup>
    import FormSection from '@/Components/FormSection.vue';
    import Pagination from '../../../Shared/Pagination.vue';
    import Button from '../../../Components/Button.vue';
    import axios from 'axios';
    import { Inertia } from '@inertiajs/inertia';
const props = defineProps({
invoices: Object,
coupons: Object
});

const deleteInvoice = async (id) => { 
    await axios.post(route('invoices.coupon.destroy', { invoice: id }))
        .then(response => {
            console.log(response.data);
            Inertia.reload();
        })
        .catch(error => {
            console.error('Error deleting invoice:', error);
            alert('Error deleting invoice: ' + error.message);
        });
}
</script>

<template>

    <FormSection>

    <template #title>
        Invoice List
    </template>

    <template #description>
        Check the invoices created.
    </template>

    <template #form>
    <div class="col-span-6 w-full">
        <div class="relative flex flex-col min-w-0 break-wordsw-full">
            <div class="rounded-t mb-0 px-4 py-3 border-0">
            <div class="flex flex-wrap items-center">
                <div class="relative w-full px-4 max-w-full flex-grow flex-1">
                <h3 class="font-semibold text-base text-blueGray-700">Invoices</h3>
                </div>
                <div class="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                <button class="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">See all</button>
                </div>
            </div>
            </div>

            <div class="block w-full overflow-x-auto">
            <table class="items-center bg-transparent w-full border-collapse ">
                <thead>
                <tr>
                    <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Folio
                    </th>
                    <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Provider
                    </th>
                    <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Status
                    </th>
                    <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Created at
                    </th>
                    <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Action</th>
                </tr>
                </thead>

                <tbody>
                <tr v-for="invoice in invoices.data">
                    <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                        <a :href="route('invoices.coupons', {invoice: invoice.id})">{{ invoice.folio }} <span v-if="invoice.coupons?.length" class="bg-sky-400 rounded-full p-1 pr-2 text-white">#{{invoice.coupons?.length}}</span></a>
                    </th>
                    <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                        {{ invoice.provider?.name ?? 'N/A' }}
                    </th>
                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                        {{ invoice.status }}
                    </td>
                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                        {{ invoice.created_at.slice(0,10) }}
                    </td>
                    <td class="border-t-0"><Button msg="Eliminar" @click="deleteInvoice(invoice.id)" class="bg-red-500 text-white active:bg-red-600 text-xs font-bold  px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"></Button></td>
                </tr>
                </tbody>

            </table>
        </div>
    </div>
    <div class="w-full text-center">
        <Pagination :links="invoices" />
    </div>
    </div>
    </template>
</FormSection>
</template>