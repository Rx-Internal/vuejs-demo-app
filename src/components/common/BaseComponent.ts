import { defineComponent } from 'vue';
import type { PropType } from 'vue';

/**
 * Base props that all components can inherit
 */
export const spacingConstants = {
  xs: '0.25rem',    // 4px
  sm: '0.5rem',     // 8px
  md: '0.75rem',    // 12px
  lg: '1rem',       // 16px
  xl: '1.25rem',    // 20px
  '2xl': '1.5rem',  // 24px
  '3xl': '2rem',    // 32px
};

export const baseProps = {
  id: {
    type: String,
    default: () => `comp-${Math.random().toString(36).substring(2, 9)}`
  },
  disabled: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: false
  },
  error: {
    type: String,
    default: ''
  },
  customClass: {
    type: String,
    default: ''
  },
  dataTestId: {
    type: String,
    default: ''
  }
};

/**
 * Common emits that many components use
 */
export const baseEmits = ['update', 'focus', 'blur'];

/**
 * Type for the base props
 */
export interface BaseComponentProps {
  id?: string;
  disabled?: boolean;
  loading?: boolean;
  error?: string;
  customClass?: string;
  dataTestId?: string;
}

/**
 * Helper function to merge component props with base props
 */
export function withBaseProps<T>(props: T): T & typeof baseProps {
  return {
    ...baseProps,
    ...props
  };
}

/**
 * Helper function to merge component emits with base emits
 */
export function withBaseEmits<T extends string[]>(emits: T): Array<typeof baseEmits[number] | T[number]> {
  return [...baseEmits, ...emits];
} 