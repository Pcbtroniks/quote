<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import CreatePickupByZoneForm from './Partials/CreatePickupForm.vue';

const props = defineProps({
    params: Object,
    tours: Array,
})
</script>

<template>
    <AppLayout title="Pickups">
        <template #header>
            <h2 class="uppercase font-semibold text-xl text-white leading-tight">
                Crear Pickup
            </h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white shadow-xl sm:rounded-lg">
                    <CreatePickupByZoneForm
                        :params="props.params"
                        :tours="props.tours"
                    />
                </div>
            </div>
        </div>
    </AppLayout>
</template>
