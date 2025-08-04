<script setup>
    import FormSection from '@/Components/FormSection.vue';
    import Button from '@/Components/Button.vue';
    import Pagination from '../../../Shared/Pagination.vue';
    import { Inertia } from '@inertiajs/inertia';
    import axios from 'axios';

const props = defineProps({
providers: Object
});

const switchStatus = (ID, status) => {

    axios.post(route('providers.switch.status', { providerID: ID }), { status: status })
    .then((response) => {
        Inertia.reload()
    })
    .catch((error) =>  {
        console.log(error);
        alert('Ha ocurrido un error!')});

}

const del = (ID) => {

    axios.delete(route('providers.delete',{ providerID: ID }))
        .then( response => {
            Inertia.reload();
        })
        .catch( error => {
            console.log(error);
            alert('Ha ocurrido un error!')});

}
</script>

<template>

    <FormSection>

    <template #title>
        <span class="text-gray-300">Lista de proveedores</span>
    </template>

    <template #description>
        <span class="text-white">Verificar los proveedores creados.</span>
    </template>

    <template #form>
    <div class="col-span-6 w-full">
        <div class="relative flex flex-col min-w-0 break-wordsw-full">
            <div class="rounded-t mb-0 px-4 py-3 border-0">
            <div class="flex flex-wrap items-center">
                <div class="relative w-full px-4 max-w-full flex-grow flex-1">
                <h3 class="font-semibold text-base text-blueGray-700">Providers</h3>
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
                        Name
                    </th>
                    <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        RFC
                    </th>
                    <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Status
                    </th>
                    <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Created at
                    </th>
                    <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Actions
                    </th>
                </tr>
                </thead>

                <tbody>
                <tr v-for="provider in providers.data">
                    <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                        {{ provider.name }}
                    </th>
                    <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                        {{ provider.rfc }}
                    </th>
                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 capitalize">
                        <div class="relative inline-flex">
                        <svg class="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 412 232"><path d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z" fill="#648299" fill-rule="nonzero"/></svg>
                        <select @change="switchStatus( provider.id, $event.target.value)" class="border border-gray-300 rounded text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none">
                            <option value="active" :selected="provider.status == 'active'">Active</option>
                            <option value="unactive" :selected="provider.status == 'unactive'">Unactive</option>
                        </select>
                        </div>
                    </td>
                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                        {{ provider.created_at.slice(0,10) }}
                    </td>
                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                        <Button 
                            msg="Delete"
                            @click="del(provider.id)"
                            class="bg-red-500 hover:bg-red-700"
                        />
                    </td>
                </tr>
                </tbody>

            </table>
        </div>
    </div>
    <div class="w-full text-center">
        <Pagination :links="providers" />
    </div>
    </div>
    </template>
</FormSection>
</template>