import { MongoClient } from 'mongodb'

export const MongoHelper = {
  client: MongoClient,
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  async connect (uri: string): Promise<void> {
    this.client = MongoClient.connect(uri, this.options)
  },

  async disconnect (): Promise<void> {
    await this.client.close()
  }
}
