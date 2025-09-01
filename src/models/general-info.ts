export class GeneralInfo {
  date: string
  invoiceNumber: string
  accountHolder: string
  iban: string

  constructor() {
    this.date = new Date().toLocaleDateString()
    this.invoiceNumber = '2025/001'
    this.accountHolder = ''
    this.iban = ''
  }
}
