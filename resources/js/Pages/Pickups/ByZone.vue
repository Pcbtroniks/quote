<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import PickupListByZone from './Partials/PickuplistByZone.vue';

const props = defineProps({
    pickups: Object,
    tours: Object,
    params: Object,
})

</script>

<template>
    <AppLayout title="Pickups">
        <template #header>
            <h2 class="uppercase font-semibold text-xl text-white leading-tight">
                Pickups por zona
            </h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                    <PickupListByZone
                        :pickups="props.pickups" 
                        :tours="props.tours"
                        :params="props.params"
                    />
                </div>
            </div>
        </div>
    </AppLayout>
</template>
