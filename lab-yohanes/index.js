'use strict';

const queue = require('./lib/queues/queue');

dequeue() {
  if(this.front && !this.back) throw new Error ('Empty')
  if(this.front === this.back) {
    let temp = this.front
    this.front = this.back = null
    return temp
  }
  let temp = this.front
  this.front = this.front.next
  temp.next = null
  return temp
};

