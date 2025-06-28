<template>
  <VAppBar class="d-flex">
    <VAppBarTitle style="width: 100px">MSgb</VAppBarTitle>
    <div class="w-100 d-flex flex-row align-center" style="gap: 20px; margin: 0 20px">
      <RouterLink to="/"> Home </RouterLink>
      <div class="d-flex align-center w-100">
        <VSelect max-width="300" label="connection" />
        <VBtn text="add" elevation="4" @click="showAddConnection = true" />
      </div>
    </div>
  </VAppBar>

  <AddConnection :show="showAddConnection" />
</template>

<script setup lang="ts">
import AddConnection from '@/components/AddConnection.vue'
import { ref } from 'vue'
import { VAppBarTitle } from 'vuetify/components'

const showAddConnection = ref(false)
</script>
