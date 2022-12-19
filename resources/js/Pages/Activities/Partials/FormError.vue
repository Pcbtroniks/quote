<script setup>
defineProps({
    msg: String
})  
</script>
<template>
    <p class="text-xs text-red-600 mt-2" v-show="msg">{{ msg }}</p>
</template>