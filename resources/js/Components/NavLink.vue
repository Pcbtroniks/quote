<script setup>
import { computed } from "vue";
import { Link } from "@inertiajs/inertia-vue3";

const props = defineProps({
    href: String,
    active: Boolean,
});

const classes = computed(() => {
    return props.active
        ? "inline-flex items-center h-2 text-sm font-medium leading-5 text-bl hover:border-mainblue focus:outline-none focus:text-gray-700 focus:border-gray-300 transition-all duration-300 ease-in-out focus:font-extrabold rounded-t-xl block px-4 py-8 bg-mainblue text-md text-white hover:font-bold text-center font-extrabold translate-y-8 text-[16px]"
        : "inline-flex items-center border-b-4 border-maingreen h-16 text-sm font-medium leading-5 text-bl hover:font-extrabold hover:border-mainblue focus:outline-none focus:border-gray-300 transition-all duration-300 ease-in-out focus:font-bold rounded-b-xl block px-4 py-4 bg-maingreen text-md text-white hover:bg-mainblue hover:font-bold text-center hover:text-[16px]";
});

</script>

<template>
    <Link :href="href" :class="classes">
        <slot />
    </Link>
</template>
