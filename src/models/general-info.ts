export class GeneralInfo {
  date: Date
  invoiceNumber: string
  accountHolder: string
  iban: string
  bic: string
  exchangeRate?: number

  constructor() {
    this.date = new Date();
    this.invoiceNumber = import.meta.env.VITE_GENERAL_INFO_INVOICE_NUMBER
    this.accountHolder = import.meta.env.VITE_GENERAL_INFO_ACCOUNT_HOLDER
    this.iban = import.meta.env.VITE_GENERAL_INFO_IBAN
    this.bic = import.meta.env.VITE_GENERAL_INFO_BIC
  }
}
