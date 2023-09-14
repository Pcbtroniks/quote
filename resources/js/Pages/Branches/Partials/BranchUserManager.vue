<script setup>
import { ref } from 'vue';
import { useForm } from '@inertiajs/inertia-vue3';
import ActionSection from '@/Components/ActionSection.vue';
import Checkbox from '@/Components/Checkbox.vue';
import ConfirmationModal from '@/Components/ConfirmationModal.vue';
import DangerButton from '@/Components/DangerButton.vue';
import DialogModal from '@/Components/DialogModal.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import SecondaryButton from '@/Components/SecondaryButton.vue';
import SectionBorder from '@/Components/SectionBorder.vue';
import { successToast } from '@/utils/toast.js'

const props = defineProps({
    branches: Array,
    users: Array,
});

const updateBranchUsersForm = useForm({
    users: null,
    updateUsers: [],
    usersBeingUpdated: [],
});

const deleteBranchForm = useForm();

const managingUsersFor = ref(null);
const branchBeingDeleted = ref(null);

const manageBranchUsers = (branch) => {
    managingUsersFor.value = branch;
    updateBranchUsersForm.users = props.users
                                    .filter((user) => user.branch_id == branch.id)
                                    .map((user) => user.id);
};

const updateUsers = (user) => {
    if(updateBranchUsersForm.updateUsers.includes(user)){
        updateBranchUsersForm.updateUsers = updateBranchUsersForm.updateUsers.filter((u) => u != user)
        updateBranchUsersForm.usersBeingUpdated = updateBranchUsersForm.usersBeingUpdated.filter((u) => u.user_id != user)
    } else {
        updateBranchUsersForm.updateUsers = [...updateBranchUsersForm.updateUsers, user]
        const branch = !updateBranchUsersForm.users.includes(user) ? null : managingUsersFor.value.id;
        updateBranchUsersForm.usersBeingUpdated = [...updateBranchUsersForm.usersBeingUpdated, {user_id: user, branch_id: branch}]
    }
};
const updateBranchUsers = () => {
    if(updateBranchUsersForm.updateUsers.length == 0){
        managingUsersFor.value = null;
        updateBranchUsersForm.updateUsers = [];
        updateBranchUsersForm.usersBeingUpdated = [];
        return;
    }
    updateBranchUsersForm.post(route('branches.users.update', managingUsersFor.value.id), {
        preserveScroll: true,
        preserveState: true,
        onSuccess: () => {
            managingUsersFor.value = null;
            updateBranchUsersForm.updateUsers = [];
            updateBranchUsersForm.usersBeingUpdated = [];
            successToast('Hecho!')
        },
    });
};

const confirmBranchDeletion = (branch) => {
    branchBeingDeleted.value = branch;
};

const deleteBranch = () => {
    deleteBranchForm.delete(route('branches.destroy', branchBeingDeleted.value), {
        preserveScroll: true,
        preserveState: true,
        onSuccess: () => (branchBeingDeleted.value = null),
    });
};
</script>

<template>
    <div>

        <div v-if="props.branches.length > 0">
            <SectionBorder />

            <!-- Manage API Tokens -->
            <div class="mt-10 sm:mt-0">
                <ActionSection>
                    <template #title>
                        Gestionar sucursales
                    </template>

                    <template #description>
                        Puedes administrar los usuarios de la sucursal, así como a sus integrantes.
                    </template>

                    <!-- Branch List -->
                    <template #content>
                        <div class="space-y-6">
                            <div v-for="branch in props.branches" :key="branch.id" class="flex items-center justify-between">
                                <div>
                                    {{ branch.name }}
                                </div>

                                <div class="flex items-center">

                                    <button
                                        v-if="users.length > 0"
                                        class="cursor-pointer ml-6 text-sm text-gray-400 underline"
                                        @click="manageBranchUsers(branch)"
                                    >
                                        Usuarios
                                    </button>

                                    <button class="cursor-pointer ml-6 text-sm text-red-500" @click="confirmBranchDeletion(branch)">
                                        Eliminar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </template>
                </ActionSection>
            </div>
        </div>
    <div>

        <!-- API Token Permissions Modal -->
        <DialogModal :show="managingUsersFor != null" @close="managingUsersFor = null">
            <template #title>
                Miembros de la sucursal
            </template>

            <template #content>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div v-for="user in props.users" :key="user.id">
                        <label class="flex items-center">
                            <Checkbox @change="updateUsers($event.target.value)" v-model:checked="updateBranchUsersForm.users" :value.string="user.id.toString()" />
                            <span class="ml-2 text-sm text-gray-600">{{ user.name }}</span>
                        </label>
                    </div>
                </div>
            </template>

            <template #footer>
                <SecondaryButton @click="managingUsersFor = null">
                    Cancelar
                </SecondaryButton>

                <PrimaryButton
                    class="ml-3"
                    :class="{ 'opacity-25': updateBranchUsersForm.processing }"
                    :disabled="updateBranchUsersForm.processing"
                    @click="updateBranchUsers"
                >
                    Guardar
                </PrimaryButton>
            </template>
        </DialogModal>

        <!-- Delete Token Confirmation Modal -->
        <ConfirmationModal :show="branchBeingDeleted != null" @close="branchBeingDeleted = null">
            <template #title>
                Eliminar sucursal
            </template>

            <template #content>
                ¿Esta seguro que desea eliminar esta sucursal?
            </template>

            <template #footer>
                <SecondaryButton @click="branchBeingDeleted = null">
                    Cancelar
                </SecondaryButton>

                <DangerButton
                    class="ml-3"
                    :class="{ 'opacity-deleteBranchForm': deleteBranchForm.processing }"
                    :disabled="deleteBranchForm.processing"
                    @click="deleteBranch"
                >
                    Eliminar
                </DangerButton>
            </template>
        </ConfirmationModal>
    </div>
    </div>
</template>
