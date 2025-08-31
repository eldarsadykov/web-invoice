<template>
  <div class="grid gap-2 whitespace-pre-line">
    <div class="font-bold">
      {{ name }}
    </div>
    <div>
      {{ address }}
    </div>
    <div>
      {{ contactDetails }}
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
  contactDetails: {
    type: String,
    required: true,
  },
})
</script>
