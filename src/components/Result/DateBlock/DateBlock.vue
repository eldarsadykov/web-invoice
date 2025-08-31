<template>
  <div class="flex justify-end">
    <table class="w-1/2 border">
      <thead class="bg-gray-100">
        <tr>
          <th scope="col">
            <DateBlockRow label="Date" value="01.01.2025" />
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <DateBlockRow label="Invoice number:" value="2025/001" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import DateBlockRow from '@/components/Result/DateBlock/DateBlockRow.vue'
</script>
