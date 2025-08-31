<template>
  <div class="grid gap-2">
    <div class="font-bold">
      {{ name }}
    </div>
    <div class="whitespace-pre-line">
      {{ address }}
    </div>
    <div class="whitespace-pre-line">
      {{ contactInfo }}
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  contactInfo: {
    type: String,
    required: true,
  },
})
</script>
