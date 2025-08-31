<script setup lang="ts">
import InvoiceHeader from '@/components/Header/InvoiceHeader.vue'
import DateBlock from '@/components/DateBlock/DateBlock.vue'
</script>

<template>
  <div class="p-4 grid gap-4">
    <InvoiceHeader />
    <h1 class="font-bold text-5xl uppercase mt-12">Invoice</h1>
    <DateBlock/>
  </div>
</template>
