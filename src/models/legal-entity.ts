import type { LegalEntityCategory } from '@/enums/legal-entity-category.ts'

export class LegalEntity {
  category: LegalEntityCategory
  name: string
  address: { street: string; postcode: string; city: string }
  contactDetails: { email: string; phone: string }

  constructor(category: LegalEntityCategory) {
    this.category = category
    this.name = ''
    this.address = { street: '', postcode: '', city: '' }
    this.contactDetails = { email: '', phone: '' }
  }
}
