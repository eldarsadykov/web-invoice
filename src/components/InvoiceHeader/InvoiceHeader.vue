<template>
  <div>
    <ServiceProviderInfo :name="name" :address="address" :contact-info="contactInfo" />
  </div>
</template>

<script setup lang="ts">
import ServiceProviderInfo from '@/components/InvoiceHeader/ServiceProviderInfo.vue'

const name = 'John Doe'

const address = `23 Main Street
Anytown
CA 12345
`

const contactInfo = `john@example.com
+43 (0) 123 45 678 90
`
</script>
