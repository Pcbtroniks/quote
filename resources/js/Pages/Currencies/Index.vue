<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import SectionBorder from '@/Components/SectionBorder.vue';
import CreateCurrencyForm from './Partials/CreateCurrencyForm.vue';

</script>

<template>
    <AppLayout title="Divisas - Freetraveler">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Divisas
            </h2>
        </template>

        <div>
            <div class="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8">

                <div>
                    <CreateCurrencyForm 
                        class="mt-10 sm:mt-0"
                    />

                    <SectionBorder />
                </div>

            </div>
        </div>
    </AppLayout>
</template>
