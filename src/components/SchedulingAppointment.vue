<template>
  <Drawer
    class="!w-auto md:!w-auto lg:!w-auto w-full max-w-5xl bg-white p-6 rounded-xl shadow-md"
    header="Agendar exame"
    position="right"
  >
    <!-- Prescrição Section -->
    <div class="flex flex-col gap-2">
      <div class="flex flex-wrap gap-4">
        <div class="flex flex-col flex-1 min-w-[200px]">
          <label class="text-sm font-medium text-gray-600 mb-1"
            >Médico prescritor</label
          >
          <Dropdown
            v-model="form.medicoPrescritor"
            :options="medicos"
            optionLabel="label"
            class="w-full"
            optionValue="value"
          />
        </div>
        <div class="flex flex-col flex-1 min-w-[200px]">
          <label class="text-sm font-medium text-gray-600 mb-1"
            >ID da prescrição</label
          >
          <InputText v-model="form.idPrescricao" class="w-full" />
        </div>
        <div class="flex flex-col flex-1 min-w-[200px]">
          <label class="text-sm font-medium text-gray-600 mb-1"
            >Carregar prescrição</label
          >
          <FileUpload
            mode="basic"
            name="prescricao"
            url="/api/upload"
            accept="image/*"
            :maxFileSize="1000000"
            :auto="true"
            chooseLabel="Escolher ficheiro"
            class="w-full p-button-outlined"
          />
        </div>
        <div class="flex flex-col flex-1 min-w-[200px]">
          <label class="text-sm font-medium text-gray-600 mb-1"
            >Senha de Kiosk</label
          >
          <InputText v-model="form.senhaKiosk" class="w-full" />
        </div>
      </div>
    </div>

    <!-- Exames Section -->
    <div class="flex flex-col gap-4 mt-4">
      <div class="bg-[#E3E5FF] rounded-xl px-4 py-2 font-semibold">Exames</div>
      <div class="flex flex-wrap gap-4 items-end">
        <div class="flex flex-col flex-1 min-w-[150px]">
          <label class="text-sm font-medium text-gray-600 mb-1">Hora</label>
          <Dropdown
            v-model="form.hora"
            :options="horas"
            optionLabel="label"
            class="w-full"
            variant="filled"
            optionValue="value"
          />
        </div>
        <div class="flex flex-col flex-1 min-w-[150px]">
          <label class="text-sm font-medium text-gray-600 mb-1">Data</label>
          <Calendar v-model="form.data" dateFormat="dd/mm/yy" class="w-full" />
        </div>
        <div class="flex flex-col flex-1 min-w-[150px]">
          <label class="text-sm font-medium text-gray-600 mb-1">Exame</label>
          <Dropdown
            v-model="form.exame"
            :options="exames"
            optionLabel="label"
            class="w-full"
            optionValue="value"
          />
        </div>
        <div class="flex flex-col flex-1 min-w-[200px]">
          <label class="text-sm font-medium text-gray-600 mb-1"
            >Médico consulta</label
          >
          <Dropdown
            v-model="form.medicoConsulta"
            :options="medicosConsulta"
            optionLabel="label"
            class="w-full"
            optionValue="value"
          />
        </div>
      </div>
      <div>
        <Button
          link
          label="Adicionar exame"
          icon="pi pi-plus-circle"
          class="text-blue-500 px-4 py-2"
        />
      </div>
    </div>

    <!-- Utente Section -->
    <div class="flex flex-col gap-4">
      <div
        class="bg-[#E3E5FF] rounded-xl px-4 font-semibold flex justify-between items-center"
      >
        <span>Utente</span>
        <Button
          label="Ler Cartão de Cidadão"
          link
          icon="pi pi-check-circle"
          class="text-blue-500 py-0"
        />
      </div>
      <div class="flex flex-col">
        <label class="text-sm font-medium text-gray-600 mb-1"
          >Nome completo</label
        >
        <InputText v-model="form.nomeCompleto" class="w-full" />
      </div>
      <div class="flex flex-wrap gap-4">
        <div class="flex flex-col flex-1 min-w-[150px]">
          <label class="text-sm font-medium text-gray-600 mb-1"
            >Data de nascimento</label
          >
          <InputText v-model="form.dataNascimento" class="w-full" />
        </div>
        <div class="flex flex-col flex-1 min-w-[150px]">
          <label class="text-sm font-medium text-gray-600 mb-1"
            >Cartão de cidadão</label
          >
          <InputText v-model="form.cartaoCidadao" class="w-full" />
        </div>
        <div class="flex flex-col flex-1 min-w-[150px]">
          <label class="text-sm font-medium text-gray-600 mb-1">Telefone</label>
          <InputText v-model="form.telefone" class="w-full" />
        </div>
      </div>
      <div class="flex items-end">
        <Button
          label="Pesquisar utente"
          icon="pi pi-search"
          class="bg-primary text-white px-4 py-2 rounded ml-auto"
        />
      </div>
    </div>

    <!-- Footer -->
    <template #footer>
      <div
        class="flex flex-col md:flex-row md:items-center justify-between mt-6 border-t pt-4 gap-4"
      >
        <div class="flex items-center">
          <Checkbox
            v-model="form.confirmado"
            :binary="true"
            inputId="confirm"
          />
          <label for="confirm" class="ml-2">Confirmo os dados do utente</label>
        </div>
        <div class="flex gap-2">
          <Button label="Cancelar" link class="text-blue-500" />
          <Button label="Agendar" class="bg-blue-500 text-white" />
          <Button
            label="Agendar e Admitir"
            disabled
            class="bg-gray-400 text-white"
          />
        </div>
      </div>
    </template>
  </Drawer>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import Dropdown from "primevue/dropdown";
import Calendar from "primevue/calendar";
import Checkbox from "primevue/checkbox";
import FileUpload from "primevue/fileupload";
import Drawer from "primevue/drawer";

const form = ref({
  medicoPrescritor: "",
  idPrescricao: "",
  senhaKiosk: "",
  hora: "11:00",
  data: "10/04/2025",
  exame: "ECG",
  medicoConsulta: "auto",
  nomeCompleto: "",
  dataNascimento: "",
  cartaoCidadao: "",
  telefone: "",
  confirmado: false,
});

const medicos = [{ label: "Dr. Silva", value: "silva" }];
const horas = [
  { label: "11:00", value: "11:00" },
  { label: "11:30", value: "11:30" },
  { label: "12:00", value: "12:00" },
  { label: "12:30", value: "12:30" },
  { label: "13:00", value: "13:00" },
  { label: "13:30", value: "13:30" },
];
const exames = [
  { label: "ECG", value: "ECG" },
  { label: "ECOG", value: "ECOG" },
  { label: "PE", value: "PE" },
  { label: "MAPA", value: "MAPA" },
  { label: "Holter", value: "Holter" },
];
const medicosConsulta = [{ label: "Automático", value: "auto" }];
</script>

<style scoped>
.p-fileupload-choose-button {
  background: #4f39f6 !important;
  color: #ffffff;
}
.p-button {
  background-color: #4f39f6;
  color: #ffffff;
}
.p-button-link {
  background-color: #ffffff00;
  color: #4f39f6;
}
</style>
