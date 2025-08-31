<template>
  <div class="p-4 grid gap-4 text-xs">
    <InvoiceHeader />
    <h1 class="font-bold text-3xl uppercase mt-12">Invoice</h1>
    <DateBlock />
    <RecipientBlock />
    <div class="font-bold">The following services have been completed and are detailed below:</div>
    <ItemsTable :items="exampleData" />
  </div>
</template>

<script setup lang="ts">
import InvoiceHeader from '@/components/InvoiceHeader/InvoiceHeader.vue'
import DateBlock from '@/components/DateBlock/DateBlock.vue'
import RecipientBlock from '@/components/DateBlock/RecipientBlock.vue'
import ItemsTable from '@/components/ItemsTable/ItemsTable.vue'
import type { InvoiceItem } from '@/components/ItemsTable/invoice-item'

const exampleData: InvoiceItem[] = [
  {
    description: 'Front-End and Audio Software Development',
    period: { start: new Date('2025-05-22'), end: new Date('2025-05-30') },
    quantity: 100,
    unit: 'Hour',
    price: 15,
  },
]
</script>
