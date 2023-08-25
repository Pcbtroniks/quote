<script setup>
import FormSection from '@/Components/FormSection.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import { Link } from '@inertiajs/inertia-vue3';
import { ref } from 'vue';

const props = defineProps({
    activities: Array,
});

const showList = ref(false);
const LoadedList = ref(props.activities);
const filterList = ref(LoadedList);

const useFilter = (search = '') => {

    const emptyList = [{id: null, name: 'No se encontraron actividades. Crear una nueva'}];

    if(search.length == 0 || search.length < 3) {
        filterList.value = props.activities;
        console.log(search);
        return;
    }

    const list = LoadedList.value.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));

    if(list.length == 0) {
        filterList.value = emptyList;
    } else{
        filterList.value = list;
    }
}

const CloseWithDelay = (Time = 3000) => {
    setTimeout(() => {
        showList.value = false;
    }, Time);
}
</script>

<template>
    <FormSection>
        <template #title>
            Buscar actividad por nombre	
        </template>

        <template #description>
            Introducta el nombre de la actividad, si no se encuentra en la lista puede crear una nueva.
        </template>

        <template #form>

            <div class="col-span-6 sm:col-span-4">
                <InputLabel for="activity_name" value="Buscar actividad por nombre" />
                <TextInput
                    placeholder="tour..."
                    aria-autocomplete="none"
                    autocomplete="off"
                    id="activity_name"
                    type="text"
                    class="mt-1 block w-full"
                    @input="useFilter($event.target.value)"
                    @focus="showList = true"
                    @blur="CloseWithDelay()"
                />
                <div v-show="showList && props.activities.length > 0" class="relative">
                    <ul class="w-full flex flex-col gap-2 absolute bg-white border shadow-md max-h-80 overflow-auto">
                        <template v-for="tour in filterList">    
                            <Link :href="route('activity.create', tour.id)">
                                <li class="hover:bg-sky-500 hover:text-white p-4 cursor-pointer">{{ tour.name }}</li>
                            </Link>
                        </template>
                    </ul>
                </div>
            </div>

        </template>

    </FormSection>
</template>
