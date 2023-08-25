<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import SectionBorder from '@/Components/SectionBorder.vue';
import CreateActivityForm from '@/Pages/Activities/Partials/CreateActivityForm.vue';
import AddPricesForm from './Partials/AddPricesForm.vue';
import AddCostsForm from './Partials/AddCostsForm.vue';

const props = defineProps({
    activity: Object,
});
console.log(props.activity);
</script>

<template>
    <AppLayout title="Actividades - Crear">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Actividad - Crear
            </h2>
        </template>

        <div>
            <div class="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8">

                <div v-if="$page.props.user.is_freetraveler_admin">
                    <CreateActivityForm :activity="props.activity" class="mt-10 sm:mt-0" />

                    <SectionBorder />
                </div>

                <div v-if="props.activity.id">
                    <AddPricesForm 
                        :activity="props.activity" 
                        class="mt-10 sm:mt-0"
                    />

                    <SectionBorder />
                </div>

                <div v-if="props.activity.id">
                    <AddCostsForm 
                        :activity="props.activity" 
                        class="mt-10 sm:mt-0"
                    />

                    <SectionBorder />
                </div>

            </div>
        </div>
    </AppLayout>
</template>
