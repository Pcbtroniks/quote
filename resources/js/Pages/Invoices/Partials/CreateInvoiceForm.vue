<script setup>
import { useForm } from '@inertiajs/inertia-vue3';
import FormSection from '@/Components/FormSection.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';

const props = defineProps({
    providers: Array,
});

const form = useForm({
    folio: null,
    amount: null,
    provider_id: null
});

const createTeam = () => {
    form.post(route('invoices.store'), {
        errorBag: 'createInvoice',
        preserveScroll: true,
    });
    form.reset();
};
</script>

<template>
    <FormSection @submitted="createTeam">
        <template #title>
            Invoice Details
        </template>

        <template #description>
            Create a new invoice to start assigning it to coupons.
        </template>

        <template #form>
            <div class="col-span-6">
                <InputLabel value="Freetraveler Administrator" />

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
            <!-- Invoice Folio -->
            <div class="col-span-6 sm:col-span-4">
                <InputLabel for="folio" value="Invoice Folio" />
                <TextInput
                    id="folio"
                    v-model="form.folio"
                    type="text"
                    class="block w-full mt-1"
                    autofocus
                />
                <InputError :message="form.errors.folio" class="mt-2" />
            </div>
            <br class="hidden sm:block">
            <!-- Invoice Amount -->
            <div class="col-span-6 sm:col-span-2">
                <InputLabel for="amount" value="Invoice amount $" />
                <TextInput
                    id="amount"
                    v-model="form.amount"
                    type="text"
                    class="block w-full mt-1"
                    autofocus
                />
                <InputError :message="form.errors.amount" class="mt-2" />
            </div>
            <!-- Invoice Provider -->
            <div class="col-span-6 sm:col-span-2">
                <InputLabel for="provider_id" value="Provider" />
                <select 
                    v-model="form.provider_id"
                    id="provider_id"
                    name="provider_id"
                    class="capitalize w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    >
                    <option value="null" disabled selected>-- Provedores --</option>
                    <option class="capitalize" v-for="provider in props.providers" :value="provider.id">{{ provider.name }}</option>
                </select>
                <InputError :message="form.errors.provider_id" class="mt-2" />
            </div>
        </template>

        <template #actions>
            <PrimaryButton :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                Create
            </PrimaryButton>
        </template>
    </FormSection>
</template>
