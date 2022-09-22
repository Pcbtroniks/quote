<template>
    <form @submit.prevent="submit">
        
        <label for="title">Title</label>
        <input type="text" v-model="form.title">

        <label for="slug">Slug</label>
        <input type="text" v-model="form.slug">

        <button>Send</button>
    
    </form>
</template>

<script>
import { Inertia } from '@inertiajs/inertia';
import { useForm } from '@inertiajs/inertia-vue3';


    export default {
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