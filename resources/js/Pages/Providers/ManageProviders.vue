<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import CreateProviderForm from '@/Pages/Providers/Partials/CreateProviderForm.vue';
import ProviderList from './Partials/ProviderList.vue';

const props = defineProps({
    providers: Object
});
</script>

<template>
    <AppLayout title="Freetravelers - Providers">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Providers
            </h2>
        </template>

        <div>
            <div class="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8">
                <CreateProviderForm />
            </div>
        </div>

        <div>
            <div class="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8">
                <ProviderList :providers="props.providers" />
            </div>
        </div>
    </AppLayout>
</template>
