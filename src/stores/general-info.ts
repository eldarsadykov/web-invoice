import { ref } from 'vue'
import { defineStore } from 'pinia'
import { GeneralInfo } from '@/models/general-info.ts'

export const useGeneralInfoStore = defineStore('general-info', () => {
  const generalInfo = ref(new GeneralInfo())

  return { generalInfo }
})
