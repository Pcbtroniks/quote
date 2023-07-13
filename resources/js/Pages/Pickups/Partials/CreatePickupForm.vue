<script setup>
import axios from 'axios';
import InputText from '@/Shared/InputText.vue';
import Button from '@/Components/Button.vue';
import {    getZones, zoneIdToZoneName, zoneToALias,
            formatPickupTime, getActivityNameById, validatePickupTime } from '@/Services/Utils.js';
import { ref } from 'vue';
import { successToast, BadFormatPickupTimeError } from '@/Services/Alerts.js';
import { useForm } from '@inertiajs/inertia-vue3';
import { loadHotels } from '@/Services/Providers.js';

const props = defineProps({
    params: Object,
    tours: Array,
})

const HotelList = ref({});
const LoadedHotelList = ref([]);
const LoadedHotelListFiltered = ref([]);
const showHotelList = ref(false);


const storePickupForm = useForm({
    zone: null,
    hotel: null,
    activity: null,
    pickup_time: null,
})

const submitPickupForm = async () => {
    try {
        storePickupForm.pickup_time = formatPickupTime(storePickupForm.pickup_time);
        validatePickupTime(storePickupForm.pickup_time);
        
        form.submit(route('pickups.store'), {
            preserveScroll: true,
            onSuccess: (result) => {
                console.log(result);
                successToast('Pickup creado exitosamente');
            },
            onerror: (error) => {
                console.log(error); 
                alert(error);
            },
        });
        successToast('Pickup creado exitosamente');
        storePickupForm.reset();
    } catch (error) {
        if(error) {
            console.log(error);
            return ;
        }
        BadFormatPickupTimeError();
    }
}

const hotelDisplay = ref({
    name: null,
})

const setHotel = (hotel) => {
    if(hotel == null && hotel.id == storePickupForm.hotel) {
        showHotelList.value = false;
        return;
    }
    storePickupForm.hotel = hotel.id;
    hotelDisplay.value.name = hotel.name;
    showHotelList.value = false;
}

const filterHotelList = (search = '') => {
    const emptyHotel = [{id: null, name: 'No se encontraron hoteles'}];

    if(search.length == 0) {
        LoadedHotelListFiltered.value = LoadedHotelList.value;
        return;
    }

    if(search.length < 3) {
        return;
    }
    const hotelList = LoadedHotelList.value.filter(hotel => hotel.name.toLowerCase().includes(search.toLowerCase()));
    if(hotelList.length == 0) {
        LoadedHotelListFiltered.value = emptyHotel;
    } else{
        LoadedHotelListFiltered.value = hotelList;
    }
}

const hideHotelListWithDelay = () => {setTimeout(() => { showHotelList.value = false; }, 100);}

const getHotelsByZone = async (HotelZoneID) => {
    HotelList.value = await loadHotels(HotelZoneID, HotelList.value);
    LoadedHotelList.value.pop();
    LoadedHotelList.value = HotelList.value[zoneToALias(HotelZoneID)];
    LoadedHotelListFiltered.value = [...LoadedHotelList.value];
    showHotelList.value = true;
    hotelDisplay.value.name = '';

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
            <form @submit.prevent="submitPickupForm">
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
                            @blur="hideHotelListWithDelay()"
                            @input="filterHotelList($event.target.value)"
                        />
                        <input type="hidden" name="hotel" v-model="storePickupForm.hotel">
                        <div v-show="showHotelList && LoadedHotelList.length > 0" class="relative">
                            <ul class="w-full flex flex-col gap-2 absolute bg-white border shadow-md max-h-80 overflow-auto">
                                <li v-for="hotel in LoadedHotelListFiltered" class="hover:bg-sky-500 hover:text-white p-4 cursor-pointer" @click="setHotel(hotel)">{{ hotel.name }}</li>
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
                            v-model="storePickupForm.pickup_time"
                        />
                    </div>


                </div>
                <div class="mt-4">
                    <button type="submit">
                        <Button msg="Guardar" :isLoading="storePickupForm.processing"/>
                    </button>
                </div>
            </form>
            </header>
            
        </div>
    </div>
</section>
</template>