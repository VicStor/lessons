const { makeNode, makeList, appendNextNode, removeNextNode, nextTo } = require('./list');

function extendedNode(data) {
  var node = makeNode(data);
  return Object.assign(
    node,
    {
      removeNext: removeNextNode
    }
  );

}

// Write code to remove duplicates from an unsorted linked list.

// naïve O(n**2) time, O(1) memory
function removeDublicates1(list) {
  var p1 = list.head;
  var p2;

  while(p1) {
    p2 = p1;
    while(p2.next) {
      if(p1.data === p2.next.data) {
        p2.removeNext();
        continue;
      }
      p2 = p2.next;
    }
    p1 = p1.next;
  }
  return list;
}
// using hash O(n) time, O(n) memory
function removeDublicates2(list) {
  var hash = {};
  var currentNode = list.head;
  if(!currentNode) return list;
  hash[+currentNode.data] = true;
  while(currentNode.next) {
    if(+currentNode.next.data in hash) {
      currentNode.removeNext();
      list.log();
      continue;
    }
    hash[+currentNode.next.data] = true;
    currentNode = currentNode.next;
  }
  return list;
}

var list = makeList()
list.makeNode = extendedNode;

list.add(8).add(7).add(6).add(8).add(8).add(5).add(5).add(8).log();

removeDublicates2(list).log();
