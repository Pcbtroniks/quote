<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import SectionBorder from '@/Components/SectionBorder.vue';
import SearchActivityForm from '@/Pages/Activities/Partials/SearchActivityForm.vue';

const props = defineProps({
    activities: Array,
});
</script>

<template>
    <AppLayout title="Actividades - Crear">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Actividad - Buscar
            </h2>
        </template>

        <div>
            <div class="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8">

                <div v-if="$page.props.user.is_freetraveler_admin">
                    <SearchActivityForm :activities="props.activities" class="mt-10 sm:mt-0" />

                    <SectionBorder />
                </div>

            </div>
        </div>
    </AppLayout>
</template>
