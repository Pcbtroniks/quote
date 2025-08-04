<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import PickupListByHotel from '@/Pages/Pickups/Partials/PickupListByHotel.vue';

const props = defineProps({
    pickups: Object,
    hotels: Object,
    params: Object,
})

</script>

<template>
    <AppLayout title="Pickups">
        <template #header>
            <h2 class="uppercase font-semibold text-xl text-white leading-tight">
                Pickups por hotel
            </h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                    <PickupListByHotel 
                        :pickups="props.pickups" 
                        :hotels="props.hotels"
                        :params="props.params"
                    />
                </div>
            </div>
        </div>
    </AppLayout>
</template>
