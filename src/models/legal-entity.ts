import { LegalEntityCategory } from '@/enums/legal-entity-category.ts'

export class LegalEntity {
  category: LegalEntityCategory
  name: string
  address: { street: string; postcode: string; city: string; country: string }
  contactDetails: { email: string; code: string; phone: string }
  taxNumber: string

  constructor(category: LegalEntityCategory) {
    this.category = category
    if (this.category === LegalEntityCategory.Provider) {
      this.name = import.meta.env.VITE_PROVIDER_NAME
      this.address = {
        street: import.meta.env.VITE_PROVIDER_STREET,
        postcode: import.meta.env.VITE_PROVIDER_POSTCODE,
        city: import.meta.env.VITE_PROVIDER_CITY,
        country: import.meta.env.VITE_PROVIDER_COUNTRY,
      }
      this.contactDetails = {
        email: import.meta.env.VITE_PROVIDER_EMAIL,
        code: import.meta.env.VITE_PROVIDER_CODE,
        phone: import.meta.env.VITE_PROVIDER_PHONE,
      }
      this.taxNumber = import.meta.env.VITE_PROVIDER_TAXNUMBER
    } else {
      this.name = import.meta.env.VITE_CLIENT_NAME
      this.address = {
        street: import.meta.env.VITE_CLIENT_STREET,
        postcode: import.meta.env.VITE_CLIENT_POSTCODE,
        city: import.meta.env.VITE_CLIENT_CITY,
        country: import.meta.env.VITE_CLIENT_COUNTRY,
      }
      this.contactDetails = {
        email: import.meta.env.VITE_CLIENT_EMAIL,
        code: import.meta.env.VITE_CLIENT_CODE,
        phone: import.meta.env.VITE_CLIENT_PHONE,
      }
      this.taxNumber = import.meta.env.VITE_CLIENT_TAXNUMBER
    }
  }
}
