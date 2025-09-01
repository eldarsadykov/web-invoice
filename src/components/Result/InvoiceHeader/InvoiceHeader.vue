<template>
  <div class="flex justify-between">
    <HorizontalHeaderBlock title="From:">
      <LegalEntityInfo :entity="entities.provider" />
    </HorizontalHeaderBlock>
    <HorizontalHeaderBlock title="Bill To:">
      <LegalEntityInfo :entity="entities.client" />
    </HorizontalHeaderBlock>

    <div class="grid gap-2 auto-rows-max">
      <HorizontalHeaderBlock title="Date:">
        {{ generalInfo.date }}
      </HorizontalHeaderBlock>
      <HorizontalHeaderBlock title="Invoice Number:">
        {{ generalInfo.invoiceNumber }}
      </HorizontalHeaderBlock>
    </div>
  </div>
</template>

<script setup lang="ts">
import LegalEntityInfo from '@/components/Result/InvoiceHeader/LegalEntityInfo.vue'
import { useEntitiesStore } from '@/stores/entities.ts'
import HorizontalHeaderBlock from '@/components/Result/InvoiceHeader/HorizontalHeaderBlock.vue'
import { useGeneralInfoStore } from '@/stores/general-info.ts'

const { generalInfo } = useGeneralInfoStore()
const { entities } = useEntitiesStore()
</script>
