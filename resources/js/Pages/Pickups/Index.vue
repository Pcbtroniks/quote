<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import PickupList from '@/Pages/Pickups/Partials/PickupList.vue';

const props = defineProps({
    pickups: Object,
    tours: Object,
    params: Object,
})

</script>

<template>
    <AppLayout title="Pickups">
        <template #header>
            <h2 class="uppercase font-semibold text-xl text-gray-800 leading-tight">
                Pickups
            </h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                    <PickupList 
                        :pickups="props.pickups" 
                        :tours="props.tours"
                        :params="props.params"
                    />
                </div>
            </div>
        </div>
    </AppLayout>
</template>
