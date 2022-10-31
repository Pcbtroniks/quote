<script setup>
import { Link } from '@inertiajs/inertia-vue3';
const props = defineProps({
    links: Object
});

console.log(props.links);

</script>
<template>
    <component  
    v-for="l in links.links" 
    :key="l" 
    :is="!l.active ? Link : 'span'" 
    :class="'ml-2 px-3 py-1 rounded-lg hover:bg-gray-100 text-sm text-gray-500' + ( !l.active ? ' ' : ' cursor-pointer text-gray-300')"
    :href="l.url"
    v-html="l.label"/>
</template>