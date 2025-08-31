<template>
  <div class="flex justify-between">
    <LegalEntityInfo :entity="entities.provider" />
    <LegalEntityInfo :entity="entities.client" />
  </div>
</template>

<script setup lang="ts">
import LegalEntityInfo from '@/components/Result/InvoiceHeader/LegalEntityInfo.vue'
import { useEntitiesStore } from '@/stores/entities.ts'

const { entities } = useEntitiesStore()
</script>
