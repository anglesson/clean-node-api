import { MongoHelper } from './helpers/mongo-helper'

describe('Account Mongo Repository', () => {
  const url = process.env.MONGODB_URL ? process.env.MONGODB_URL : ''

  beforeAll(async () => {
    await MongoHelper.connect(url)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  test('Should return account on success', async () => {
    const sut = new AccountMongoRepository()
    const account = await sut.add({
      name: 'any_name',
      email: 'any_email',
      password: 'any_password'
    })

    expect(account).toBeTruthy()
    expect(account.id).toBeTruthy()
    expect(account.name).toBe('any_name')
    expect(account.email).toBe('any_email')
    expect(account.password).toBe('any_password')
  })
})
