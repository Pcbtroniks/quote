<script setup>
import { Link } from '@inertiajs/inertia-vue3';
const props = defineProps({
    links: Object,
    data: Object
});


const useQueryParams = (data = null) => {
    if(data == null) return;
    delete data.page;
    return '&' + propsAsString(data) ?? '';
}
function propsAsString(obj) {
  return Object.keys(obj).map(function(k) { return k + "=" + obj[k] }).join("&")
}

console.log();
</script>
<template>
    <component
    v-for="l in links.links" 
    :key="l" 
    :is="!l.active ? Link : 'span'" 
    :class="'ml-2 px-3 py-1 rounded-lg hover:bg-gray-100 text-sm text-gray-500' + ( !l.active ? ' ' : ' cursor-pointer text-white bg-sky-500 hover:bg-sky-300')"
    :href="l.url + useQueryParams(props?.data ?? {page : ''})"
    v-html="l.label"/>
</template>