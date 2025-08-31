<template>
  <div class="p-6">
    <h1 class="text-xl font-bold mb-4">Enter Legal Entities</h1>

    <form @submit.prevent="handleSubmit" class="space-y-6">
      <!-- Provider -->
      <div class="space-y-2 border p-4 rounded">
        <h2 class="font-semibold">Provider</h2>
        <input
          v-model="entities.provider.name"
          placeholder="Name"
          class="border p-2 w-full rounded"
        />
        <input
          v-model="entities.provider.address.street"
          placeholder="Street"
          class="border p-2 w-full rounded"
        />
        <input
          v-model="entities.provider.address.city"
          placeholder="City"
          class="border p-2 w-full rounded"
        />
        <input
          v-model="entities.provider.contactDetails.email"
          placeholder="Email"
          class="border p-2 w-full rounded"
        />
        <input
          v-model="entities.provider.contactDetails.phone"
          placeholder="Phone"
          class="border p-2 w-full rounded"
        />
      </div>

      <!-- Client -->
      <div class="space-y-2 border p-4 rounded">
        <h2 class="font-semibold">Client</h2>
        <input
          v-model="entities.client.name"
          placeholder="Name"
          class="border p-2 w-full rounded"
        />
        <input
          v-model="entities.client.address.street"
          placeholder="Street"
          class="border p-2 w-full rounded"
        />
        <input
          v-model="entities.client.address.city"
          placeholder="City"
          class="border p-2 w-full rounded"
        />
        <input
          v-model="entities.client.contactDetails.email"
          placeholder="Email"
          class="border p-2 w-full rounded"
        />
        <input
          v-model="entities.client.contactDetails.phone"
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
  store.setEntities(entities) // save to Pinia store
  router.push({ name: 'Result' }) // just navigate
}
</script>
