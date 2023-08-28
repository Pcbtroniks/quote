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

const parseProps = () => {
    if(parseQuoteType(props.activities.tipoReservacion) == 'entrance') {
        const entrance = {
            activity: props.activities.actividad,
            adults: props.activities.adultos,
            minors: props.activities.menores,
            season: props.activities.season,
            zone: props.activities.zona,
            type: props.activities.tipoReservacion,
        };

        getQuotes.value = [entrance];
        return null;
    }

    getQuotes.value = [...getQuotes.value, props.activityList];
    return null;
}

const calculateActivityCost = () => {
    parseProps();
    console.clear();
    console.log(props.activities);
    console.log(props.activityList);
    return console.log(getQuotes.value);
    getQuotes.forEach(({activity, adults, minors, season, zone, type}) => {
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
            console.clear();
            return console.log(response);
            GetDescription.value.push(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
    });

}

//Helpers

//Modal 
const ShowProFormModal = ref(false);
const CurrentProformQuote = ref(null);

function showProFormModal(quote) {
  CurrentProformQuote.value = quote;
  // ShowProFormModal.value = true;
  calculateActivityCost();
}

console.log(props.activities);
</script>

<template>
<div>
    <DialogModal :show="ShowProFormModal" @close="ShowProFormModal = false">
    <template #title>
        <p class="font-bold text-gray-700">
            Número de solicitud: <span class="text-yellow-600">{{ CurrentProformQuote?.tmpFolio }}</span>
        </p>
        <p class="text-gray-700">
            Fecha: {{ CurrentProformQuote?.listed_activities[0]?.date_string_formatted ?? 'n/d'}}
        </p>
    </template>

    <template #content v-if="CurrentProformQuote">
        <div class="text-gray-700">
            <div>
                <p>
                    Nombre: {{ CurrentProformQuote.holder_name }}
                </p>
                <p>
                    Adultos: {{ CurrentProformQuote.adults }} - Menor: {{ CurrentProformQuote.minors }} - Infante: {{ CurrentProformQuote.infants }}
                </p>
            </div>

            <div class="h-8"></div>
            
            <div>
                <p class="font-bold text-xl text-gray-700">
                    Actividades
                </p>
                <div class="h-4"></div>
                <ul>
                    <li v-for="activity in CurrentProformQuote.listed_activities">{{ `${activity.activity.name} ${(activity.pickup_time != null && activity.pickup_time?.slice(0,5) != '00:00') ? activity.pickup_time.slice(0,5) : ''} ${activity.hotel?.name ?? ''}` }} </li>
                </ul>
            </div>

            <div class="h-8"></div>

            <div>
                <p class="font-bold text-xl text-gray-700">
                    Importes totales
                </p>
                <div class="h-4"></div>
                <p>Precio publico: ${{ CurrentProformQuote.public_price }}</p>
                <p>Precio a pagar: ${{ CurrentProformQuote.cost_amount }}</p>
                <div class="h-8"></div>
                <p class="font-bold text-xl text-gray-700">
                    Comision: ${{ (CurrentProformQuote.public_price - CurrentProformQuote.cost_amount).toFixed(2) ?? '0' }}
                </p>
            </div>

        </div>
    </template>

    <template #footer>
        <a :href="route('export.pdf.proform.quote', {'quote': CurrentProformQuote.id})">
            <SecondaryButton @click.native="ShowProFormModal = false">
                Imprimir PDF
            </SecondaryButton>
        </a>

        <PrimaryButton class="ml-2" @click.native="ShowProFormModal = false">
            Aceptar
        </PrimaryButton>
    </template>
    </DialogModal>

    <Button @click="showProFormModal" :msg="'Calcular costos'" :class="'btn btn-primary'"/>
</div>

</template>  