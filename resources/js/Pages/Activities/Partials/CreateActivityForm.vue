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
import { SuccessAlert } from '@/Services/Alerts';

const props = defineProps({
    activity: Object,
});

const form = useForm({
    activity_id: props.activity.id ?? '',
    activity_type: props.activity.type ?? '',
    activity_name: props.activity.name ?? '',
});

const updatePassword = () => {
    const useRoute = form.activity_id
                    ? route('activity.update', {activity_id: form.activity_id})
                    : route('activity.store');
    form.post( useRoute, {
        preserveScroll: true,
        onSuccess: () => {
            SuccessAlert('Operación exitosa', 'La actividad se ha guardado correctamente');
        },
        onError: () => {
            ErrorAlert('Error al crear la actividad	', 'Verifique los datos ingresados');
        },
    });
};

</script>

<template>
    <FormSection @submitted="updatePassword">
        <template #title>
            Información de la actividad	
        </template>

        <template #description>
            Seleccione un nombre y el tipo de actividad, puede ser una Entrada al parque o Tour. o visite la sección de <a :href="route('activity.search')" class="text-blue-500">Busqueda</a>
        </template>

        <template #form>
            <div class="col-span-6 sm:col-span-4">

                <InputLabel for="activity_type" value="Tipo de actividad" />
                <div class="flex gap-4">
                    <div class="flex items-center pl-4">
                        <InputRadio 
                        label="Entrada"
                            name="activity_type"
                            v-model="form.activity_type"
                            value="park"
                            id="activity_type_entry"
                        />
                    </div>
                    <div class="flex items-center pl-4">
                        <InputRadio 
                        label="Tour"
                            name="activity_type"
                            v-model="form.activity_type"
                            value="tour"
                            id="activity_type_tour"
                        />
                    </div>
                </div>
                
                <InputError :message="form.errors.activity_type" class="mt-2" />
            </div>
            <div class="col-span-6 sm:col-span-4">
                <InputLabel for="activity_name" value="Nombre de la actividad" />
                <TextInput
                    aria-autocomplete="none"
                    autocomplete="off"
                    id="activity_name"
                    v-model="form.activity_name"
                    type="text"
                    class="mt-1 block w-full"
                />
                <InputError :message="form.errors.activity_name" class="mt-2" />
            </div>

        </template>

        <template #actions>
            <ActionMessage :on="form.recentlySuccessful" class="mr-3">
                Actividad guardada.
            </ActionMessage>

            <PrimaryButton :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                Guardar
            </PrimaryButton>
        </template>
    </FormSection>
</template>
