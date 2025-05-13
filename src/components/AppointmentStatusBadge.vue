<script lang="ts" setup>
import { ref } from 'vue';

const props = defineProps<{
  label: string;
  color: string;
  count: number;
}>();

// Toggle state
const isToggled = ref(false);

// Toggle function to change the border color
const toggleBorderColor = () => {
  isToggled.value = !isToggled.value;
};
</script>

<template>
  <span
    v-if="count > 0"
    class="text-xs bg-white px-3 py-1 border-2 font-medium flex justify-center items-center rounded-md cursor-pointer"
    :style="{ borderColor: isToggled ? color : 'white' }"
    @click="toggleBorderColor"
  >
    <div
      class="h-3 w-3 rounded-full mr-2"
      :style="{ backgroundColor: color }"
    ></div>
    {{ label }}
    <div class="ml-2">
      {{ count }}
    </div>
  </span>
</template>

<style scoped>
/* Add any extra styles you may need here */
</style>
