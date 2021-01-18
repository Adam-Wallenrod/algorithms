import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-bubble-sort-page',
  templateUrl: './bubble-sort-page.component.html',
  styleUrls: ['./bubble-sort-page.component.sass']
})
export class BubbleSortPageComponent implements OnInit {

  arrayToSort: number[] = [7, 4, 5, 3, 1, 8, 2, 6];
  sortedArray: number[] = [];

  constructor() {
  }

  ngOnInit() {
    this.sortedArray = this.bubbleSort(this.arrayToSort);
    console.log('sortedArray: ', this.sortedArray);
  }

  bubbleSort(toSort: number[]): number[] {
    const coppiedToSort: number[] = toSort.slice();
    const sorted: number[] = [];

    let i = 0;

    while (coppiedToSort.length > 0) {

      while (i < (coppiedToSort.length - 1)) {
        if (coppiedToSort[i] > coppiedToSort[i + 1]) {
          this.swap(coppiedToSort, i, i + 1);
        }

        i++;
      }


      sorted.unshift(coppiedToSort[coppiedToSort.length - 1]);
      console.log('sorted: ', sorted);
      coppiedToSort.pop();
      i = 0;

    }


    return sorted;
  }


  swap(arrayToModify: number[], i: number, j: number) {
    const tmp = arrayToModify[j];
    arrayToModify[j] = arrayToModify[i];
    arrayToModify[i] = tmp;
  }

}
