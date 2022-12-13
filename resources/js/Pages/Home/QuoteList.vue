<script setup>
import Pagination from '../../Shared/Pagination.vue';
import FilterForm from '@/Pages/Home/FilterForm.vue';

defineProps({
    quotes: Object
})

</script>

<template>
<!-- component -->
<section class="w-full antialiased bg-gray-100 text-gray-600">
    <div class="flex flex-col justify-center h-full">
        <!-- Table -->
        <div class="w-full mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
            <header class="px-5 py-4 border-b border-gray-100">
                <h2 class="font-semibold text-gray-800">Cotizaciones</h2>
                <div>
                    <FilterForm class="grid grid-cols-6 gap-4"/>
                </div>
            </header>
            <div class="p-3">
                <div class="overflow-x-auto">
                    <table class="table-auto w-full">
                        <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                            <tr>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">Fecha</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">No. Cupon</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">Agencia</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">Titular</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">Pax</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">Fecha Act.</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">Tipo Act.</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">Actividad</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">Precio agencia</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">Precio Publico</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">Hora del pickup</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">Lugar del pickup</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-center">Zona</div>
                                </th>
                            </tr>
                        </thead>
                        <tbody class="text-sm divide-y divide-gray-100">
                            <tr v-for="quote in quotes.data">
                                <td class="p-2 whitespace-nowrap">
                                    <div class="flex items-center">
                                        <div class="font-medium text-gray-800">{{ quote.created_at }}</div>
                                    </div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="flex items-center">
                                        <div class="font-medium text-gray-800 hover:text-green-500">
                                            <a :href="route('quote.preview' , quote.uuid)">
                                                {{ quote.coupon.code }}
                                                <svg class="inline" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                    <path d="M6.66669 9.33342C6.88394 9.55515 7.14325 9.73131 7.42944 9.85156C7.71562 9.97182 8.02293 10.0338 8.33335 10.0338C8.64378 10.0338 8.95108 9.97182 9.23727 9.85156C9.52345 9.73131 9.78277 9.55515 10 9.33342L12.6667 6.66676C13.1087 6.22473 13.357 5.62521 13.357 5.00009C13.357 4.37497 13.1087 3.77545 12.6667 3.33342C12.2247 2.89139 11.6251 2.64307 11 2.64307C10.3749 2.64307 9.77538 2.89139 9.33335 3.33342L9.00002 3.66676" stroke="#22C55E" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    <path d="M9.33336 6.66665C9.11611 6.44492 8.8568 6.26876 8.57061 6.14851C8.28442 6.02825 7.97712 5.96631 7.66669 5.96631C7.35627 5.96631 7.04897 6.02825 6.76278 6.14851C6.47659 6.26876 6.21728 6.44492 6.00003 6.66665L3.33336 9.33332C2.89133 9.77534 2.64301 10.3749 2.64301 11C2.64301 11.6251 2.89133 12.2246 3.33336 12.6666C3.77539 13.1087 4.37491 13.357 5.00003 13.357C5.62515 13.357 6.22467 13.1087 6.66669 12.6666L7.00003 12.3333" stroke="#22C55E" stroke-linecap="round" stroke-linejoin="round"></path>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="flex items-center">
                                        <!-- <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img class="rounded-full" src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg" width="40" height="40" alt="Alex Shatov"></div> -->
                                        <div class="font-medium text-gray-800">{{ quote.team.name }}</div>
                                    </div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="flex items-center">
                                        <!-- <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img class="rounded-full" src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg" width="40" height="40" alt="Alex Shatov"></div> -->
                                        <div class="font-medium text-gray-800">{{ quote.holder_name }}</div>
                                    </div>
                                </td>
                                <td class="p-2 whitespace-nowrap cursor-default">
                                    <div class="text-left" :title="`Adultos ${ quote.adults }, Niños: ${ quote.minors }, Infantes: ${ quote.infants }`">
                                        {{ quote.adults }}.{{ quote.minors }}.{{ quote.infants }}
                                    </div>
                                </td>
                                <td class="p-2 whitespace-nowrap cursor-default">
                                    {{ quote.listed_activities[0].date }}
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left font-medium text-green-500 capitalize" :title="quote.type == 'entrada' && quote.national == '1' ? 'Promomex' : ''">
                                        {{ quote.type }} <span v-if="quote.type == 'paquete'">#{{quote.listed_activities.length}}</span>
                                        <span v-if="quote.type == 'entrada' && quote.national == '1'">
                                            <svg title="Promomex" class="inline" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                <path d="M9.16667 2.5L16.6667 10C17.0911 10.4745 17.0911 11.1922 16.6667 11.6667L11.6667 16.6667C11.1922 17.0911 10.4745 17.0911 10 16.6667L2.5 9.16667V5.83333C2.5 3.99238 3.99238 2.5 5.83333 2.5H9.16667" stroke="#52525B" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                                                <circle cx="7.50004" cy="7.49967" r="1.66667" stroke="#52525B" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></circle>
                                            </svg>
                                        </span>
                                    </div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left font-medium capitalize" >
                                        {{ quote.listed_activities[0].activity.name.toLowerCase() }}
                                    </div>
                                </td>
                                <td class="p-2 whitespace-nowrap cursor-default">
                                    <div class="text-left font-medium text-green-500" :title=" '$' + (quote.coupon.public_price - quote.coupon.sale_amount).toFixed(2)">${{ quote.coupon.sale_amount }}</div>
                                </td>
                                <td class="p-2 whitespace-nowrap cursor-default">
                                    <div class="text-left font-medium text-green-500">${{ quote.coupon.public_price }}</div>
                                </td>
                                <td class="p-2 whitespace-nowrap cursor-default">
                                    <div class="text-left font-medium text-green-500 truncate w-20" title="Hora del pickup">{{ quote.listed_activities[0].pickup_time == '00:00:00'? 'N/A' : quote.listed_activities[0].pickup_time.slice(0,5)}}</div>
                                </td>
                                <td class="p-2 whitespace-nowrap cursor-default">
                                    <div class="text-left font-medium text-green-500 truncate w-20" :title="quote.listed_activities[0].hotel?.name ?? 'No Aplica'">{{ quote.listed_activities[0].hotel?.name ?? 'N/A' }}</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-center capitalize">{{ quote.listed_activities[0].hotel?.zone.name ?? 'N/A' }}</div>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                </div>

                <div class="flex justify-center">    
                    <Pagination :links="quotes" />
                </div>
            </div>
        </div>
    </div>
</section>
</template>