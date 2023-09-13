<script setup>
import { useForm, usePage } from '@inertiajs/inertia-vue3';
import FormSection from '@/Components/FormSection.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import { onMounted } from 'vue';

const form = useForm({
    name: '',
    address: null,
    team_id: null,
});

const createTeam = () => {
    form.post(route('branches.store'), {
        preserveScroll: true,
    });
};

onMounted(() => {
    form.team_id = usePage().props.value.user.current_team_id;
});
</script>

<template>
    <FormSection @submitted="createTeam">
        <template #title>
            Detalles de la sucursal
        </template>

        <template #description>
            Las sucursales son una forma de agrupar a los integrantes,
            agregue una nueva sucursal para los colaborades de su agencia.
        </template>

        <template #form>
            <div class="col-span-6">
                <InputLabel value="Administrador" />

                <div class="flex items-center mt-2">
                    <img class="object-cover w-12 h-12 rounded-full" :src="$page.props.user.profile_photo_url" :alt="$page.props.user.name">

                    <div class="ml-4 leading-tight">
                        <div>{{ $page.props.user.name }}</div>
                        <div class="text-sm text-gray-700">
                            {{ $page.props.user.email }}
                        </div>
                    </div>
                </div>
            </div>

            <!-- Branch Name -->
            <div class="col-span-6 sm:col-span-4">
                <InputLabel for="name" value="Nombre de sucursal" />
                <TextInput
                    id="name"
                    v-model="form.name"
                    type="text"
                    class="block w-full mt-1"
                    autofocus
                />
                <InputError :message="form.errors.name" class="mt-2" />
            </div>

            <!-- Branch Address -->
            <div class="col-span-6 sm:col-span-4">
                <InputLabel for="address" value="Direccion" />
                <TextInput
                    id="address"
                    v-model="form.address"
                    type="text"
                    class="block w-full mt-1"
                />
                <InputError :message="form.errors.address" class="mt-2" />
            </div>

        </template>

        <template #actions>
            <PrimaryButton :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                Crear
            </PrimaryButton>
        </template>
    </FormSection>
</template>
