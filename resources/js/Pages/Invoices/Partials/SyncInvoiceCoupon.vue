<script setup>
import BodySection from '@/Components/BodySection.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import Button from '@/Components/Button.vue';
import TextInput from '@/Components/TextInput.vue';
import axios from 'axios';
import { reactive } from 'vue';

const props = defineProps({
    invoice: Object
});

const Search = reactive({
    coupon: null,
    error: null,
    couponCode: null,
    processing: false,
    syncing: false
});

const createTeam = () => {
    return null;
    // form.post(route('invoices.search.coupon', {coupon: form.coupon}), {
    //     errorBag: 'createInvoice',
    //     preserveScroll: true,
    //     onSuccess: () => {
    //         form.reset();
    //     }
    // });
};

const searchCoupon = async (couponCode) => {
    if( !couponCode ) return false;
    
    Search.coupon = null;
    Search.processing = true;
    const data = await HttpGet(route('coupon.search.code', {code: couponCode}));

    if(data.status == 404){
        Search.processing = false;
        Search.error = 'No se ha encontrado un cupon';
        setTimeout(() => {
            Search.error = null;
        }, 3000);
    } else {
        Search.processing = false;
        Search.coupon = data;
        console.log(data);
    }
}

const syncCoupon = async ( invoice, coupon ) => {

    if( !coupon ) return false;
    Search.syncing = true;
    try {
    
        const data = await axios.post(route('invoices.sync.coupon', { invoice }), {
            coupon
        });

        Search.coupon.invoice_id = invoice;
        
    } catch (error) {
         
        alert('Ha ocurrido un error: ' + error.message)
    
    } finally {
    
        Search.syncing = false;

    };
}

const unSyncCoupon = async ( invoice, coupon ) => {

if( !coupon ) return false;
Search.syncing = true;
try {

    const data = await axios.post(route('invoices.unsync.coupon', { invoice }), {
        coupon
    });

    Search.coupon.invoice_id = null;
    console.log(data);
    
} catch (error) {
     
    alert('Ha ocurrido un error: ' + error.message)

} finally {

    Search.syncing = false;

};
}

const HttpGet = async (URL, Options) => {
    try {        
        const response = await fetch(URL, Options);
        const data = await response.json()
        
        return data;
    } catch (error) {
        console.error(await  error.json());
    } 
}
</script>

<template>
    <BodySection @submitted="createTeam">
        <template #title>
            Invoice Details
        </template>

        <template #description>
            Sync invoice with coupons searching by coupon code.
        </template>

        <template #content>
            <div class="col-span-6">
                <!-- Invoice Folio -->
                <div class="text-lg font-medium text-gray-900">{{ `Invoice: ${props.invoice.folio} - status: ${props.invoice.status}` }}</div>
            </div>

            <div class="col-span-6 sm:col-span-4">

                <!-- Coupon search -->
                <InputLabel for="folio" value="Search a coupon" />
                <div class="relative flex items-center gap-1">
                    <TextInput
                        @keyup.enter="searchCoupon(Search.couponCode)"
                        id="folio"
                        v-model="Search.couponCode"
                        type="text"
                        class="inline  w-3/4"
                        placeholder="Search by code..."
                        autofocus
                    />
                    <div>
                        
                    </div>

                    <div class="absolute hidden xl:block  xl:left-2/3">
                        <svg version="1.1" class="h-4 text-dark" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                        viewBox="0 0 52.966 52.966" style="enable-background:new 0 0 52.966 52.966;" xml:space="preserve">
                        <path d="M51.704,51.273L36.845,35.82c3.79-3.801,6.138-9.041,6.138-14.82c0-11.58-9.42-21-21-21s-21,9.42-21,21s9.42,21,21,21
                        c5.083,0,9.748-1.817,13.384-4.832l14.895,15.491c0.196,0.205,0.458,0.307,0.721,0.307c0.25,0,0.499-0.093,0.693-0.279
                        C52.074,52.304,52.086,51.671,51.704,51.273z M21.983,40c-10.477,0-19-8.523-19-19s8.523-19,19-19s19,8.523,19,19
                        S32.459,40,21.983,40z"/>

                    </svg>
                    </div>

                    <Button
                        @click="searchCoupon(Search.couponCode)"
                        :class="{ 'opacity-25': Search.processing }" 
                        :disabled="!Search.couponCode"
                        :isLoading="Search.processing"
                        msg="SEARCH"
                    />
                    
                </div>
                <InputError :message="Search.error" class="mt-2" />
                  <!-- Card 1 -->
                <div v-if="Search.coupon">

                    <div class="mt-4 xl:w-[31rem] border-2 border-b-4 border-gray-200 rounded-xl hover:bg-gray-50">

                        <!-- Badge -->
                        <p v-if="Search.coupon.quote.national != 0" class="bg-sky-500 w-fit px-4 py-1 text-sm font-bold text-white rounded-tl-lg rounded-br-xl"> Promomex </p>

                        <div class="grid grid-cols-6 p-5 gap-y-2">

                        <!-- Description -->
                        <div class="col-span-5 md:col-span-4 ml-4">

                            <a target="_blank" :href="Search.coupon.quote.url">
                                <p class="text-sky-500 font-bold text-xs capitalize">{{ Search.coupon.quote.team.name }} {{ Search.coupon.quote.type }}{{ Search.coupon.quote.type =='paquete' ? '#' + Search.coupon.quote.listed_activities.length : '' }}</p>
                            </a>

                            <p class="text-gray-600 font-bold"> {{ Search.coupon.quote.listed_activity.activity.name }} </p>

                            <p class="text-gray-400"> {{ Search.coupon.quote.listed_activity.date }} </p>

                            <p class="text-gray-400"> {{ Search.coupon.quote.holder_name }} </p>

                        </div>

                        <!-- Price -->
                        <div class="col-span-6 xl:col-auto flex xl:flex-col justify-between">

                            <div class="flex col-start-2 ml-4 md:col-start-auto md:ml-0 md:justify-end">
                                <p class="rounded-lg text-sky-500 font-bold bg-sky-100  py-1 px-3 text-sm w-fit h-fit">${{Search.coupon.sale_amount}}</p>
                            </div>

                            <div>
                                <Button
                                    v-if="!Search.coupon.invoice_id"
                                    @click="syncCoupon( props.invoice.id,  Search.coupon.id)"
                                    :isLoading="Search.syncing"
                                    msg="Agregar" 
                                />
                                <Button
                                    v-else
                                    @click="unSyncCoupon( props.invoice.id,  Search.coupon.id)"
                                    :isLoading="Search.syncing"
                                    class="bg-red-500 hover:bg-red-700"
                                    msg="Remover" 
                                />
                            </div>

                        </div>

                        </div>

                    </div>

                </div>
            </div>
        </template>


    </BodySection>
</template>
