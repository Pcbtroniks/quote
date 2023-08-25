<script setup>

const props = defineProps({
    name: {
        type: String,
        required: true,
    },
    label: {
        type: String,
        required: false,
    },
    modelValue: {
        type: [String, Number],
        required: true,
    },
    value: {
        type: [String, Number],
        required: false,
    },
    id: {
        type: String,
        required: false,
    },
    callback: {
        type: Function,
        required: false,
    },
});

const $emits = defineEmits(['update:modelValue']);

const emitValue = (e) => {
    if(props.callback) props.callback(e.target.value);
    $emits('update:modelValue', e.target.value);
};
</script>

<template>
    <input  type="radio" 
            :id="props.id" 
            :value="props.value" 
            :name="props.name"
            :checked="props.value == props.modelValue"
            @change="emitValue"
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2">
    <label :for="props.id" class="w-full py-4 ml-2 text-sm font-medium text-gray-900">{{ props.label }}</label>
</template>