<template>
  <tr class="border">
    <ItemsTableCell>{{ description }}</ItemsTableCell>
    <ItemsTableCell v-if="period">
      {{ period.start.toLocaleDateString() }} -
      {{ period.end.toLocaleDateString() }}
    </ItemsTableCell>
    <ItemsTableCell v-else>-</ItemsTableCell>
    <ItemsTableCell>{{ quantity }}</ItemsTableCell>
    <ItemsTableCell>{{ unit }}</ItemsTableCell>
    <ItemsTableCell>${{ price }}</ItemsTableCell>
    <ItemsTableCell>${{ quantity * price }}</ItemsTableCell>
  </tr>
</template>

<script setup lang="ts">
import type { InvoiceItem } from '@/components/ItemsTable/invoice-item'
import ItemsTableCell from '@/components/ItemsTable/ItemsTableCell.vue'

const props = defineProps<{
  item: InvoiceItem
}>()

const { description, period, quantity, unit, price } = props.item
</script>
