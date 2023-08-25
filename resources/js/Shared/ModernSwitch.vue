<script setup>
import { Inertia } from '@inertiajs/inertia';
import { ref } from 'vue';

const props = defineProps({
    option: {
        type: String,
        default: 'opt-1'
    },
});

const toggleActive = ref(props.option);

const toggleIndicator = (opt) => {
    
    if(opt == 1){

        toggleActive.value = 'opt-1';
        Inertia.visit(route('pickups.by.zone'));

    }else if(opt == 2){

        toggleActive.value = 'opt-2';
        Inertia.visit(route('pickups.by.hotel'));

    }
    
}

</script>

<template>
    <div class="tab-container">
        <button class="tab tab--1" @click="toggleIndicator(1)">Hoteles</button>
        <button class="tab tab--2" @click="toggleIndicator(2)">Parques</button>
        <div :class="toggleActive" class="indicator"></div>
    </div>
</template>

<style>

.tab-container {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    position: relative;
    padding: 12px 2px;
    background-color: #ebebec;
    border-radius: 9px;
    margin: 10px 0px 0px 0px;
}

.indicator {
    content: "";
    width: 50%;
    /* height: 28px; */
    height: 2.9rem;
    background: #FFFFFF;
    position: absolute;
    top: 2px;
    left: 2px;
    z-index: 9;
    border: 0.5px solid rgba(0, 0, 0, 0.04);
    box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.12), 0px 3px 1px rgba(0, 0, 0, 0.04);
    border-radius: 7px;
    transition: all 0.2s ease-out;
}

.tab {
    width: 50%;
    height: 28px;
    position: relative;
    z-index: 99;
    background-color: transparent;
    border: 0;
    outline: none;
    flex: none;
    align-self: stretch;
    flex-grow: 1;
    cursor: pointer;
    font-weight: 500;
}

.opt-1 {
    left: 2px;
}

.opt-2 {
    left: calc(50% - 2px);
}
</style>