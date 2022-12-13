<script setup>
const props = defineProps({
    title: String
})
</script>

<template>
<div class="dropdown inline-block relative">
	<button type="button" class="bg-sky-500 text-white font-semibold py-2 px-4 rounded inline-flex items-center">
		<span>{{props.title ?? 'Dropdown'}}</span>
	</button>
	<ul class="dropdown-content absolute hidden text-gray-700 pt-1">
		<li><a class="rounded-t bg-sky-200 hover:bg-sky-400 py-2 px-4 block whitespace-no-wrap" href="#">Option 1</a></li>
		<li><a class="bg-sky-200 hover:bg-sky-400 py-2 px-4 block whitespace-no-wrap" href="#">Option 2</a></li>
      	<li class="dropdown">
          <a class="bg-sky-200 hover:bg-sky-400 py-2 px-4 block whitespace-no-wrap" href="#">Option 3 ?</a>
          	<ul class="dropdown-content absolute hidden text-gray-700 pl-5 ml-24 -mt-10">
          		<li><a class="bg-sky-200 hover:bg-sky-400 py-2 px-4 block whitespace-no-wrap" href="#">Option 3-1</a></li>
              	<li><a class="bg-sky-200 hover:bg-sky-400 py-2 px-4 block whitespace-no-wrap" href="#">Option 3-2</a></li>
            </ul>
      	</li>
		<li><a class="rounded-b bg-sky-200 hover:bg-sky-400 py-2 px-4 block whitespace-no-wrap" href="#">Option 4</a></li>
	</ul>
</div>
</template>

<style>
.dropdown:hover > .dropdown-content {
	display: block;
}
</style>