<script setup>
import SecondaryButton from '@/Components/SecondaryButton.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import { usePage, useForm } from '@inertiajs/inertia-vue3';
import DialogModal from '@/Components/DialogModal.vue';
import Pagination from '@/Shared/Pagination.vue';
import axios from 'axios';
import { ref } from 'vue';

const ShowProFormModal = ref(false);
const CurrentProformQuote = ref(null);

const props = defineProps({
    quotes: Object,
    agencies: Array,
    params: Object,
})

const requestCouponConfirmation = (Quote) => {
    Swal.fire({
    title: 'Solicitar cupon?',
    text: "Se generara tu cupon para poder usarlo posteriormente!",
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: '#38bdf8',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, Solicitar!',
    cancelButtonText: 'Cancelar'
    }).then((result) => {
    if (result.isConfirmed) {

        axios.post(route('coupon.request.code', Quote))
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });


        Swal.fire(
        'Confirmado!',
        'Estamos generando tu cupon.',
        'success'
        ).then(function() {
            location.reload();
        })
    }
    })
}

const LoadProFormModal = (Quote) => {
    CurrentProformQuote.value = {...Quote,tmpFolio: printTempFolio(Quote)};
    ShowProFormModal.value = true;
}

const printTempFolio = (quote) => {
    const agency = quote.team.name;
    const months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
    const [day, month, year] = quote.created_at.split('/');
    return `${agency.substring(0, 3)}-${quote.id}-${day}${months[month - 1]}${year.substring(2, 4)}`;
}

// Utils
const showFullText = ref(false);

const toggleShowFullText = () => {
    showFullText.value = !showFullText.value;
}

const showSwitch = ref('text');
const toggleSwitchInput = () => {
    if(showSwitch.value == 'text') showSwitch.value = 'input';
    else showSwitch.value = 'text';
}

const filterForm = useForm({
    coupon_status: props.params.coupon_status,
    from_date: props.params.from_date,
    to_date: props.params.to_date,
    team_id: props.params.to_date
});

const submitFilter = () => {
    filterForm.get(route('quote.index', filterForm.data));
}

</script>

<template>
<!-- modal -->
<DialogModal :show="ShowProFormModal" @close="ShowProFormModal = false">
    <template #title>
        <p class="font-bold text-gray-700">
            Número de solicitud <span class="text-yellow-600">{{ CurrentProformQuote?.tmpFolio }}</span>
        </p>
        <p class="text-gray-700">
            Fecha: {{ CurrentProformQuote?.listed_activities[0]?.date_string_formatted ?? 'n/d'}}
        </p>
    </template>

    <template #content v-if="CurrentProformQuote">
        <div class="text-gray-700">
            <div>
                <p>
                    Nombre: {{ CurrentProformQuote.holder_name }}
                </p>
                <p>
                    Adultos: {{ CurrentProformQuote.adults }} - Menor: {{ CurrentProformQuote.minors }} - Infante: {{ CurrentProformQuote.infants }}
                </p>
            </div>

            <div class="h-8"></div>
            
            <div>
                <p class="font-bold text-xl text-gray-700">
                    Actividades
                </p>
                <div class="h-4"></div>
                <ul>
                    <li v-for="activity in CurrentProformQuote.listed_activities">{{ `${activity.activity.name} ${(activity.pickup_time != null && activity.pickup_time?.slice(0,5) != '00:00') ? activity.pickup_time.slice(0,5) : ''} ${activity.hotel?.name ?? ''}` }} </li>
                </ul>
            </div>

            <div class="h-8"></div>

            <div>
                <p class="font-bold text-xl text-gray-700">
                    Importes totales
                </p>
                <div class="h-4"></div>
                <p>Precio publico: ${{ CurrentProformQuote.public_price }}</p>
                <p>Precio a pagar: ${{ CurrentProformQuote.cost_amount }}</p>
                <div class="h-8"></div>
                <p class="font-bold text-xl text-gray-700">
                    Comision: ${{ (CurrentProformQuote.public_price - CurrentProformQuote.cost_amount).toFixed(2) ?? '0' }}
                </p>
            </div>

        </div>
    </template>

    <template #footer>
        <div class="self-center justify-start flex mr-4">
            <p>Por: {{ CurrentProformQuote.user.name }} <span v-if="CurrentProformQuote.branch">{{ CurrentProformQuote.branch.name }}</span></p>
        </div>

        <a :href="route('export.pdf.proform.quote', {'quote': CurrentProformQuote.id})">
            <SecondaryButton @click.native="ShowProFormModal = false">
                Imprimir PDF
            </SecondaryButton>
        </a>

        <PrimaryButton v-if="CurrentProformQuote.status == 'created'" class="ml-2" @click="requestCouponConfirmation(CurrentProformQuote)">
            Solicitar
        </PrimaryButton>

        <PrimaryButton class="ml-2" @click.native="ShowProFormModal = false">
            Aceptar
        </PrimaryButton>
    </template>
</DialogModal>
<!-- /modal -->
<!-- component -->
<section class="w-full antialiased bg-gray-100 text-gray-600">
    <div class="flex flex-col justify-center h-full">
        <!-- Table -->
        <div class="w-full mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
            <header class="px-5 py-4 border-b border-gray-100">
                <h2 class="font-bold text-gray-800 text-2xl">Cotizaciones</h2>
            </header>
            <div class="p-3">
                <div class="overflow-x-auto">
                    <table class="table-auto w-full">
                        <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                            <tr>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">Fecha Act.</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">No. Cupon</div>
                                </th>
                                <th class="p-2 whitespace-nowrap flex flex-col">
                                    <div v-if="showSwitch == 'text'" @click="toggleSwitchInput" class="font-semibold text-left cursor-pointer">Agencia</div>
                                    <div v-else @dblclick="toggleSwitchInput">
                                        <select @change="submitFilter" v-model="filterForm.team_id" class="border-none text-sm font-semibold w-full pl-1" name="agency" id="agency">
                                            <option value="none" selected>Todas</option>
                                            <option v-for="agency in props.agencies" :key="agency.id" :value="agency.id" :selected="filterForm.team_id == agency.id">{{ agency.name }}</option>
                                        </select>
                                    </div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">Titular</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">Pax</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">Fecha</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">Tipo Act.</div>
                                </th>
                                <!-- <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">Actividad</div>
                                </th> -->
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">Costo A.</div>
                                </th>
                                <th class="p-2 whitespace-nowrap hidden">
                                    <div class="font-semibold text-left"  title="Precio Minimo Agencia">P.M. Agencia</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">Precio Publico</div>
                                </th>
                                <th v-if="usePage().props.value.user.is_freetraveler_admin" class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">...</div>
                                </th>
                            </tr>
                        </thead>
                        <tbody class="text-sm divide-y divide-gray-100">
                            <tr v-for="quote in quotes.data" :key="quote.id" class="h-14 hover:bg-sky-300">
                                <td class="p-2 whitespace-nowrap">
                                    <div class="flex items-center">
                                        <div class="font-medium text-gray-800">{{ quote.listed_activities[0]?.date ?? 'n/d' }}</div>
                                    </div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="flex items-center">
                                        <div class="font-medium text-gray-800 hover:text-green-500">
                                            <a v-if="quote?.coupon?.code && quote?.coupon?.status == 'confirmed'" :href="route('quote.preview' , quote.uuid)">

                                                <div>
                                                    {{ quote.coupon.code }}
                                                    <svg class="inline" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                        <path d="M6.66669 9.33342C6.88394 9.55515 7.14325 9.73131 7.42944 9.85156C7.71562 9.97182 8.02293 10.0338 8.33335 10.0338C8.64378 10.0338 8.95108 9.97182 9.23727 9.85156C9.52345 9.73131 9.78277 9.55515 10 9.33342L12.6667 6.66676C13.1087 6.22473 13.357 5.62521 13.357 5.00009C13.357 4.37497 13.1087 3.77545 12.6667 3.33342C12.2247 2.89139 11.6251 2.64307 11 2.64307C10.3749 2.64307 9.77538 2.89139 9.33335 3.33342L9.00002 3.66676" stroke="#22C55E" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M9.33336 6.66665C9.11611 6.44492 8.8568 6.26876 8.57061 6.14851C8.28442 6.02825 7.97712 5.96631 7.66669 5.96631C7.35627 5.96631 7.04897 6.02825 6.76278 6.14851C6.47659 6.26876 6.21728 6.44492 6.00003 6.66665L3.33336 9.33332C2.89133 9.77534 2.64301 10.3749 2.64301 11C2.64301 11.6251 2.89133 12.2246 3.33336 12.6666C3.77539 13.1087 4.37491 13.357 5.00003 13.357C5.62515 13.357 6.22467 13.1087 6.66669 12.6666L7.00003 12.3333" stroke="#22C55E" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    </svg>
                                                </div>
                                            </a>
                                            <!-- <button v-else-if="quote.status == 'created'" @click="requestCouponConfirmation(quote)" class="px-3 py-2 rounded-md text-sm font-medium border focus:outline-none focus:ring transition text-sky-600 border-sky-600 hover:text-white hover:bg-sky-600 active:bg-sky-700 focus:ring-sky-300" type="button"> -->
                                            <button v-else-if="quote.status == 'created'" @click="LoadProFormModal(quote)" class="px-3 py-2 rounded-md text-sm font-medium border focus:outline-none focus:ring transition text-sky-600 border-sky-600 hover:text-white hover:bg-sky-600 active:bg-sky-700 focus:ring-sky-300" type="button">
                                                Solicitar
                                            </button>
                                            <button v-else-if="quote.status == 'pending'" @click="LoadProFormModal(quote)" class="px-3 py-2 rounded-md text-sm font-medium border focus:outline-none focus:ring transition text-yellow-600 border-yellow-600 hover:text-white hover:bg-yellow-600 active:bg-yellow-700 focus:ring-yellow-300" type="button">
                                                    {{ printTempFolio(quote) }}
                                            </button>
                                        </div>
                                    </div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="flex items-center">
                                        <div class="font-medium text-gray-800">{{ quote.team.name }}</div>
                                    </div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="flex items-center">
                                        <div @click="toggleShowFullText()" :class="{ 'w-full text-clip' : showFullText }" class="font-medium text-gray-800 w-32 truncate cursor-pointer">{{ quote.holder_name }}</div>
                                    </div>
                                </td>
                                <td class="p-2 whitespace-nowrap cursor-default">
                                    <div class="text-left" :title="`Adultos ${ quote.adults }, Niños: ${ quote.minors }, Infantes: ${ quote.infants }`">
                                        {{ quote.adults }}.{{ quote.minors }}.{{ quote.infants }}
                                    </div>
                                </td>
                                <td class="p-2 whitespace-nowrap cursor-default">
                                    {{ quote.created_at ?? 'n/d' }}
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left font-medium text-green-500 capitalize" :title="quote.type == 'entrance' && quote.national == '1' ? 'Promomex' : ''">
                                        {{ quote.type }} <span v-if="quote.type == 'pack'">#{{quote.listed_activities.length}}</span>
                                        <span v-if="quote.type == 'entrance' && quote.national == '1'">
                                            <svg title="Promomex" class="inline" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                <path d="M9.16667 2.5L16.6667 10C17.0911 10.4745 17.0911 11.1922 16.6667 11.6667L11.6667 16.6667C11.1922 17.0911 10.4745 17.0911 10 16.6667L2.5 9.16667V5.83333C2.5 3.99238 3.99238 2.5 5.83333 2.5H9.16667" stroke="#52525B" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                                                <circle cx="7.50004" cy="7.49967" r="1.66667" stroke="#52525B" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></circle>
                                            </svg>
                                        </span>
                                    </div>
                                </td>
                                <!-- <td class="p-2 whitespace-nowrap">
                                    <div class="text-left font-medium capitalize" >
                                        {{ quote.listed_activities[0]?.activity.name.toLowerCase() }}
                                    </div>
                                </td> -->
                                <td class="p-2 whitespace-nowrap cursor-default">
                                    <div class="text-left font-medium text-green-500" title="Precio de venta">${{ quote.cost_amount }}</div>
                                </td>
                                <td class="p-2 whitespace-nowrap cursor-default hidden">
                                    <div class="text-left font-medium text-green-500" title="Precio de venta">${{ quote.sale_amount }}</div>
                                </td>
                                <td class="p-2 whitespace-nowrap cursor-default">
                                    <div class="text-left font-medium text-green-500">${{ quote.public_price }}</div>
                                </td>
                                <td  v-if="usePage().props.value.user.is_freetraveler_admin" class="p-2 whitespace-nowrap cursor-default">
                                    <a :href="route('quote.show', {uuid: quote.uuid})" class="text-left font-medium text-indigo-500 hover:text-sky-500 duration-150 hover:underline underline-offset-2">ver detalle</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                </div>

                <div class="flex justify-center">    
                    <Pagination :params="props.params" :links="quotes" />
                </div>
            </div>
        </div>
    </div>
</section>
</template>