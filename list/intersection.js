const { makeList } = require('./list');

// Given two (singly) linked lists
// determine if the two lists intersect
// Return the intersecting node.
// Note that the intersection is defined based on reference, not value.
// That is, if the kth node of the first linked list is the exact same node (by reference) as the jth node of the second linked listing.

let listA = makeList();
let listB = makeList();
let listC = makeList();

listA.add(31).add(32).add('xxxx').add(34);
listB.add(1).add(2).add(3).add(4).add(5);

listB.head.next.next.next.next.next = listA.head.next;

listA.log();
listB.log();
listC.log();

function checkIntersection(listA, listB) {
  let nodeA = listA.head;
  let nodeB = listB.head;

  let lenA = 1;
  let lenB = 1;

  if(!nodeA || !nodeB) {
    console.log('At least one of lists is empty list');
    return false;
  }

  while(nodeA.next) {
    nodeA = nodeA.next;
    lenA += 1;
    // if(nodeA.next) {
    //   nodeA = nodeA.next;
    //   lenA += 1;
    // }
    // if(nodeB.next) {
    //   nodeB = nodeB.next;
    //   lenB += 1;
    // }
  }
  while(nodeB.next) {
    nodeB = nodeB.next;
    lenB += 1;
  }

  if(nodeA === nodeB) {
    console.log('Yes');
    console.log(`lenA = ${lenA}, lenB = ${lenB}`);
    return getIntersectionNode(listA, lenA, listB, lenB);
  } else {
    console.log('No');
    return false;
  }
}

function getIntersectionNode(listA, lenA, listB, lenB) {
  const diffLen = lenA - lenB;
  let nodeA = listA.head;
  let nodeB = listB.head;
  let counter = 0;
  while(nodeA !== nodeB) {
    if(counter < Math.abs(diffLen)) {
      if(diffLen > 0) {
        nodeA = nodeA.next;
      } else {
        nodeB = nodeB.next;
      }
      counter += 1;
      continue;
    }
    counter += 1;
    nodeA = nodeA.next;
    nodeB = nodeB.next;
  }
  console.log(`counter = ${counter}`);
  return nodeA;
}


const res = checkIntersection(listA, listC);

console.log(res);
