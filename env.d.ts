/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_PROVIDER_NAME: string
  readonly VITE_PROVIDER_STREET: string
  readonly VITE_PROVIDER_POSTCODE: string
  readonly VITE_PROVIDER_CITY: string
  readonly VITE_PROVIDER_COUNTRY: string
  readonly VITE_PROVIDER_EMAIL: string
  readonly VITE_PROVIDER_CODE: string
  readonly VITE_PROVIDER_PHONE: string
  readonly VITE_PROVIDER_TAX_NUMBER: string

  readonly VITE_CLIENT_NAME: string
  readonly VITE_CLIENT_STREET: string
  readonly VITE_CLIENT_POSTCODE: string
  readonly VITE_CLIENT_CITY: string
  readonly VITE_CLIENT_COUNTRY: string
  readonly VITE_CLIENT_EMAIL: string
  readonly VITE_CLIENT_CODE: string
  readonly VITE_CLIENT_PHONE: string
  readonly VITE_CLIENT_TAX_NUMBER: string

  readonly VITE_GENERAL_INFO_INVOICE_NUMBER: string
  readonly VITE_GENERAL_INFO_ACCOUNT_HOLDER: string
  readonly VITE_GENERAL_INFO_IBAN: string
  readonly VITE_GENERAL_INFO_BIC: string

  readonly VITE_INVOICE_ITEM_DESCRIPTION: string
  readonly VITE_INVOICE_ITEM_QUANTITY: number
  readonly VITE_INVOICE_ITEM_UNIT: string
  readonly VITE_INVOICE_ITEM_PRICE: number
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
