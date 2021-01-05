import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-merge-sort-page',
  templateUrl: './merge-sort-page.component.html',
  styleUrls: ['./merge-sort-page.component.sass']
})
export class MergeSortPageComponent implements OnInit {

  arrayToSort: number[] = [38, 27, 43, 3, 9, 82, 10];





  constructor() { }

  ngOnInit() {
    this.mergeSort(this.arrayToSort, 0, this.arrayToSort.length - 1);
  }

  mergeSort(toSort: number[], leftIndex: number, rightIndex: number) {
    if (toSort.length === 1) {
      return toSort;
    }

    if (leftIndex < rightIndex) {
      const middleIndex: number = Math.round(leftIndex + (rightIndex - 1) / 2);
      const firstHalf: number[] = toSort.slice(0, (middleIndex + 1) );
      const secondHalf: number[] = toSort.slice(middleIndex + 1, toSort.length + 1);

      const firstArray = this.mergeSort( firstHalf,  0, middleIndex);
      const secondArray = this.mergeSort( secondHalf, middleIndex + 1, toSort.length );

      this.merge(firstHalf, secondHalf);



    }


  }


  merge(first: number[], second: number[]) {

    let i: number = 0;
    let newMergedArray: number[];

    while( i < first.length) {

      if() {

      }
      i++;

    }


  }

}
