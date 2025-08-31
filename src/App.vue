<template>
  <div class="p-4 text-xs h-screen flex flex-col justify-between">
    <div class="flex flex-col gap-4">
      <InvoiceHeader class="h-min" />
      <h1 class="font-bold text-3xl uppercase mt-12">Invoice</h1>
      <DateBlock />
      <RecipientBlock />
      <div class="font-bold">
        The following services have been completed and are detailed below:
      </div>
      <ItemsTable :items="exampleData" />
      <div class="font-bold text-right">Total amount due: ${{ totalAmountDue }}</div>
    </div>
    <div class="flex flex-col gap-4">
      <div class="font-bold">Account details</div>
      <div>
        <div>Account holder: {{ exampleDetails.holder }}</div>
        <div>IBAN: {{ exampleDetails.iban }}</div>
      </div>
      <div class="font-bold">
        For bank transfers, please include the invoice number in the “Payment reference” field.
      </div>
    </div>
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

const exampleDetails = {
  holder: 'John Doe',
  iban: 'ATXX XXXX XXXX XXXX XXXX',
}

const totalAmountDue = exampleData.reduce((acc, { price, quantity }) => acc + price * quantity, 0)
</script>
