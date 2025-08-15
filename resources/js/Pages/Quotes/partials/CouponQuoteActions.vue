<script setup>
import Swal from "sweetalert2";
import DialogModal from '@/Components/DialogModal.vue';
import BodySection from "@/Components/BodySection.vue";
import InputError from "@/Components/InputError.vue";
import InputLabel from "@/Components/InputLabel.vue";
import Button from "@/Components/Button.vue";
import TextInput from "@/Components/TextInput.vue";
import { Link } from "@inertiajs/inertia-vue3";
import { Inertia } from "@inertiajs/inertia";
import axios from "axios";
import { reactive, ref } from "vue";
import { userHasPermission, PERMISSIONS } from "@/Helpers/Permissions.js";

const props = defineProps({
    quote: Object,
    pickupTime: Object
});

const Search = reactive({
    coupon: null,
    error: null,
    couponCode: null,
    processing: false,
    syncing: false,
});

const searchCoupon = async (couponCode) => {
    if (!couponCode) return false;

    Search.coupon = null;
    Search.processing = true;
    const data = await HttpGet(
        route("coupon.search.code", { code: couponCode })
    );

    if (data.status == 404) {
        Search.processing = false;
        Search.error = "No se ha encontrado un cupon";
        setTimeout(() => {
            Search.error = null;
        }, 3000);
    } else {
        Search.processing = false;
        Search.coupon = data;
        console.log(data);
    }
};

const getCoupon = async (quote) => {
    const data = await axios.post(route("coupon.get.coupon", { quote }));
    console.log(data);
    Swal.fire({
        title: "Código de cupón",
        text: data.data.code,
        icon: "success",
        confirmButtonText: "Ok",
    }).then((result) => {
        if (result.isConfirmed) {
            location.reload();
        }
    });
};
const confirmCoupon = async (coupon) => {
    const data = await axios.post(route("coupon.confirm", { coupon }));
    console.log(data);
    Swal.fire({
        title: "Cupon confirmado!",
        text: "El cupón ha sido confirmado y estara disponible para su uso",
        icon: "success",
        confirmButtonText: "Ok",
    }).then((result) => {
        if (result.isConfirmed) {
            location.reload();
        }
    });
};

const useConfirmCoupon = async (coupon) => {
    Swal.fire({
        title: "¿Estás seguro?",
        text: "¡No podrás revertir esto!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí, ¡aplicar cupón!",
    }).then((result) => {
        if (result.isConfirmed) {
            confirmCoupon(coupon);
        }
    });
};

const syncCoupon = async (invoice, coupon) => {
    if (!coupon) return false;
    Search.syncing = true;
    try {
        const data = await axios.post(
            route("invoices.sync.coupon", { invoice }),
            {
                coupon,
            }
        );

        Search.coupon.invoice_id = invoice;
        Inertia.reload();
    } catch (error) {
        alert("Ha ocurrido un error: " + error.message);
    } finally {
        Search.syncing = false;
    }
};

const HttpGet = async (URL, Options) => {
    try {
        const response = await fetch(URL, Options);
        const data = await response.json();

        return data;
    } catch (error) {
        console.error(await error.json());
    }
};
const getStatusColor = (status) => {
    switch (status) {
        case "pending":
            return "bg-yellow-100 text-yellow-500";
        case "confirmed":
            return "bg-green-100 text-green-500";
        case "canceled":
            return "bg-red-100 text-red-500";
        default:
            return "bg-gray-100 text-gray-500";
    }
};

const showCouponUpdate = ref(false);

const openCouponUpdate = () => {
    showCouponUpdate.value = !showCouponUpdate.value;
    const couponUpdateSection = document.querySelector(".couponUpdate");
    if (couponUpdateSection) {
        couponUpdateSection.classList.toggle("hidden");
    }
};

const updateCouponCode = async (coupon) => {
    if (!coupon) return false;

    try {
        const data = await axios.post(
            route("coupon.update.code", { coupon: coupon.id }),
            {
                code: coupon.code,
                coupon_id: coupon.id,
            }
        );

        console.log(data);
        Swal.fire({
            title: "Código de cupón actualizado",
            text: "El código de cupón ha sido actualizado",
            icon: "success",
            confirmButtonText: "Ok",
        }).then((result) => {
            if (result.isConfirmed) {
                location.reload();
            }
        });
    } catch (error) {
        console.error("Error updating coupon:", error);

        let errorMessage = "Ha ocurrido un error al actualizar el cupón";

        if (
            error.response &&
            error.response.data &&
            error.response.data.errors
        ) {
            const errors = Object.values(error.response.data.errors).flat();
            errorMessage = errors.join(", ");
        } else if (
            error.response &&
            error.response.data &&
            error.response.data.message
        ) {
            errorMessage = error.response.data.message;
        }

        Swal.fire({
            title: "Error",
            text: errorMessage,
            icon: "error",
            confirmButtonText: "Ok",
        });
    }
};

const showModal = ref(false);

const modalUpdatePickupTimes = () => {
    showModal.value = true;
};

const updatePickupTimes = async (activity) => {
    try {
        const response = await axios.post(route('quote.listed.activities.update', props.quote.id), {
            quote_activity_id: activity.id,
            pickup_time: activity.pickup_time,
        });

        if (response.data.status === 'ok') {
    Swal.fire({
        title: 'Éxito',
        text: 'Horarios de pickup actualizado correctamente.',
        icon: 'success',
    });
    Inertia.reload();
} else {
    Swal.fire({
        title: 'Error',
        text: response.data.message || 'No se pudieron actualizar los horarios.',
        icon: 'error',
    });
}
    } catch (error) {
        console.error('Error updating pickup times:', error);
        Swal.fire({
            title: 'Error',
            text: 'Ocurrió un error al actualizar los horarios de pickup.',
            icon: 'error',
        });
    }
};


</script>

<template>
    <BodySection>
        <template #title>
            <h3 class="text-gray-300 text-center sm:text-start">Acciones</h3>
        </template>

        <template #description>
            <div
                class="flex flex-col items-center gap-2 rounded-lg p-4 shadow-md bg-white/20"
            >
                <span class="text-white font-bold">
                    Genere un folio / Muestre u oculte el folio
                </span>
                <br />
                <button
                    class="text-white hover:text-gray-300 font-bold bg-blue-900 hover:bg-mainblue active:bg-mainblue px-4 py-2 rounded-md mb-4"
                    @click="openCouponUpdate"
                >
                    {{
                        showCouponUpdate
                            ? "Ocultar"
                            : "Actualizar Codigo de Reserva"
                    }}
                </button>
                <button class="text-white hover:text-gray-300 font-bold bg-green-600 hover:bg-green-700 active:bg-green-700 px-4 py-2 rounded-md"
                @click="modalUpdatePickupTimes">
                    Actualizar Horarios de Pickup
                </button>
            </div>
        </template>

        <template #content>
            <!-- Overview -->
            <div class="col-span-6">
                <div class="text-lg font-medium text-gray-900">
                    Cotización
                    <span
                        :class="getStatusColor(props.quote.status)"
                        class="p-2 rounded"
                        >status {{ props.quote.status }}</span
                    >
                </div>
                <div
                    v-if="
                        userHasPermission(
                            $page.props.user,
                            PERMISSIONS.MANAGE_BRANCH
                        )
                    "
                >
                    <span class="text-sm text-gray-500"
                        >Realizada por: {{ props.quote.user.name }} en ({{
                            props.quote.team.name
                        }}) el dia {{ props.quote.created_at }}</span
                    >
                    <br />
                    <span class="text-sm text-gray-500"
                        >Precio publico: ${{ props.quote.public_price }}</span
                    >
                    <br />
                    <span class="text-sm text-gray-500"
                        >Costo: ${{ props.quote.cost_amount }}</span
                    >
                </div>
            </div>

            <div class="col-span-6 sm:col-span-4 ">
                <!-- Coupon Flow -->
                <div class="relative flex items-center gap-1">
                    <Button
                        v-if="!quote.coupon?.code"
                        @click="getCoupon(props.quote.id)"
                        :class="{ 'opacity-25': Search.processing }"
                        :isLoading="Search.processing"
                        msg="Generar Folio"
                    />

                    <Button
                        v-if="
                            quote.coupon?.code &&
                            quote.coupon.status != 'confirmed'
                        "
                        @click="useConfirmCoupon(props.quote.coupon.id)"
                        class="bg-green-500 hover:bg-green-600"
                        :isLoading="Search.processing"
                        :disabled="quote.coupon.confirmation_key == null"
                        msg="Aceptar cupon"
                    />
                </div>
                <small
                    v-if="quote.coupon?.confirmation_key == null"
                    class="mt-2"
                >
                    Nota: debe agregar la clave de confirmación para poder
                    aceptar el cupon.
                </small>
            </div>

            <!-- Coupon Update -->
            <Transition
                enter-active-class="transition-all duration-300 ease-out"
                enter-from-class="opacity-0 transform -translate-y-4 scale-95"
                enter-to-class="opacity-100 transform translate-y-0 scale-100"
                leave-active-class="transition-all duration-200 ease-in"
                leave-from-class="opacity-100 transform translate-y-0 scale-100"
                leave-to-class="opacity-0 transform -translate-y-4 scale-95"
            >
                <div
                    v-if="showCouponUpdate"
                    class="col-span-6 mt-4 p-4 rounded-lg bg-white/10 shadow-lg"
                >
                    <h4 class="text-black font-bold mb-3">
                        Actualizar código de Reserva
                    </h4>
                    <div class="flex items-center gap-2">
                        <input
                            v-model="quote.coupon.code"
                            type="text"
                            class="flex-1 p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                            placeholder="Código del cupón"
                            maxlength="16"
                        />
                        <span class="text-sm text-gray-500">ID:</span>
                        <input
                            v-model="quote.coupon.id"
                            type="text"
                            class="flex-1 p-2 border border-gray-300 rounded bg-gray-100 selected-none"
                            readonly
                        />
                        <button
                            class="text-white hover:text-gray-300 font-bold bg-blue-900 hover:bg-mainblue active:bg-mainblue px-4 py-2 rounded-md transition-all duration-200 hover:shadow-lg transform hover:scale-105"
                            @click="updateCouponCode(quote.coupon)"
                        >
                            Actualizar
                        </button>
                    </div>
                </div>
            </Transition>

            <!--Modal Pickup Times Update-->
<DialogModal :show="showModal" @close="showModal = false">
    <template #title>
        <span class="font-bold justify-center flex">Actualizar Horarios de Pickup</span>
    </template>
    <template #content>
        <table class="min-w-full divide-y divide-gray-200">
            <thead>
                <tr class="bg-gray-100 uppercase text-xs">
                    <th class="px-4 py-2 text-gray-400">Parque</th>
                    <th class="px-4 py-2 text-gray-400">Hora del pickup</th>
                    <th class="px-4 py-2 text-gray-400"></th>

                </tr>
            </thead>
            <tbody>
                <tr v-for="activity in props.quote.listed_activities" :key="activity.id">
                    <td>{{ activity.activity?.name }}</td>
                    <td>
                        <input
                            v-model="activity.pickup_time"
                            type="time"
                            class="w-full"
                        />
                    </td>
                    <td>
                        <button
                            class="bg-blue-900 text-white px-2 py-1 rounded"
                            @click="updatePickupTimes(activity)"
                        >
                            Guardar
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </template>
    <template #footer>
        <button class="bg-red-500 text-white px-4 py-2 rounded" @click="showModal = false">Cerrar</button>
    </template>
</DialogModal>

        </template>
    </BodySection>
</template>
