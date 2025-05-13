import { defineStore } from 'pinia';
import { apiService } from '../services/api';
import { API_ENDPOINTS } from '../constants';
import type { ApiResponse } from '../types';
import { TASKS } from '../constants/tasksData';
import { EXAMES, HORAS } from '../constants/common';

interface AgendaItem {
  id: string;
  title: string;
  date: string;
  description?: string;
  time?: string;
  type?: string;
  status?: string;
  name?: string;
  age?: number;
  cc?: string;
  sns?: string;
  phone?: string;
  pin?: number;
}

interface AgendaState {
  items: AgendaItem[];
  loading: boolean;
  error: string | null;
  examTypes: typeof EXAMES;
  timeSlots: typeof HORAS;
}

// TODO: Integrate with the realtime API
export const useAgendaStore = defineStore('agenda', {
  state: (): AgendaState => ({
    items: [],
    loading: false,
    error: null,
    examTypes: EXAMES,
    timeSlots: HORAS,
  }),

  getters: {
    getItems: state => state.items,
    isLoading: state => state.loading,
    getError: state => state.error,
    getExamTypes: state => state.examTypes,
    getTimeSlots: state => state.timeSlots,
  },

  actions: {
    // TODO: Integrate with the realtime API
    async fetchItems() {
      this.loading = true;
      this.error = null;
      try {
        // Simulating API call with TASKS data
        // const response = await apiService.get<AgendaItem[]>(API_ENDPOINTS.AGENDA);
        //this.items = response.data;
        // For now, we'll use the TASKS data as our source
        this.items = TASKS.value.map((task, index) => ({
          id: `task-${index}`,
          title: task.name,
          date: task.date,
          time: task.time,
          type: task.type,
          status: task.status,
          name: task.name,
          age: task.age,
          cc: task.cc,
          sns: task.sns,
          phone: task.phone,
          pin: task.pin,
        }));
      } catch (error) {
        this.error =
          error instanceof Error ? error.message : 'An error occurred';
      } finally {
        this.loading = false;
      }
    },

    // TODO: Integrate with the realtime API
    async addItem(item: Omit<AgendaItem, 'id'>) {
      this.loading = true;
      this.error = null;
      try {
        const response = await apiService.post<AgendaItem>(
          API_ENDPOINTS.AGENDA,
          item
        );
        this.items.push(response.data);
      } catch (error) {
        this.error =
          error instanceof Error ? error.message : 'An error occurred';
      } finally {
        this.loading = false;
      }
    },

    // TODO: Integrate with the realtime API
    async updateItem(id: string, item: Partial<AgendaItem>) {
      this.loading = true;
      this.error = null;
      try {
        const response = await apiService.put<AgendaItem>(
          `${API_ENDPOINTS.AGENDA}/${id}`,
          item
        );
        const index = this.items.findIndex(i => i.id === id);
        if (index !== -1) {
          this.items[index] = response.data;
        }
      } catch (error) {
        this.error =
          error instanceof Error ? error.message : 'An error occurred';
      } finally {
        this.loading = false;
      }
    },

    // TODO: Integrate with the realtime API
    async deleteItem(id: string) {
      this.loading = true;
      this.error = null;
      try {
        await apiService.delete(`${API_ENDPOINTS.AGENDA}/${id}`);
        this.items = this.items.filter(item => item.id !== id);
      } catch (error) {
        this.error =
          error instanceof Error ? error.message : 'An error occurred';
      } finally {
        this.loading = false;
      }
    },

    // New method to get items by date
    // TODO: Integrate with the realtime API
    getItemsByDate(date: string) {
      return this.items.filter(item => item.date === date);
    },

    // New method to
    // TODO: Integrate with the realtime API
    getItemsByStatus(status: string) {
      return this.items.filter(item => item.status === status);
    },

    // New method to get items by exam type
    // TODO: Integrate with the realtime API
    getItemsByExamType(type: string) {
      return this.items.filter(item => item.type === type);
    },
  },
});
