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
    copy_mail_to: '',
});

const sendEmailTo = (coupon) => {
    form.post(route('coupon.send.by.email', { coupon }), {
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
    <FormSection @submitted="sendEmailTo(props.coupon.id)">
        <template #title>
            Enviar cupón
        </template>

        <template #description>
            Enviar por correo electronico al usuario que realizo la cotización.
            <br>
            Puede enviar una copia del cupon.
        </template>

        <template #form>
            <!-- Invoice Folio -->
            <div class="col-span-6 sm:col-span-4">
                <InputLabel for="folio" value="Enviar copia a: " />
                <div class="flex gap-4">

                    <TextInput
                    id="folio"
                    v-model="form.copy_mail_to"
                    placeholder="Se enviara correo al usuario que realizo la cotización."
                    type="email"
                    class="block w-full mt-1"
                    disabled
                    />
                    
                    <Button
                    type="submit"
                        class="inline" 
                        msg="Enviar"
                        :isLoading="form.processing"
                        />
                </div>
                <InputError :message="form.errors.folio" class="mt-2" />
            </div>
        </template>
    </FormSection>
</template>
