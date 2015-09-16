var LinkedList = require('../linked_list').LinkedList;
var Node = require('../linked_list').Node;
var DoublyLinkedList = require('../linked_list').DoublyLinkedList;
var CircularLinkedList = require('../linked_list').CircularLinkedList;

var linkedList;
var node;

describe('linked list', function() {
  beforeEach(function() {
    linkedList = new LinkedList();
  });

  describe('add', function() {
    it ('should update the length', function() {
      expect(linkedList.length).toEqual(0);
      linkedList.add('First!');
      expect(linkedList.length).toEqual(1);
    });

    it ('should make head point to the first node, if there is no head', function() {
      expect(linkedList.head).toEqual(null);
      linkedList.add('First!');
      expect(linkedList.head.value).toEqual('First!');
    });

    it ('should make tail point to the last node, if there is no tail', function() {
      expect(linkedList.tail).toEqual(null);
      linkedList.add('First!');
      expect(linkedList.tail.value).toEqual('First!');
    });

    it ('should update the next property on the current tail when adding new nodes', function() {
      linkedList.add('First!');
      expect(linkedList.head.next).toEqual(null);
      linkedList.add('Last!');
      expect(linkedList.head.next.value).toEqual('Last!');
    });
  });

  describe('removeLast', function() {
    beforeEach(function() {
      linkedList.add('First!');
      node = linkedList.head;
    });

    it ('should update the length', function() {
      expect(linkedList.length).toEqual(1);
      linkedList.removeLast();
      expect(linkedList.length).toEqual(0);
    });

    it ('should null head, if this was the last node', function() {
      linkedList.removeLast();
      expect(linkedList.head).toEqual(null);
    });

    it ('should null tail, if this is the last node', function() {
      linkedList.removeLast();
      expect(linkedList.tail).toEqual(null);
    });

    it ('should null the next value on the previous element when removing nodes', function() {
      linkedList.add('Last!');
      expect(node.next.value).toEqual('Last!');
      linkedList.removeLast();
      expect(node.next).toEqual(null);
    });
  });
});


xdescribe('doubly linked list', function() {
  beforeEach(function() {
    linkedList = new DoublyLinkedList();
  });

  describe('add', function() {
    it ('should update the length', function() {
      expect(linkedList.length).toEqual(0);
      linkedList.add('First!');
      expect(linkedList.length).toEqual(1);
    });

    it ('should make head point to the first node, if there is no head', function() {
      expect(linkedList.head).toEqual(null);
      linkedList.add('First!');
      expect(linkedList.head.value).toEqual('First!');
    });

    it ('should make tail point to the last node, if there is no tail', function() {
      expect(linkedList.tail).toEqual(null);
      linkedList.add('First!');
      expect(linkedList.tail.value).toEqual('First!');
    });

    it ('should update the next property on the current tail when adding new nodes', function() {
      linkedList.add('First!');
      expect(linkedList.head.next).toEqual(null);
      linkedList.add('Last!');
      expect(linkedList.head.next.value).toEqual('Last!');
    });

    it ('should set the prev property when adding a new node', function() {
      linkedList.add('First!');
      linkedList.add('Last!');
      expect(linkedList.tail.prev.value).toEqual('First!');
    });
  });

  describe('removeLast', function() {
    beforeEach(function() {
      linkedList.add('First!');
      node = linkedList.head;
    });

    it ('should update the length', function() {
      expect(linkedList.length).toEqual(1);
      linkedList.removeLast();
      expect(linkedList.length).toEqual(0);
    });

    it ('should null head, if this was the last node', function() {
      linkedList.removeLast();
      expect(linkedList.head).toEqual(null);
    });

    it ('should null tail, if this is the last node', function() {
      linkedList.removeLast();
      expect(linkedList.tail).toEqual(null);
    });

    it ('should null the next value on the previous element when removing nodes', function() {
      linkedList.add('Last!');
      expect(node.next.value).toEqual('Last!');
      linkedList.removeLast();
      expect(node.next).toEqual(null);
    });

    it ('should null the prev value on the new head when removing nodes', function() {
      linkedList.add('Last!');
      expect(linkedList.tail.prev.value).toEqual('First!');
      linkedList.removeLast();
      expect(linkedList.tail.prev).toEqual(null);
    });
  });
});

xdescribe('circular linked list', function() {
  beforeEach(function() {
    linkedList = new CircularLinkedList();
  });

  describe('add', function() {
    it ('should update the length', function() {
      expect(linkedList.length).toEqual(0);
      linkedList.add('First!');
      expect(linkedList.length).toEqual(1);
    });

    it ('should make head point to the first node, if there is no head', function() {
      expect(linkedList.head).toEqual(null);
      linkedList.add('First!');
      expect(linkedList.head.value).toEqual('First!');
    });

    it ('should make tail point to the last node, if there is no tail', function() {
      expect(linkedList.tail).toEqual(null);
      linkedList.add('First!');
      expect(linkedList.tail.value).toEqual('First!');
    });

    it ('should update the next property on the current tail when adding new nodes', function() {
      linkedList.add('First!');
      expect(linkedList.head.next).toEqual(linkedList.head);
      linkedList.add('Last!');
      expect(linkedList.head.next.value).toEqual('Last!');
    });

    it ('should point next on new items to head', function() {
      linkedList.add('First!');
      linkedList.add('Last!');
      expect(linkedList.tail.next).toEqual(linkedList.head);
    });
  });

  describe('removeLast', function() {
    beforeEach(function() {
      linkedList.add('First!');
      node = linkedList.head;
    });

    it ('should update the length', function() {
      expect(linkedList.length).toEqual(1);
      linkedList.removeLast();
      expect(linkedList.length).toEqual(0);
    });

    it ('should null head, if this was the last node', function() {
      linkedList.removeLast();
      expect(linkedList.head).toEqual(null);
    });

    it ('should null tail, if this is the last node', function() {
      linkedList.removeLast();
      expect(linkedList.tail).toEqual(null);
    });

    it ('should set the next value on the last remaining node to itself', function() {
      linkedList.add('Last!');
      expect(node.next.value).toEqual('Last!');
      linkedList.removeLast();
      expect(node.next).toEqual(node);
    });
  });
});
