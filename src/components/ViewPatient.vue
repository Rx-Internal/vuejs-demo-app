<template>
  <FormDialog class="rounded-xl" v-model="visible" :title="$t('dialog.title')">
    <div class="">
      <!-- Custom Tab Navigation -->
      <div class="custom-tabs">
        <div
          v-for="(tab, index) in tabs"
          :key="index"
          :class="['tab-item', { active: activeTab === index }]"
          @click="scrollToSection(tab.ref)"
        >
          {{ tab.label }}
        </div>
      </div>

      <!-- Single Scrollable Content Container -->
      <div ref="scrollContainer" class="scroll-container">
        <!-- Personal Data Section -->
        <div id="dados-pessoais" ref="dadosPessoaisRef" class="section-header">
          Dados pessoais
        </div>

        <div class="mt-4">
          <div class="grid grid-cols-5 gap-4">
            <div class="col-span-3">
              <BaseInput
                :label="$t('form.fullName')"
                v-model="form.nome"
                class=""
              />
            </div>
            <div class="col-span-2">
              <BaseInput
                :label="$t('form.birthDate')"
                v-model="form.dataNascimento"
                class=""
              />
            </div>
            <div class="col-span-1">
              <BaseInput
                :label="$t('form.idCard')"
                v-model="form.cc"
                class=""
              />
            </div>
            <div class="col-span-1">
              <BaseInput
                :label="$t('form.taxNumber')"
                v-model="form.contribuinte"
                class=""
              />
            </div>
            <div class="col-span-1">
              <BaseInput
                :label="$t('form.patientNumber')"
                v-model="form.nutente"
                class=""
              />
            </div>
            <div class="col-span-1">
              <label class="form-label">
                {{ $t('form.gender') }}
              </label>
              <BaseDropdown
                v-model="form.sexo"
                :options="SEXOS"
                optionLabel="label"
                optionValue="value"
                :placeholder="$t('form.select')"
                class="p-dropdown"
              />
            </div>
            <div class="col-span-1">
              <BaseInput
                :label="$t('form.process')"
                v-model="form.processo"
                class=""
              />
            </div>
            <div class="col-span-3">
              <BaseInput
                :label="$t('form.email')"
                v-model="form.email"
                class=""
              />
            </div>
            <div class="col-span-2">
              <BaseInput
                :label="$t('form.phone')"
                v-model="form.telefone"
                class=""
              />
            </div>
            <div class="col-span-2">
              <BaseInput
                :label="$t('form.address')"
                v-model="form.morada"
                class=""
              />
            </div>
            <div class="col-span-2">
              <BaseInput
                :label="$t('form.postalCode')"
                v-model="form.codPostal"
                class=""
              />
            </div>
            <div class="col-span-1">
              <BaseInput
                :label="$t('form.postalCode')"
                v-model="form.localidade"
                class=""
              />
            </div>
          </div>
        </div>

        <!-- Exam History -->
        <div id="historico" ref="historicoRef" class="section-header mt-6">
          Histórico de exames
        </div>

        <div class="mt-4">
          <div class="exam-types">
            <span class="label">Tipos de exame</span>
            <span class="type selected">Todos</span>
            <span class="type">ECG</span>
            <span class="type">Holter</span>
          </div>

          <div class="exam-table mt-4">
            <div class="exam-header">
              <div class="exam-col">Exame</div>
              <div class="exam-col text-right">
                Agendado para
                <i class="pi pi-chevron-down"></i>
              </div>
            </div>

            <div v-for="(exam, index) in exams" :key="index" class="exam-row">
              <div class="exam-col">{{ exam.type }}</div>
              <div class="exam-col text-right">
                {{ exam.date }}
                <i class="pi pi-external-link ml-2"></i>
              </div>
            </div>
          </div>
        </div>

        <!-- Clinical Data -->
        <div
          id="dados-clinicos"
          ref="dadosClinicosRef"
          class="section-header mt-6"
        >
          Dados clínicos
        </div>

        <div class="mt-4 form-grid">
          <div class="field-group">
            <label class="field-label"> Altura (cm) </label>
            <InputText v-model="form.altura" class="w-full" />
          </div>
          <div class="field-group">
            <label class="field-label"> Peso (kg) </label>
            <InputText v-model="form.peso" class="w-full" />
          </div>
          <div class="field-group col-span-3">
            <label class="field-label"> Alergias </label>
            <InputText v-model="form.alergias" class="w-full" />
          </div>
          <div class="field-group col-span-5">
            <label class="field-label"> Observações </label>
            <Textarea v-model="form.observacoes" rows="3" class="w-full" />
          </div>
        </div>

        <!-- Medications -->
        <div
          id="medicamentos"
          ref="medicamentosRef"
          class="section-header mt-6"
        >
          Medicamentos
        </div>

        <div class="mt-4">
          <div class="field-group col-span-5">
            <BaseInput
              label="Medicação atual"
              v-model="form.medicacao"
              class="w-full"
            />
          </div>

          <div class="mt-3">
            <a href="#" class="add-medication" @click.prevent="addMedication">
              <i class="pi pi-plus-circle"></i>
              Inserir última medicação
            </a>
          </div>

          <div class="medication-table mt-3">
            <div
              v-for="(med, index) in medications"
              :key="index"
              class="medication-row"
            >
              <div class="medication-col">{{ med.date }}</div>
              <div class="medication-col">{{ med.name }}</div>
            </div>
          </div>
        </div>

        <!-- Appointments -->
        <div id="marcacoes" ref="marcacoesRef" class="section-header mt-6">
          Marcações
        </div>

        <div class="mt-4">
          <div class="appointment-table">
            <div class="appointment-header">
              <div class="appointment-col">Hora</div>
              <div class="appointment-col">Data</div>
              <div class="appointment-col">Exame</div>
              <div class="appointment-col">Médico consulta</div>
            </div>

            <div
              v-for="(apt, index) in appointments"
              :key="index"
              class="appointment-row"
            >
              <div class="appointment-col">{{ apt.time }}</div>
              <div class="appointment-col">{{ apt.date }}</div>
              <div class="appointment-col">{{ apt.exam }}</div>
              <div class="appointment-col">{{ apt.doctor }}</div>
            </div>
          </div>
        </div>

        <!-- Subsistema -->
        <div id="subsistema" ref="subsistemaRef" class="section-header mt-6">
          Subsistema
        </div>

        <div class="mt-4">
          <a href="#" class="add-insurance" @click.prevent="addInsurance">
            <i class="pi pi-plus-circle"></i>
            Adicionar seguro
          </a>
        </div>

        <!-- Emergency Contacts -->
        <div id="contactos" ref="contactosRef" class="section-header mt-6">
          Contactos de emergência
        </div>

        <div class="mt-4 form-grid">
          <div class="field-group col-span-3">
            <BaseInput
              label="Nome Completo"
              v-model="form.emergencyName"
              class="w-full"
            />
          </div>
          <div class="field-group col-span-2">
            <label class="field-label"> Telefone </label>
            <div class="flex">
              <InputText v-model="form.emergencyPhone" class="w-full" />
              <BaseButton
                icon="pi pi-trash"
                variant="danger"
                outlined
                class="ml-2"
                @click="removeEmergencyContact"
              />
            </div>
          </div>
        </div>

        <div class="mt-3">
          <a
            href="#"
            class="add-emergency-contact"
            @click.prevent="addEmergencyContact"
          >
            <i class="pi pi-plus-circle"></i>
            Adicionar contacto de emergência
          </a>
        </div>
      </div>
    </div>
    <template #footer>
      <div class="flex justify-end space-x-4">
        <BaseButton label="Cancelar" text @click="cancel" />
        <BaseButton
          label="Gravar"
          icon="pi pi-save"
          iconPos="right"
          variant="primary"
          class="save-button"
          @click="save"
        />
      </div>
    </template>
  </FormDialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import FormDialog from './common/FormDialog.vue';
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import BaseButton from '../components/common/BaseButton.vue';
import BaseInput from '../components/common/BaseInput.vue';
import BaseDropdown from '../components/common/BaseDropdown.vue';
import { SEXOS } from '../constants/common';

const visible = ref(true);
const activeTab = ref(0);
const scrollContainer = ref(null);

// References to sections
const dadosPessoaisRef = ref(null);
const historicoRef = ref(null);
const dadosClinicosRef = ref(null);
const medicamentosRef = ref(null);
const marcacoesRef = ref(null);
const subsistemaRef = ref(null);
const contactosRef = ref(null);

// Tab definitions
const tabs = [
  { label: 'Dados Pessoais', ref: 'dados-pessoais' },
  { label: 'Histórico', ref: 'historico' },
  { label: 'Dados Clínicos', ref: 'dados-clinicos' },
  { label: 'Medicamentos', ref: 'medicamentos' },
  { label: 'Marcações', ref: 'marcacoes' },
  { label: 'Subsistema', ref: 'subsistema' },
  { label: 'Contactos', ref: 'contactos' },
];

// Function to scroll to section when tab is clicked
function scrollToSection(sectionId) {
  const targetElement = document.getElementById(sectionId);
  if (targetElement && scrollContainer.value) {
    // Find the tab index
    const tabIndex = tabs.findIndex(tab => tab.ref === sectionId);
    if (tabIndex !== -1) {
      activeTab.value = tabIndex;
    }

    // Scroll to the section
    scrollContainer.value.scrollTo({
      top: targetElement.offsetTop - 160, // Increased offset to show more content above the section
      behavior: 'smooth',
    });
  }
}

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
  altura: '185',
  peso: '62.3',
  alergias: '',
  observacoes: '',
  medicacao: 'Lorenin',
  emergencyName: 'Maria Jorge Braga Rebelo Ticas',
  emergencyPhone: '912 345 678',
});

const initialForm = JSON.parse(JSON.stringify(form.value)); // Store initial form state

const exams = ref([
  { type: 'ECG', date: '02-19-2023 11:46' },
  { type: 'ECG', date: '02-21-2023 17:24' },
  { type: 'ECG', date: '02-14-2022 10:43' },
  { type: 'ECG', date: '02-17-2021 09:11' },
  { type: 'Holter', date: '11-03-2020 11:46' },
  { type: 'ECG', date: '02-26-2020 11:53' },
]);

const medications = ref([
  { date: '21/03/2025 9:35', name: 'Lorenin' },
  { date: '11/02/2025 11:24', name: 'Candesartan + HDTZ, Ezetimiba' },
]);

const appointments = ref([
  { time: '11:00', date: '21/03/2025', exam: 'ECG', doctor: 'Dr. Manuel Ruiz' },
]);

const emergencyContacts = ref([
  { name: 'Maria Jorge Braga Rebelo Ticas', phone: '912 345 678' },
]);

function formatDate(date = new Date()) {
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');

  return `${day}/${month}/${year} ${hours}:${minutes}`;
}

function addMedication() {
  if (form.value.medicacao.trim()) {
    const currentDate = formatDate();
    medications.value.unshift({
      date: currentDate,
      name: form.value.medicacao,
    });
  }
}

function addInsurance() {
  // In a real app, this would likely open a dialog to input insurance details
  alert('Funcionalidade para adicionar seguro estará disponível em breve.');
}

function addEmergencyContact() {
  emergencyContacts.value.push({
    name: '',
    phone: '',
  });
  // Scroll to contacts section after adding
  scrollToSection('contactos');
}

function removeEmergencyContact(index = 0) {
  if (emergencyContacts.value.length > 0) {
    emergencyContacts.value.splice(index, 1);
  }
}

function save() {
  // In a real app, this would save the form data to a backend
  alert('Dados do utente guardados com sucesso!');
  visible.value = false;
}

function cancel() {
  // Reset form to initial values
  form.value = JSON.parse(JSON.stringify(initialForm));
  visible.value = false;
}
</script>

<style scoped>
.patient-dialog :deep(.p-dialog-header) {
  padding: 1rem 1.5rem;
  border-bottom: 1px solid #e5e7eb;
}

.patient-dialog :deep(.p-dialog-content) {
  padding: 0;
  max-height: 80vh;
}

/* Custom Tabs */
.custom-tabs {
  display: flex;
  border-bottom: 1px solid #e5e7eb;
  padding: 0 1rem;
  background: white;
  position: sticky;
  top: 0;
  z-index: 10;
}

.tab-item {
  padding: 0.75rem 0;
  margin-right: 1rem;
  color: #64748b;
  font-weight: 500;
  cursor: pointer;
  border-bottom: 2px solid transparent;
}

.tab-item.active {
  color: #4f46e5;
  border-bottom: 2px solid #4f46e5;
}

.scroll-container {
  max-height: 70vh;
  overflow-y: auto;
  padding: 1rem;
  padding-right: 0.5rem;
  scrollbar-width: thin;
}

.scroll-container::-webkit-scrollbar {
  width: 6px;
}

.scroll-container::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;
}

.scroll-container::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 10px;
}

.scroll-container::-webkit-scrollbar-thumb:hover {
  background: #555;
}

.patient-dialog :deep(.p-dialog-footer) {
  padding: 1rem 1.5rem;
  border-top: 1px solid #e5e7eb;
}

.section-header {
  background-color: #e3e5ff;
  border-radius: 0.75rem;
  padding: 0.5rem 1rem;
  font-weight: 600;
  font-size: 0.875rem;
  color: #1e293b;
  scroll-margin-top: 80px;
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
}

.field-group {
  margin-bottom: 0.5rem;
}

.field-label {
  display: block;
  font-size: 0.8125rem;
  font-weight: 500;
  margin-bottom: 0.375rem;
  color: #1e293b;
}

.required {
  color: #94a3b8;
  font-weight: normal;
  margin-left: 0.25rem;
  font-size: 0.75rem;
}

.col-span-2 {
  grid-column: span 2;
}

.col-span-3 {
  grid-column: span 3;
}

.col-span-5 {
  grid-column: span 5;
}

.exam-types {
  display: flex;
  align-items: center;
  font-size: 0.8125rem;
}

.exam-types .label {
  margin-right: 1rem;
  color: #4f46e5;
}

.exam-types .type {
  margin-right: 1rem;
  cursor: pointer;
  color: #64748b;
}

.exam-types .type.selected {
  font-weight: 500;
  color: #4f46e5;
}

.exam-table,
.medication-table,
.appointment-table {
  border-spacing: 0;
  width: 100%;
}

.exam-header,
.appointment-header {
  display: flex;
  padding: 0.75rem 0;
  font-size: 0.8125rem;
  font-weight: 500;
  color: #64748b;
  border-bottom: 1px solid #e5e7eb;
}

.exam-row,
.medication-row,
.appointment-row {
  display: flex;
  padding: 0.5rem 0;
  font-size: 0.8125rem;
  color: #1e293b;
  border-bottom: 1px solid #e5e7eb;
}

.exam-col,
.medication-col,
.appointment-col {
  flex: 1;
}

.text-right {
  text-align: right;
}

.add-medication,
.add-insurance,
.add-emergency-contact {
  display: flex;
  align-items: center;
  color: #4f46e5;
  font-size: 0.8125rem;
  text-decoration: none;
}

.add-medication i,
.add-insurance i,
.add-emergency-contact i {
  margin-right: 0.5rem;
  font-size: 1rem;
}

.save-button {
  background-color: #4f46e5;
  border-color: #4f46e5;
}

.save-button:hover {
  background-color: #4338ca;
  border-color: #4338ca;
}
</style>
