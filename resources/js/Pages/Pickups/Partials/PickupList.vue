<script setup>
import axios from 'axios';
import Swal from 'sweetalert2';
import { Inertia } from '@inertiajs/inertia';

import InputText from '@/Shared/InputText.vue';
import {    getZones, ParsePlayaDelCarmenToCancun, zoneIdToZoneName,
            formatPickupTime, getActivityNameById } from '@/Services/Utils.js';

const props = defineProps({
    pickups: Object,
    tours: Object,
    params: Object,
})

const toast = () => {

    return Swal.mixin({
        toast: true,
        position: 'top-right',
        iconColor: 'white',
        customClass: {
            popup: 'colored-toast'
        },
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true
    })

}

const requestPickupTimeUpdate = async(pickupID, PickupTime, index) => {

    if(PickupTime == props.pickups[index].pickup_time || PickupTime === undefined || PickupTime === ''){

        props.pickups[index].pickup_time = props.pickups[index].pickup_time;
        return;
    
    }
    try {

        const pickup_time = formatPickupTime(PickupTime);
        const response = await axios.post(route('pickups.update', pickupID), {
            pickup_time: pickup_time
        })
        props.pickups[index].pickup_time = pickup_time;
        
        await toast().fire({
            icon: 'success',
            title: 'Hora de pickup actualizada'
        });

    } catch (error) {

        console.log(error);
        alert('Lo sentimos, ocurrio un error al actualizar la hora del pickup. actualiza la pagina y vuelve a intentarlo.');
    
    }
}

const visitActivity = (activity, zone) => {

    const activityID = activity ?? 11;
    const zoneID = zone ?? 1;

    Inertia.visit(route('pickups', { activity: activityID, zone: zoneID}));
} 

console.log(props.pickups);
</script>

<template>
<!-- component -->
<section class="w-full antialiased bg-gray-100 text-gray-600">
    <div class="flex flex-col justify-center h-full">
        <!-- Table -->
        <div class="w-full mx-auto bg-white shadow-lg rounded-sm">
            <header class="px-5 pt-4 py-4 pb-8 border-b border-gray-100">
                <h1 class="font-bold text-sky-400 text-2xl">{{ getActivityNameById(props.params.activity, props.tours) }} en {{ zoneIdToZoneName(props.params.zone) }}</h1>
                <!-- Filters -->
                <div class="md:mt-8 md:flex md:gap-3 md:items-center">

                    <div class="md:w-2/6">
                        <label
                                for="tour"
                                class="mb-3 block text-base font-medium text-[#07074D]"
                            >
                                Cambiar Tour
                        </label>
                        <select
                            id="tour"
                            @change="visitActivity($event.target.value, props.params.zone)"
                            name="tour"
                            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            >
                            <option value="null" selected disabled>-- Tour --</option>
                            <option v-if="props.tours" class="capitalize" v-for="tour in props.tours" :value="tour.id">{{ tour.name }}</option>
                            <option v-else>Tours no disponibles</option>
                        </select>
                    </div>

                    <div class="md:w-1/6">
                        <label
                            for="zone"
                            class="mb-3 block text-base font-medium text-[#07074D]"
                        >
                                Cambiar Zona
                        </label>
                        <select
                            id="zone"
                            @change="visitActivity(props.params.activity, ParsePlayaDelCarmenToCancun($event.target.value))"
                            name="zone"
                            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            >
                            <option value="null" selected disabled>-- Zona --</option>
                            <option class="capitalize" v-if="props.tours" v-for="zone in getZones()" :value="zone.id">{{ zone.name }}</option>
                            <option v-else>Tours no disponibles</option>
                        </select>
                    </div>


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
                            <tr v-if="props.pickups && props.pickups.lenght > 0" v-for="(pickup, index) in props.pickups" class="h-12 hover:bg-sky-300">
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
                                                    @keydown.enter="requestPickupTimeUpdate(pickup.id, $event.target.value, index)"
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
                                        <div class="text-center font-bold text-sky-400"> No hay información dispobible</div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                </div>

            </div>
        </div>
    </div>
</section>
</template>

<style>
.colored-toast.swal2-icon-success {
    background-color: #a5dc86 !important;
}
.colored-toast .swal2-title {
    color: white;
}
</style>