<template>
  <Dialog
    v-model:visible="visible"
    modal
    :style="{ width: '55vw' }"
    header="Criar utente"
    :closable="true"
  >
    <div class="p-4 space-y-6">
      <!-- Tabs -->
      <TabView>
        <TabPanel header="Dados Pessoais">
          <!-- Personal Data Form -->
          <div class="bg-[#E3E5FF] rounded-xl px-4 pb-2 mt-9 font-semibold">
            Dados pessoais
          </div>

          <div class="mt-4">
            <div class="grid grid-cols-5 gap-4">
              <div class="col-span-3">
                <label class="text-sm font-medium flex justify-between"
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
                  :options="SEXOS"
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
            Marcações
          </div>
          <div class="mt-6">
            <div class="container flex justify-between">
              <div class="row">
                <div class="label">Hora</div>
                <div class="value">11:00</div>
              </div>
              <div class="row">
                <div class="label">Data</div>
                <div class="value">21/03/2025</div>
              </div>
              <div class="row">
                <div class="label">Exame</div>
                <div class="value">ECG</div>
              </div>
              <div class="row">
                <div class="label">Médico consultor</div>
                <div class="value">Dr. Manuel Ruiz</div>
              </div>
            </div>
          </div>
        </TabPanel>

        <!-- Add other tabs -->
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
import { ref } from 'vue';
import Dialog from 'primevue/dialog';
import InputText from 'primevue/inputtext';
import Dropdown from 'primevue/dropdown';
import Button from 'primevue/button';
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import { SEXOS } from '../constants/common';
const visible = ref(false);
const form = ref({
  nome: 'Jorge Manuel da Guedes Campos',
  dataNascimento: '16-08-1967',
  cc: '12345678',
  contribuinte: '',
  nutente: '987654321',
  sexo: 'Masculino',
  processo: '',
  email: '',
  telefone: '912 345 678',
  morada: 'Rua do Centro',
  codPostal: '1000-000',
  localidade: 'Lisboa',
});

function save() {
  visible.value = false;
}
</script>

<style scoped>
:deep(.p-dialog-header) {
  font-size: 1.25rem;
  font-weight: bold;
}
</style>
