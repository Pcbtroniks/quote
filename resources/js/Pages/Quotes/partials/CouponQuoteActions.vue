<script setup>
import BodySection from '@/Components/BodySection.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import Button from '@/Components/Button.vue';
import TextInput from '@/Components/TextInput.vue';
import { Link } from '@inertiajs/inertia-vue3';
import { Inertia } from '@inertiajs/inertia';
import axios from 'axios';
import { reactive } from 'vue';

const props = defineProps({
    quote: Object
});

const Search = reactive({
    coupon: null,
    error: null,
    couponCode: null,
    processing: false,
    syncing: false
});

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

const getCoupon = async (quote) => {
    const data = await axios.post(route('coupon.get.coupon', { quote }));
    console.log(data);
    Swal.fire({
        title: 'Código de cupón',
        text: data.data.code,
        icon: 'success',
        confirmButtonText: 'Ok'
    }).then((result) => {
        if (result.isConfirmed) {
            location.reload();
        }
    })
}
const confirmCoupon = async (coupon) => {
    const data = await axios.post(route('coupon.confirm', { coupon }));
    console.log(data);
    Swal.fire({
        title: 'Cupon confirmado!',
        text: 'El cupón ha sido confirmado y estara disponible para su uso',
        icon: 'success',
        confirmButtonText: 'Ok'
    }).then((result) => {
        if (result.isConfirmed) {
            location.reload();
        }
    })
}

const useConfirmCoupon = async (coupon) => {
    Swal.fire({
        title: '¿Estás seguro?',
        text: "¡No podrás revertir esto!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, ¡aplicar cupón!'
    }).then((result) => {
        if (result.isConfirmed) {
            confirmCoupon(coupon);
        }
    })
}

const syncCoupon = async ( invoice, coupon ) => {

    if( !coupon ) return false;
    Search.syncing = true;
    try {
    
        const data = await axios.post(route('invoices.sync.coupon', { invoice }), {
            coupon
        });

        Search.coupon.invoice_id = invoice;
        Inertia.reload();
        
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
const getStatusColor = (status) => {
    switch (status) {
        case 'pending':
            return 'bg-yellow-100 text-yellow-500';
        case 'confirmed':
            return 'bg-green-100 text-green-500';
        case 'canceled':
            return 'bg-red-100 text-red-500';
        default:
            return 'bg-gray-100 text-gray-500';
    }
}
</script>

<template>
    <BodySection>
        <template #title>
            Acciones
        </template>

        <template #description>
            Genere un folio / Muestre oculte el folio
        </template>

        <template #content>
            <div class="col-span-6">
                <!-- Invoice Folio -->
                <div class="text-lg font-medium text-gray-900">Cotización <span :class="getStatusColor(props.quote.status)" class="p-2 rounded">status {{ props.quote.status }}</span></div>
                <div v-if="props.quote.coupon?.status != 'confirmed' && $page.props.user.is_freetraveler_admin">
                    <span class="text-sm text-gray-500">Realizada por: {{ props.quote.user.name }} en ({{ props.quote.team.name }}) el dia {{ props.quote.created_at }}</span>
                    <br>
                    <span class="text-sm text-gray-500">Precio publico: ${{ props.quote.public_price }}</span>
                    <br>
                    <span class="text-sm text-gray-500">Costo: ${{ props.quote.cost_amount }}</span>
                </div>
            </div>

            <div class="col-span-6 sm:col-span-4">

                <!-- Coupon search -->
                <div class="relative flex items-center gap-1">

                    <Button
                        v-if="!quote.coupon?.code"
                        @click="getCoupon(props.quote.id)"
                        :class="{ 'opacity-25': Search.processing }" 
                        :isLoading="Search.processing"
                        msg="Generar Folio"
                    />

                    <Button
                        v-if="quote.coupon?.code && quote.coupon.status != 'confirmed'"
                        @click="useConfirmCoupon(props.quote.coupon.id)"
                        class="bg-green-500 hover:bg-green-600" 
                        :isLoading="Search.processing"
                        :disabled="quote.coupon.confirmation_key == null"
                        msg="Aceptar cupon"
                    />
                </div>
                <small v-if="quote.coupon?.confirmation_key == null" class="mt-2" > Nota: debe agregar la clave de confirmación para poder aceptar el cupon. </small>
                  <!-- Card 1 -->
                <div v-if="Search.coupon">

                    <div class="mt-4 xl:w-[31rem] border-2 border-b-4 border-gray-200 rounded-xl hover:bg-gray-50">

                        <!-- Badge -->
                        <p v-if="Search.coupon.quote.national != 0" class="bg-sky-500 w-fit px-4 py-1 text-sm font-bold text-white rounded-tl-lg rounded-br-xl"> Promomex </p>

                        <div class="grid grid-cols-6 p-5 gap-y-2">

                        <!-- Description -->
                        <div class="col-span-5 md:col-span-4 ml-4">

                            <a target="_blank" :href="Search.coupon.quote.url">
                                <p class="text-sky-500 font-bold text-xs capitalize">{{ Search.coupon.quote.team.name }} {{ Search.coupon.quote.type }}{{ Search.coupon.quote.type =='paquete' ? '#' + Search.coupon.quote.listed_activities.length : '' }} {{ Search.coupon.invoice?.folio }}</p>
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
                                <Link 
                                v-else
                                :href="route('invoices.coupons',{ invoice: Search.coupon.invoice_id })"
                                >
                                    <Button
                                        type="button"
                                        :isLoading="Search.syncing"
                                        class="bg-amber-500 hover:bg-amber-700"
                                        msg="Ver factura..." 
                                    />
                                </Link>
                            </div>

                        </div>

                        </div>

                    </div>

                </div>
            </div>
        </template>


    </BodySection>
</template>
