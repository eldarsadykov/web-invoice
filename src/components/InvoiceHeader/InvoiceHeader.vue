<template>
  <div>
    <ServiceProviderInfo :name="name" :address="address" :contact-details="contactDetails" />
  </div>
</template>

<script setup lang="ts">
import ServiceProviderInfo from '@/components/InvoiceHeader/ServiceProviderInfo.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const name = (route.query.name as string) || 'N/A'
const address = (route.query.address as string) || 'N/A'
const contactDetails = (route.query.contactDetails as string) || 'N/A'
</script>
