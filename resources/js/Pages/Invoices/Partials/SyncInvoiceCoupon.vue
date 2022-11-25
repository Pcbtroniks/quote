<script setup>
import { useForm } from '@inertiajs/inertia-vue3';
import FormSection from '@/Components/FormSection.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import { reactive } from 'vue';

const props = defineProps({
    invoice: Object
});

const form = useForm({
    invoice: '',
});

const Search = reactive({
    coupon: null,
    couponCode: null,
    error: null
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

const handleCoupon = () => {



}

const searchCoupon = async (couponCode) => {

    const data = await HttpGet(route('coupon.search.code', {code: couponCode}));

    if(data.status == 404){
        Search.error = 'No se ha encontrado un cupon';
        setTimeout(() => {
            Search.error = null;
        }, 3000);
    } else {
        Search.coupon = data;
        console.log(data);
    }
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
    <FormSection @submitted="createTeam">
        <template #title>
            Invoice Details
        </template>

        <template #description>
            Sync invoice with coupons searching by coupon code.
        </template>

        <template #form>
            <div class="col-span-6">
                <div>{{ `Invoice folio: ${props.invoice.folio} - status: ${props.invoice.status}` }}</div>
            </div>
            <!-- Invoice Folio -->
            <div class="col-span-6 sm:col-span-4">
                <InputLabel for="folio" value="Search a coupon" />
                <TextInput
                    id="folio"
                    v-model="Search.couponCode"
                    type="text"
                    class="inline  w-3/4 mt-1"
                    placeholder="Coupon code..."
                    autofocus
                />
                <PrimaryButton @click="() => searchCoupon(Search.couponCode)" :disabled="! Search.couponCode" class="inline ml-4">
                    search
                </PrimaryButton>
                <InputError :message="Search.error" class="mt-2" />

                  <!-- Card 1 -->
                <div v-if="Search.coupon">

                    <div class="mt-4 w-[30rem] border-2 border-b-4 border-gray-200 rounded-xl hover:bg-gray-50">

                        <!-- Badge -->
                        <p v-if="Search.coupon.quote.national != 0" class="bg-sky-500 w-fit px-4 py-1 text-sm font-bold text-white rounded-tl-lg rounded-br-xl"> Promomex </p>

                        <div class="grid grid-cols-6 p-5 gap-y-2">

                        <!-- Profile Picture -->
                        <!-- <div>
                            <img src="https://picsum.photos/seed/2/200/200" class="max-w-16 max-h-16 rounded-full" />
                        </div> -->

                        <!-- Description -->
                        <div class="col-span-5 md:col-span-4 ml-4">

                            <p class="text-sky-500 font-bold text-xs capitalize"> {{ Search.coupon.quote.type }} </p>

                            <p class="text-gray-600 font-bold"> {{ Search.coupon.quote.listed_activity.activity.name }} </p>

                            <p class="text-gray-400"> {{ Search.coupon.quote.listed_activity.date }} </p>

                            <p class="text-gray-400"> {{ Search.coupon.quote.holder_name }} </p>

                        </div>

                        <!-- Price -->
                        <div class="flex col-start-2 ml-4 md:col-start-auto md:ml-0 md:justify-end">
                            <p class="rounded-lg text-sky-500 font-bold bg-sky-100  py-1 px-3 text-sm w-fit h-fit">${{Search.coupon.sale_amount}}</p>
                        </div>

                        </div>

                    </div>

                </div>
            </div>
        </template>

        <template #actions>
            <PrimaryButton :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                Save
            </PrimaryButton>
        </template>
    </FormSection>
</template>
