const { makeList } = require('./list');

// Implement a function to check if a linked list is a palindrome.

var listA = makeList();
var listB = makeList();
var listC = makeList();

listA.add('a').add('b').add('c').add('d').add('d').add('c').add('b').add('a');
listB.add('a').add('b').add('c').add('d').add('c').add('b').add('a');
listC.add('a').add('b').add('c').add('d').add('f').add('b').add('a');

function isPalindromeList1(list) { // O(n**2) time, O(1) memory
  let node = list.head;
  let listLen = 0;
  let tailP, headP;
  let checkElemNum = 0;
  let count = 0;

  if(!node) return false;

  while(node) {
    node = node.next;
    listLen += 1;
  }
  const lastNode = listLen - 1;
  while(checkElemNum <= Math.floor(lastNode / 2)) { // check elemenets up to center
    tailP = list.head;
    headP = list.head;
    count = 0;
    while(count < (lastNode - 2 * checkElemNum)) { // move tail pointer
      tailP = tailP.next;
      count += 1;
    }

    count = 0;
    while(count < checkElemNum) { // move both pointers
      tailP = tailP.next;
      headP = headP.next;
      count += 1;
    }

    if(tailP.data !== headP.data) {
      return false;
    }
    checkElemNum += 1;
  }

  return true;
}

function isPalindromeList(list) { // O(n) time,  O(n) memory
  let node = list.head;
  let arr = [];
  if(!node) return false;

  while(node) {
    arr.push(node.data);
    node = node.next;
  }
  const lastIndex = arr.length - 1;
  for(let i = 0; i <= Math.floor(arr.length / 2); i++ ) {
    // console.log(`${arr[i]} <-> ${arr[lastIndex - i]}    i: ${i}`);
    if(arr[i] !== arr[lastIndex - i])
      return false
  }
  return true;
}

// listA.log();
// listB.log();
listC.log();


const res = isPalindromeList1(listC);
console.log(res);
