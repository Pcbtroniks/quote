<script setup>
import { useForm } from '@inertiajs/inertia-vue3';
import FormSection from '@/Components/FormSection.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import TextInput from '@/Components/TextInput.vue';
import Button from '../../../Components/Button.vue';

const props = defineProps({
    coupon: Object,
});

const form = useForm({
    confirmation_key: null,
});

const saveConfirmation = (coupon) => {
    form.confirmation_key = props.coupon.confirmation_key;
    form.post(route('coupon.key.confirm', { coupon }), {
        preserveScroll: true,
        onSuccess: (response) => {
            console.log(response)
            alert('Success');
        }
    });
    form.reset();
};
</script>

<template>
    <FormSection @submitted="saveConfirmation(props.coupon.id)">
        <template #title>
            Confirmation key
        </template>

        <template #description>
            Add a confirmation key to the current coupon.
        </template>

        <template #form>
            <!-- Invoice Folio -->
            <div class="col-span-6 sm:col-span-4">
                <InputLabel for="folio" value="Confirmation key code" />
                <div class="flex gap-4">

                    <TextInput
                    id="folio"
                    v-model="props.coupon.confirmation_key"
                    type="text"
                    class="block w-full mt-1"
                    autofocus
                    />
                    
                    <Button
                    type="submit"
                        class="inline" 
                        msg="Guardar"
                        :isLoading="form.processing"
                        />
                </div>
                <InputError :message="form.errors.folio" class="mt-2" />
            </div>
        </template>
    </FormSection>
</template>
