<template>
  <div class="grid gap-2 auto-rows-max">
    <div class="font-bold h-min">
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
