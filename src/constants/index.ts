export const APP_NAME = 'VueJS Demo App';

export const ROUTE_NAMES = {
  AGENDA: 'Agenda',
} as const;

export const API_ENDPOINTS = {
  BASE_URL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000',
  AGENDA: '/api/agenda',
} as const;

export const DATE_FORMATS = {
  DEFAULT: 'YYYY-MM-DD',
  DISPLAY: 'MMM DD, YYYY',
  TIME: 'HH:mm',
} as const;
