<script setup lang="ts">

import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue';

const config = useAppConfig().header;

</script>

<template>

  <Disclosure as="nav" class="bg-white dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600"
    v-slot="{ open }">

    <div class="flex justify-start items-center gap-2">
      <div class="relative flex h-12 justify-between w-screen p-4">
        <div class="flex items-center sm:hidden">
          <!-- Mobile menu button -->
          <DisclosureButton
            class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500">
            <span class="absolute -inset-0.5" />
            <span class="sr-only">Open main menu</span>
            <Icon name="material-symbols:density-medium" v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <Icon name="material-symbols:close" v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>

        <div class="flex items-center max-sm:hidden w-screen">
          <ul class="nav nav-tabs mr-auto">
            <li class="nav-item">
              <NuxtLink to="/" class="flex justify-center items-center border rounded-full w-8 h-8 text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800 dark:border-gray-500 transition-all">
                <Icon aria-label="home page" name="material-symbols:house" style="color: var(--link-bg-color)" />
              </NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/about" style="color: var(--link-bg-color)">
                About
              </NuxtLink>
            </li>
          </ul>

          <div class="flex items-center space-x-2 rtl:space-x-reverse">
            <AppHeaderColorSelector v-if="config?.navbar?.colorModeSelector" />
            <AppHeaderSettings />
            <AppHeaderYandexUserName />
            <AppHeaderYandexLoginButton />
          </div>
        </div>
      </div>
    </div>

    <DisclosurePanel class="absolute z-30 bg-stone-200 dark:bg-stone-600 dark:text-gray-300 sm:hidden w-screen">
      <div class="space-y-1 p-4">
        <NuxtLink to="/">
          Стартовая
        </NuxtLink>
      </div>
      <div class="flex items-center gap-2 p-2 bg-cyan-300/25 dark:bg-cyan-300/25">
        <AppHeaderColorSelector v-if="config?.navbar?.colorModeSelector" />
        <AppHeaderSettings />
      </div>
    </DisclosurePanel>

  </Disclosure>

</template>
