<script setup lang="ts">

import {
  RadioGroup,
  RadioGroupLabel,
  RadioGroupDescription,
  RadioGroupOption,
} from '@headlessui/vue'

const { data } = await useAsyncData('dbTypes',
  () => queryContent('/db_types').where({ _path: { $ne: "/db_types" }, _extension: "md" }).find());

const selected = ref();

</script>

<template>

  <div class="w-full px-4 py-4">
    <div class="mxl-auto w-full max-w-md">
      <RadioGroup v-model="selected">

        <RadioGroupLabel class="sr-only">Database</RadioGroupLabel>
        <div class="space-y-2">
          <RadioGroupOption
            as="template"
            v-for="dbType in data"
            :key="dbType.title"
            :value="dbType"
            v-slot="{ active, checked }"
          >

            <div
              :class="[
                active ? 'ring-2 ring-white/60 ring-offset-2 ring-offset-sky-300' : '',
                checked ? 'bg-sky-900/75 dark:bg-sky-700/75 text-white ' : 'bg-gray-100 dark:bg-gray-400 ',
              ]"
              class="relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none"
            >
              <div class="flex w-full items-center">
                <div class="flex items-center w-20">
                  <NuxtImg :src="dbType.card_image" />
                </div>

                <div class="flex items-center ml-2 mr-auto">
                  <div class="text-sm">
                    <RadioGroupLabel
                      as="p"
                      :class="checked ? 'text-white' : 'text-gray-900'"
                      class="font-medium"
                    >
                      {{ dbType.title }}
                    </RadioGroupLabel>
                    <RadioGroupDescription
                      as="span"
                      :class="checked ? 'text-sky-100' : 'text-gray-500'"
                      class="inline"
                    >
                      <div>
                        <span>{{ dbType.description }}</span>
                      </div>
                      <div class="pt-2">
                        <i>Параметры соединения:</i>
                      </div>
                      <div v-for="(key, idx) in dbType.keys">
                        <span>{{ dbType.labels[idx] ?? key }}</span>
                        <span aria-hidden="true"> &middot; </span>
                        <span>{{ dbType.types[idx] }}</span>
                      </div>
                    </RadioGroupDescription>
                  </div>
                </div>

                <div v-show="checked" class="shrink-0 text-white">
                  <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none">
                    <circle
                      cx="12"
                      cy="12"
                      r="12"
                      fill="#fff"
                      fill-opacity="0.2"
                    />
                    <path
                      d="M7 13l3 3 7-7"
                      stroke="#fff"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>

          </RadioGroupOption>
        </div>

      </RadioGroup>
    </div>
  </div>

</template>
