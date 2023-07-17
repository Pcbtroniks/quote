<script setup>
import { useForm } from '@inertiajs/inertia-vue3';
import ActionMessage from '@/Components/ActionMessage.vue';
import FormSection from '@/Components/FormSection.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import InputRadio from '@/Shared/InputRadio.vue';
import { ErrorAlert } from '@/Services/Alerts.js';

const props = defineProps({
    activity: Object,
});

const sortPricesByzone = (prices) => {
    if(!prices) return console.log('no prices');
    
    return prices.map((price) => {
        if (price.zone_id == 1) {
            return {
                ...price,
                price_zone: 'Cancun',
            };
        } else if (price.zone_id == 2) {
            return {
                ...price,
                price_zone: 'Riviera Maya',
            };
        } else if (price.zone_id == 3) {
            return {
                ...price,
                price_zone: 'Playa del Carmen',
            };
        }
    });
};

console.log(sortPricesByzone(props.activity.prices));

const form = useForm({
    price_zone: '',
    adult_low_price: '',
    kid_low_price: '',
    adult_high_price: '',
    kid_high_price: '',
});

const updatePassword = () => {
    return console.log(form);
    form.post(route('activities.store'), {
        preserveScroll: true,
        onSuccess: () => form.reset(),
        onError: () => {
            ErrorAlert('Error al crear la actividad	', 'Verifique los datos ingresados');
        },
    });
};

</script>

<template>
    <FormSection @submitted="updatePassword">
        <template #title>
            Agregar precios
        </template>

        <template #description>
            Agregue los precios por temporada Alta y Baja para Adultos y Menores para la actividad.
        </template>

        <template #form>

            <div class="col-span-6 sm:col-span-4">

                <InputLabel for="price_zone" value="Zona" />
                <div class="flex gap-4">
                    <div class="flex items-center pl-4">
                        <InputRadio 
                        label="Cancun"
                            name="cancun"
                            v-model="form.price_zone"
                            value="1"
                            id="cancun"
                        />
                    </div>
                    <div class="flex items-center pl-4">
                        <InputRadio 
                        label="Riviera Maya"
                            name="rm"
                            v-model="form.price_zone"
                            value="2"
                            id="rm"
                        />
                    </div>
                    <div class="flex items-center pl-4">
                        <InputRadio 
                        label="Playa del Carmen"
                            name="pdc"
                            v-model="form.price_zone"
                            value="3"
                            id="pdc"
                        />
                    </div>
                </div>
                
                <InputError :message="form.errors.activity_type" class="mt-2" />
            </div>

            <div class="col-span-6 sm:col-span-4">
                <InputLabel for="adult_low_price" value="Precio adulto ( temporada baja )" />
                <TextInput
                    id="adult_low_price"
                    v-model="form.adult_low_price"
                    type="text"
                    class="mt-1 block w-full"
                />
                <InputError :message="form.errors.adult_low_price" class="mt-2" />
            </div>

            <div class="col-span-6 sm:col-span-4">
                <InputLabel for="kid_low_price" value="Precio menor ( temporada baja )" />
                <TextInput
                    id="kid_low_price"
                    v-model="form.kid_low_price"
                    type="text"
                    class="mt-1 block w-full"
                />
                <InputError :message="form.errors.kid_low_price" class="mt-2" />
            </div>

            <div class="col-span-6 sm:col-span-4">
                <InputLabel for="adult_high_price" value="Precio adulto ( temporada alta )" />
                <TextInput
                    id="adult_high_price"
                    v-model="form.adult_high_price"
                    type="text"
                    class="mt-1 block w-full"
                />
                <InputError :message="form.errors.adult_high_price" class="mt-2" />
            </div>

            <div class="col-span-6 sm:col-span-4">
                <InputLabel for="kid_high_price" value="Precio menor ( temporada alta )" />
                <TextInput
                    id="kid_high_price"
                    v-model="form.kid_high_price"
                    type="text"
                    class="mt-1 block w-full"
                />
                <InputError :message="form.errors.kid_high_price" class="mt-2" />
            </div>

        </template>

        <template #actions>
            <ActionMessage :on="form.recentlySuccessful" class="mr-3">
                Precios guardados.
            </ActionMessage>

            <PrimaryButton :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                Guardar
            </PrimaryButton>
        </template>
    </FormSection>
</template>
