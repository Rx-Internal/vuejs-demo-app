<template>
  <div class="flex h-screen text-sm font-sans bg-white text-gray-800">
    <!-- Sidebar -->
    <aside class="w-100 border-r border-[#ECEEF1] px-9 py-9 space-y-8">
      <!-- Agenda Header -->
      <div>
        <h2
          class="text-2xl font-extrabold flex items-center gap-2 mb-4 text-[#0C163D]"
        >
          <i
            class="pi pi-calendar text-[#0C163D]"
            style="font-size: 1.3rem"
          ></i>
          {{ $t('agenda') }}
        </h2>
        <label class="block text-xs font-extrabold mb-2 mt-12 text-[#0C163D]">{{
          $t('agenda')
        }}</label>
        <Dropdown
          v-model="selectedAgenda"
          :options="['ECG', 'ECO', 'Holter', 'MAPA', 'PE']"
          class="w-full"
        />
      </div>
      <!-- Calendar -->
      <div class="mt-12">
        <label class="block text-xs font-extrabold mb-3.5">{{
          $t('calendar')
        }}</label>
        <div
          class="flex justify-between items-center mb-3.5 text-sm font-semibold"
        >
          <Button
            icon="pi pi-chevron-left"
            variant="outlined"
            :pt="{ icon: { class: 'text-xl ' } }"
            @click="prevMonth"
          />
          <span class="text-gray-700 text-xl">{{ formattedMonth }}</span>
          <Button
            icon="pi pi-chevron-right"
            variant="outlined"
            style="font-size: 0.5rem"
            @click="nextMonth"
          />
        </div>

        <div
          class="grid grid-cols-7 gap-2 text-center text-xs text-gray-500 mb-3.5"
        >
          <span
            v-for="d in ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb']"
            :key="d"
            >{{ $t(d) }}</span
          >
        </div>
        <div
          class="grid grid-cols-7 gap-2 text-center text-xs text-gray-700 hover:text-black"
        >
          <div
            v-for="day in monthDays"
            :key="day.date.toString()"
            class="rounded-lg px-2 cursor-pointer hover:bg-indigo-50 w-fit"
            :class="{
              'bg-indigo-600 text-white  font-bold hover:bg-indigo-600':
                day.date.isSame(selectedDate, 'day'),
              'pointer-events-none opacity-50': !(
                day.date.month() === currentMonth.month() && day.taskCount
              ),
              'cursor-pointer':
                day.date.month() === currentMonth.month() && day.taskCount,
            }"
            @click="selectedDate = day.date"
          >
            <div
              class="font-extrabold text-sm"
              v-show="day.date.month() === currentMonth.month()"
            >
              {{ day.date.date() }}
            </div>
            <div
              v-if="day.taskCount > 0"
              :class="{
                ' text-white  ': day.date.isSame(selectedDate, 'day'),
              }"
              class="text-xs flex border-t-2"
            >
              <div class="p-0.5">{{ day.taskCount }}</div>
              |
              <div class="p-0.5">
                {{
                  agendaStore.items.filter(t => t.status === 'Validado').length
                }}
              </div>
            </div>
            <div v-else class="h-5"></div>
          </div>
        </div>
      </div>
    </aside>

    <!-- Main Content -->
    <main class="flex-1 p-9 overflow-y-auto">
      <div class="flex justify-between items-center mb-9">
        <div class="flex justify-between align-middle items-center">
          <Button variant="outlined" style="font-size: 0.5rem">{{
            $t('today')
          }}</Button>
          <div class="flex items-center gap-2">
            <Button icon="pi pi-chevron-left" text @click="previousDay" />
            <Button icon="pi pi-chevron-right" text @click="nextDay" />

            <div>
              <h2 class="text-lg font-semibold">
                {{ selectedDate.format('D [de] MMMM [de] YYYY') }}
              </h2>
              <p class="text-xs text-gray-500">
                {{ selectedDate.format('dddd') }}
              </p>
            </div>
          </div>
        </div>
        <button
          class="bg-gradient-to-r from-indigo-600 to-indigo-600 text-white font-semibold px-4 py-3 rounded-xl flex items-center gap-2 shadow-md hover:opacity-90"
          @click="visibleLeft = true"
        >
          {{ $t('scheduleExam') }}
          <i class="pi pi-plus-circle"></i>
        </button>
      </div>

      <!-- Tags -->
      <div
        v-for="(appointments, hour) in groupedAppointments"
        :key="hour"
        class="space-y-4"
      >
        <div
          class="flex items-center gap-6 mb-4 px-4 py-2 bg-gray-100 rounded-[10px]"
        >
          <span class="font-semibold">{{ $t(hour) }}</span>
          <span class="text-xs"
            >{{ $t('total') }} {{ totalAppointments(appointments) }}</span
          >
          <AppointmentStatusBadge
            :label="$t('scheduled')"
            color="#6C57DB"
            :count="countAppointmentsByStatus(appointments, 'Admitido')"
          />
          <AppointmentStatusBadge
            :label="$t('completed')"
            color="#FDCC12"
            :count="countAppointmentsByStatus(appointments, 'Realizado')"
          />
          <AppointmentStatusBadge
            :label="$t('validatedPlural')"
            color="#44CEA0"
            :count="countAppointmentsByStatus(appointments, 'Validado')"
          />
        </div>

        <div v-for="(appt1, index) in appointments" :key="index">
          <span class="text-xs text-gray-400"> {{ index }}</span>
          <div
            v-if="appt1.length"
            v-for="(appt, index) in appt1"
            :key="index"
            class="flex items-center align-middle justify-between border border-[#ECEEF1] hover:bg-[#f3f4f5] rounded-lg pl-1 pr-4 py-1 my-1"
          >
            <div class="flex items-start gap-4">
              <div
                v-if="appt.status === 'Validado'"
                class="h-6 w-1.5 rounded-xl bg-[#44CEA0] border-1 border-[#44CEA0]"
              ></div>
              <div
                v-else-if="appt.status === 'Realizado'"
                class="h-6 w-1.5 rounded-xl bg-[#FDCC12] border-1 border-[#FDCC12]"
              ></div>
              <div
                v-else
                class="h-6 w-1.5 rounded-xl bg-[#6C57DB] border-1 border-[#6C57DB]"
              ></div>

              <div class="w-14 font-bold text-gray-400">
                {{ appt.time || '08:00' }}
              </div>
              <div>
                <div class="font-semibold">
                  {{ appt.name }}
                  <span class="text-xs text-gray-400 ml-2"
                    >({{ appt.age }} {{ $t('years') }})</span
                  >
                </div>
              </div>
            </div>

            <div class="flex items-center justify-between w-1/2 gap-4">
              <div class="text-xs text-gray-500 flex gap-4 mt-1">
                <span>{{ $t('citizenCardShort') }} {{ appt.cc }}</span>
                <span>{{ $t('healthNumberShort') }} {{ appt.sns }}</span>
                <span
                  ><i
                    class="pi pi-phone"
                    :style="{ fontSize: '12px', fontWeight: 'bolder' }"
                  ></i>
                  {{ appt.phone }}</span
                >
              </div>
              <span v-if="appt.pin" class="text-sm font-bold"
                >{{ appt.pin
                }}<i
                  class="pi pi-tag text-blue-700 font-bold px-1"
                  :style="{ fontSize: '12px', fontWeight: 'bolder' }"
                ></i
              ></span>
              <div v-else class="px-4"></div>
              <span v-if="appt.pin" class="text-xs text-gray-500">{{
                appt.time
              }}</span>
              <div v-else class="px-4"></div>

              <span class="text-xs text-gray-500">{{ $t('exam') }}</span>
              <span :value="appt.status" :class="statusColor(appt.status)">
                <div
                  v-if="appt.status !== 'Admitido'"
                  class="flex items-center justify-center w-24 bg-gray-50 rounded-sm px-auto"
                >
                  <div
                    :class="statusbgColor(appt.status)"
                    class="h-1.5 w-1.5 rounded-4xl mr-2"
                  ></div>
                  <div>
                    {{ $t(appt.status) }}
                  </div>
                </div>
                <div
                  class="cursor-pointer w-24 flex items-center justify-center"
                  @click="AppointmentTab = true"
                  v-else
                >
                  {{ $t('admit') }}
                </div>
              </span>
              <div></div>
              <AppointmentActions
                v-if="appt.status === 'Admitido'"
              ></AppointmentActions>
              <i
                class="pi pi-print text-xs text-[#375FD9]"
                :style="{ fontSize: '12px', fontWeight: 'bolder' }"
                v-else-if="appt.status === 'Validado'"
              ></i>
              <i
                class="pi pi-user text-xs text-[#375FD9]"
                :style="{ fontSize: '12px', fontWeight: 'bolder' }"
                v-else-if="appt.pin"
              ></i>
              <div v-else class="w-3"></div>
            </div>
          </div>
          <div
            v-if="!appt1.length"
            class="flex justify-center cursor-pointer text-xs items-center align-middle justify-between border border-white text-white hover:text-gray-700 hover:border-[#F4F5F7] hover:bg-[#F4F5F7] rounded-lg pl-1 pr-4 py-1.5 my-1"
            @click="visibleLeft = true"
          >
            {{ $t('scheduleQuickly') }}
            <i
              class="pi pi-plus-circle px-2 font-bold text-xl"
              :style="{ fontSize: '12px', fontWeight: 'bolder' }"
            ></i>
          </div>
        </div>
      </div>
    </main>
    <!-- Add Task Dialog -->
    <Dialog
      v-model:visible="showForm"
      header="Agendar novo exame"
      :modal="true"
      :style="{ width: '30rem' }"
    >
      <div class="space-y-3 text-sm">
        <InputText v-model="newTask.name" class="w-full" placeholder="Nome" />
        <InputText v-model="newTask.age" class="w-full" placeholder="Idade" />
        <InputText
          v-model="newTask.cc"
          class="w-full"
          placeholder="Cartão de Cidadão"
        />
        <InputText
          v-model="newTask.sns"
          class="w-full"
          placeholder="Número SNS"
        />
        <InputText
          v-model="newTask.phone"
          class="w-full"
          placeholder="Telefone"
        />
        <Dropdown
          v-model="newTask.type"
          :options="['ECG', 'Raio-X']"
          class="w-full"
          placeholder="Tipo"
        />
        <Dropdown
          v-model="newTask.status"
          :options="['Validado', 'Realizado', 'Admitido', 'Requisitado']"
          class="w-full"
          placeholder="Estado"
        />
      </div>
      <template #footer>
        <Button label="Cancelar" text @click="showForm = false" />
        <Button label="Salvar" @click="addTask" />
      </template>
    </Dialog>
  </div>

  <SchedulingAppointment v-model:visible="visibleLeft"></SchedulingAppointment>
  <ViewPatient v-model:visible="ViewPatientTab"></ViewPatient>
  <Appointment v-model:visible="AppointmentTab"></Appointment>
  <AddPatient v-model:visible="AddPatientTab"></AddPatient>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();

function toggleLocale() {
  locale.value = locale.value === 'en' ? 'pt' : 'en';
}
import { ref, computed, onMounted, watch } from 'vue';
import dayjs from 'dayjs';
import 'dayjs/locale/pt';
import Dropdown from 'primevue/dropdown';
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';
import InputText from 'primevue/inputtext';
import SchedulingAppointment from '../components/SchedulingAppointment.vue';
import ViewPatient from '../components/ViewPatient.vue';
import AppointmentActions from '../components/AppointmentActions.vue';
import Appointment from '../components/Appointment.vue';
import AddPatient from '../components/AddPatient.vue';
import { useAgendaStore } from '../stores/agenda';
import AppointmentStatusBadge from '../components/AppointmentStatusBadge.vue';

dayjs.locale(locale.value);

const agendaStore = useAgendaStore();

// Fetch items when component mounts
onMounted(async () => {
  await agendaStore.fetchItems();
});

const visibleLeft = ref(false);
const AppointmentTab = ref(false);
const ViewPatientTab = ref(false);
const AddPatientTab = ref(false);

const selectedAgenda = ref('ECG');
const currentMonth = ref(dayjs());
const selectedDate = ref(dayjs());
const showForm = ref(false);

const formattedMonth = computed(() => {
  const month = currentMonth.value.format('MMMM YYYY');
  return month.charAt(0).toUpperCase() + month.slice(1);
});

const groupedAppointments = computed(() => {
  const grouped: Record<string, Record<string, typeof tasksForSelectedDate>> = {
    Manhã: {},
    Tarde: {},
  };

  // Initialize all 24 hours with empty arrays for each period
  for (let hour = 0; hour < 24; hour++) {
    const hourString = `${hour.toString().padStart(2, '0')}:00`;

    // Determine which period the hour belongs to
    if (hour >= 8 && hour < 13) {
      if (!grouped.Manhã[hourString]) grouped.Manhã[hourString] = [];
    } else if (hour >= 13 && hour < 19) {
      if (!grouped.Tarde[hourString]) grouped.Tarde[hourString] = [];
    }
  }

  // Group appointments by hour
  tasksForSelectedDate.value.map(appt => {
    const hour = appt.time.slice(0, 2) + ':00';
    if (parseInt(hour.slice(0, 2)) >= 8 && parseInt(hour.slice(0, 2)) < 12) {
      grouped.Manhã[hour].push(appt);
    } else if (
      parseInt(hour.slice(0, 2)) >= 12 &&
      parseInt(hour.slice(0, 2)) < 18
    ) {
      grouped.Tarde[hour].push(appt);
    }
  });

  return grouped;
});

const newTask = ref({
  name: '',
  age: 0,
  cc: '',
  sns: '',
  phone: '',
  type: 'ECG',
  status: 'Validado',
});

function addTask() {
  agendaStore.addItem({
    title: newTask.value.name,
    date: selectedDate.value.format('YYYY-MM-DD'),
    time: '08:00',
    type: newTask.value.type,
    status: newTask.value.status,
    name: newTask.value.name,
    age: newTask.value.age,
    cc: newTask.value.cc,
    sns: newTask.value.sns,
    phone: newTask.value.phone,
  });
  showForm.value = false;
  Object.assign(newTask.value, {
    name: '',
    age: 0,
    cc: '',
    sns: '',
    phone: '',
    type: 'ECG',
    status: 'Validado',
  });
}

function prevMonth() {
  currentMonth.value = currentMonth.value.subtract(1, 'month');
}

function nextMonth() {
  currentMonth.value = currentMonth.value.add(1, 'month');
}
function previousDay() {
  selectedDate.value = selectedDate.value.subtract(1, 'day');
}
function nextDay() {
  selectedDate.value = selectedDate.value.add(1, 'day');
}

function totalAppointments(data) {
  return Object.values(data).reduce((count, arr) => count + arr.length, 0);
}

function countAppointmentsByStatus(
  data: Record<string, any[]>,
  status: string
): number {
  let count = 0;
  for (const timeSlot of Object.values(data)) {
    if (Array.isArray(timeSlot)) {
      for (const appointment of timeSlot) {
        if (appointment.status === status) {
          count++;
        }
      }
    }
  }

  return count;
}

const monthDays = computed(() => {
  // Get the first date of the month
  const start = currentMonth.value.startOf('month');
  // Start from the first day of the month, even if it doesn't align with Sunday or Monday
  const startOfWeek = start.startOf('week'); // Starts from Sunday
  const end = currentMonth.value.endOf('month').endOf('week'); // End of the current month week

  const days = [];
  let date = startOfWeek;

  while (date.isBefore(end, 'day') || date.isSame(end, 'day')) {
    const taskCount = agendaStore.items.filter(t =>
      dayjs(t.date).isSame(date, 'day')
    ).length;
    days.push({ date: date, taskCount });
    date = date.add(1, 'day');
  }

  return days;
});

const tasksForSelectedDate = computed(() =>
  agendaStore.items?.filter(t =>
    dayjs(t.date).isSame(selectedDate.value, 'day')
  )
);

function statusColor(status: string) {
  return (
    {
      Validado: 'text-[#44CEA0]',
      Realizado: 'text-[#FDCC12]',
      Admitido: 'text-[#6C57DB]',
      Requisitado: 'secondary',
    }[status] || 'secondary'
  );
}
function statusbgColor(status: string) {
  return (
    {
      Validado: 'bg-[#44CEA0]',
      Realizado: 'bg-[#FDCC12]',
      Admitido: 'bg-[#6C57DB]',
      Requisitado: 'bg-secondary',
    }[status] || 'bg-secondary'
  );
}
</script>
<style scoped>
/* Optional spacing or responsive styles */
</style>
