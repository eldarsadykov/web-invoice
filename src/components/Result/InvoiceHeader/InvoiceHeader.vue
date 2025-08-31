<template>
  <div class="flex justify-between">
    <LegalEntityInfo :entity="entities.provider" />
    <LegalEntityInfo :entity="entities.client" />
    <div>Date: {{ date.toLocaleDateString()}}</div>
  </div>
</template>

<script setup lang="ts">
import LegalEntityInfo from '@/components/Result/InvoiceHeader/LegalEntityInfo.vue'
import { useEntitiesStore } from '@/stores/entities.ts'
const date = new Date()
const { entities } = useEntitiesStore()
</script>
