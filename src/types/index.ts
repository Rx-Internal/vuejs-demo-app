// Route meta types
export interface RouteMeta {
  title: string;
  requiresAuth: boolean;
}

// Component props types
export interface BaseProps {
  id?: string;
  class?: string;
}

// API response types
export interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

// Common types
export type Nullable<T> = T | null;
export type Optional<T> = T | undefined;
