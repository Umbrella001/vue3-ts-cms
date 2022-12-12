const baseUrl = {
  development: 'http://123.207.32.32:8000/dev',
  test: 'http://123.207.32.32:8000/test',
  production: 'http://123.207.32.32:8000/'
}

const TIME_OUT = 10000

const ENV = process.env.NODE_ENV

let requestUrl = baseUrl.production

if (ENV === baseUrl.development) {
  requestUrl = baseUrl.development
} else if (ENV === baseUrl.test) {
  requestUrl = baseUrl.test
}

export { requestUrl, TIME_OUT as timeout }
