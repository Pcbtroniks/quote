<script setup>
import axios from 'axios';

import InputText from '@/Shared/InputText.vue';
import { Inertia } from '@inertiajs/inertia';

const props = defineProps({
    pickups: Object,
    tours: Object,
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

const requestPickupTimeUpdate = async(pickupID,PickupTime, index) => {
    try {
        
        const pickup_time = formatPickupTime(PickupTime);
        const response = await axios.post(route('pickups.update', pickupID), {
            pickup_time: pickup_time
        })
        props.pickups[index].pickup_time = pickup_time;
        console.log(response);

    } catch (error) {

        console.log(error);
        alert('Lo sentimos, ocurrio un error al actualizar la hora del pickup. actualiza la pagina y vuelve a intentarlo.');
    
    }
}

const visitActivity = (activity) => {
    const activityID = activity ?? 11;
    const zoneID = props.pickups[0]?.zone_id ?? 1;

    Inertia.visit(route('pickups', { activity: activityID, zone: zoneID}));
} 

/**
 * Format pickup_time to HH:MM  i.e. 5:10 to 05:10
 * 
 * @param {string} pickup_time
 * @returns {string} formatted pickup_time 
 */
function formatPickupTime(pickup_time){
    if(pickup_time === undefined || pickup_time === ''){
        return '';
    }

    pickup_time = pickup_time.trim();

    const [hours, minutes] = pickup_time.split(':');
    const formattedHours = hours.length === 1 ? `0${hours}` : hours;
    const formattedMinutes = minutes.length === 1 ? `0${minutes}` : minutes;

    return `${formattedHours}:${formattedMinutes}`;
}
</script>

<template>
<!-- component -->
<section class="w-full antialiased bg-gray-100 text-gray-600">
    <div class="flex flex-col justify-center h-full">
        <!-- Table -->
        <div class="w-full mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
            <header class="px-5 py-4 border-b border-gray-100">
                <h1 class="font-semibold text-gray-800 text-2xl">{{ props.pickups[0]?.activity ?? 'N/D' }}</h1>
                <!-- Filters -->
                <div class="mt-8">

                    <label
                            for="parque"
                            class="mb-3 block text-base font-medium text-[#07074D]"
                        >
                            Cambiar Tour
                        </label>
                        <select
                            @change="visitActivity($event.target.value)"
                            name="tour"
                            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            >
                            <option value="null" selected disabled>-- Seleccionar tour --</option>
                            <option class="capitalize" v-if="props.tours" v-for="tour in props.tours" :value="tour.id">{{ tour.name }}</option>
                            <option v-else>Tours no disponibles</option>
                        </select>

                </div>
            </header>
            <div class="p-3">
                <div class="overflow-x-auto">
                    <table class="table-auto w-full">
                        <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                            <tr>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">Hotel</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">Hora del pickup</div>
                                </th>
                                <th class="lg:px-4 px-6 lg:py-3.5 py-6 font-bold text-right text-gray-400">			          
                                    <svg
                                        color="currentColor"
                                        class="w-6 text-right fill-current text-grey-dark"
                                        xmlns="http://www.w3.org/2000/svg"
                                        stroke="currentColor"
                                        fill="CurrentColor"
                                        viewBox="0 0 20 20"
                                    >
                                    <path
                                    d="M4 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
                                    />
                                    </svg>
                                </th>
                            </tr>
                        </thead>
                        <tbody class="text-sm divide-y divide-gray-100">
                            <tr v-if="!props.pickup" v-for="(pickup, index) in props.pickups" class="h-12 hover:bg-sky-300">
                                <td class="p-2 whitespace-nowrap">
                                    <div class="flex items-center">
                                        <div class="font-medium text-gray-800">{{ pickup.hotel }}</div>
                                    </div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="flex items-center">
                                        <div class="font-medium text-gray-800 hover:text-green-500">
                                            <div class="font-medium text-gray-800">
                                                <InputText
                                                    placeholder="00:00"
                                                    :value="pickup.pickup_time.slice(0,5)"
                                                    id="PickupTime"
                                                    name="PickupTime"
                                                    @blur="requestPickupTimeUpdate(pickup.id, $event.target.value, index)"
                                                    />
                                            </div>
                                        </div>
                                    </div>
                                </td>

                                <td class="p-2 whitespace-nowrap">
                                    <div class="flex items-center">
                                        <div class="font-medium text-gray-400">...</div>
                                    </div>
                                </td>
                            </tr>
                            <tr v-else class="h-12 hover:bg-sky-300 text-center">
                                <td colspan="3" class="p-2 whitespace-nowrap text-center">
                                    <div class="flex items-center justify-center text-center">
                                        <div class="text-center font-bold text-indigo-500"> No hay información dispobible</div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                </div>

                <div class="flex justify-center">    
                    <!-- <Pagination :links="quotes" /> -->
                </div>
            </div>
        </div>
    </div>
</section>
</template>