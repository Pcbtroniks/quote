<script setup>
defineProps({
    msg: String,
    isLoading: Boolean
})
</script>

<template>
    
    <button type="button" class="w-32 text-center flex justify-center bg-sky-500 hover:bg-sky-300 active:bg-sky-700 rounded-lg py-2 text-white font-bold duration-[500ms,800ms]">
        <div v-if="isLoading" class="my-auto h-6 w-5 mx-3 border-t-transparent border-solid animate-spin rounded-full border-white border-4"></div>
        <div v-else class="my-auto -mx-1 text-center justify-self-center">{{ msg ?? 'Procesing...' }}</div>
    </button>

</template>