<script setup lang="ts">

  import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'

  const useYaAuthAccessToken = () => useState<string>("YaAuthAccessToken");

  const userData = reactive({});
  const updateStatus = ref(0);

  const userName = computed(() => {
    const access_token = useYaAuthAccessToken();
//  if ( process.dev ) console.debug(`access_token: ${access_token.value} / status: ${updateStatus.value}`);

    if ( !access_token.value ) {
      updateStatus.value = 0;
      return "Вы не авторизованы";
    }

    if ( updateStatus.value == 2 )
      return userData.value.real_name || userData.value.display_name;

    if ( updateStatus.value == -1 && updateStatus.value == -2 )
      return "Ошибка получения данных";

    if ( updateStatus.value == 1 )
      return "Обновление данных...";

    updateStatus.value = 1;

    $fetch("https://login.yandex.ru/info?format=json", {
      onRequest({ request, options }) {
        options.headers.set("Authorization", access_token.value);
      },
      onRequestError({ request, options, error }) {
        updateStatus.value = -1;
        console.error(error);
      },
      onResponse({ request, response, options }) {
        updateStatus.value = 2;
//      console.debug(response._data);
//      localStorage.setItem("token", response._data.token);
        userData.value = response._data;
      },
      onResponseError({ request, response, options }) {
        updateStatus.value = -2;
        console.error(response);
      }
    });

    return "Обновление данных...";
  });

  const isDev = import.meta.dev;

</script>

<template>

  <Menu as="div" class="z-30 relative inline-block text-left">
    <div>
      <MenuButton
        class="inline-flex justify-center rounded-md bg-indigo-300 px-4 py-1 hover:bg-indigo-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
      >
        {{ userName }}<Icon v-if="updateStatus" aria-label="user name"
          name="material-symbols:arrow-drop-down"
          class="-mr-2 ml-1 h-6 w-6 text-violet-200 hover:text-violet-100"
          aria-hidden="true" />
      </MenuButton>
    </div>

    <transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <MenuItems
        class="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none bg-white dark:bg-gray-700"
      >

        <div class="px-1 py-1" v-if="isDev">
          <MenuItem disabled>
            <span
              class="text-gray-900 dark:text-gray-100 group flex w-full items-center rounded-md px-2 py-2 text-sm"
            >
              Статус: {{ updateStatus }}
            </span>
          </MenuItem>
        </div>

        <div class="px-1 py-1" v-if="updateStatus == 0">
          <MenuItem disabled>
            <span
              class="text-gray-900 dark:text-gray-100 group flex w-full items-center rounded-md px-2 py-2 text-sm"
            >
              Воспользуйтесь кнопкой быстрой авторизации
            </span>
          </MenuItem>
          <MenuItem v-slot="{ active }">
            <button
              :class="[
                active ? 'bg-violet-500 text-white' : 'bg-violet-100 dark:bg-violet-950 text-gray-900 dark:text-gray-100',
                'group flex w-full items-center rounded-md px-2 py-2 text-sm',
              ]"
            >
              или формой авторизации
            </button>
          </MenuItem>
        </div>

        <div class="px-1 py-1" v-if="updateStatus == 1">
          <MenuItem disabled>
            <span
              class="text-gray-900 dark:text-gray-100 group flex w-full items-center rounded-md px-2 py-2 text-sm"
            >
              Авторизация...
            </span>
          </MenuItem>
        </div>

        <div class="px-1 py-1" v-if="updateStatus == 2">
          <MenuItem v-slot="{ active }">
            <button
              :class="[
                active ? 'bg-violet-500 text-white' : 'bg-violet-100 dark:bg-violet-950 text-gray-900 dark:text-gray-100',
                'group flex w-full items-center rounded-md px-2 py-2 text-sm',
              ]"
            >
              Сохранить ключ доступа
            </button>
          </MenuItem>
        </div>

        <div class="px-1 py-1" v-if="updateStatus == 2">
          <MenuItem disabled>
            <span
              class="text-gray-900 dark:text-gray-100 group flex w-full items-center rounded-md px-2 py-2 text-sm"
            >
              Ключ хранится на Вашем компьютере и передаётся при обращениях к сервисам.
            </span>
          </MenuItem>
          <MenuItem disabled>
            <span
              class="text-gray-900 dark:text-gray-100 group flex w-full items-center rounded-md px-2 py-2 text-sm"
            >
              На сервере ключ доступа не сохраняется.
            </span>
          </MenuItem>
        </div>

        <div class="px-1 py-1" v-if="updateStatus < 0">
          <MenuItem disabled>
            <span
              class="text-gray-900 dark:text-gray-100 group flex w-full items-center rounded-md px-2 py-2 text-sm"
            >
              В процессе авторизации возникла ошибка.
            </span>
          </MenuItem>
        </div>

      </MenuItems>
    </transition>
  </Menu>

</template>
