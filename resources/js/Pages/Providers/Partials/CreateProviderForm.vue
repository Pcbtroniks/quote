<script setup>
import { useForm } from '@inertiajs/inertia-vue3';
import FormSection from '@/Components/FormSection.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';

const form = useForm({
    name: '',
    rfc: '',
});

const createTeam = () => {
    form.post(route('providers.store'), {
        errorBag: 'createInvoice',
        preserveScroll: true,
    });
    form.reset();
};
</script>

<template>
    <FormSection @submitted="createTeam">
        <template #title>
            Add Provider
        </template>

        <template #description>
            Create a new provider to start assigning it to invoices.
        </template>

        <template #form>
            <!-- Provider name -->
            <div class="col-span-6 sm:col-span-4">
                <InputLabel for="name" value="Provider name" />
                <TextInput
                    id="name"
                    v-model="form.name"
                    type="text"
                    class="block w-full mt-1"
                    autofocus
                />
                <InputError :message="form.errors.name" class="mt-2" />
            </div>
            <!-- Provider Folio -->
            <div class="col-span-6 sm:col-span-4">
                <InputLabel for="rfc" value="Provider rfc (opcional)" />
                <TextInput
                    id="rfc"
                    v-model="form.rfc"
                    type="text"
                    class="block w-full mt-1"
                    autofocus
                />
                <InputError :message="form.errors.rfc" class="mt-2" />
            </div>
        </template>

        <template #actions>
            <PrimaryButton :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                Create
            </PrimaryButton>
        </template>
    </FormSection>
</template>
