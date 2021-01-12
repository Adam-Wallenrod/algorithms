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
    this.createHeapTree(this.arrayToSort);
  }


  createHeapTree(inputArray: number[]) {
    // create a copy
    const copiedArray: number[] = inputArray.slice();
    const maxHeap: number[] = [];

    for (const [index, item] of copiedArray.entries()) {
      maxHeap[index] = item;
      this.trickleUp(maxHeap, item, maxHeap.length - 1);
    }

    console.log('maxHeap: ', maxHeap);
  }


  trickleUp(heap: number[], child: number, childIndex: number) {
    const parentIndex = Math.floor((childIndex - 1) / 2);
    if (childIndex !== 0 && heap[parentIndex] < child) {
      this.swap(heap, parentIndex, childIndex);
      this.trickleUp(heap, heap[parentIndex], parentIndex);

    }


  }


  swap(arrayToModify: number[], i: number, j: number) {
    const tmp = arrayToModify[j];
    arrayToModify[j] = arrayToModify[i];
    arrayToModify[i] = tmp;
  }

}
