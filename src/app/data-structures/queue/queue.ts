/**
 * Class implements Queue - data structure.
 *
 * (Just for fun decided to restrict it only
 * to numbers.)
 */
export class Queue {
  readonly data: number[] = [];
  readonly maxSize: number;


  /**
   * Constructor allows to initialize the queue with
   * array of numbers.
   *
   * @param data,
   * @param maxSize,
   */
  constructor(data: number[], maxSize: number = -1) {
    this.data = [...data];
    this.maxSize = maxSize;
  }

  public displayQueue() {
    console.log('Current queue: ', this.data);
  }

  public displayMaxSize() {
    console.log('maxSize: ', this.maxSize);
  }

  public isFull(): boolean {
    return this.maxSize ? this.data.length === this.maxSize : false;
  }


  public enqueue(value: number) {
    if (!this.isFull()) {
      this.data.unshift(value);
    } else {
      throw new Error('The queue is already full!');
    }
  }

  /**
   * Deques element from the queue
   * and returns that element;
   */
  public dequeue(): number {
    if (this.data.length) {
      return this.data.pop();
    } else {
      throw  new Error();
    }

  }

  public isEmpty() {
    return !!this.data.length;
  }


}
