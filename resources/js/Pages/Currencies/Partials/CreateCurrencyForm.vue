<script setup>
import { useForm } from '@inertiajs/inertia-vue3';
import ActionMessage from '@/Components/ActionMessage.vue';
import FormSection from '@/Components/FormSection.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import { ErrorAlert } from '@/Services/Alerts.js';
import { Inertia } from '@inertiajs/inertia';

const props = defineProps({
    currency: Object,
});

const form = useForm({
    name: props.currency?.name || null,
    conversion_rate: props.currency?.conversion_rate || null,
    symbol: props.currency?.symbol || null,
    code: props.currency?.code || null,
});

const submit = () => {
    form.post(route('localisation.currencies.store'), {
        preserveScroll: true,
        onSuccess: () => {
            Inertia.visit(route('localisation.currencies.index'));
        },
        onError: (errors) => {
            console.log(errors);
            const text = Object.values(errors).flat().join(' - ');
            ErrorAlert('Error al agregar la divisa', text);
        },
    });
};
</script>

<template>
    <FormSection @submitted="submit">
        <template #title>
            Divisa
        </template>

        <template #description>
            Las monedas o divisas son utilizadas para el manejo de precios en la plataforma.
            Su funcion es la de poder manejar precios en diferentes monedas.
            <span v-if="props.currency?.id">
                Puedes <a :href="route('activity.search')" class="text-blue-500">ver todas las divisas</a> o
            </span>
            <span v-else>
                <a :href="route('activity.search')" class="text-blue-500">agregar una nueva divisa</a>
            </span>
        </template>

        <template #form>

            <div class="col-span-6 sm:col-span-4">
                <InputLabel for="adult_low_price" value="Nombre" />
                <TextInput
                    id="name"
                    v-model="form.name"
                    placeholder="Nombre de la moneda"
                    type="text"
                    class="mt-1 block w-full"
                    spellcheck="false"
                />
                <InputError :message="form.errors.adult_low_price" class="mt-2" />
            </div>
            <div class="col-span-6 sm:col-span-4">
                <InputLabel for="adult_low_price" value="Tasa de conversión" />
                <TextInput
                    id="conversion_rate"
                    v-model="form.conversion_rate"
                    pattern="[0-9]+([,\.][0-9]+)?"
                    type="text"
                    placeholder="0.01, 1.16..."
                    class="mt-1 block w-full"
                />
                <InputError :message="form.errors.adult_low_price" class="mt-2" />
            </div>
            <div class="col-span-6 sm:col-span-4">
                <InputLabel for="adult_low_price" value="Codigo de moneda" />
                <TextInput
                    id="code"
                    v-model="form.code"
                    placeholder="MXN, USD..."
                    type="text"
                    class="mt-1 block w-full"
                    spellcheck="false"
                />
                <InputError :message="form.errors.adult_low_price" class="mt-2" />
            </div>
            <div class="col-span-6 sm:col-span-4">
                <InputLabel for="adult_low_price" value="Simbolo" />
                <TextInput
                    id="symbol"
                    v-model="form.symbol"
                    placeholder="$, €..."
                    type="text"
                    class="mt-1 block w-full"
                    spellcheck="false"
                />
                <InputError :message="form.errors.adult_low_price" class="mt-2" />
            </div>

        </template>

        <template #actions>
            <ActionMessage :on="form.recentlySuccessful" class="mr-3">
                Guardado.
            </ActionMessage>

            <PrimaryButton :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                Guardar
            </PrimaryButton>
        </template>
    </FormSection>
</template>
