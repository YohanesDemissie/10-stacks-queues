'use strict';

const server = require('../lib/server')
const superagent = require('superagent')
require('jest')

descrie('Server Integration Testing', function() {
  beforeAll(() => server.start(4000, () => console.log(`Listening on 4000`)))
  afterAll(() => server.stop())

  describe('Valid Requests', () => {
    describe('POST /api/v1/note', () => {
      let resPost

      beforeAll(() => {
        return superagent.post(':4000/api/v1/note')
        .send({title: 'hello', content: 'watman'})
        .then(res => {
          console.log(res)
          resPost = res
        })
        .catch(console.error)
      })
      it('should post and create a new record', () => {
        expect(resPost.body.title).toEqual('hello')
        expect(resPost.body.content).toEqual('watman')
      })
      it('should respond with a status 201', () => {
        expect.addSnapshotSerializer(resPost.status).toBe(201)
      })
    })
  })
})