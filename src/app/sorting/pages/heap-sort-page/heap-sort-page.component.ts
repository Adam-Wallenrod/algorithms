import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-heap-sort-page',
  templateUrl: './heap-sort-page.component.html',
  styleUrls: ['./heap-sort-page.component.sass']
})
export class HeapSortPageComponent implements OnInit {

  arrayToSort: number[] = [7, 10, 5, 22, 12, 17, 15, 11, 6, 9];
  sortedArray: number[] = [];

  constructor() {
  }


  ngOnInit() {
    const maxHeap = this.createHeapTree(this.arrayToSort);
    this.sortedArray = this.sortHeap(maxHeap);
  }


  createHeapTree(inputArray: number[]): number[] {
    // create a copy
    const copiedArray: number[] = inputArray.slice();
    const maxHeap: number[] = [];

    for (const [index, item] of copiedArray.entries()) {
      maxHeap[index] = item;
      this.trickleUp(maxHeap, item, maxHeap.length - 1);
    }

    console.log('maxHeap: ', maxHeap);
    return maxHeap;
  }


  trickleUp(heap: number[], child: number, childIndex: number) {
    const parentIndex = Math.floor((childIndex - 1) / 2);
    if (childIndex !== 0 && heap[parentIndex] < child) {
      this.swap(heap, parentIndex, childIndex);
      this.trickleUp(heap, heap[parentIndex], parentIndex);

    }


  }


  /**
   * Checks if new parent has a right position (it's position
   * does not violate the rule of Max Heap).
   */
  trickleDown(heap: number[], parent: number, parentIndex: number): number {
    const firstChildIndex: number = 2 * parentIndex + 1;
    const secondChildIndex: number = 2 * parentIndex + 2;

    const firstChildValue: number = heap[firstChildIndex];
    const secondChildValue: number = heap[secondChildIndex];


    let updatedIndex: number = parentIndex;

    if (firstChildValue === undefined) {
      return null;
    }


    if (secondChildValue === undefined || (heap[firstChildIndex] > heap[secondChildIndex])) {

      if (parent < heap[firstChildIndex]) {
        this.swap(heap, parentIndex, firstChildIndex);
        updatedIndex = firstChildIndex;
      }

    } else {

      if (parent < heap[secondChildIndex]) {
        this.swap(heap, parentIndex, secondChildIndex);
        updatedIndex = secondChildIndex;
      }

    }

    if (updatedIndex !== parentIndex) {
      this.trickleDown(heap, parent, updatedIndex);
    }

  }


  swap(arrayToModify: number[], i: number, j: number) {
    const tmp = arrayToModify[j];
    arrayToModify[j] = arrayToModify[i];
    arrayToModify[i] = tmp;
  }

  /**
   * Removes root element from heap and returns it
   * @param arrayToReduce
   */
  removeLastItem(arrayToReduce: number[]): number {
    // swapping first and last element
    this.swap(arrayToReduce, 0, (arrayToReduce.length - 1));
    const removedRoot: number = arrayToReduce.pop();
    this.trickleDown(arrayToReduce, arrayToReduce[0], 0);

    return removedRoot;
  }

  sortHeap(toSort: number[]) {
    const sorted: number[] = [];

    const updatedIndex: number = this.trickleDown(toSort, toSort[0], 0);

    while (toSort.length) {
      sorted.unshift(this.removeLastItem(toSort));
    }

    return sorted;

  }
}
