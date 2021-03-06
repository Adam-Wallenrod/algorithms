import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-quick-sort-page',
  templateUrl: './quick-sort-page.component.html',
  styleUrls: ['./quick-sort-page.component.sass']
})
export class QuickSortPageComponent implements OnInit {

  arrayToSort: number[] = [7, 32, 2, 11, 1, 4, 4, 8, 6, 7, 3, 5];
  sortedArray: number[];

  constructor() {
  }

  ngOnInit() {
    this.sortedArray = this.quickSort(this.arrayToSort);
  }

  quickSort(toSort: number[]): number[] {
    const arrayCopy: number[] = toSort.slice();
    const pivotIndex: number = Math.floor((toSort.length - 1) / 2);
    const pivot: number = toSort[pivotIndex];
    arrayCopy.splice(pivotIndex, 1);


    console.log('pivotIndex: ', pivotIndex);
    console.log('pivot: ', pivot);

    let i = -1;
    let j = 0;

    while (j < arrayCopy.length) {
      if (arrayCopy[j] >= pivot) {
        j++;
      } else if (arrayCopy[j] < pivot) {
        let temp: number;
        i++;
        if (i !== j) {
          temp = arrayCopy[j];
          arrayCopy[j] = arrayCopy[i];
          arrayCopy[i] = temp;
        }

        j++;
      }


    }


    const leftSide = arrayCopy.slice(0, (i + 1));
    const rightSide = arrayCopy.slice((i + 1), arrayCopy.length);
    console.log('leftSide: ', leftSide);
    console.log('rightSide: ', rightSide);

    let leftSideSorted: number[];
    let rightSideSorted: number[];

    if (leftSide.length >= 2) {
      leftSideSorted = this.quickSort(leftSide);
    } else {
      leftSideSorted = leftSide;
    }


    if (rightSide.length >= 2) {
      rightSideSorted = this.quickSort(rightSide);
    } else {
      rightSideSorted = rightSide;
    }


    const result = leftSideSorted.concat(rightSideSorted);
    result.splice((i < 0 ? 0 : i + 1), 0, pivot);
    return result;

  }

}
