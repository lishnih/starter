<script setup lang="ts">

import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue';

const config = useAppConfig().header;

</script>

<template>

  <Disclosure as="nav" class="bg-white dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <AppHeaderColorSelector class="relative ml-auto" v-if="config?.navbar?.colorModeSelector" />
    </div>
  </Disclosure>

</template>
