import { LegalEntity } from '@/models/legal-entity'
import { LegalEntityCategory } from '@/enums/legal-entity-category.ts'

export class EntitiesPayload {
  provider: LegalEntity
  client: LegalEntity

  constructor() {
    this.provider = new LegalEntity(LegalEntityCategory.Provider)
    this.client = new LegalEntity(LegalEntityCategory.Client)
  }
}
