const baseUrl = {
  development: '/api',
  test: 'http://123.207.32.32:8000/test',
  production: 'http://123.207.32.32:8000/'
}

const TIME_OUT = 10000

const ENV = process.env.NODE_ENV

console.log('EVN?>>>', ENV)

let requestUrl = baseUrl.production

if (ENV === 'development') {
  requestUrl = baseUrl.development
} else if (ENV === 'test') {
  requestUrl = baseUrl.test
}

export { requestUrl, TIME_OUT as timeout }
