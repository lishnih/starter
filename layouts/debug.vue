<script setup lang="ts">

const nuxtApp = useNuxtApp();
const mounted = ref(false);

nuxtApp.hook('app:mounted', () => {
  mounted.value = true;
});

const shown = reactive([]);

const colorMode = useColorMode();

const slots = useSlots();

const runtimeConfig = useRuntimeConfig();

const config = useAppConfig();


const remove = (shown, obj) => {
  shown.forEach((element, i) => {
    if ( element === obj )
      shown.splice(i, 1);
  });
}

</script>

<template>

  <!-- Layout: debug -->
  <div>
    <AppHeaderColorSelector class="ml-auto" />

    <div class="p-3">
      <h1 class="text-indigo-500" @click="console.log(shown)">mounted</h1>
      <Dict :obj="mounted" />
    </div>

    <div class="p-3">
      <h1 class="text-gray-500">useColorMode()</h1>
      <Dict :obj="colorMode" />
    </div>

    <div class="p-3">
      <h1 class="text-gray-500">useSlots()</h1>
      <Dict :obj="slots" />
    </div>

    <div class="p-3">
      <h1 class="text-indigo-500" @click="remove(shown, runtimeConfig)">useRuntimeConfig()</h1>
      <Dict v-if="shown.includes(runtimeConfig)" :obj="runtimeConfig" />
      <button v-else class="px-2 py-1 rounded bg-indigo-400 hover:bg-indigo-500" @click="shown.push(runtimeConfig)">Show it</button>
    </div>

    <div class="p-3">
      <h1 class="text-indigo-500" @click="remove(shown, config)">useAppConfig()</h1>
      <Dict v-if="shown.includes(config)" :obj="config" />
      <button v-else class="px-2 py-1 rounded bg-indigo-400 hover:bg-indigo-500" @click="shown.push(config)">Show it</button>
    </div>

    <div class="p-3">
      <h1 class="text-indigo-500" @click="remove(shown, nuxtApp)">useNuxtApp()</h1>
      <Dict v-if="shown.includes(nuxtApp)" :obj="nuxtApp" />
      <button v-else class="px-2 py-1 rounded bg-indigo-400 hover:bg-indigo-500" @click="shown.push(nuxtApp)">Show it</button>
    </div>

    <hr />

    <slot />
  </div>

</template>

<style scoped>
</style>
