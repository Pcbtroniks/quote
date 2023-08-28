<script setup>
import axios from 'axios';
import Button from '@/Components/Button.vue';
import DialogModal from '@/Components/DialogModal.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import SecondaryButton from '@/Components/SecondaryButton.vue';
import { ref } from 'vue';
import { parseQuoteType } from './Providers/Helpers';

const props = defineProps({
    activities: {
        type: Object,
    },
    activityList: {
        type: Array,
    },
});


const getQuotes = ref([]);
const useModal = ref({
    show: false,
    totalPublicPrice: 0,
    totalAgencyCost: 0,
    quotes: []
})

const parseProps = () => {
    if(parseQuoteType(props.activities.tipoReservacion) == 'entrance') {
        const entrance = {
            activity: props.activities.actividad,
            adults: props.activities.adultos,
            minors: props.activities.menores,
            season: props.activities.season,
            zone: props.activities.nacionales ? 4 : 5,
            type: 'entrance',
        };

        getQuotes.value = [entrance];
        return null;
    }

    getQuotes.value = [...props.activityList];
    return null;
}

const calculateActivityCost = () => {
    
    parseProps();

    getQuotes.value.forEach(({activity, adults, minors, season, zone, type}) => {

        if(getQuotes.value.length == 2) {
            type = 'pack_double';
        }else if(getQuotes.value.length >= 3) {
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
            useModal.value.quotes = [...useModal.value.quotes, response.data]
            useModal.value.totalPublicPrice += response.data.summary.totalPublicPrice;
            useModal.value.totalAgencyCost += response.data.summary.totalAgencyCost;
            return true;
        })
        .catch((error) => {
            console.log(error);
        });
    });

    console.clear();
    console.log(props.activities);
    console.log(useModal.value);
    useModal.value.show = true;
}

//Helpers

function showProFormModal() {
  calculateActivityCost();
}

</script>

<template>
<div>
    <DialogModal :show="useModal.show" @close="useModal.show = false">
    <template #title>
        <p class="font-bold text-gray-700">
            Resumen de la cotización actual
        </p>
        <p class="text-gray-700">
            Fecha: {{ new Date().toLocaleDateString() }}
        </p>
    </template>

    <template #content v-if="useModal.quotes">
        <div class="text-gray-700">
            <div>
                <p>
                    Nombre: {{ props.activities.nombreTitular ?? 'Ingrese el nomber por favor.' }}
                </p>
                <p>
                    Adultos: {{ props.activities.adultos }} - Menor: {{ props.activities.menores }} - Infante: {{ props.activities.infantes }}
                </p>
            </div>

            <div class="h-8"></div>
            
            <div v-if="useModal.quotes">
                <p class="font-bold text-xl text-gray-700">
                    Actividades
                </p>
                <div class="h-4"></div>
                <ul>
                    <li v-for="activity in useModal.quotes">{{ activity.description }} </li>
                </ul>
            </div>

            <div class="h-8"></div>

            <div>
                <p class="font-bold text-xl text-gray-700">
                    Importes totales
                </p>
                <div class="h-4"></div>
                <p>Precio publico: ${{ useModal.totalPublicPrice }}</p>
                <p>Precio a pagar: ${{ useModal.totalAgencyCost }}</p>
                <div class="h-8"></div>
                <p class="font-bold text-xl text-gray-700">
                    Comision: ${{ (useModal.totalPublicPrice - useModal.totalAgencyCost).toFixed(2) ?? '0' }}
                </p>
            </div>

        </div>
    </template>

    <template #footer>
        <!-- <a :href="route('export.pdf.proform.quote', {'quote': CurrentProformQuote.id})">
            <SecondaryButton @click.native="ShowProFormModal = false">
                Imprimir PDF
            </SecondaryButton>
        </a> -->

        <PrimaryButton class="ml-2" @click.native="useModal.show = false">
            Aceptar
        </PrimaryButton>
    </template>
    </DialogModal>

    <Button @click="showProFormModal" :msg="'Calcular costos'" :class="'btn btn-primary'"/>
</div>

</template>  