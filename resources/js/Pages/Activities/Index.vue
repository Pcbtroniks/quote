<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import ActivityList from '@/Pages/Activities/ActivityList.vue';
import BreadCrumbArrow from '@/Shared/BreadCrumbArrow.vue';

const props = defineProps({
    activities: Object,
    filters: Object
})

</script>

<template>
    <AppLayout title="Actividades Freetravelers">
        <template #header>
            <h2 class="font-semibold text-xl text-white leading-tight">
                Activities <BreadCrumbArrow /> Parks and Tours
            </h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                    <ActivityList :filters="filters" :activities="activities" />
                </div>
            </div>
        </div>
    </AppLayout>
</template>