export class LegalEntity {
  name: string
  address: { street: string; city: string }
  contactDetails: { email: string; phone: string }

  constructor() {
    this.name = ''
    this.address = { street: '', city: '' }
    this.contactDetails = { email: '', phone: '' }
  }
}