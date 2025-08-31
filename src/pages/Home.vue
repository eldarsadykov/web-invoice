<template>
  <div class="p-6">
    <h1 class="text-xl font-bold mb-4">Fill the Form</h1>
    <form @submit.prevent="handleSubmit" class="space-y-4">
      <input
        v-model="form.name"
        type="text"
        placeholder="Enter your name"
        class="border p-2 rounded w-full"
      />
      <input
        v-model="form.address"
        type="text"
        placeholder="Enter your address"
        class="border p-2 rounded w-full"
      />
      <input
        v-model="form.contactDetails"
        type="text"
        placeholder="Enter your contact details"
        class="border p-2 rounded w-full"
      />
      <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const form = reactive({
  name: '',
  address: '',
  contactDetails: '',
})

const handleSubmit = () => {
  router.push({
    name: 'Result',
    query: { ...form }, // send form data as query params
  })
}
</script>
