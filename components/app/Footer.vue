<script setup lang="ts">

const config = useAppConfig();

</script>

<template>

  <footer class="border-t dark:border-gray-600 font-display" aria-labelledby="footer-heading">
    <div class="bg-gray-100 dark:bg-gray-900 border-gray-900/10 dark:border-gray-600 pt-2">
      <p class="text-xs leading-5 text-gray-500">&copy; {{ new Date().getFullYear() }} {{ config.general.title }} Все права защищены.</p>
    </div>
  </footer>

</template>
