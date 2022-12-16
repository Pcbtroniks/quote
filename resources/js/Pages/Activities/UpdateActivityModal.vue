<script setup>
    import modal from './Modal.vue'
    import { ref } from 'vue'

const props = defineProps({
    fields: Object,
    show: {
        type: Boolean,
        default: true
    }
})

    const showModal = ref(false)
</script>

<template>
  <button id="show-modal" @click="showModal = true">Show Modal</button>

  <Teleport to="body">
    <!-- use the modal component, pass in the prop -->
    <modal :fields="fields" :show="showModal" @close="showModal = false">
      <template #header>
        <h3>custom header</h3>
      </template>
    </modal>
  </Teleport>
</template>