<template>
  <div>
    <table class="w-1/2 border">
      <thead class="bg-gray-100">
        <tr>
          <th scope="col">
            <DateBlockRow label="Recipient" />
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <DateBlockRow :label="recipientData" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import DateBlockRow from '@/components/DateBlock/DateBlockRow.vue'
const recipientData = `John Doe
23 Main Street
Anytown
CA 12345
john@example.com
+43 (0) 123 45 678 90
`
</script>
