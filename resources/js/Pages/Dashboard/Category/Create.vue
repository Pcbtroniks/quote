<template>

    <AppLayout title="Create Team">

        <FormSection>

            <template #title>
                Create Category
            </template>

            <template #description>
                Create a Category
            </template>

            <template #form>

                <form @submit.prevent="submit">
                
                <jet-label for="title">Title</jet-label>
                <jet-input type="text" v-model="form.title" />
                <JetInputError :message="errors.title" />
    
                <jet-label for="slug">Slug</jet-label>
                <jet-input type="text" v-model="form.slug" />
                <JetInputError :message="errors.slug" />

                <jet-button>Send</jet-button>
            
            </form>

            </template>
        
        </FormSection>
        
    </AppLayout>

</template>

<script>
import { Inertia } from '@inertiajs/inertia';
import { useForm } from '@inertiajs/inertia-vue3';

import AppLayout from '@/Layouts/AppLayout.vue';

import JetDangerButton from '@/Components/DangerButton.vue';
import FormSection from '@/Components/FormSection.vue';
import JetInputError from '@/Components/InputError.vue';
import JetButton from '@/Components/PrimaryButton.vue';
import JetLabel from '@/Components/InputLabel.vue';
import JetInput from '@/Components/TextInput.vue';



    export default {

        components: {
                    JetLabel,
                    JetInput,
                    JetButton,
                    AppLayout,
                    JetInputError,
                    JetDangerButton,
                    FormSection
                },

        props: {
            errors: Object
        },

        setup(){
            const form = useForm({
                title: null,
                slug: null,
            })

            function submit(){
                Inertia.post(route('category.store'), form);
            }

            return { form, submit }
        }
    }
</script>