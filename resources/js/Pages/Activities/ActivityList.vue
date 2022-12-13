<script setup>
import Pagination from '../../Shared/Pagination.vue';
import Filters from '@/Pages/Activities/Filters.vue';

const props = defineProps({
    activities: Object,
    ActivityType: String
})


const filterPrice = (price, season, type, zone) => {
    return (price.season == season && price.type == type && price.zone_id == zone) ? true : false;
}
</script>

<template>
<!-- component -->
<section class="w-full antialiased bg-gray-100 text-gray-600">
    <div class="flex flex-col justify-center h-full">
        <!-- Table -->
        <div class="w-full mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
            <header class="px-5 py-4 border-b border-gray-100 flex items-center">
                <h2 class="font-semibold text-gray-800"></h2>
                <div class="m-2">
                    <Filters :ActivityType="ActivityType"/>
                </div>
            </header>
            <div class="p-3">
                <div class="overflow-x-auto">
                    <table class="table-auto w-full">
                        <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                            <tr>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">Actividad</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">Adulto (Baja)</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">Niño (Baja)</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">Adulto (Alta)</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">Niño (Alta)</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">Tour (Solo)</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">Tour (Paquete)</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">2 Tours</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">3 o mas Tours</div>
                                </th>
                            </tr>
                        </thead>
                        <tbody class="text-sm divide-y divide-gray-100">
                            <tr v-for="activity in props.activities.data">
                                <td class="p-2 whitespace-nowrap">
                                    <div class="flex items-center">
                                        <div class="font-medium text-gray-800">{{ activity.name }}</div>
                                    </div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    ${{ activity.filter_prices.low[0].amount }}
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    ${{ activity.filter_prices.low[1].amount }}
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    ${{ activity.filter_prices.high[0].amount }}
                                </td>
                                <td class="p-2 whitespace-nowrap cursor-default">
                                    ${{ activity.filter_prices.high[1].amount }}
                                </td>
                                <td class="p-2 whitespace-nowrap cursor-default">
                                    $100.00
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    $100.00
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    $100.00
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    $100.00
                                </td>
                            </tr>
                        </tbody>
                    </table>

                </div>

                <div class="flex justify-center">    
                    <Pagination :links="activities" />
                </div>
            </div>
        </div>
    </div>
</section>
</template>