<template>
  <div>
    <div class="px-1 py-0.5 flex justify-between whitespace-pre-line">
      <span> {{ label }}</span>
      <span v-if="value"> {{ value }}</span>
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps<{
  label: string
  value?: string
}>()
</script>
