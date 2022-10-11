<script setup>

const props = defineProps({
    id: String,
    isChecked: Boolean,
});
defineEmits(['update:isChecked'])

</script>

<template>

    <label for="toogleButton" class="flex items-center cursor-pointer">
        <!-- toggle -->
        {{ isChecked }}
        <div class="relative">
            <input
                v-model="some"
                id="toogleButton"
                type="checkbox"
                class="hidden" />
            <!-- path -->
            <div
                class="toggle-path bg-gray-200 w-9 h-5 rounded-full shadow-inner"
            ></div>
            <!-- crcle -->
            <div
                class="toggle-circle absolute w-3.5 h-3.5 bg-white rounded-full shadow inset-y-0 left-0"
            ></div>
        </div>

    </label>

</template>

<style scoped>

.toggle-path {
    transition: background 0.3s ease-in-out;
}
.toggle-circle {
    top: 0.2rem;
    left: 0.25rem;
    transition: all 0.3s ease-in-out;
}
input:checked ~ .toggle-circle {
    transform: translateX(100%);
}
input:checked ~ .toggle-path {
    background-color:#2536eb;
}
</style>