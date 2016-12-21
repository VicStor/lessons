const { makeList } = require('./list');

// You have two numbers represented by a linked list,
// where each node contains a single digit.
// The digits are stored in reverse order, such that
// the 1's digit is at the head of the list.
// Write a function that adds the two numbers
// and returns the sum as a linked list.
// EXAMPLE
// Input: (7 -> 1 -> 6) + (5 -> 9 -> 2)
// That is: 617 + 295
// Output: 2 -> 1 -> 9
// That is: 912
//
// FOLLOW UP
// Suppose the digits are stored in forward order.
// EXAMPLE
// Input: (6 -> 1 -> 7) + (2 -> 9 -> 5)
// Thatis: 617 + 295
// Output: 9 -> 1 -> 2
// That is: 912

const Id = x => ({
  x,
  map: f => Id(f(x)),
  fold: f => f(x),
  concat: ({ x: y }) => Id(y + x),
  unFold: _ => x,
  inspect: _ => `Id(${x})`
});

function listToString(list) {
  let str = '';
  let node = list.head;
  if(!node) return str;
  while(node) {
    str += node.data.toString();
    node = node.next;
  }
  return str;
}
function reverseStr(str) {
  return str.split('').reverse().join('');
}

let listA = makeList();
let listB = makeList();

listA.add(6).add(1).add(7).log();
listB.add(2).add(9).add(5).log();

function listToInt(list) {
  return Id(listToString(list))
            .map(reverseStr)
            .map(parseInt);
}

const x = listToInt(listA);
const y = listToInt(listB);
// const res = x.concat(y).unFold();
// console.log(res);

function sumLists(listA, listB) {
  let nodeA = listA.head;
  let nodeB = listB.head;
  let inMemory = 0;
  let nodeSumm = 0;
  let result = makeList();
  let reverseResult = makeList();

  while(nodeA || nodeB) {
    if(nodeA && nodeB) {
      nodeSumm = nodeA.data + nodeB.data + inMemory;
      inMemory = 0;
      if(nodeSumm < 10) {
        result.add(nodeSumm);
      } else {
        result.add(nodeSumm % 10);
        inMemory = 1;
      }
      nodeA = nodeA.next;
      nodeB = nodeB.next;
    } else {
      if(nodeA) {
        result.add(nodeA.data);
        nodeA = nodeA.next;
        continue;
      }
      if(nodeB) {
        result.add(nodeB.data);
        nodeB = nodeB.next;
      }
    }
  }
  result.log();
  nodeA = result.head;
  while(nodeA) {
    reverseResult.add(nodeA.data);
    nodeA = nodeA.next;
  }
  return reverseResult;
}

const res = sumLists(listA, listB);
res.log();
