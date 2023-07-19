<script setup>

defineProps(['modelValue','placeHolder','name','id'])
defineEmits(['update:modelValue'])

</script>

<template>

<input
    :id="id"
    type="number"
    :name="name"
    :value="modelValue"
    :placeholder="placeHolder"
    @input="$emit('update:modelValue', $event.target.value)"
    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
    />

</template>