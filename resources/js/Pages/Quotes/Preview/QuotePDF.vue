<script setup>
import { usePage } from "@inertiajs/inertia-vue3";
import TeamHelper from "@/utils/TeamHelpers.js";

const props = defineProps({
    quote: Object,
});

const printLogo = () => {
    return TeamHelper.isDefaultLogo(props.quote.team.logo)
        ? "/assets/exploreemotions-logo.png"
        : "/storage/" + props.quote.team.logo;
};

console.log(props.quote);
</script>

<template>
    <div
        class="mx-auto m-6 w-[500px] border-[3px] p-8 border-gray-400"
        spellcheck="false"
    >
        <div class="w-full mb-6">
            <h1 class="font-bold text-2xl py-1">Confirmación de Reserva</h1>
            <p class="py-1 text-gray-600">Estimado/a {{ quote.holder_name }}</p>
            <p class="py-1 text-gray-600">
                Su reserva ha sido confirmada exitosamente. Nos complace
                acompañarle en su experiencia en
                {{ quote.activity.name }} garantizamos un servicio de
                excelencia.
            </p>
        </div>

        <div class="bg-backgroundcoupon p-6 h-full">
            <div class="flex gap-2">
                <div class="w-[30px] h-[30px] rounded-lg bg-bluecoupon">
                    <img class="p-1 w-full" src="/assets/icons/calendar.svg" />
                </div>
                <h2 class="font-bold text-xl py-1">
                    Información de la Reserva
                </h2>
            </div>

            <div class="flex justify-between p-2">
                <div>
                    <h3 class="text-gray-600 text-sm font-bold">
                        CÓDIGO DE RESERVA
                    </h3>
                    <span class="font-bold text-blue-600">{{
                        quote.coupon?.code
                    }}</span>
                </div>

                <div>
                    <h3 class="text-gray-600 text-sm font-bold">
                        FECHA DE VISITA
                    </h3>
                    <span class="font-bold">{{
                        quote.listed_activity.date ?? "invalid date"
                    }}</span>
                </div>
            </div>

            <div class="p-2">
                <h3 class="text-gray-600 text-sm font-bold">TOUR</h3>
                <span class="font-bold">{{
                    quote.activity.name ?? "N/A"
                }}</span>
            </div>

            <!--Hotel and pickup time -->
            <div class="p-2">
                <h3 class="text-gray-600 text-sm font-bold">
                    PUNTO DE ENCUENTRO/HORA
                </h3>
                <p
                    class="font-bold"
                    v-if="
                        quote.type == 'pack' ||
                        quote.type == 'tour' 
                    "
                    v-for="a in quote.listed_activities"
                >
                    {{ a.hotel.name }}
                                <span>
                                (
                                {{ a.pickup_time && a.pickup_time !== '00:00:00' ? a.pickup_time.slice(0, 5) : 'N/D' }} h
                                )
                                </span>
                    <!-- <br />
                    <span>{{ a.date_string_formatted }}</span> -->
                </p>
            </div>

            <div class="p-2 flex justify-between w-3/4 mt-20">
                <div class="grid gap-1">
                    <h3 class="text-gray-600 text-sm font-bold">PASAJEROS</h3>
                    <span v-if="quote.adults" class="font-bold"
                        >Adultos: {{ quote.adults ?? "" }}</span
                    >
                    <span v-if="quote.minors" class="font-bold"
                        >Menores: {{ quote.minors ?? "" }}</span
                    >
                    <span v-if="quote.infants" class="font-bold"
                        >Infantes: {{ quote.infants ?? "" }}</span
                    >
                </div>
                <div>
                    <h3 class="text-gray-600 text-sm font-bold">PAÍS</h3>
                    <span class="font-bold">MX</span>
                </div>
            </div>
        </div>

        <div class="bg-backgroundQouteCouponCode h-[150px]">
            <div class="text-center mx-auto p-6 gap-2 flex flex-col">
                <h3 class="font-bold text-green-400">
                    Número de confirmación del proveedor:
                </h3>
                <span class="text-[25px] font-extrabold text-green-600">{{
                    quote.coupon?.confirmation_key
                }}</span>
            </div>
        </div>
                    <div class="text-gray-700 pl-8 mt-2">
                <ul class="mx-auto">
                    <li class="list-disc text-[12px]">Presentarse en el punto de reunión 10 min antes del horario señalado.</li>
                    <li class="list-disc text-[12px]">Identificación oficial será requerida en taquillas y/o punto de PickUp.</li>
                </ul>
            </div>
    </div>
</template>
