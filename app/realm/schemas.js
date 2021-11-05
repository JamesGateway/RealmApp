import { ObjectId } from 'bson'

class Text {
  constructor({ id = new ObjectId(), partition, title, http, message, email, date = new Date() }) {
    this._partition = partition
    this._id = id
    this.title = title
    this.http = http
    this.message = message
    this.email = email
    this.date = `${date}`
  }
  static schema = {
    name: 'Text',
    properties: {
      _id: 'objectId',
      title: 'string',
      http: 'string',
      message: 'string',
      email: 'string',
      date: 'string'
    },
    primaryKey: '_id'
  }
}

export { Text }
