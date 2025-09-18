<template>
  <div class="flex justify-between">
    <HorizontalHeaderBlock title="From:">
      <LegalEntityInfo :entity="entities.provider" />
    </HorizontalHeaderBlock>
    <HorizontalHeaderBlock title="Bill To:">
      <LegalEntityInfo :entity="entities.client" />
    </HorizontalHeaderBlock>

    <div class="grid gap-2 auto-rows-max">
      <HorizontalHeaderBlock title="Invoice Date:">
        {{ date }}
      </HorizontalHeaderBlock>
      <HorizontalHeaderBlock title="Service Date:">
        {{ date }}
      </HorizontalHeaderBlock>
      <HorizontalHeaderBlock title="Due Date:">
        {{ dueDate }}
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
import { computed } from 'vue'

const { generalInfo } = useGeneralInfoStore()
const { entities } = useEntitiesStore()
const date = computed(() => {
  return new Date(generalInfo.date).toLocaleDateString()
})

const dueDate = computed(() => {
  const date = new Date(generalInfo.date)
  date.setDate(date.getDate() + 14)
  return date.toLocaleDateString()
})
</script>
