export const formattedPrice = (price: number) => {
  return price.toFixed(2).replace('.', ',')
}

export async function fetchExchangeRate(date: Date) {
  const currency = 'USD'
  const baseCurrency = 'EUR'
  const invoiceDate = date.toISOString().split('T')[0]

  const url = `https://data-api.ecb.europa.eu/service/data/EXR/D.${currency}.${baseCurrency}.SP00.A?startPeriod=${invoiceDate}&endPeriod=${invoiceDate}`

  const response = await fetch(url)
  const text = await response.text()

  const parser = new DOMParser()
  const xmlDoc = parser.parseFromString(text, 'application/xml')

  const obsValue = xmlDoc.querySelector('generic\\:ObsValue, ObsValue')
  const obsDimension = xmlDoc.querySelector('generic\\:ObsDimension, ObsDimension')

  if (!obsValue || !obsDimension) throw new Error('ObsValue or ObsDimension not found.')

  const obsValueAttribute = obsValue.getAttribute('value')

  if (!obsValueAttribute) throw new Error('ObsValueAttribute not found.')

  return parseFloat(obsValueAttribute)
}
