<template>
  <tr class="border">
    <ItemsTableCell>{{ position }}</ItemsTableCell>
    <ItemsTableCell>{{ description }}</ItemsTableCell>
    <div v-if="showPeriod">
      <ItemsTableCell v-if="period">
        {{ period.start.toLocaleDateString() }} -
        {{ period.end.toLocaleDateString() }}
      </ItemsTableCell>
      <ItemsTableCell v-else>-</ItemsTableCell>
    </div>
    <ItemsTableCell>{{ quantity }}</ItemsTableCell>
    <ItemsTableCell>{{ unit }}</ItemsTableCell>
    <ItemsTableCell
      >€{{ formattedPrice(priceEuro) }} (${{ formattedPrice(price) }})
    </ItemsTableCell>
    <ItemsTableCell
      >€{{ formattedPrice(quantity * priceEuro) }}
      (${{ formattedPrice(quantity * price) }})</ItemsTableCell
    >
  </tr>
</template>

<script setup lang="ts">
import type { InvoiceItem } from '@/components/Result/ItemsTable/invoice-item'
import ItemsTableCell from '@/components/Result/ItemsTable/ItemsTableCell.vue'
import { formattedPrice } from '@/utils'
import { computed } from 'vue'
import { useGeneralInfoStore } from '@/stores/general-info.ts'

const { generalInfo } = useGeneralInfoStore()

const props = defineProps<{
  item: InvoiceItem
  showPeriod: boolean
  position: number
}>()

const { description, period, quantity, unit, price } = props.item

const priceEuro = computed<number>(() => {
  if (!generalInfo.exchangeRate) return 0
  if (!price || price === 0) return 0
  return price / generalInfo.exchangeRate
})
</script>
