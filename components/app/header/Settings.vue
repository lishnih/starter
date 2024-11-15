<script setup lang="ts">

function forwardSettings() {
}

</script>

<template>

  <NuxtLink to="/settings" class="flex justify-center items-center border rounded-full w-8 h-8 text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800 dark:border-gray-500 transition-all">
    <Icon aria-label="toggle dark mode" name="material-symbols:settings" style="color: var(--link-bg-color)" />
  </NuxtLink>

</template>
