class _Node {
  constructor(data, next, prev=null) {
    this.data = data;
    this.next= next;
    this.prev = prev;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }
  enqueue(data) {
    const newNode = new _Node(data, null);
    if (this.first === null) {
      this.first = newNode;
      this.last = this.first;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
  }

  dequeue() {
    if (this.first === null) {
      return 'Empty Queue';
    }
    const firstNode = this.first;
    this.first = firstNode.next;

    if (firstNode === this.last) {
      this.last = null;
      this.first = null;
    }
    firstNode.next = null;
    return node.value;
  }
  size() {
    let currNode = this.first;
    let counter = 0;
    while(currNode !== null) {
      currNode = currNode.next;
      counter++;
    }
    return counter;
  }
  getStr() {
    let currNode = this.first;
    let str = 'first';
    while(currNode !== null) {
      str = str + currNode.data + ", ";
      currNode = currNode.next;
    }
    str = str.slice(0 , -2);
    return str
  }
  display() {
    let currNode = this.first;
    let str = 'first: ';
    while(currNode !== null) {
      str = str + currNode.data + ", ";
      currNode = currNode.next;
    }
    str = str.slice(0 , -2);
  }
  peek() {
    return this.first.data;
  }
  isEmpty() {
    return this.first === null;
  }
}

let adoptionQueue = new Queue();

let adopterNames = ['Angel, Brendan, Kris, Abby, Anna'];

adoptionQueue.enqueue('Angel');
adoptionQueue.enqueue('Brendan');
adoptionQueue.enqueue('Kris');
adoptionQueue.enqueue('Abby');
adoptionQueue.enqueue('Anna');


module.exports = { Queue, _Node, adoptionQueue, adopterNames };