<script setup>
import { computed } from "vue";
import { Link } from "@inertiajs/inertia-vue3";

const props = defineProps({
    href: String,
    active: Boolean,
});

const classes = computed(() => {
    return props.active
        ? "inline-flex items-center px-1 pt-1 border-b-4 border-maingreen lg:m-4 text-sm font-medium leading-5 text-black focus:outline-none focus:border-indigo-700 transition"
        : "inline-flex items-center  px-1 pt-1 border-b-4 border-maingreen lg:m-4 text-sm font-medium leading-5 text-bl hover:text-gray-700 hover:border-mainblue focus:outline-none focus:text-gray-700 focus:border-gray-300 transition w-26 focus:font-bold";
});
</script>

<template>
    <Link :href="href" :class="classes">
        <slot />
    </Link>
</template>
