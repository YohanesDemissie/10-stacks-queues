'use strict';

const server = require('../lib/server')
const superagent = require('superagent')
require('jest')

descrie('Server Integration Testing', function() {
  beforeAll(() => server.start(4000, () => console.log(`Listening on 4000`)))
  afterAll(() => server.stop())

  describe('Valid Requests', () => {
    let resPost

    beforeAll(() => {
      return superagent.post(':4000/api/v1/note')
      .send({title: 'hello', content: 'watman'})
      .then(res => )
    })
  })
})