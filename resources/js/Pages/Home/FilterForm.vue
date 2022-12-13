<script setup>
import InputDate from '@/Pages/Quotes/partials/InputDate.vue';
import InputLabel from '@/Pages/Quotes/partials/InputLabel.vue';
import Button from "@/Components/Button.vue";
import { useForm } from '@inertiajs/inertia-vue3';

const form = useForm({
    date: null,
    zone: null
})

const submitFilters = (e) => {
    // alert('Form Submitted');
    form.get(route('quotes.filter'));
}

const zones = [
    {name: 'Cancun', id: 1},
    {name: 'Riviera Maya', id: 2},
    {name: 'Playa del carmen', id: 3},
    ];
</script>

<template>

<form  @submit.prevent="submitFilters">

    <div class="col-span-2">
        <InputLabel for="filter_date">
            Filtrar por Fecha
        </InputLabel>
        <InputDate
            name="filter_date"
            id="filter_date"
            v-model="form.date"
        />
        <Button type="submit" msg="buscar"/>
    </div>
    <div class="col-span-2">
        <InputLabel for="filter_zone">
            Filtrar por Zona
        </InputLabel>
        <select
            v-model="form.zone"
            id="filter_zone"
            name="filter_zone" 
            class="capitalize w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            >
            <option value="null" selected disabled>-- Seleccione su zona --</option>
            <option v-for="zone in zones"  :value="zone.id">{{ zone.name }}</option>
        </select>
        <Button type="submit" msg="buscar"/>
    </div>
</form>

</template>