/**
 * Thanks to Fernando Doglio for great article
 *  https://blog.bitsrc.io/data-structures-you-should-know-as-a-javascript-developer-9a35eb3b319c
 *
 */


class Stack {
  data = [];
  maxSize;

  constructor(initialData, maxSize = -1) {
    this.data = Array.isArray(initialData) ? initialData : (typeof initialData === 'undefined' ? [] : [initialData]);
    this.maxSize = maxSize;
  }

  isFull() {
    return this.maxSize !== -1 ? (this.data.length === this.maxSize) : false;
  }

  isEmpty() {
    return this.data.length === 0;
  }

  add(item) {
    if (this.isFull()) {
      return false;
    }
    this.data.push(item);
  }

  * generator() {
    while (!this.isEmpty()) {
      yield this.data.pop();
    }
  }

  pop() {
    const {value, done} = this.generator().next();
    if (done) {
      return false;
    }
    return value;
  }
}


/*************************************************************************/
class Operation {
  value: number;

  constructor(val) {
    this.value = val;
  }
}

export class Add extends Operation {

  apply(value) {
    return value + this.value;
  }

  undo(value) {
    return value - this.value;
  }
}

export class Times extends Operation {
  apply(value) {
    return value * this.value;
  }

  undo(value) {
    return value / this.value;
  }
}


export class OpsStack {
  value;
  operations;

  constructor() {
    this.value = 0;
    this.operations = new Stack([]);
  }

  add(op: Add | Times) {
    this.value = op.apply(this.value);
    this.operations.add(op);
  }

  undo() {
    if (this.operations.isEmpty()) {
      return false;
    }
    this.value = (this.operations.pop()).undo(this.value);
  }
}



