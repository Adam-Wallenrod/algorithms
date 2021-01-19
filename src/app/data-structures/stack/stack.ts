export class Stack {
  readonly stack: number[] = [];
  readonly maxSize: number;

  constructor(initialStack: number[], maxSize: number = -1) {
    this.maxSize = maxSize;

    if (this.maxSize === -1 || initialStack.length < this.maxSize) {
      this.stack = initialStack;
    } else {
      throw Error('Defined maxSize is smaller than initially passed stack');
    }

  }



  public isFull(): boolean {
    return (this.maxSize !== -1) ? this.stack.length === this.maxSize : false;
  }

  public isEmpty(): boolean {
    return this.stack.length === 0;
  }


  public add(value: number) {
    if (!this.isFull()) {
      this.stack.push(value);
    } else {
      console.log(`The stack reached it\'s max size of ${this.maxSize}`);
    }

  }


  public pop(): number {
    if ( !this.isEmpty() ) {
      return this.stack.pop();
    }
    console.log('Stack is already empty');
    return null;
  }

}
