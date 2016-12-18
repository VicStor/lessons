const { makeNode, makeList, appendNextNode, removeNextNode, nextTo }  = require('./list');

function makeMyNode(data) {
  var node = makeNode(data);
  return Object.assign(
    node,
    {
      append: appendNextNode,
      removeNext: removeNextNode
    }
  );
}


function interList(list) {
  var turtle = list.head;
  var rabbit = list.head;
  var secondLoop = false;
  while(turtle !== rabbit || !secondLoop) {
    if(!secondLoop && (rabbit = nextTo(rabbit)) && (rabbit = nextTo(rabbit))) {
      turtle = nextTo(turtle);
    } else if (!secondLoop) {
      secondLoop = true;
      rabbit = list.head;
    } else {
      rabbit.append(turtle.next.data);
      turtle.removeNext();
      rabbit = nextTo(rabbit);
      rabbit = nextTo(rabbit);
    }
  }
}

var list = makeList()
list.makeNode = makeMyNode;

list.add(1).add(1).add(1).add(1).add(0).add(0).add(0).add(0).log();

interList(list);
list.log();
