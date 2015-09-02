# Linked Lists

## Objectives

* Explain what a linked list is, and describe 3 types of linked lists
* Explain how linked lists are useful for Stacks and Queues
* Describe the tradeoffs of a linked list compared to an array

### What is a linked list?

In it's simplest form, a singly linked list, it's an ordered list of nodes. The linked list itself will contain a pointer to the HEAD node and usually some other properties, like the length of the list. Every node element contains a pointer to the data contained at that node, and a pointer to the next element in the linked list. The last element in the list will have a null reference for it's 'next' value.

![singly linked list](https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Singly-linked-list.svg/816px-Singly-linked-list.svg.png)
_A singly linked list whose nodes contain two fields: an integer value and a link to the next node_

#### Exercise

Implement `add` and `remove` functions to the stubbed out linked_list implementation here: https://github.com/gSchool/linked_list_practice

The tests are written for you already, you just need to make them all pass.

#### Doubly Linked Lists

A doubly linked list contains node which contain both a `next` and a `prev` value. This can be useful when you need to easily traverse both directions along the list, instead of solely moving forward.

![doubly linked lists](https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Doubly-linked-list.svg/1220px-Doubly-linked-list.svg.png)
_A doubly linked list whose nodes contain three fields: an integer value, the link forward to the next node, and the link backward to the previous node_

#### Circular Linked Lists

A circular linked list is a list in which the tail element's `next` property is pointing to the `head` of the linked list.

![circular linked list](https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Circularly-linked-list.svg/700px-Circularly-linked-list.svg.png)

### Exercise

Add add/remove functionality to CircularLinkedLists and DoublyLinkedLists, there are stubs already there. Uncomment the specs, and make them pass!

_Bonus_: Add Sentinel nodes. (https://en.wikipedia.org/wiki/Sentinel_node)

_Bonus Bonus_: Add the ability to insert or delete nodes at arbitrary points in the list, instead of just at the end.
