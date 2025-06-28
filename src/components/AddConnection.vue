<template>
  <VDialog v-model="$props.show" max-width="600">
    <VCard title="Add Server">
      <VCardText>
        <VRow dense>
          <VCol cols="12">
            <VSelect label="Type: " :items="types" />
          </VCol>
          <VCol cols="12">
            <VTextField label="Server Name: " />
          </VCol>

          <VCol cols="12">
            <VTextField label="Server Address: " />
          </VCol>
        </VRow>
      </VCardText>
      <VDivider />
      <VCardActions>
        <VSpacer />
        <VBtn text="Close" variant="plain"  />
        <VBtn text="Save" variant="tonal" color="primary" />
      </VCardActions>
    </VCard>
  </VDialog>
</template>

<script setup lang="ts">
import { useConnectionStore } from '@/stores/connection'
import { computed } from 'vue'
import type { VDialog } from 'vuetify/components'

defineProps<{
  show: boolean
}>()

const connectionStore = useConnectionStore()
const types = computed(() => Object.keys(connectionStore.types))
</script>
