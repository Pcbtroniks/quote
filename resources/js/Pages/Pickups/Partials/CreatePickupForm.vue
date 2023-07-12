<script setup>
import axios from 'axios';
import InputText from '@/Shared/InputText.vue';
import {    getZones, zoneIdToZoneName, zoneToALias,
            formatPickupTime, getActivityNameById, validatePickupTime } from '@/Services/Utils.js';
import { ref } from 'vue';
import { successToast, BadFormatPickupTimeError } from '@/Services/Alerts.js';
import { useForm } from '@inertiajs/inertia-vue3';
import { loadHotels } from '@/Services/Providers.js';

const props = defineProps({
    params: Object,
})

const HotelList = ref([]);
const LoadedHotelList = ref([]);
const showHotelList = ref(false);

const storePickupForm = useForm({
    zone: null,
    hotel: null,
    activity: null,
    pickup_time: null,
})

const hotelDisplay = ref({
    name: null,
})

const setHotel = (hotel) => {
    storePickupForm.hotel = hotel.id;
    hotelDisplay.value.name = hotel.name;
    showHotelList.value = false;
    console.log(storePickupForm.hotel);
}

const requestPickupTimeUpdate = async(pickupID, PickupTime, index) => {

    try {

        const pickup_time = formatPickupTime(PickupTime);
        const response = await axios.post(route('pickups.update', pickupID), {
            pickup_time: pickup_time
        })
        props.pickups[index].pickup_time = pickup_time;
        await successToast().fire({
            icon: 'success',
            title: 'Hora de pickup actualizada'
        });

    } catch (error) {

        console.log(error);
        BadFormatPickupTimeError();
    
    }
}

const getHotelsByZone = async (HotelZoneID) => {
    HotelList.value = await loadHotels(HotelZoneID, HotelList.value);
    LoadedHotelList.value.pop();
    LoadedHotelList.value = HotelList.value[(zoneToALias(HotelZoneID))];
    showHotelList.value = true;

}
</script>

<template>
<!-- component -->
<section class="w-full antialiased bg-gray-100 text-gray-600">
    <div class="flex flex-col justify-center h-full">
        <!-- Table -->
        <div class="w-full mx-auto bg-white shadow-lg rounded-sm">
            <header class="px-5 pt-4 py-4 pb-8 border-b border-gray-100">

                <h1 class="font-bold text-sky-500 text-2xl border-b border-gray-100 pb-4"> <br class="md:hidden">Creando un pickup</h1>

                <!-- Inputs -->
                <div class="md:mt-8 md:flex md:gap-3 md:items-center">

                    <div class="md:w-1/6">
                        <label
                            for="zone"
                            class="mb-3 block text-base font-medium text-gray-700"
                        >
                                Elegir zona
                        </label>
                        <select
                            id="zone"
                            @change="getHotelsByZone($event.target.value)"
                            v-model="storePickupForm.zone"
                            name="zone"
                            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            >
                            <option value="null" selected disabled>-- Zonas --</option>
                            <option class="capitalize" v-if="getZones()" v-for="zone in getZones()" :value="zone.id" :selected="props.params.zone == zone.id">{{ zone.name }}</option>
                            <option v-else>no disponibles</option>
                        </select>
                    </div>

                    <div class="h-4 md:hidden"></div>

                    <div class="md:w-2/6">
                        <label
                                for="hotelName"
                                class="mb-3 block text-base font-medium text-gray-700"
                            >
                                Elegir hotel
                        </label>

                        <InputText
                            id="hotelName"
                            placeholder="Nombre del hotel..."
                            class="w-full"
                            :value="hotelDisplay.name"
                            @focus="showHotelList = true"
                            @blur="showHotelList = false"
                        />
                        <input type="hidden" name="hotel" v-model="storePickupForm.hotel">
                        <div v-show="showHotelList && LoadedHotelList.length > 0" class="relative">
                            <ul class="w-full flex flex-col gap-2 absolute bg-white border shadow-md h-80 overflow-auto">
                                <li v-for="hotel in LoadedHotelList[0]" class="hover:bg-sky-500 hover:text-white p-4 cursor-pointer" @click="setHotel(hotel)">{{ hotel.name }}</li>
                            </ul>
                        </div>

                    </div>

                    <div class="h-4 md:hidden"></div>

                    <div class="md:w-2/6">
                        <label
                                for="tour"
                                class="mb-3 block text-base font-medium text-gray-700"
                            >
                                Tour
                        </label>
                        <select
                            id="tour"
                            @change="() => {}"
                            name="tour"
                            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            >
                            <option value="null" selected disabled>-- Tours --</option>
                            <option v-if="props.tours" class="capitalize" v-for="tour in props.tours" :value="tour.id" :selected="props.params.activity == tour.id">{{ tour.name }}</option>
                            <option v-else>Tours no disponibles</option>
                        </select>
                    </div>

                    <div class="h-4 md:hidden"></div>

                    <div class="md:w-2/6">
                        <label
                            for="tourPickupTime"
                            class="mb-3 block text-base font-medium text-gray-700"
                        >
                                Hora del pickup
                        </label>
                        <InputText
                            id="tourPickupTime"
                            placeholder="hh:mm..."
                            class="w-full"
                        />
                    </div>


                </div>

            </header>
            
        </div>
    </div>
</section>
</template>