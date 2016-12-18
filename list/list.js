function makeNode(data) {
  return ({
      data: data,
      next: null,
      prev: null
    });
}
function makeList() {
  var proto = {
    head: null
  };
  return Object.assign(
    proto,
    {
      makeNode
    },
    listLogger(),
    addNode(),
    removeNode()
  );
}


function listLogger() {
  return ({
    log() {
      var currentNode = this.head;
      var printString = '';
      if(currentNode !== null) {
        printString += currentNode.data.toString();
        while(currentNode.next !== null) {
          printString += ' <--> ' + currentNode.next.data.toString();
          currentNode = currentNode.next;
        }
        console.log(printString);
      } else {
        console.log('Empty list');
      }
      return this;
    }
  });
}

function addNode() {
  return ({
    add(data) {
      var newNode = this.makeNode ? this.makeNode(data) : makeNode(data);
      var head = this.head;

      if(head === null) { // empty list
        this.head = newNode;
      } else {
        newNode.next = head;
        head.prev = newNode;
        this.head = newNode;
      }
      return this;
    }
  });
}

function removeNode() {
  return ({
    remove(data) {
      var currentNode = this.head;
      var nextNode = null;

      if(this.head === null) {
        console.log('List is empty. Can\'t remove item');
        return this;
      }

      if(data === undefined || currentNode.data === data) { // remove head
        this.head = this.head.next;
        if(this.head !== null) this.head.prev = null;
        return this;
      }

      while(currentNode.next !== null) {
        nextNode = currentNode.next;
        if(nextNode.data === data) {
          currentNode.next = nextNode.next;
          nextNode.prev = currentNode;
          return this;
        }
        currentNode = currentNode.next;
      }
      console.log('Can\'t find node with data: ', data);
      return this;
    }
  });
}
// moveToNext:: makeNode -> makeNode.next
function nextTo(node) {
  return node.next ? node.next : false;
}
// appendNextNode.call(node, data)
function appendNextNode(data) {
  const newNode = makeNode(data);
  newNode.next = this.next || null;
  newNode.prev = this;
  this.next = newNode;
}
// removeNextNode.call(node)
function removeNextNode() {
  const deletedNode = this.next || null;
  if(deletedNode !== null) {
    this.next = deletedNode.next || null;
    deletedNode.next !== null ? deletedNode.next.prev = this : void(0);
  }
}

module.exports = {
  makeNode,
  makeList,
  nextTo,
  appendNextNode,
  removeNextNode
};
