<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import CreateBranchForm from '@/Pages/Branches/Partials/CreateBranchForm.vue';
import SectionBorder from '@/Components/SectionBorder.vue';
import BranchUserManager from './Partials/BranchUserManager.vue';

const props = defineProps({
    branches: Array,
    users: Array,
});

console.log(props.branches);
console.log(props.users);
</script>

<template>
    <AppLayout title="Gestinar sucursales">
        <template #header>
            <h2 class="font-semibold text-xl text-white leading-tight">
                Nueva sucursal
            </h2>
        </template>

        <div>
            <div class="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8">
                <CreateBranchForm />

            <template v-if="props.branches.length > 0">
                <SectionBorder />

                <BranchUserManager :branches="props.branches" :users="props.users" />
            </template>

            </div>
        </div>
    </AppLayout>
</template>
