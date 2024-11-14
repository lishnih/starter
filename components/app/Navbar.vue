<script setup lang="ts">

import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue';

const config = useAppConfig().header;

</script>

<template>

  <Disclosure as="nav" class="bg-white dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600"
    v-slot="{ open }">

    <div class="flex justify-start items-center gap-2">
      <div class="relative flex h-12 justify-between w-screen">
        <div class="absolute left-0 flex items-center sm:hidden">
          <!-- Mobile menu button -->
          <DisclosureButton
            class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500">
            <span class="absolute -inset-0.5" />
            <span class="sr-only">Open main menu</span>
            <Icon name="tabler:baseline-density-medium" v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <Icon name="tabler:x" v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>

        <div class="flex items-center max-sm:hidden m-2 w-screen">
          <div class="flex items-center space-x-2 mr-auto">
            Menu
          </div>

          <div class="flex items-center space-x-2 rtl:space-x-reverse">
            <AppHeaderColorSelector v-if="config?.navbar?.colorModeSelector" />
            <AppHeaderYandexUserName />
            <AppHeaderYandexLoginButton />
          </div>
        </div>
      </div>
    </div>

    <DisclosurePanel class="sm:hidden">
      <div class="space-y-1 pb-4 pt-2">
        DisclosurePanel
      </div>
    </DisclosurePanel>

  </Disclosure>

</template>
