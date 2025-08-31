<template>
  <div class="p-6">
    <h1 class="text-xl font-bold mb-4">Enter Legal Entities</h1>

    <form @submit.prevent="handleSubmit" class="space-y-6">
      <div
        v-for="entity of [entities.provider, entities.client]"
        :key="entity.name"
        class="space-y-2 border p-4 rounded"
      >
        <h2 class="font-semibold">{{ entity.category }}</h2>
        <input v-model="entity.name" placeholder="Name" class="border p-2 w-full rounded" />
        <input
          v-model="entity.address.street"
          placeholder="Street"
          class="border p-2 w-full rounded"
        />
        <input
          v-model="entity.address.postcode"
          placeholder="Postcode"
          class="border p-2 w-full rounded"
        />
        <input v-model="entity.address.city" placeholder="City" class="border p-2 w-full rounded" />
        <input
          v-model="entity.contactDetails.email"
          placeholder="Email"
          class="border p-2 w-full rounded"
        />
        <input
          v-model="entity.contactDetails.phone"
          placeholder="Phone"
          class="border p-2 w-full rounded"
        />
      </div>
      <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useEntitiesStore } from '@/stores/entities.ts'
import { EntitiesPayload } from '@/models/entites-payload'

const router = useRouter()
const store = useEntitiesStore()

const entities = reactive<EntitiesPayload>(new EntitiesPayload())

const handleSubmit = () => {
  store.setEntities(entities)
  router.push({ name: 'InvoiceResult' })
}
</script>
