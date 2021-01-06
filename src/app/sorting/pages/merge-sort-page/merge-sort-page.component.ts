import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-merge-sort-page',
  templateUrl: './merge-sort-page.component.html',
  styleUrls: ['./merge-sort-page.component.sass']
})
export class MergeSortPageComponent implements OnInit {

  // arrayToSort: number[] = [38, 27, 43, 3, 9, 82, 10];
  arrayToSort: number[] = [38, 27, 15 , 43, 3, 9, 82, 15, 10, 38];
  sortedArray: number[];


  constructor() {
  }

  ngOnInit() {
    this.sortedArray = this.mergeSort(this.arrayToSort, 0, this.arrayToSort.length - 1);
  }

  mergeSort(toSort: number[], leftIndex: number, rightIndex: number): number[] {
    if (toSort.length === 1) {
      return toSort;
    }

    if (leftIndex < rightIndex) {
      const middleIndex: number = Math.round(leftIndex + (rightIndex - 1) / 2);
      const firstHalf: number[] = toSort.slice(0, (middleIndex + 1));
      const secondHalf: number[] = toSort.slice(middleIndex + 1, toSort.length + 1);

      const firstArray = this.mergeSort(firstHalf, 0, middleIndex);
      const secondArray = this.mergeSort(secondHalf, 0, secondHalf.length - 1);

      const sorted: number[] = this.merge(firstArray, secondArray);
      return sorted;
    }


  }


  merge(first: number[], second: number[]): number[] {
    const newMergedArray: number[] = [];

    while (first.length && second.length) {
      if (first[0] < second[0]) {
        newMergedArray.push(first.shift());
      } else {
        newMergedArray.push(second.shift());
      }

    }

    while (first.length) {
      newMergedArray.push(first.shift());
    }

    while (second.length) {
      newMergedArray.push(second.shift());
    }

    console.log('newMergedArray: ', newMergedArray);
    return newMergedArray;


  }


}
