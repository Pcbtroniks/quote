<script setup>
import { ref } from 'vue';


const slider = ref(null);

setTimeout(function moveSlide() {

    const max = slider.value.scrollWidth - slider.value.clientWidth;
    const left = slider.value.clientWidth;


    if (max === slider.value.scrollLeft) {
        slider.value.scrollTo({left: 0, behavior: 'smooth'})
    } else {
        slider.value.scrollBy({left, behavior: 'smooth'})
    }

    setTimeout(moveSlide, 3000)
}, 2000)

</script>

<template>
    <div class="h-96 w-full overflow-hidden flex flex-nowrap text-center" ref="slider">
        <div class="bg-blue-600 text-white space-y-4 flex-none w-full flex flex-col items-center justify-center">
            <h2 class="text-4xl max-w-md">Your Big Ideia</h2>
            <p class="max-w-md">It's fast, flexible, and reliable — with zero-runtime.</p>
        </div>
        <div class="bg-pink-400 text-white space-y-4 flex-none w-full flex flex-col items-center justify-center">
            <h2 class="text-4xl max-w-md">Tailwind CSS works by scanning all of your HTML</h2>
            <p class="max-w-md">It's fast, flexible, and reliable — with zero-runtime.</p>
        </div>
        <div class="bg-teal-500 text-white space-y-4 flex-none w-full flex flex-col items-center justify-center">
            <h2 class="text-4xl max-w-md">React, Vue, and HTML</h2>
            <p class="max-w-md">Accessible, interactive examples for React and Vue powered by Headless UI, plus vanilla HTML if you’d rather write any necessary JS yourself.</p>
        </div>
    </div>
</template>