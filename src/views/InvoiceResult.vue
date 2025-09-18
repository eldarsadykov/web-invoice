<template>
  <div class="text-xs h-screen flex flex-col justify-between">
    <div class="flex flex-col gap-4">
      <InvoiceHeader class="h-min" />
      <h1 class="font-bold text-3xl uppercase mt-12">Invoice</h1>
      <div class="font-bold">
        The following services have been completed and are detailed below:
      </div>
      <ItemsTable :items="exampleData" />
      <div class="font-bold text-right">
        Total amount due: €{{ formattedPrice(totalAmountDueEuro) }} (${{
          formattedPrice(totalAmountDue)
        }})
      </div>
      <div>
        Note: According to § 3a UStG, these services are not subject to Austrian VAT. Customer
        established outside the EU.
      </div>
    </div>
    <div class="flex flex-col gap-4">
      <div class="font-bold">Payment Information</div>
      <div>
        <div>Account Holder: {{ generalInfo.accountHolder }}</div>
        <div>IBAN: {{ generalInfo.iban }}</div>
        <div>BIC: {{ generalInfo.bic }}</div>
        <div>Payment Reference: {{ generalInfo.invoiceNumber }}</div>
      </div>
      <div class="font-bold">
        For bank transfers, please include the invoice number in the “Payment reference” field.
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import InvoiceHeader from '@/components/Result/InvoiceHeader/InvoiceHeader.vue'
import ItemsTable from '@/components/Result/ItemsTable/ItemsTable.vue'
import type { InvoiceItem } from '@/components/Result/ItemsTable/invoice-item'
import { useGeneralInfoStore } from '@/stores/general-info.ts'
import { formattedPrice } from '@/utils'
import { computed } from 'vue'
import { useTitle } from '@vueuse/core'

const exampleData: InvoiceItem[] = [
  {
    description: import.meta.env.VITE_INVOICE_ITEM_DESCRIPTION,
    quantity: parseInt(import.meta.env.VITE_INVOICE_ITEM_QUANTITY, 10),
    unit: import.meta.env.VITE_INVOICE_ITEM_UNIT,
    price: parseInt(import.meta.env.VITE_INVOICE_ITEM_PRICE, 10),
  },
]

const { generalInfo } = useGeneralInfoStore()

const title = useTitle()
title.value = generalInfo.invoiceNumber

const totalAmountDue = exampleData.reduce((acc, { price, quantity }) => acc + price * quantity, 0)

const totalAmountDueEuro = computed(() => {
  if (!generalInfo.exchangeRate) return 0
  return totalAmountDue / generalInfo.exchangeRate
})
</script>
