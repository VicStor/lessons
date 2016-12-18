const { makeNode, makeList, removeNextNode } = require('./list');

function extMakeNode(data) {
  const nodeProto = makeNode(data);

  return Object.assign(
    nodeProto,
    {
      removeNext: removeNextNode
    }
  );
}

// Delete Middle Node:
// Implement an algorithm to delete a node in the middle
// (i.e., any node but the first and last node, not necessarily the exact middle)
// of a singly linked list, given only access to that node.
//O(n)
function delMid(list) {
  if(!list.head) {
    list.log();
    return list;
  }
  var rab = list.head;
  var tur = list.head;

  while(rab) {
    if((rab = rab.next) && (rab = rab.next)) {
      if(rab.next) {
        tur = tur.next;
      }
    }
  }
  tur.removeNext();
  return list;
}

const list = makeList();
list.makeNode = extMakeNode;

// list.add(1).add(2).add(3).add(4).add(5).add(6).add(7).add(9).log();
list.add(1).add(2).add(3).add(4).add(5).add(6).add(7).log();


delMid(list);

list.log();
