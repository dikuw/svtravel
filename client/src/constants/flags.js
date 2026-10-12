const COUNTRY_CODES = {
  Argentina: 'AR',
  Austria: 'AT',
  Brazil: 'BR',
  Cambodia: 'KH',
  Colombia: 'CO',
  Czechia: 'CZ',
  Ecuador: 'EC',
  France: 'FR',
  Germany: 'DE',
  Greece: 'GR',
  Hungary: 'HU',
  Indonesia: 'ID',
  Italy: 'IT',
  Mexico: 'MX',
  Monaco: 'MC',
  Morocco: 'MA',
  Netherlands: 'NL',
  Norway: 'NO',
  Panama: 'PA',
  Peru: 'PE',
  Portugal: 'PT',
  Spain: 'ES',
  Thailand: 'TH',
  'United Kingdom': 'GB',
  Uruguay: 'UY',
  Vietnam: 'VN',
}

const flagUrls = import.meta.glob('../assets/flags/*.svg', { eager: true, import: 'default' })

export function flagSrc(country) {
  const code = COUNTRY_CODES[country]?.toLowerCase()
  if (!code) return ''
  return flagUrls[`../assets/flags/${code}.svg`] ?? ''
}
