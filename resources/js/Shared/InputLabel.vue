<script setup>
defineProps({
    for: String,
    text:String
})
</script>

<template>
<label
    :for='for'
    class="mb-3 block text-base font-medium text-[#07074D]"
    >
<slot></slot>
</label>
</template>