<script setup>
defineProps(['modelValue','placeHolder','idName','min','max','name','id'])
</script>

<template>
    <input
    :id='id ?? idName'
    :min='min ?? 0'
    :max='max'
    type="number"
    :name='name ?? idName'
    :value="modelValue"
    :placeholder='placeHolder ?? 0'
    @input="$emit('update:modelValue', $event.target.value)"
    class="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
/>
</template>