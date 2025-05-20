<template>
  <div class="sidebar">
    <div class="flex flex-col items-center h-full justify-between">
      <ul class="space-y-6 my-6 flex flex-col items-center">
        <li>
          <router-link to="/" class="nav-link">
            <i class="pi pi-bars text-2xl"></i>
          </router-link>
        </li>

        <li>
          <router-link to="/" class="nav-link">
            <img src="../assets/heartBlue-logo.png" class="w-10" alt="Logo" />
          </router-link>
        </li>
        <li>
          <router-link to="/" class="nav-link">
            <i class="pi pi-clipboard text-2xl"></i>
          </router-link>
        </li>
        <li>
          <router-link to="/Agenda" class="nav-link">
            <img class="w-6" src="../assets/open-book.png" alt="Agenda" />
          </router-link>
        </li>
        <li>
          <router-link to="/" class="nav-link">
            <i class="pi pi-users text-2xl"></i>
          </router-link>
        </li>
      </ul>

      <ul class="space-y-6 my-6 flex flex-col items-center">
        <li>
          <router-link to="/" class="nav-link">
            <i class="pi pi-comment text-2xl"></i>
          </router-link>
        </li>
        <li>
          <router-link to="/" class="nav-link">
            <i class="pi pi-bell text-2xl"></i>
          </router-link>
        </li>
        <li>
          <router-link to="/" class="nav-link">
            <i class="pi pi-cog text-2xl"></i>
          </router-link>
        </li>
        <li>
          <router-link to="/" class="nav-link">
            <i class="pi pi-sign-out text-2xl"></i>
          </router-link>
        </li>
        <li class="user-avatar">
          JD
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Sidebar',
};
</script>

<style scoped>
.sidebar {
  @apply bg-gray-50 text-gray-700 w-18 h-full border-r border-gray-200;
}

.nav-link {
  @apply text-gray-600 hover:text-primary-500 transition-colors duration-200;
}

.nav-link.router-link-active {
  @apply text-primary-500;
}

.user-avatar {
  @apply bg-teal-300 text-gray-800 font-bold rounded-full h-10 w-10 flex items-center justify-center text-sm;
}
</style>
