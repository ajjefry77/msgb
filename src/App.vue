<script setup lang="ts">
import Menu from './layout/menu.vue'
import { useConnectionStore } from './stores/connection';
useConnectionStore();
</script>

<template>
  <VApp>
    <Menu />
    <RouterView />
  </VApp>
</template>

<style scoped></style>
