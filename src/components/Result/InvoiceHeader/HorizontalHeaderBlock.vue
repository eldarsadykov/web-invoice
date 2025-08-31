<template>
  <div class="grid gap-2">
    <div class="font-bold">
      {{ title }}
    </div>
    <slot />
  </div>
</template>

<script setup lang="ts">
type Props = {
  title: string
}

defineProps<Props>()
</script>
