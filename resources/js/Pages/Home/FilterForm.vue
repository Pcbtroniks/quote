<script setup>
import InputDate from '@/Pages/Quotes/partials/InputDate.vue';
import InputLabel from '@/Pages/Quotes/partials/InputLabel.vue';
import Button from "@/Components/Button.vue";
import { useForm } from '@inertiajs/inertia-vue3';

const props = defineProps({
    agencies: Array
})

const form = useForm({
    date: null,
    zone: null,
    type: null,
    filter_agency: null,
})

const submitFilters = (e) => {
    form.get(route('quotes.filter'));
}

const zones = [
    {name: 'Cancun', id: 1},
    {name: 'Riviera Maya', id: 2},
    {name: 'Playa del carmen', id: 3},
    ];
const types = [
    {name: 'entrada', id: 1},
    {name: 'tour', id: 2},
    {name: 'paquete', id: 3},
    ];
</script>

<template>

<form  @submit.prevent="submitFilters">

    <div class="col-span-6 md:col-span-3 xl:col-span-2">
        <InputLabel for="filter_date">
            Filtrar por Fecha
        </InputLabel>
        <InputDate
            name="filter_date"
            id="filter_date"
            v-model="form.date"
        />
        <Button class="mt-4" type="submit" msg="buscar"/>
    </div>
    <div class="col-span-6 md:col-span-3 xl:col-span-2">
        <InputLabel for="filter_zone">
            Filtrar por Zona
        </InputLabel>
        <select
            v-model="form.zone"
            id="filter_zone"
            name="filter_zone" 
            class="capitalize w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            >
            <option value="null" selected disabled>-- Seleccione su zona --</option>
            <option v-for="zone in zones"  :value="zone.id">{{ zone.name }}</option>
        </select>
        <Button class="mt-4" type="submit" msg="buscar"/>
    </div>
    <div class="col-span-6 md:col-span-3 xl:col-span-2">
        <InputLabel for="filter_type">
            Filtrar por tipo de actividad
        </InputLabel>
        <select
            v-model="form.type"
            id="filter_type"
            name="filter_type" 
            class="capitalize w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            >
            <option value="null" selected disabled>-- Tipo de actividad, entrada, tour.. --</option>
            <option v-for="type in types"  :value="type.name">{{ type.name }}</option>
        </select>
        <Button class="mt-4" type="submit" msg="buscar"/>
    </div>
    <div v-if="$page.props.user.is_freetraveler_admin" class="col-span-6 md:col-span-3 xl:col-span-2">
        <InputLabel for="filter_agency">
            Filtrar por agencia
        </InputLabel>
        <select
            v-model="form.filter_agency"
            id="filter_agency"
            name="filter_agency" 
            class="capitalize w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            >
            <option value="null" selected disabled>-- Filtrar por agencia --</option>
            <option v-for="agency in props.agencies"  :value="agency.id">{{ agency.name }}</option>
        </select>
        <Button class="mt-4" type="submit" msg="buscar"/>
    </div>
</form>

</template>