<template>
  <tr class="border">
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
    <ItemsTableCell>${{ price }}</ItemsTableCell>
    <ItemsTableCell>${{ quantity * price }}</ItemsTableCell>
  </tr>
</template>

<script setup lang="ts">
import type { InvoiceItem } from '@/components/Result/ItemsTable/invoice-item'
import ItemsTableCell from '@/components/Result/ItemsTable/ItemsTableCell.vue'

const props = defineProps<{
  item: InvoiceItem
  showPeriod: boolean
}>()

const { description, period, quantity, unit, price } = props.item
</script>
