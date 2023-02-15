<script setup>

import axios from 'axios';
import Button from '@/Components/Button.vue';
import { ref } from 'vue';

const props = defineProps({
    activities: {
        type: Array,
    },
});

const GetDescription = ref([]);

const calculateActivityCost = () => {
    props.activities.forEach(({activity, adults, minors, season, zone, type}) => {
        console.log({activity, adults, minors, season, zone, type});
        if(props.activities.length == 2) {
            type = 'pack_double';
        }else if(props.activities.length >= 3) {
            type = 'pack_multiple';
        }
        axios.get(route('quoter.calculate'), {
            params: {
                activity,
                adults,
                minors,
                season,
                zone,
                type,
            },
        }).then((response) => {
            console.log(response);
            GetDescription.value.push(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
    });

}

</script>

<template>
    <div>

        <Button @click="calculateActivityCost" :msg="'Calculate Costs'" :class="'btn btn-primary'"/>
        <div>
            <ol v-for="desc in GetDescription">
                <li class="my-2">- <p>{{desc.description}}</p></li>
            </ol>
        </div>
    </div>
</template>