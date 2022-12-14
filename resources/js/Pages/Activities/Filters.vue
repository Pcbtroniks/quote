<script setup>
import { Link } from '@inertiajs/inertia-vue3'

const props = defineProps({
    filters: Object
})

const useData = function({ type, zone, page }) {
    return{ type, zone , page: page ?? props.filters.page}
}
</script>


<template>

<div class="sm:flex sm:items-center flex-wrap justify-center xl:justify-start gap-4">
    <nav class="flex flex-col sm:flex-row">
        <button :class="props.filters.type == 'park' ? 'text-blue-500 border-b-2 ' : ''" class=" text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none font-medium border-blue-500">
            <Link :href="route('activities')" :only="['activities', 'filters']" :data="useData({ type: 'park', zone: 4})" preserve-state>Ver Parques</Link>
        </button>
        <button :class="props.filters.type == 'tour' ? 'text-blue-500 border-b-2 ' : ''" class=" text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none font-medium border-blue-500">
            <Link :href="route('activities')" :only="['activities', 'filters']" :data="useData({ type: 'tour', zone: 1 })" preserve-state>Ver Tours</Link>
        </button>
    </nav>

    <div>
        <!--  -->
        <div
            class="grid w-min-content grid-cols-2 space-x-2 rounded-xl bg-gray-200 p-2 mt-2"
            v-if="props.filters.type == 'park'"
        >
            <div>
                <input type="radio" name="option" id="1" class="peer hidden" :checked="props.filters.zone == 4" />
                <label
                    for="1"
                    class="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white"
                    >
                    <Link
                        :href="route('activities')" 
                        :only="['activities', 'filters']" 
                        :data="useData({ type: filters.type, zone: 4 })">Nacional</Link>
                    </label
                >
            </div>

            <div>
                <input type="radio" name="option" id="2" class="peer hidden" :checked="props.filters.zone == 5"/>
                <label
                    for="2"
                    class="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white"
                    >
                    <Link
                        :href="route('activities')" 
                        :only="['activities','filters']" 
                        :data="useData({ type: filters.type, zone: 5 })">Internacional</Link>
                    </label
                >
            </div>
        </div>

        <div
            class="grid w-min-content grid-cols-6 space-x-2 rounded-xl bg-gray-200 p-2 mt-2"
            v-else
        >
            <div class="col-span-3 sm:col-span-2">
                <input type="radio" name="option" id="1" class="peer hidden" :checked="props.filters.zone == 1" />
                <label
                    for="1"
                    class="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white"
                    >
                    <Link
                        :href="route('activities')" 
                        :only="['activities', 'filters']" 
                        :data="useData({ type: filters.type, zone: 1 })">Cancun</Link>
                    </label
                >
            </div>

            <div class="col-span-3 sm:col-span-2">
                <input type="radio" name="option" id="2" class="peer hidden" :checked="props.filters.zone == 2"/>
                <label
                    for="2"
                    class="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white"
                    >
                    <Link
                        :href="route('activities')" 
                        :only="['activities','filters']" 
                        :data="useData({ type: filters.type, zone: 2 })">Riviera Maya</Link>
                    </label
                >
            </div>

            <div class="col-span-3 sm:col-span-2">
                <input type="radio" name="option" id="3" class="peer hidden" :checked="props.filters.zone == 3"/>
                <label
                    for="3"
                    class="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white"
                    >
                    <Link
                        :href="route('activities')" 
                        :only="['activities','filters']" 
                        :data="useData({ type: filters.type, zone: 3 })">PlayaDelCarmen</Link>
                    </label
                >
            </div>
        </div>
        <!--  -->
    </div>

</div>

</template>