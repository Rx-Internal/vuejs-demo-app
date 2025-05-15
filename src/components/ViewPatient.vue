<template>
  <Dialog
    v-model:visible="visible"
    modal
    :style="{ width: '55vw' }"
    :header="$t('dialog.title')"
    :closable="true"
  >
    <div class="p-4 space-y-6">
      <!-- Tabs -->
      <TabView>
        <TabPanel :header="$t('tabs.personalData')">
          <!-- Personal Data Form -->
          <div class="bg-[#E3E5FF] rounded-xl px-4 py-2 font-semibold">
            {{ $t('sections.personalData') }}
          </div>

          <div class="mt-4">
            <div class="grid grid-cols-5 gap-4">
              <div class="col-span-3">
                <label class="block text-sm font-medium">
                  {{ $t('fields.fullName') }}
                  <span class="text-gray-400">{{ $t('labels.required') }}</span>
                </label>
                <InputText v-model="form.nome" class="w-full" />
              </div>
              <div class="col-span-2">
                <label class="block text-sm font-medium">
                  {{ $t('fields.birthDate') }}
                  <span class="text-gray-400">{{ $t('labels.required') }}</span>
                </label>
                <InputText v-model="form.dataNascimento" class="w-full" />
              </div>
              <div class="col-span-1">
                <label class="block text-sm font-medium">
                  {{ $t('fields.citizenCard') }}
                </label>
                <InputText v-model="form.cc" class="w-full" />
              </div>
              <div class="col-span-1">
                <label class="block text-sm font-medium">
                  {{ $t('fields.taxNumber') }}
                </label>
                <InputText v-model="form.contribuinte" class="w-full" />
              </div>
              <div class="col-span-1">
                <label class="block text-sm font-medium">
                  {{ $t('fields.patientNumber') }}
                </label>
                <InputText v-model="form.nutente" class="w-full" />
              </div>
              <div class="col-span-1">
                <label class="block text-sm font-medium">
                  {{ $t('fields.gender') }}
                </label>
                <Dropdown
                  v-model="form.sexo"
                  :options="SEXOS"
                  class="w-full"
                  optionLabel="label"
                  optionValue="value"
                  :placeholder="$t('placeholders.select')"
                />
              </div>
              <div class="col-span-1">
                <label class="block text-sm font-medium">
                  {{ $t('fields.process') }}
                </label>
                <InputText v-model="form.processo" class="w-full" />
              </div>
              <div class="col-span-3">
                <label class="block text-sm font-medium">
                  {{ $t('fields.email') }}
                </label>
                <InputText v-model="form.email" class="w-full" />
              </div>
              <div class="col-span-2">
                <label class="block text-sm font-medium">
                  {{ $t('fields.phone') }}
                </label>
                <InputText v-model="form.telefone" class="w-full" />
              </div>
              <div class="col-span-2">
                <label class="block text-sm font-medium">
                  {{ $t('fields.address') }}
                </label>
                <InputText v-model="form.morada" class="w-full" />
              </div>
              <div class="col-span-2">
                <label class="block text-sm font-medium">
                  {{ $t('fields.postalCode') }}
                </label>
                <InputText v-model="form.codPostal" class="w-full" />
              </div>
              <div class="col-span-1">
                <label class="block text-sm font-medium">
                  {{ $t('fields.city') }}
                </label>
                <InputText v-model="form.localidade" class="w-full" />
              </div>
            </div>
          </div>

          <!-- Exam History -->
          <div class="bg-[#E3E5FF] rounded-xl px-4 py-2 font-semibold my-6">
            {{ $t('sections.examHistory') }}
          </div>
          <div class="mt-6">
            <div class="flex gap-4 mb-2 text-sm text-primary">
              {{ $t('labels.examTypes') }}
              <span class="cursor-pointer font-medium">{{ $t('examTypes.all') }}</span>
              <span class="cursor-pointer text-blue-500 font-medium">{{ $t('examTypes.ecg') }}</span>
              <span class="cursor-pointer font-medium">{{ $t('examTypes.holter') }}</span>
            </div>
          </div>
        </TabPanel>

        <!-- Other tabs -->
        <TabPanel :header="$t('tabs.history')" :disabled="true" />
        <TabPanel :header="$t('tabs.clinicalData')" :disabled="true" />
        <TabPanel :header="$t('tabs.medications')" :disabled="true" />
        <TabPanel :header="$t('tabs.appointments')" :disabled="true" />
        <TabPanel :header="$t('tabs.subsystem')" :disabled="true" />
        <TabPanel :header="$t('tabs.contacts')" :disabled="true" />
      </TabView>
    </div>
    <template #footer>
      <div class="flex justify-end space-x-4">
        <Button
          :label="$t('buttons.cancel')"
          class="p-button-text text-sm"
          @click="visible = false"
        />
        <Button
          :label="$t('buttons.save')"
          icon="pi pi-save"
          class="text-sm"
          @click="save"
          iconPos="right"
        />
      </div>
    </template>
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

const visible = ref(false);

const SEXOS = [
  { label: 'Masculino', value: 'Masculino' },
  { label: 'Feminino', value: 'Feminino' },
];

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
