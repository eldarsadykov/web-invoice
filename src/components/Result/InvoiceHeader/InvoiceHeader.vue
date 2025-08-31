<template>
  <div class="flex justify-between">
    <HorizontalHeaderBlock title="From:">
      <LegalEntityInfo :entity="entities.provider" />
    </HorizontalHeaderBlock>
    <HorizontalHeaderBlock title="Bill To:">
      <LegalEntityInfo :entity="entities.client" />
    </HorizontalHeaderBlock>
  </div>
</template>

<script setup lang="ts">
import LegalEntityInfo from '@/components/Result/InvoiceHeader/LegalEntityInfo.vue'
import { useEntitiesStore } from '@/stores/entities.ts'
import HorizontalHeaderBlock from '@/components/Result/InvoiceHeader/HorizontalHeaderBlock.vue'
const { entities } = useEntitiesStore()
</script>
