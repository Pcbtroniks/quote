<script setup>
import Pagination from '../../Shared/Pagination.vue';
import Filters from '@/Pages/Activities/Filters.vue';
import  modal from './Modal.vue';
import  modalEntrance from '@/Pages/Activities/Partials/ModalEntrance.vue';
import { ref } from 'vue';
import { usePage } from '@inertiajs/inertia-vue3';

const props = defineProps({
    activities: Object,
    filters: Object
})

const act = ref({});
const showModal = ref(false);

const useEditActivity = (activity) => {
    if(!usePage().props.value.user.is_freetraveler_admin) return null;
    act.value = activity;
    showModal.value = true;
};

const isFilter = (origin, type) => {
    return origin == type;
}
</script>

<template>
  <Teleport to="body">

    <component 
        :is="props.filters.type == 'park' ? modalEntrance : modal" 
        :fields="act" 
        :show="showModal"
        :filters="props.filters"
        @close="showModal = false"/>

  </Teleport>
<!-- component -->
<section class="w-full antialiased bg-gray-100 text-gray-600">
    <div class="flex flex-col justify-center h-full">
        <!-- Table -->
        <div class="w-full mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
            <header class="px-5 py-4 border-b border-gray-100 flex items-center">
                <h2 class="font-semibold text-gray-800"></h2>
                <div class="m-2">
                    <Filters :filters="filters"/>
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
                                <template v-if="isFilter(props.filters.type, 'park')">
                                    <th class="p-2 whitespace-nowrap">
                                        <div class="font-semibold text-left">Entrada</div>
                                    </th>
                                </template>
                                <template v-if="isFilter(props.filters.type, 'tour')">
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
                                </template>
                            </tr>
                        </thead>
                        <tbody class="text-sm divide-y divide-gray-100">
                            <tr v-for="activity in props.activities.data" class="hover:cursor-pointer hover:text-white hover:bg-sky-400 h-10">
                                <td class="p-2 whitespace-nowrap">
                                    <div class="flex items-center">
                                        <div @click="useEditActivity(activity)" class="font-medium"><img v-if="$page.props.user.is_freetraveler_admin" class="w-3 inline mr-1 stroke-sky-500 fill-sky-500 text-sky-500" src="/assets/icons/edit-icon.svg" alt="Edit Icon">{{ activity.name }}</div>
                                    </div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    ${{ activity.filter_prices.low?.adult[0].amount }}
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    ${{ activity.filter_prices.low?.kid[0].amount }}
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    ${{ activity.filter_prices.high?.adult[0].amount }}
                                </td>
                                <td class="p-2 whitespace-nowrap cursor-default">
                                    ${{ activity.filter_prices.high?.kid[0].amount }}
                                </td>
                                <template v-if="isFilter(props.filters.type, 'park')">
                                    <td class="p-2 whitespace-nowrap cursor-default">
                                        %{{ activity.discounts.entrance }}
                                    </td>
                                </template>
                                <template v-if="isFilter(props.filters.type, 'tour')">
                                    <td class="p-2 whitespace-nowrap cursor-default">
                                        %{{ activity.discounts.tour }}
                                    </td>
                                    <td class="p-2 whitespace-nowrap">
                                        %{{ activity.discounts.pack }}
                                    </td>
                                    <td class="p-2 whitespace-nowrap">
                                        %{{ activity.discounts.pack_double }}
                                    </td>
                                    <td class="p-2 whitespace-nowrap">
                                        %{{ activity.discounts.pack_multiple }}
                                    </td>
                                </template>
                            </tr>
                        </tbody>
                    </table>

                </div>

                <div class="flex justify-center">    
                    <Pagination :data="props.filters"  :links="activities" />
                </div>
            </div>
        </div>
    </div>
</section>
</template>