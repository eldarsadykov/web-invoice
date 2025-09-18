import { onMounted, ref } from 'vue'
import { defineStore } from 'pinia'
import { GeneralInfo } from '@/models/general-info.ts'
import { fetchExchangeRate } from '@/utils'

export const useGeneralInfoStore = defineStore('general-info', () => {
  const generalInfo = ref(new GeneralInfo())

  const setExchangeRate = async () => {
    try {
      generalInfo.value.exchangeRate = await fetchExchangeRate(new Date(generalInfo.value.date))
      console.log('Exchange Rate:', generalInfo.value.exchangeRate)
    } catch (err) {
      generalInfo.value.exchangeRate = undefined
      console.error('Failed to fetch exchange rate', err)
    }
  }

  onMounted(setExchangeRate)

  return { generalInfo, setExchangeRate }
})
