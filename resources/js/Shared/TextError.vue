<script setup>

const props = defineProps({
    message: String
});

</script>

<template v-if="message">
    <span class="text-red-500 text-sm font-bold">
        {{ message }}
    </span>
</template>