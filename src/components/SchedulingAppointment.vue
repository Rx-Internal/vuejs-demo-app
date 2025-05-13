<template>
  <Drawer
    class="!w-auto md:!w-auto lg:!w-auto w-full max-w-5xl bg-white p-6 rounded-xl shadow-md"
    header="Agendar exame"
    position="right"
  >
    <!-- Prescrição Section -->
    <div class="flex flex-col gap-2">
      <div class="flex flex-wrap items-end gap-4">
        <div class="flex flex-col flex-1 min-w-[200px]">
          <div class="flex justify-between items-center mb-1">
            <label class="text-sm font-medium text-[#0C163D] mb-1"
              >Médico prescritor</label
            >
            <Tag
              severity="secondary"
              value="Opcional"
              rounded
              :style="{ fontSize: '12px', fontWeight: 'normal' }"
            ></Tag>
          </div>
          <Dropdown
            v-model="form.medicoPrescritor"
            :options="MEDICOS"
            optionLabel="label"
            class="w-full"
            optionValue="value"
          />
        </div>
        <div class="flex flex-col flex-1 min-w-[200px]">
          <label class="text-sm font-medium text-[#0C163D] mb-1"
            >ID da prescrição</label
          >
          <InputText v-model="form.idPrescricao" class="w-full" />
        </div>
        <div class="flex flex-col flex-1 min-w-[200px]">
          <div class="flex justify-between items-center mb-1">
            <label class="text-sm font-medium text-[#0C163D] mb-1"
              >Carregar prescrição</label
            >
            <Tag
              severity="secondary"
              value="Opcional"
              rounded
              :style="{ fontSize: '12px', fontWeight: 'normal' }"
            ></Tag>
          </div>
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
          <label class="text-sm font-medium text-[#0C163D] mb-1"
            >Senha de Kiosk</label
          >
          <InputText v-model="form.senhaKiosk" class="w-full" />
        </div>
      </div>
    </div>

    <!-- Exames Section -->
    <div class="flex flex-col gap-4">
      <div class="bg-[#E3E5FF] rounded-xl px-4 py-2 font-semibold mt-9">
        Exames
      </div>
      <div class="flex flex-wrap gap-4 items-end">
        <div class="flex flex-col flex-1 min-w-[150px]">
          <label class="text-sm font-medium text-[#0C163D] mb-1">Hora</label>
          <Dropdown
            v-model="form.hora"
            :options="HORAS"
            optionLabel="label"
            class="w-full"
            variant="filled"
            optionValue="value"
          />
        </div>
        <div class="flex flex-col flex-1 min-w-[150px]">
          <label class="text-sm font-medium text-[#0C163D] mb-1">Data</label>
          <Calendar v-model="form.data" dateFormat="dd/mm/yy" class="w-full" />
        </div>
        <div class="flex flex-col flex-1 min-w-[150px]">
          <label class="text-sm font-medium text-[#0C163D] mb-1">Exame</label>
          <Dropdown
            v-model="form.exame"
            :options="EXAMES"
            optionLabel="label"
            class="w-full"
            optionValue="value"
          />
        </div>
        <div class="flex flex-col flex-1 min-w-[200px]">
          <div class="flex justify-between items-center mb-1">
            <label class="text-sm font-medium text-[#0C163D] mb-1"
              >Médico consulta</label
            >
            <Tag
              severity="secondary"
              value="Opcional"
              rounded
              :style="{ fontSize: '12px', fontWeight: 'normal' }"
            ></Tag>
          </div>
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
          class="text-[#4f39f6] px-4 py-2 text-sm"
        />
      </div>
    </div>

    <!-- Utente Section -->
    <div class="flex flex-col gap-4 mt-9">
      <div
        class="bg-[#E3E5FF] rounded-xl px-4 font-semibold flex justify-between items-center"
      >
        <span>Utente</span>
        <Button
          label="Ler Cartão de Cidadão"
          link
          icon="pi pi-check-circle"
          class="text-[#4f39f6] py-0 font-extrabold"
          style="font-weight: bolder"
          @click="isUtente = !isUtente"
        />
      </div>
      <div v-if="isUtente" class="">
        <div class="flex flex-col mt-4">
          <label class="text-sm font-medium text-[#0C163D] mb-1"
            >Nome completo</label
          >
          <InputText v-model="form.nomeCompleto" class="w-full" />
        </div>
        <div class="flex flex-wrap gap-4 mt-4">
          <div class="flex flex-col flex-1 min-w-[150px]">
            <label class="text-sm font-medium text-[#0C163D] mb-1"
              >Data de nascimento</label
            >
            <InputText v-model="form.dataNascimento" class="w-full" />
          </div>
          <div class="flex flex-col flex-1 min-w-[150px]">
            <label class="text-sm font-medium text-[#0C163D] mb-1"
              >Cartão de cidadão</label
            >
            <InputText v-model="form.cartaoCidadao" class="w-full" />
          </div>
          <div class="flex flex-col flex-1 min-w-[150px]">
            <label class="text-sm font-medium text-[#0C163D] mb-1"
              >Telefone</label
            >
            <InputText v-model="form.telefone" class="w-full" />
          </div>
        </div>
        <div class="flex items-end">
          <Button
            label="Pesquisar utente"
            icon="pi pi-search"
            class="bg-primary text-white px-4 py-2 rounded ml-auto mt-4"
            iconPos="right"
          />
        </div>
      </div>
      <div v-else>
        <div class="my-4 text-sm">
          <h2 class="font-medium text-base my-6">Dados pessoais</h2>
          <div class="grid grid-cols-5 gap-6">
            <div class="col-span-3">
              <label class="font-medium">Nome Completo</label>
              <p>Jorge Manuel da Guedes Campos</p>
            </div>
            <div class="col-span-2">
              <label class="font-medium">Data de nascimento</label>
              <p>16-08-1967</p>
            </div>
            <div class="col-span-1">
              <label class="font-medium">Cartão de cidadão</label>
              <p>12345678</p>
            </div>
            <div class="col-span-1">
              <label class="font-medium">Contribuinte</label>
              <p>987654321</p>
            </div>
            <div class="col-span-1">
              <label class="font-medium">Utente de Saúde</label>
              <p>987654321</p>
            </div>
            <div class="col-span-1">
              <label class="font-medium">Sexo</label>
              <p>Masculino</p>
            </div>
            <div class="col-span-1">
              <label class="font-medium">Processo</label>
              <p>-</p>
            </div>
            <div class="col-span-3">
              <label class="font-medium">Email</label>
              <p>email@example.com</p>
            </div>
            <div class="col-span-2">
              <label class="font-medium">Telefone</label>
              <p>912 345 678</p>
            </div>
            <div class="col-span-2">
              <label class="font-medium">Morada</label>
              <p>Rua do Centro</p>
            </div>
            <div class="col-span-1">
              <label class="font-medium">Código-Postal</label>
              <p>1000-000</p>
            </div>
            <div class="col-span-1">
              <label class="font-medium">Localidade</label>
              <p>Lisboa</p>
            </div>
          </div>
        </div>

        <div class="my-4 text-sm">
          <h2 class="font-medium text-base my-4">Contactos de emergência</h2>
          <div class="grid grid-cols-2 gap-4">
            <div class="col-span-1">
              <label class="font-medium">Nome Completo</label>
              <p>Maria Jorge Braga Rebelo Ticas</p>
            </div>
            <div class="col-span-1">
              <label class="font-medium">Telefone</label>
              <p>912 345 678</p>
            </div>
          </div>
        </div>

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
          <Button label="Cancelar" link class="text-[#4f39f6]" />
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
import { MEDICOS, HORAS, EXAMES } from "../data/common";
import Tag from "primevue/tag";
const isUtente = ref(true)
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
.p-button:disabled {
  background-color: #b9bcc0;
  border-color: #b9bcc0;
}
@media (max-width: 768px) {
  /* For smaller screens, override max width */
  .p-drawer {
    width: 780px !important;
  }
}
</style>
