<template>
  <div class="grid gap-2">
    <div>
      {{ entity.name }}
    </div>
    <div>
      {{ entity.address.street }}
      <br />
      {{ entity.address.postcode }} {{ entity.address.city }}
      <br />
      {{ entity.address.country }}
    </div>
    <div>
      {{ entity.contactDetails.email }}
      <br />
      {{ entity.contactDetails.code }} {{ entity.contactDetails.phone }}
    </div>
  </div>
</template>

<script setup lang="ts">
import type { LegalEntity } from '@/models/legal-entity'

defineProps<{
  entity: LegalEntity
}>()
</script>
