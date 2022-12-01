<script setup>
    import BodySection from '@/Components/BodySection.vue';
    import Button from '../../../Components/Button.vue';
    import Pagination from '../../../Shared/Pagination.vue';
    import { Inertia } from '@inertiajs/inertia';

const props = defineProps({
    coupons: Object,
    invoice: Object
});

const unSyncCoupon = async ( invoice, coupon ) => {

if( !coupon ) return false;

try {

    const data = await axios.post(route('invoices.unsync.coupon', { invoice }), {
        coupon
    });

    console.log(data);
    Inertia.reload();
} catch (error) {
     
    alert('Ha ocurrido un error: ' + error.message)

} finally {

    // location.reload();

};
}
</script>

<template>

    <BodySection>

    <template #title>
        Coupons List
    </template>

    <template #description>
        Look at the coupons that are currently on this bill.
    </template>

    <template #content>
    <div class="col-span-6 w-full">
        <div class="relative flex flex-col min-w-0 break-wordsw-full">
            <div class="rounded-t mb-0 px-4 py-3 border-0">
            <div class="flex flex-wrap items-center">
                <div class="relative w-full px-4 max-w-full flex-grow flex-1">
                <h3 class="font-semibold text-base text-blueGray-700">Coupons</h3>
                </div>
                <div class="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                <!-- <button class="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">See all</button> -->
                </div>
            </div>
            </div>

            <div class="block w-full overflow-x-auto">
            <table class="items-center bg-transparent w-full border-collapse ">
                <thead>
                <tr>
                    <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Code
                    </th>
                    <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Status
                    </th>
                    <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Agency
                    </th>
                    <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Created at
                    </th>
                    <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Action
                    </th>
                </tr>
                </thead>

                <tbody>
                <tr v-for="coupon in props.coupons.data">
                    <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                        <a :href="coupon.quote.url">{{ coupon.code }}</a>
                    </th>
                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                        {{ coupon.status }}
                    </td>
                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                        {{ coupon.quote.team.name }}
                    </td>
                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                        {{ coupon.created_at.slice(0,10) }}
                    </td>
                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">

                        <Button
                            msg="Eliminar"
                            class="bg-red-500 hover:bg-red-700"
                            @click="unSyncCoupon(props.invoice.id, coupon.id)"
                        />

                    </td>
                </tr>
                </tbody>

            </table>
        </div>
    </div>
    <div class="w-full text-center">
        <Pagination :links="props.coupons" />
    </div>
    </div>
    </template>
</BodySection>
</template>