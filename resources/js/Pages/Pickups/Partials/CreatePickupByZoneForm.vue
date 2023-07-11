<script setup>

import Button from "@/Components/Button.vue";
import { zoneIdToZoneName } from "@/Services/Utils.js";
import axios from "axios";

const props = defineProps({
    zone: Number | String,
    activity: Number | String,
    hotels: Array,
})

const CreatePickupByZoneRequest = () => {

    Swal.fire({
        title: 'Registrar Pickup',
        text: 'Se agregara un pickup para la zona: '+ zoneIdToZoneName(props.zone),
        input: 'text',
        inputAttributes: {
            autocapitalize: 'off',
            placeholder: 'hh:mm o h:mm'
        },
        showCancelButton: true,
        confirmButtonText: 'Guardar',
        cancelButtonText: 'Cancelar',
        confirmButtonColor: '#3085d6',
        showLoaderOnConfirm: true,
        inputValidator: (value) => {
            if (!value) {
                return 'Por favor ingrese un nombre de hotel valido'
            }
        },
        preConfirm: (inputValue) => {

            return axios.post(route('hotels.json.store'), {
                name: inputValue,
                zone_id: props.zone
            })
            .then(response => {
                return response;
            })
            .catch(error => {
                Swal.showValidationMessage(
                    `Ocurrio un error : ${error} por favor intente de nuevo`
                )
            })

        },
        allowOutsideClick: () => !Swal.isLoading()
        })
        .then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                title: `El hotel "${result.value.data.name}" se agrego exitosamente.`,
                })
            }
            return console.log(result);
        })
}

</script>

<template>
    <div>

        <Button @click="CreatePickupByZoneRequest" class="mt-4" msg="Agregar Pickup"/>

    </div>
</template>