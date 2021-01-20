/**
 *  Example usage of stack data structure
 */
import {Stack} from '../stack/stack';

export class Operation {

  protected value: number;

  constructor(value: number) {
    this.value = value;
  }

  public getValue(): number {
    return this.value;
  }

}


export class Add extends Operation {

  addOperationStack: Stack;


  constructor(value: number) {
    super(value);
    this.addOperationStack = new Stack([this.value], 100, 1);
  }


  public add(val: number): void {
    this.value += val;
    this.addOperationStack.add(val);
  }


  undo() {
    this.value -= this.addOperationStack.pop();
  }


}
