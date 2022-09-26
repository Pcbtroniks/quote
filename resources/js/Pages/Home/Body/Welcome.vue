<script setup>

import JetDangerButton from '@/Components/DangerButton.vue';
import FormSection from '@/Components/FormSection.vue';
import InputError from '@/Components/InputError.vue';
import JetButton from '@/Components/PrimaryButton.vue';
import InputLabel from '@/Components/InputLabel.vue';
import TextInput from '@/Components/TextInput.vue';
import { useForm } from '@inertiajs/inertia-vue3';

    const form = useForm({
        fechaReservacion: null,
        tipoReservacion: null,
        FechaActividad: null,
        nombreTitular: null,
        adultos: null,
        menores: null,
        infantes: null,
        parque: null,
        nacionales: true,
        precioPublico: true,
        costo: true,
        notas: true,
    })
</script>
    
<template>

    <div>
        <div class="p-6 sm:px-20 bg-white border-b border-gray-200">
            <!-- <div>
                <ApplicationLogo class="block h-12 w-auto" />
            </div> -->

            <div class="mt-8 text-2xl">
                Nueva reservación de agencia
            </div>
        </div>

        <FormSection>

        <template #form>

            <div class="col-span-6">
                <div class="max-w-xl text-sm text-gray-600">
                    Por favor llene el siguiente formulario para poder realizar su cotización.
                </div>
            </div>

            <!-- <div class="col-span-6 sm:col-span-4">
                <InputLabel for="name" value="Fecha reservación" />
                <TextInput
                    id="name"
                    
                    type="text"
                    class="block w-full mt-1"
                    autofocus
                />
                <InputError :message="''" class="mt-2" />
            </div> -->

            <!-- Form -->
            <div class="flex items-center justify-center p-12  col-span-6 sm:col-span-4">
  <!-- Author: FormBold Team -->
  <!-- Learn More: https://formbold.com -->
  <div class="mx-auto w-full max-w-[550px]">
    <form action="https://formbold.com/s/FORM_ID" method="POST">


        <div class="-mx-3 flex flex-wrap">
            <div class="w-full px-3 ">
            <div class="mb-5">
                <label
                for="date"
                class="mb-3 block text-base font-medium text-[#07074D]"
                >
                Fecha de reservación
                </label>
                <input
                type="date"
                name="date"
                id="date"
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
            </div>
            </div>
        </div>

        <!--  -->

        <div class="mb-5">
            <label class="mb-3 block text-base font-medium text-[#07074D]">
            Tipo de reservación?
            </label>
            <div class="flex items-center space-x-6">
            <div class="flex items-center">
                <input
                type="radio"
                name="radio1"
                id="radioButton1"
                class="h-5 w-5"
                />
                <label
                for="radioButton1"
                class="pl-3 text-base font-medium text-[#07074D]"
                >
                Entrada
                </label>
            </div>
            <div class="flex items-center">
                <input
                type="radio"
                name="radio1"
                id="radioButton2"
                class="h-5 w-5"
                />
                <label
                for="radioButton2"
                class="pl-3 text-base font-medium text-[#07074D]"
                >
                Tour
                </label>
            </div>
            <div class="flex items-center">
                <input
                type="radio"
                name="radio1"
                id="radioButton3"
                class="h-5 w-5"
                />
                <label
                for="radioButton3"
                class="pl-3 text-base font-medium text-[#07074D]"
                >
                Paquete
                </label>
            </div>
            </div>
        </div>

        <!--  -->

        <div class="-mx-3 flex flex-wrap">
            <div class="w-full px-3 ">
            <div class="mb-5">
                <label
                for="date"
                class="mb-3 block text-base font-medium text-[#07074D]"
                >
                Fecha de actividad
                </label>
                <input
                type="date"
                name="date"
                id="date"
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
            </div>
            </div>
        </div>

      <div class="-mx-3 flex flex-wrap">
        <div class="w-full px-3">
          <div class="mb-5">
            <label
              for="fName"
              class="mb-3 block text-base font-medium text-[#07074D]"
            >
              Nombre del titular
            </label>
            <input
              type="text"
              name="fName"
              id="fName"
              placeholder="Nombre del titular"
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
        </div>

      </div>

      <!--  -->

        <div class="mx-3 flex flex-wrap">

            <div class="mb-5 w-2/3">
                <label
                for="guest"
                class="mb-3 block text-base font-medium text-[#07074D]"
                >
                Adultos
                </label>
                <input
                type="number"
                name="guest"
                id="guest"
                placeholder="1"
                min="0"
                class="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
            </div>

            <div class="mb-5 w-2/3">
                <label
                for="guest"
                class="mb-3 block text-base font-medium text-[#07074D]"
                >
                menores
                </label>
                <input
                type="number"
                name="guest"
                id="guest"
                placeholder="0"
                min="0"
                class="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
            </div>

            <br>
            <br>

            <div class="mb-5 w-2/3">
                <label
                for="guest"
                class="mb-3 block text-base font-medium text-[#07074D]"
                >
                infantes
                </label>
                <input
                type="number"
                name="guest"
                id="guest"
                placeholder="0"
                min="0"
                class="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
            </div>

        </div>

      <!--  -->
      <div class="-mx-3 flex flex-wrap">
        <div class="w-full px-3">
          <div class="mb-5">
            <label
              for="fName"
              class="mb-3 block text-base font-medium text-[#07074D]"
            >
              Parque
            </label>
            <input
              type="text"
              name="fName"
              id="fName"
              placeholder=""
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
        </div>

      </div>

      <!--  -->

      
      <div class="mb-5">
        <label class="mb-3 block text-base font-medium text-[#07074D]">
          Nacionales?
        </label>
        <div class="flex items-center space-x-6">
          <div class="flex items-center">
            <input
              type="radio"
              name="nacionales"
              id="nacionales1"
              class="h-5 w-5"
            />
            <label
              for="nacionales1"
              class="pl-3 text-base font-medium text-[#07074D]"
            >
              Si
            </label>
          </div>
          <div class="flex items-center">
            <input
              type="radio"
              name="nacionales"
              id="nacionales2"
              class="h-5 w-5"
            />
            <label
              for="nacionales2"
              class="pl-3 text-base font-medium text-[#07074D]"
            >
              No
            </label>
          </div>
        </div>
      </div>

      <!--  -->
      
      <div class="-mx-3 flex flex-wrap">
        <div class="w-full px-3">
          <div class="mb-5">
            <label
              for="fName"
              class="mb-3 block text-base font-medium text-[#07074D]"
            >
              Precio Publico
            </label>
            <input
              type="text"
              name="fName"
              id="fName"
              placeholder="$"
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
        </div>

      </div>

      <!--  -->

      <div class="-mx-3 flex flex-wrap">
        <div class="w-full px-3">
          <div class="mb-5">
            <label
              for="fName"
              class="mb-3 block text-base font-medium text-[#07074D]"
            >
              Costo
            </label>
            <input
              type="text"
              name="fName"
              id="fName"
              placeholder="$"
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
        </div>

      </div>

      <!--  -->

      <div class="-mx-3 flex flex-wrap">
        <div class="w-full px-3">
          <div class="mb-5">
            <label
              for="fName"
              class="mb-3 block text-base font-medium text-[#07074D]"
            >
              Notas
            </label>
            <textarea
            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
             name="" id="" cols="30" rows="10"></textarea>
          </div>
        </div>

      </div>

<!--       <div class="-mx-3 flex flex-wrap">
        <div class="w-full px-3 sm:w-1/2">
          <div class="mb-5">
            <label
              for="date"
              class="mb-3 block text-base font-medium text-[#07074D]"
            >
              Date
            </label>
            <input
              type="date"
              name="date"
              id="date"
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
        </div>
        <div class="w-full px-3 sm:w-1/2">
          <div class="mb-5">
            <label
              for="time"
              class="mb-3 block text-base font-medium text-[#07074D]"
            >
              Time
            </label>
            <input
              type="time"
              name="time"
              id="time"
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
        </div>
      </div> -->

<!--       <div class="mb-5">
        <label class="mb-3 block text-base font-medium text-[#07074D]">
          Are you coming to the event?
        </label>
        <div class="flex items-center space-x-6">
          <div class="flex items-center">
            <input
              type="radio"
              name="radio1"
              id="radioButton1"
              class="h-5 w-5"
            />
            <label
              for="radioButton1"
              class="pl-3 text-base font-medium text-[#07074D]"
            >
              Yes
            </label>
          </div>
          <div class="flex items-center">
            <input
              type="radio"
              name="radio1"
              id="radioButton2"
              class="h-5 w-5"
            />
            <label
              for="radioButton2"
              class="pl-3 text-base font-medium text-[#07074D]"
            >
              No
            </label>
          </div>
        </div>
      </div> -->

      <div>
        <button
          class="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
        >
          Enviar Cotización
        </button>
      </div>
    </form>
  </div>
</div>
            <!-- Form -->

            <!-- <JetButton class="mt-4"> Enviar </JetButton> -->
        </template>
                
            
        </FormSection>
        </div>

</template>
