import { handleSubmit } from '../client/js/formHandler'

describe('Handle Submit', () => {
  test('should return true', async () => {
    expect(handleSubmit).toBeDefined()
  })
  test('should be a function', async () => {
    expect(typeof handleSubmit).toBe('function')
  })
})
