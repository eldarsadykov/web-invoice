import { LegalEntity } from '@/models/legal-entity'

export class EntitiesPayload {
  provider: LegalEntity
  client: LegalEntity

  constructor() {
    this.provider = new LegalEntity()
    this.client = new LegalEntity()
  }
}
