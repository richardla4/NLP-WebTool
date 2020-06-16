import { urlChecker } from '../client/js/urlChecker'

describe('URL Checker', () => {
  test('should return false with invalid URL', () => {
    const testUrl = 'htp:ww.2309200.com'
    const response = urlChecker(testUrl)
    expect(response).toEqual(false)
  })
  test('should return true with valid URL', () => {
    const testUrl = 'https://en.wikipedia.org/wiki/Wolf'
    const response = urlChecker(testUrl)
    expect(response).toEqual(true)
  })
})
