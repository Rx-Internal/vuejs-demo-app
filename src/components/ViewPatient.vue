<template>
  <Dialog
    v-model:visible="visible"
    modal
    :style="{ width: '55vw' }"
    header="Utente"
    :closable="true"
  >
    <div class="p-4 space-y-6">
      <!-- Tabs -->
      <TabView>
        <TabPanel header="Dados Pessoais">
          <!-- Personal Data Form -->
          <div class="bg-[#E3E5FF] rounded-xl px-4 py-2 font-semibold">
            Dados pessoais
          </div>

          <div class="mt-4">
            <div class="grid grid-cols-5 gap-4">
              <div class="col-span-3">
                <label class="block text-sm font-medium"
                  >Nome Completo
                  <span class="text-gray-400">Obrigatório</span></label
                >
                <InputText v-model="form.nome" class="w-full" />
              </div>
              <div class="col-span-2">
                <label class="block text-sm font-medium"
                  >Data de nascimento
                  <span class="text-gray-400">Obrigatório</span></label
                >
                <InputText v-model="form.dataNascimento" class="w-full" />
              </div>
              <div class="col-span-1">
                <label class="block text-sm font-medium"
                  >Cartão de cidadão</label
                >
                <InputText v-model="form.cc" class="w-full" />
              </div>
              <div class="col-span-1">
                <label class="block text-sm font-medium">Contribuinte</label>
                <InputText v-model="form.contribuinte" class="w-full" />
              </div>
              <div class="col-span-1">
                <label class="block text-sm font-medium"
                  >Número de Utente</label
                >
                <InputText v-model="form.nutente" class="w-full" />
              </div>
              <div class="col-span-1">
                <label class="block text-sm font-medium">Sexo</label>
                <Dropdown
                  v-model="form.sexo"
                  :options="sexos"
                  class="w-full"
                  optionLabel="label"
                  optionValue="value"
                  placeholder="Selecionar"
                />
              </div>
              <div class="col-span-1">
                <label class="block text-sm font-medium">Processo</label>
                <InputText v-model="form.processo" class="w-full" />
              </div>
              <div class="col-span-3">
                <label class="block text-sm font-medium">Email</label>
                <InputText v-model="form.email" class="w-full" />
              </div>
              <div class="col-span-2">
                <label class="block text-sm font-medium">Telefone</label>
                <InputText v-model="form.telefone" class="w-full" />
              </div>
              <div class="col-span-2">
                <label class="block text-sm font-medium">Morada</label>
                <InputText v-model="form.morada" class="w-full" />
              </div>
              <div class="col-span-2">
                <label class="block text-sm font-medium">Código-Postal</label>
                <InputText v-model="form.codPostal" class="w-full" />
              </div>
              <div class="col-span-1">
                <label class="block text-sm font-medium">Localidade</label>
                <InputText v-model="form.localidade" class="w-full" />
              </div>
            </div>
          </div>

          <!-- Exam History -->
          <div class="bg-[#E3E5FF] rounded-xl px-4 py-2 font-semibold my-6">
            Histórico de exames
          </div>
          <div class="mt-6">
            <div class="flex gap-4 mb-2 text-sm text-primary">
              Tipos de exame
              <span class="cursor-pointer font-medium">Todos</span>
              <span class="cursor-pointer text-blue-500 font-medium">ECG</span>
              <span class="cursor-pointer font-medium">Holter</span>
            </div>
          </div>
        </TabPanel>

        <!-- Add other tabs -->
        <TabPanel header="Histórico" :disabled="true" />
        <TabPanel header="Dados Clínicos" :disabled="true" />
        <TabPanel header="Medicamentos" :disabled="true" />
        <TabPanel header="Marcações" :disabled="true" />
        <TabPanel header="Subsistema" :disabled="true" />
        <TabPanel header="Contactos" :disabled="true" />
      </TabView>
    </div>
    <template #footer>
      <div class="flex justify-end space-x-4">
        <Button
          label="Cancelar"
          class="p-button-text text-sm"
          @click="visible = false"
        />
        <Button
          label="Gravar"
          icon="pi pi-save"
          class="text-sm"
          @click="save"
        /></div
    ></template>
  </Dialog>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import Dialog from "primevue/dialog";
import InputText from "primevue/inputtext";
import Dropdown from "primevue/dropdown";
import Button from "primevue/button";
import TabView from "primevue/tabview";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import TabPanel from "primevue/tabpanel";

const visible = ref(false);

const sexos = [
  { label: "Masculino", value: "Masculino" },
  { label: "Feminino", value: "Feminino" },
];

const form = ref({
  nome: "Jorge Manuel da Guedes Campos",
  dataNascimento: "16-08-1967",
  cc: "12345678",
  contribuinte: "",
  nutente: "987654321",
  sexo: "Masculino",
  processo: "",
  email: "",
  telefone: "912 345 678",
  morada: "Rua do Centro",
  codPostal: "1000-000",
  localidade: "Lisboa",
});

const exams = ref([
  { tipo: "ECG", data: "2025-05-10" },
  { tipo: "Holter", data: "2025-05-12" },
]);

function save() {
  console.log("Saving...", form.value);
  visible.value = false;
}
</script>

<style scoped>
:deep(.p-dialog-header) {
  font-size: 1.25rem;
  font-weight: bold;
}
</style>
