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
    filterForm.get(route('quote.index', filterForm.data));
}
</script>
<template>
<div class="flex gap-4 lg:gap-20 flex-col md:flex-row px-2">
    <div class="w-full">
        <label for="coupon_status" class="text-sm text-white">Estatus de cupon</label>
        <select @change="submitFilter" v-model="filterForm.coupon_status" class="w-full border-4 border-mainblue rounded-xl font-bold" name="coupon_status" id="coupon_status">
            <option value="none" selected>Todos</option>
            <option value="created">Creado</option>
            <option value="pending">Pendiente</option>
            <option value="confirmed">Confirmado</option>
        </select>
    </div>
    <div class="w-full">
        <label for="from_date" class="text-sm text-white">Desde la fecha</label>
        <input :max="filterForm.to_date" type="date" @change="submitFilter" v-model="filterForm.from_ndate" class="w-full rounded-xl border-4 border-mainblue font-bold" name="from_date" id="from_date">
    </div>
    <div class="w-full">
        <label for="to_date" class="text-sm text-white">Hasta la fecha</label>
        <input :min="filterForm.from_date" @change="submitFilter" v-model="filterForm.to_date" class="w-full rounded-xl border-4 border-mainblue font-bold" type="date" name="to_date" id="to_date">
    </div>
</div>
<div class="w-full flex gap-4 flex-col md:flex-row justify-end items-end px-2 pt-2 pb-4">
    <div>
        <a :href="route('quote.index')" class="text-white underline underline-offset-2
 hover:text-sky-600">Limpiar filtros</a>
    </div>
</div>
</template>