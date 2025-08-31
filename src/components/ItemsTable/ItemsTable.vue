<template>
  <table class="border">
    <thead class="bg-gray-100">
      <tr>
        <ItemsTableHeaderCell v-for="title of headerCellsFiltered" :key="title">
          {{ title }}
        </ItemsTableHeaderCell>
      </tr>
    </thead>
    <tbody>
      <ItemsTableRow v-for="item of items" :key="item.description" :item="item" :showPeriod />
    </tbody>
  </table>
</template>

<script setup lang="ts">
import type { InvoiceItem } from '@/components/ItemsTable/invoice-item'
import { computed } from 'vue'
import ItemsTableRow from '@/components/ItemsTable/ItemsTableRow.vue'
import ItemsTableHeaderCell from '@/components/ItemsTable/ItemsTableHeaderCell.vue'

const props = defineProps<{
  items: InvoiceItem[]
}>()

enum HeaderCell {
  Description = 'Description',
  Period = 'Period',
  Quantity = 'Quantity',
  Unit = 'Unit',
  UnitPrice = 'Unit Price',
  Amount = 'Amount',
}

const headerCells: HeaderCell[] = [
  HeaderCell.Description,
  HeaderCell.Period,
  HeaderCell.Quantity,
  HeaderCell.Unit,
  HeaderCell.UnitPrice,
  HeaderCell.Amount,
]

const showPeriod = computed(() => props.items.some((invoice) => invoice.period !== undefined))

const headerCellsFiltered = computed(() =>
  headerCells.filter((cell) => showPeriod.value || cell !== HeaderCell.Period),
)
</script>
