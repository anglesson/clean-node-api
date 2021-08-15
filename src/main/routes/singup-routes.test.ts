import request from 'supertest'
import app from '../config/app'

describe('Singup Routes', () => {
  test('Should return an account on success', async () => {
    await request(app)
      .post('/api/singup')
      .send({
        name: 'Anglesson',
        email: 'anglesson@hotmail.com',
        password: '123456',
        passwordConfirmation: '123456'
      })
      .expect(200)
  })
})
