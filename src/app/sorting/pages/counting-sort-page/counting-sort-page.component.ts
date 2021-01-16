import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-counting-sort-page',
  templateUrl: './counting-sort-page.component.html',
  styleUrls: ['./counting-sort-page.component.sass']
})
export class CountingSortPageComponent implements OnInit {

  arrayToSort: number[] = [1, 4, 1, 2, 7, 5, 2];
  sortedArray: number[] = [];

  rangeFrom = 0;
  rangeTo = 9;

  constructor() {
  }

  ngOnInit() {
    this.sortedArray = this.countingSort(this.arrayToSort, this.rangeFrom, this.rangeTo);

  }


  countingSort(sortArray: number[], rangeFrom: number, rangeTo: number): number[] {
    console.log('sortArray (1) -->  ', sortArray);
    this.createArrayOfCounts(sortArray, rangeFrom, rangeTo);


    return [];
  }


  createArrayOfCounts(sortArray: number[], rangeFrom: number, rangeTo: number) {
    console.log('sortArray (1) -->  ', sortArray);
    const arrayOfCounts: number[] = [];

    // fill in with 0s
    let index = rangeFrom;
    while (index <= rangeTo) {
      arrayOfCounts[index] = 0;
      index++;
    }


    index = 0;
    while (index < sortArray.length) {
      const value = sortArray[index];
      arrayOfCounts[value]++;
      index++;
    }

    console.log('arrayOfCounts: ', arrayOfCounts);

  }


}
