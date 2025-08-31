import { defineStore } from 'pinia'
import { EntitiesPayload } from '@/models/entites-payload'

export const useEntitiesStore = defineStore('entities', {
  state: () => ({
    entities: new EntitiesPayload(),
  }),
  actions: {
    setEntities(payload: EntitiesPayload) {
      this.entities = payload
    },
  },
})
