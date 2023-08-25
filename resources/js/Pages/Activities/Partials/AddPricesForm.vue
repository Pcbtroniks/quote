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
import { aliasToZone} from '@/Services/Utils.js';
import { onMounted, ref } from 'vue';
import { sortPricesByzone } from '@/Helpers/PriceAdapter';

const PricesObject = {
        adult_low_price: '0.00',
        kid_low_price: '0.00',
        adult_high_price: '0.00',
        kid_high_price: '0.00',
    };

const props = defineProps({
    activity: Object,
});

const mapPricesByTypeAndSeason = (Price) => {
    let prices = {};

    Price.forEach((price) => {
        if (!prices[price.type]) {
            prices[price.type] = {};
        }

        if (!prices[price.type][price.season]) {
            prices[price.type][price.season] = {};
        }

        prices[price.type][price.season] = price.amount;
    });

    return {
        adult_low_price: prices.adult.low,
        kid_low_price: prices.kid.low,
        adult_high_price: prices.adult.high,
        kid_high_price: prices.kid.high,
    };
}

const hasPriceByZone = (Zone) => {
    let sortedPrice = sortPricesByzone(props.activity.prices);
    
    if (sortedPrice && sortedPrice[Zone]?.length > 0) {
        return mapPricesByTypeAndSeason(sortedPrice[Zone]);
    } else {
        return PricesObject;
    }
}

const form = useForm({
    price_zone: 'cancun',
    cancun: {...hasPriceByZone('cancun')},
    rm: {...hasPriceByZone('rm')},
    pdc: {...hasPriceByZone('pdc')},
    model:[]
});

const setPricesRequest = () => {
    form.post(route('activity.price.upsert'), {
        preserveScroll: true,
        onSuccess: (result) => {
            console.log(result);
        },
        onError: (error) => {
            console.log(error);
            ErrorAlert('Error inesperado', 'Verifique los datos ingresados');
        },
    });
};

const setPrice = (amount, activity_id = null, zone_id, season, type) => {

    // Normalize zone_id
    const zone = aliasToZone(zone_id);

    // Checking if price already exists
    const priceExists = form.model.find((price) => {
        return price.zone_id === zone && price.season === season && price.type === type;
    });

    // If price exists, update it
    if (priceExists) {
        priceExists.amount = amount;
        return;
    } else{

        // Preparing price object
        const price = {
            activity_id: activity_id,
            zone_id: zone,
            season: season,
            type: type,
            amount: amount,
        };

        // Pushing price to model
        form.model.push(price);
        return;
    }

};

</script>

<template>
    <FormSection @submitted="setPricesRequest">
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
                            name="price_zone"
                            v-model="form.price_zone"
                            value="cancun"
                            id="cancun"
                        />
                    </div>
                    <div class="flex items-center pl-4">
                        <InputRadio 
                        label="Riviera Maya"
                            name="price_zone"
                            v-model="form.price_zone"
                            value="rm"
                            id="rm"
                        />
                    </div>
                    <div class="flex items-center pl-4">
                        <InputRadio 
                        label="Playa del Carmen"
                            name="price_zone"
                            v-model="form.price_zone"
                            value="pdc"
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
                    @change="setPrice(form[form.price_zone].adult_low_price, activity.id, form.price_zone, 'low', 'adult')"
                    v-model="form[form.price_zone].adult_low_price"
                    pattern="[0-9]+([,\.][0-9]+)?"
                    type="text"
                    class="mt-1 block w-full"
                />
                <InputError :message="form.errors.adult_low_price" class="mt-2" />
            </div>

            <div class="col-span-6 sm:col-span-4">
                <InputLabel for="kid_low_price" value="Precio menor ( temporada baja )" />
                <TextInput
                    @change="setPrice(form[form.price_zone].kid_low_price, activity.id, form.price_zone, 'low', 'kid')"
                    id="kid_low_price"
                    v-model="form[form.price_zone].kid_low_price"
                    type="text"
                    class="mt-1 block w-full"
                />
                <InputError :message="form.errors.kid_low_price" class="mt-2" />
            </div>

            <div class="col-span-6 sm:col-span-4">
                <InputLabel for="adult_high_price" value="Precio adulto ( temporada alta )" />
                <TextInput
                    @change="setPrice(form[form.price_zone].adult_high_price, activity.id, form.price_zone, 'high', 'adult')"
                    id="adult_high_price"
                    v-model="form[form.price_zone].adult_high_price"
                    type="text"
                    class="mt-1 block w-full"
                />
                <InputError :message="form.errors.adult_high_price" class="mt-2" />
            </div>

            <div class="col-span-6 sm:col-span-4">
                <InputLabel for="kid_high_price" value="Precio menor ( temporada alta )" />
                <TextInput
                    @change="setPrice(form[form.price_zone].kid_high_price, activity.id, form.price_zone, 'high', 'kid')"
                    id="kid_high_price"
                    v-model="form[form.price_zone].kid_high_price"
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
