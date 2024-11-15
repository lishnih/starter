<script setup lang="ts">

const { layout } = useContent();

const layoutName = computed(() => layout.value || 'default');

</script>

<template>

  <NuxtLoadingIndicator/>
  <NuxtRouteAnnouncer />
  <NuxtLayout :name="layoutName">
    <NuxtPage class="page-enter-active" />
  </NuxtLayout>

</template>

<style>

body {
  --link-bg-color: darkblue;
}

.dark body {
  --link-bg-color: lightblue;
  @apply bg-gray-800;
}

.nav-tabs {
  display: flex;
  align-items: center;
  @apply gap-2;
}

h1 {
  font-weight: bold;
  padding: 10px 16px 10px 16px;
  margin-left: 0px;
  margin-right: 0px;
  @apply text-gray-800;
  @apply bg-gray-100;
}

h1:before {
  content: "⮚ ";
}

.dark h1 {
  @apply text-gray-200;
  @apply bg-gray-900;
}

.dark p {
  @apply text-gray-300;
}

p {
  margin: 16px;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(.5rem)
  }

  to {
    opacity: 1;
    transform: none
  }
}

@keyframes fadeOutDown {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translateY(.5rem)
  }
}

.page-enter-active {
  animation: fadeInUp .6s forwards
}

.page-leave-active {
  animation: fadeOutDown .6s backwards;
}

</style>
