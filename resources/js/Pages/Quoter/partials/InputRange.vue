<script setup>
defineProps({
    modelValue: Number,
    idName: String,
    name: String,
    max: Number,
    min: Number,
    id: String,
})
defineEmits(['update:modelValue'])
</script>

<template>
<input 
    type="range"
    :min="min ?? 0" 
    :max="max ?? 100" 
    :id="idName ?? id"
    :value="modelValue"
    :name="idName ?? name" 
    @input="$emit('update:modelValue', $event.target.value)"
    class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" />
</template>