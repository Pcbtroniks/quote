<script setup>
import { useForm } from '@inertiajs/inertia-vue3';

const props = defineProps({
    quote: Object,
})

const form = useForm({
    quote: props.quote,
});

const archive = () => {
    form.post(route('quote.archive', {id: props.quote.id}), {
        onSuccess: () => {
            form.reset();
        },
    });
}

console.log(props.quote);
</script>

<template>
<div class="min-h-screen flex items-center justify-center px-4">
    
    <div class="max-w-7xlxl bg-white w-full rounded-lg shadow-xl">
        <div class="p-4 border-b">
            <h2 class="text-2xl ">
                Detalles de la cotización
            </h2>
            <p class="text-sm text-gray-500">
                {{ props.quote.team.name }}, {{ props.quote.created_at }}
            </p>
        </div>
        <div>
            <div class="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
                <p class="text-gray-600">
                    Realizada por
                </p>
                <p class="capitalize">
                    {{ props.quote.user.name }}
                </p>
            </div>
            <div class="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
                <p class="text-gray-600">
                    Titular
                </p>
                <p>
                    {{ props.quote.holder_name }}
                </p>
            </div>
            <div class="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
                <p class="text-gray-600">
                    Correo electrónico
                </p>
                <p>
                    {{ props.quote.user.email }}
                </p>
            </div>
            <div class="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
                <p class="text-gray-600">
                    Costo
                </p>
                <p>
                    ${{ props.quote.cost_amount }}
                </p>
            </div>
            <div class="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
                <p class="text-gray-600">
                    Actividades
                </p>
                <p>
                    <span class="flex items-baseline" v-for="(act, index) in props.quote?.listed_activities" :key="act.id">
                        <svg class="mr-2" width="12px" height="12px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 12H20M12 4V20" stroke="#6b7280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                        <span class="capitalize">{{ act.activity.name.toLowerCase() }}</span>
                    </span> 
                </p>
            </div>
            <div class="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4">
                <p class="text-gray-600">
                    Adjuntos
                </p>
                <div class="space-y-2 flex flex-col gap-2">


                    <div class="border-2 flex items-center p-2 rounded justify-between space-x-2">
                        <div class="space-x-2 truncate">
                            <svg xmlns="http://www.w3.org/2000/svg" class="fill-current inline text-gray-500" width="24" height="24" viewBox="0 0 24 24"><path d="M17 5v12c0 2.757-2.243 5-5 5s-5-2.243-5-5v-12c0-1.654 1.346-3 3-3s3 1.346 3 3v9c0 .551-.449 1-1 1s-1-.449-1-1v-8h-2v8c0 1.657 1.343 3 3 3s3-1.343 3-3v-9c0-2.761-2.239-5-5-5s-5 2.239-5 5v12c0 3.866 3.134 7 7 7s7-3.134 7-7v-12h-2z"/></svg>
                            <span>
                                freetraveler_coupon.pdf
                            </span>
                        </div>
                        <a :href="route('export.pdf.quote.download', props.quote.id)" class="text-purple-700 hover:underline">
                            Descargar
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="border-t-2">
            <div class="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
                <p class="text-gray-600">
                    Realizar acciones
                </p>
                <div class="capitalize">
                    <div>
                        <button @click="archive" :class="{ 'bg-amber-500 text-white': props.quote.status == 'archived' }" class="border-2 border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white py-2 px-4 rounded-xl duration-150 hover:shadow-md hover:shadow-amber-600">Archivar</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>
</template>