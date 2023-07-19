<script setup>
import { useForm, usePage } from '@inertiajs/inertia-vue3';
import ActionMessage from '@/Components/ActionMessage.vue';
import FormSection from '@/Components/FormSection.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Shared/InputNumber.vue';
import { ErrorAlert } from '@/Services/Alerts.js';

const props = defineProps({
    activity: Object,
});

const form = useForm({
    entrance: props.activity.discounts?.entrance ?? 0,
    pack: props.activity.discounts?.pack ?? 0,
    tour: props.activity.discounts?.tour ?? 0,
    pack_double: props.activity.discounts?.pack_double ?? 0,
    pack_multiple: props.activity.discounts?.pack_multiple ?? 0,
    activity_id: props.activity.id,
    team_id: usePage().props.value.user.current_team_id ?? null,
});

const setCostsRequest = () => {
    // return console.log(form);
    form.post(route('activity.costs.upsert'), {
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

</script>

<template>
    <FormSection @submitted="setCostsRequest">
        <template #title>
            Costos - {{ $page.props.user.current_team.name }}
        </template>

        <template #description>
            Agregue los porcentajes de descuento para la actividad.
            <br>
            <span class="text-xs text-gray-400">Los porcentajes se aplican sobre el precio de la actividad.</span>
        </template>

        <template #form>

            <template v-if="props.activity.type == 'entrance'">
                <div class="col-span-6 sm:col-span-4">
                    <InputLabel for="entrance" value="Entrada ( Parque )" />
                    <TextInput
                        id="entrance"
                        v-model="form.entrance"
                        type="text"
                        class="mt-1 block w-full"
                    />
                    <InputError :message="form.errors.entrance" class="mt-2" />
                </div>
            </template>


            <template v-if="props.activity.type == 'tour'">
                <div class="col-span-6 sm:col-span-4">
                    <InputLabel for="tour" value="Tour ( Solo )" />
                    <TextInput
                        id="tour"
                        v-model="form.tour"
                        type="text"
                        class="mt-1 block w-full"
                    />
                    <InputError :message="form.errors.tour" class="mt-2" />
                </div>

                <div class="col-span-6 sm:col-span-4">
                    <InputLabel for="tour_pack" value="Tour ( Paquete )" />
                    <TextInput
                        id="tour_pack"
                        v-model="form.pack"
                        type="text"
                        class="mt-1 block w-full"
                    />
                    <InputError :message="form.errors.pack" class="mt-2" />
                </div>

                <div class="col-span-6 sm:col-span-4">
                    <InputLabel for="pack_double" value="Paquete #2 ( Doble )" />
                    <TextInput
                        id="pack_double"
                        v-model="form.pack_double"
                        type="text"
                        class="mt-1 block w-full"
                    />
                    <InputError :message="form.errors.pack_double" class="mt-2" />
                </div>

                <div class="col-span-6 sm:col-span-4">
                    <InputLabel for="pack_multiple" value="Paquete #3 ( Multiple )" />
                    <TextInput
                        id="pack_multiple"
                        v-model="form.pack_multiple"
                        type="text"
                        class="mt-1 block w-full"
                    />
                    <InputError :message="form.errors.pack_multiple" class="mt-2" />
                </div>
            </template>

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
