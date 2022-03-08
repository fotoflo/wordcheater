// NEXT_PUBLIC ENV is exposed to the javascript
// BUILD env only gets updated at build time
// .env.local overrides .env.development and .env.production

module.exports = {
  reactStrictMode: true,
  MIN_WORD_LENGTH: 3,
  MAX_WORD_LENGTH: 11,
  DEFAULT_WORD_LENGTH: 3,
  MAX_HINTS: 100,
  DEFAULT_SHOW_HINTS: true,
  DEFAULT_SHOW_WORD: process.env.NEXT_PUBLIC_BUILD_SHOW_WORD === 'true',
  BASE_URL: process.env.NEXT_PUBLIC_WORDCHEATER_BASE_URL,
  GA_ID: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ACTIVE
}
