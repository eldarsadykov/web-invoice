<template>
  <div class="grid gap-2 whitespace-pre-line">
    <div class="font-bold">
      {{ entity.name }}
    </div>
    <div>
      {{ entity.address.street }}
      <br />
      {{ entity.address.city }}
    </div>
    <div>
      {{ entity.contactDetails.email }}
      <br />
      {{ entity.contactDetails.phone }}
    </div>
  </div>
</template>

<script setup lang="ts">
import type { LegalEntity } from '@/models/legal-entity'

defineProps<{
  entity: LegalEntity
}>()
</script>
