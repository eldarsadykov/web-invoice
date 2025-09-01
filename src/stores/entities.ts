import { defineStore } from 'pinia'
import { EntitiesPayload } from '@/models/entites-payload'
import { ref } from 'vue'

export const useEntitiesStore = defineStore('entities', () => {
  const entities = ref(new EntitiesPayload())
  return { entities }
})
