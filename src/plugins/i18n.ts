import { createI18n } from 'vue-i18n';

const messages = {
  en: {
    readCitizenCard: 'Read Citizen Card',
    addExam: 'Add exam',
    exam: 'exam',
    exams: 'Exams',
    hour: 'Hour',
    date: 'Date',
    scheduleQuickly: 'Schedule quickly',
    agenda: 'Agenda',
    admit: 'Accept',
    Dom: 'Mon',
    Seg: 'Tue',
    Ter: 'Wed',
    Qua: 'Thu',
    Qui: 'Fri',
    Sex: 'Sat',
    Sáb: 'Sun',
    today: 'Today',
    Manhã: 'Morning',
    Tarde: 'Afternoon',
    scheduleExam: 'Schedule Exam',
    validated: 'Validated',
    total: 'Total',
    scheduled: 'Scheduled',
    completed: 'Completed',
    years: 'years',
    citizenCardShort: 'ID',
    healthNumberShort: 'SNS',
    calendar: 'Calendar',
    drawerTitle: 'Appointment',
    prescriberDoctor: 'Prescriber Doctor',
    optional: 'Optional',
    prescriptionId: 'Prescription ID',
    uploadPrescription: 'Upload Prescription',
    kioskPassword: 'Kiosk Password',
    examTime: 'Time',
    examDate: 'Date',
    examLabel: 'Exam',
    consultingDoctor: 'Consulting Doctor',
    admit: 'Admit',
    patient: 'Patient',
    editPatientData: 'Edit Patient Data',
    personalData: 'Personal Data',
    fullName: 'Full Name',
    birthDate: 'Birth Date',
    citizenCard: 'Citizen Card',
    taxNumber: 'Tax Number',
    healthUserNumber: 'Health User Number',
    gender: 'Gender',
    process: 'Process',
    email: 'Email',
    phone: 'Phone',
    address: 'Address',
    postalCode: 'Postal Code',
    locality: 'Locality',
    emergencyContacts: 'Emergency Contacts',
    summary: 'Summary',
    appointmentCreatedOn: 'Appointment created on',
    deleteAppointment: 'Delete Appointment',
    confirmPatientData: "I confirm the patient's data",
    cancel: 'Cancel',
    admitAction: 'Admit',
    prescribingDoctor: 'prescribing Doctor',
    dialog: {
      createPatient: 'Create Patient',
      deleteAppointmentHeader: 'Delete Appointment',
      deleteAppointmentConfirm:
        'Are you sure you want to delete this appointment? This action is irreversible.',
      title: 'Patient',
    },
    tabs: {
      personalData: 'Personal Data',
      appointments: 'Appointments',
      subsystem: 'Subsystem',
      contacts: 'Contacts',
      history: 'History',
      clinicalData: 'Clinical Data',
      medications: 'Medications',
    },
    section: {
      personalData: 'Personal Data',
      appointments: 'Appointments',
      examHistory: 'Exam History',
    },
    form: {
      fullName: 'Full Name',
      required: 'Required',
      birthDate: 'Date of Birth',
      idCard: 'ID Card',
      taxNumber: 'Tax Number',
      patientNumber: 'Patient Number',
      gender: 'Gender',
      process: 'Process',
      email: 'Email',
      phone: 'Phone',
      address: 'Address',
      postalCode: 'Postal Code',
      city: 'City',
      select: 'Select',
      prescriberDoctor: 'Prescribing Doctor',
      consultingDoctor: 'Consulting Doctor',
      time: 'Time',
      exam: 'Exam',
      confirmed: 'Confirmed',
    },
    labels: {
      required: 'Required',
      examTypes: 'Exam Types',
    },
    examTypes: {
      all: 'All',
      ecg: 'ECG',
      holter: 'Holter',
    },
    placeholders: {
      select: 'Select',
    },
    appointment: {
      time: 'Time',
      date: 'Date',
      exam: 'Exam',
      consultantDoctor: 'Consultant Doctor',
    },
    buttons: {
      cancel: 'Cancel',
      save: 'Save',
      delete: 'Delete',
      readCitizenCard: 'Read Citizen Card',
      addExam: 'Add Exam',
      search: 'Search',
    },
    menu: {
      viewPatient: 'View Patient',
      editAppointment: 'Edit Appointment',
      deleteAppointment: 'Delete Appointment',
      home: 'Home',
      heart: 'Heart',
      clipboard: 'Clipboard',
      agenda: 'Agenda',
      users: 'Users',
      messages: 'Messages',
      notifications: 'Notifications',
      settings: 'Settings',
      signOut: 'Sign Out',
    },
    user: {
      initials: '{initials}',
    },
    scheduling: {
      scheduleExam: 'Schedule Exam',
      optional: 'Optional',
      chooseFile: 'Choose File',
      searchPatient: 'Search Patient',
      scheduleAndAdmit: 'Schedule and Admit',
      confirmPatientData: 'Confirm Patient Data',
    },
    fields: {
      fullName: 'Full Name',
      email: 'Email',
      phone: 'Phone',
      address: 'Address',
      birthDate: 'Birth Date',
      gender: 'Gender',
      citizenCard: 'Citizen Card',
      taxNumber: 'Tax Number',
      healthNumber: 'Health Number',
      postalCode: 'Postal Code',
      city: 'City',
      process: 'Process',
      patientNumber: 'Patient Number',
      patientId: 'Patient ID',
      patientName: 'Patient Name',
      patientDetails: 'Patient Details',
      patientStatus: 'Patient Status',
      patientType: 'Patient Type',
      insuranceNumber: 'Insurance Number',
    },
    validation: {
      required: 'This field is required',
      email: 'Please enter a valid email',
      phone: 'Please enter a valid phone number',
      minLength: 'Must be at least {min} characters',
      maxLength: 'Must be no more than {max} characters',
    },
    sections: {
      personalData: 'Personal Data',
      examHistory: 'Exam History',
      appointments: 'Appointments',
      medicalHistory: 'Medical History',
      clinicalData: 'Clinical Data',
      medications: 'Medications',
      allergies: 'Allergies',
      documents: 'Documents',
      insurance: 'Insurance',
      emergencyContacts: 'Emergency Contacts',
      summary: 'Summary',
    },
  },
  pt: {
    readCitizenCard: 'Ler Cartão de Cidadão',
    addExam: 'Adicionar exame',
    exam: 'Exame',
    hour: 'Hora',
    date: 'Data',
    exams: 'Exame',
    scheduleQuickly: 'Agendar rapidamente',
    validated: 'Validado',
    admit: 'Admitir',
    agenda: 'Agenda',
    Dom: 'Dom',
    Seg: 'Seg',
    Ter: 'Ter',
    Qua: 'Qua',
    Qui: 'Qui',
    Sex: 'Sex',
    Sáb: 'Sáb',
    today: 'Hoje',
    Manhã: 'Manhã',
    Tarde: 'Tarde',
    scheduleExam: 'Agendar exame',
    total: 'Total',
    scheduled: 'Agendado',
    completed: 'Realizado',
    validatedPlural: 'Validados',
    years: 'anos',
    citizenCardShort: 'CC',
    healthNumberShort: 'SNS',
    calendar: 'Calendário',
    drawerTitle: 'Agendamento',
    prescriberDoctor: 'Médico prescritor',
    optional: 'Opcional',
    prescriptionId: 'ID da prescrição',
    uploadPrescription: 'Carregar prescrição',
    kioskPassword: 'Senha de Kiosk',
    examTime: 'Hora',
    examDate: 'Data',
    examLabel: 'Exame',
    consultingDoctor: 'Médico consulta',
    admit: 'Admitir',
    patient: 'Utente',
    editPatientData: 'Editar dados',
    personalData: 'Dados pessoais',
    fullName: 'Nome Completo',
    birthDate: 'Data de nascimento',
    citizenCard: 'Cartão de cidadão',
    taxNumber: 'Contribuinte',
    healthUserNumber: 'Utente de Saúde',
    gender: 'Sexo',
    process: 'Processo',
    email: 'Email',
    phone: 'Telefone',
    address: 'Morada',
    postalCode: 'Código-Postal',
    locality: 'Localidade',
    emergencyContacts: 'Contactos de emergência',
    summary: 'Resumo',
    appointmentCreatedOn: 'Agendamento criado em',
    deleteAppointment: 'Eliminar agendamento',
    confirmPatientData: 'Confirmo os dados do utente',
    cancel: 'Cancelar',
    admitAction: 'Admitir',
    prescribingDoctor: 'Médico prescritor',
    dialog: {
      createPatient: 'Criar utente',
      deleteAppointmentHeader: 'Eliminar agendamento',
      deleteAppointmentConfirm:
        'Tem a certeza que pretende eliminar este agendamento? Esta ação é irreversível.',
      title: 'Utente',
    },
    tabs: {
      personalData: 'Dados Pessoais',
      appointments: 'Marcações',
      subsystem: 'Subsistema',
      contacts: 'Contactos',
      history: 'Histórico',
      clinicalData: 'Dados Clínicos',
      medications: 'Medicamentos',
    },
    section: {
      personalData: 'Dados pessoais',
      appointments: 'Marcações',
      examHistory: 'Histórico de exames',
    },
    form: {
      fullName: 'Nome Completo',
      required: 'Obrigatório',
      birthDate: 'Data de nascimento',
      idCard: 'Cartão de cidadão',
      taxNumber: 'Contribuinte',
      patientNumber: 'Número de Utente',
      gender: 'Sexo',
      process: 'Processo',
      email: 'Email',
      phone: 'Telefone',
      address: 'Morada',
      postalCode: 'Código-Postal',
      city: 'Localidade',
      select: 'Selecionar',
      prescriberDoctor: 'Médico Prescritor',
      consultingDoctor: 'Médico Consulta',
      time: 'Hora',
      exam: 'Exame',
      confirmed: 'Confirmado',
    },
    labels: {
      required: 'Obrigatório',
      examTypes: 'Tipos de exame',
    },
    examTypes: {
      all: 'Todos',
      ecg: 'ECG',
      holter: 'Holter',
    },
    placeholders: {
      select: 'Selecionar',
    },
    appointment: {
      time: 'Hora',
      date: 'Data',
      exam: 'Exame',
      consultantDoctor: 'Médico consultor',
    },
    buttons: {
      cancel: 'Cancelar',
      save: 'Gravar',
      delete: 'Eliminar',
      readCitizenCard: 'Ler Cartão de Cidadão',
      addExam: 'Adicionar Exame',
      search: 'Pesquisar',
    },
    menu: {
      viewPatient: 'Ver utente',
      editAppointment: 'Editar agendamento',
      deleteAppointment: 'Eliminar agendamento',
      home: 'Início',
      heart: 'Coração',
      clipboard: 'Prancheta',
      agenda: 'Agenda',
      users: 'Usuários',
      messages: 'Mensagens',
      notifications: 'Notificações',
      settings: 'Configurações',
      signOut: 'Sair',
    },
    user: {
      initials: '{initials}',
    },
    scheduling: {
      scheduleExam: 'Agendar Exame',
      optional: 'Opcional',
      chooseFile: 'Escolher ficheiro',
      searchPatient: 'Pesquisar Utente',
      scheduleAndAdmit: 'Agendar e Admitir',
      confirmPatientData: 'Confirmar Dados do Utente',
    },
    fields: {
      fullName: 'Nome Completo',
      email: 'Email',
      phone: 'Telefone',
      address: 'Morada',
      birthDate: 'Data de Nascimento',
      gender: 'Género',
      citizenCard: 'Cartão de Cidadão',
      taxNumber: 'NIF',
      healthNumber: 'Número de Utente',
      postalCode: 'Código Postal',
      city: 'Cidade',
      process: 'Processo',
      patientNumber: 'Número de Utente',
      patientId: 'ID do Utente',
      patientName: 'Nome do Utente',
      patientDetails: 'Detalhes do Utente',
      patientStatus: 'Estado do Utente',
      patientType: 'Tipo de Utente',
      insuranceNumber: 'Número de Seguro',
    },
    validation: {
      required: 'Este campo é obrigatório',
      email: 'Por favor insira um email válido',
      phone: 'Por favor insira um número de telefone válido',
      minLength: 'Deve ter pelo menos {min} caracteres',
      maxLength: 'Deve ter no máximo {max} caracteres',
    },
    sections: {
      personalData: 'Dados Pessoais',
      examHistory: 'Histórico de Exames',
      appointments: 'Agendamentos',
      medicalHistory: 'Histórico Médico',
      clinicalData: 'Dados Clínicos',
      medications: 'Medicamentos',
      allergies: 'Alergias',
      documents: 'Documentos',
      insurance: 'Seguro',
      emergencyContacts: 'Contactos de Emergência',
      summary: 'Resumo',
    },
  },
};

export const i18n = createI18n({
  legacy: false,
  locale: 'pt',
  fallbackLocale: 'en',
  messages,
});
