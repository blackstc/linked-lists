function LinkedList() {
  this.head = null;
  this.tail = null;
  this.length = 0;
}

function Node(val) {
  this.next = null;
  this.prev = null;
  this.value = val;
}

function DoublyLinkedList() {
  LinkedList.apply(this);
}

LinkedList.prototype.add = function (val) {
  this.length++;
  var newNode = new Node(val);

  if (this.head === null) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
  }
};

LinkedList.prototype.removeLast = function () {
  this.length--;

  if (this.length === 0) {
    this.head = null;
    this.tail = null;
  }


  if (this.length > 0) {
    var currentNode = this.head;
    while(currentNode.next.next !== null) {
      if (this.head === this.tail) {
        this.tail.prev = null;
      }
      currentNode = currentNode.next;
    }
    currentNode.next = null;
    this.tail = currentNode;
  }
};

DoublyLinkedList.prototype = Object.create(LinkedList.prototype);
DoublyLinkedList.prototype.constructor = DoublyLinkedList;

function CircularLinkedList() {
  LinkedList.apply(this);
}

CircularLinkedList.prototype = Object.create(LinkedList.prototype);
CircularLinkedList.prototype.constructor = CircularLinkedList;

module.exports.Node = Node;
module.exports.LinkedList = LinkedList;
module.exports.CircularLinkedList = CircularLinkedList;
module.exports.DoublyLinkedList = DoublyLinkedList;
