<script setup>
import { useForm } from '@inertiajs/inertia-vue3';
import { useDate } from '@/utils/Dates.js';

const props = defineProps({
    params: Object,
});

const filterForm = useForm({
    coupon_status: props.params.coupon_status,
    from_date: props.params.from_date,
    to_date: props.params.to_date,
});

const submitFilter = () => {
    console.log(filterForm);
    filterForm.get(route('quote.index', filterForm.data));
}
</script>
<template>
<div class="flex gap-4 flex-col md:flex-row px-2">
    <div class="w-full">
        <label for="coupon_status" class="text-sm text-gray-400">Estatus de cupon</label>
        <select @change="submitFilter" v-model="filterForm.coupon_status" class="w-full border-2 border-sky-500 rounded-xl" name="coupon_status" id="coupon_status">
            <option value="none" selected>Todos</option>
            <option value="created">Creado</option>
            <option value="pending">Pendiente</option>
            <option value="confirmed">Confirmado</option>
        </select>
    </div>
    <div class="w-full">
        <label for="from_date" class="text-sm text-gray-400">Desde la fecha</label>
        <input :max="filterForm.to_date" type="date" @change="submitFilter" v-model="filterForm.from_date" class="w-full rounded-xl border-2 border-sky-500" name="from_date" id="from_date">
    </div>
    <div class="w-full">
        <label for="to_date" class="text-sm text-gray-400">Hasta la fecha</label>
        <input :min="filterForm.from_date" @change="submitFilter" v-model="filterForm.to_date" class="w-full rounded-xl border-2 border-sky-500" type="date" name="to_date" id="to_date">
    </div>
</div>
<div class="w-full flex gap-4 flex-col md:flex-row justify-end items-end px-2 pt-2 pb-4">
    <div>
        <a :href="route('quote.index')" class="text-gray-400 underline underline-offset-2
 hover:text-sky-600">Limpiar filtros</a>
    </div>
</div>
</template>