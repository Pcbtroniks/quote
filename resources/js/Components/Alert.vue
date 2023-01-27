<script setup>
defineProps({
	msg: String
})
</script>

<template>
    <div class="flex flex-col p-2 bg-white shadow-md hover:shodow-lg rounded-2xl">
		<div class="flex items-center justify-between">
			<div class="flex items-center">
				<svg xmlns="http://www.w3.org/2000/svg"
					class="w-16 h-16 rounded-2xl p-3 border border-blue-100 text-white bg-sky-300" fill="none"
					viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
						d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
				</svg>
				<div class="flex flex-col ml-3">
					<p class="text-sm text-gray-600 font-bold leading-none mt-1" >
						{{ msg }}
					</p>
				</div>
			</div>
		</div>
	</div>
</template>