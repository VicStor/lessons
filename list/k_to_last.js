const { makeList } = require('./list');

function kToLast(list, k) {
  if(!list.head) {
    list.log();
    return list;
  }

  var p1 = list.head;
  var p2 = list.head;

  for(var i = 1; i <= k; i++) {
    if(!(p1 = p1.next)) {
      console.log('List length less then k');
      return -1;
    }
  }

  while(true) {
    if(p1 = p1.next) {
      p2 = p2.next;
    } else {
      return p2;
    }
  }
}


var list = makeList();

// list.add(1).add(2).add(3).add(4).add(5).add(6).add(7).add(9).log();
list.add(1).add(2).add(3).add(4).log();



var kthNode = kToLast(list, 3);
