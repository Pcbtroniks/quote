<script setup>
import { Link } from '@inertiajs/inertia-vue3'
import { reactive } from 'vue';

const props = defineProps({
    ActivityType: String
})
</script>


<template>

<div class="sm:flex sm:items-center">
    <nav class="flex flex-col sm:flex-row">
        <button :class="props.ActivityType == 'park' ? 'text-blue-500 border-b-2 ' : ''" class=" text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none font-medium border-blue-500">
            <Link :href="route('activities')" :only="['activities','ActivityType']" :data="{ type: 'park'}" preserve-state>Ver Parques</Link>
        </button>
        <button :class="props.ActivityType == 'tour' ? 'text-blue-500 border-b-2 ' : ''" class=" text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none font-medium border-blue-500">
            <Link :href="route('activities')" :only="['activities','ActivityType']" :data="{ type: 'tour'}" preserve-state>Ver Tours</Link>
        </button>
    </nav>

    <div>
        <Link class="h-10 ml-4 text-sky-700 font-normal py-2 px-4 rounded transition duration-300 ease-in-out focus:outline-none focus:shadow-outline border border-sky-700 hover:bg-sky-500 hover:text-white" :href="route('activities')" :only="['activities']" :data="{ zone: 4}">Nacional</Link>
        <Link class="h-10 ml-4 text-sky-700 font-normal py-2 px-4 rounded transition duration-300 ease-in-out focus:outline-none focus:shadow-outline border border-sky-700 hover:bg-sky-500 hover:text-white" :href="route('activities')" :only="['activities']" :data="{ zone: 5}">Internacional</Link>
    </div>

</div>

</template>