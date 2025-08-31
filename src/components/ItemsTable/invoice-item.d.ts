export type InvoiceItem = {
  description: string
  period?: { start: Date; end: Date }
  quantity: number
  unit: string
  price: number
}

