const request = require('supertest')
const app = require('../server/index')

describe('Root path', () => {
  test('should respond with GET method', async done => {
    const res = await request(app).get('/')
    expect(res.status).toBe(200)
    done()
  })
})

describe('GET /getAnalysis', () => {
  test('should respond with Aylien API data', async done => {
    const res = await request(app).get('/getAnalysis')
    expect(res.body.subjectivity_confidence).toBe(1)
    done()
  })
})
