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


  countingSort(toSort: number[], rangeFrom: number, rangeTo: number): number[] {
    console.log('toSort (1) -->  ', toSort);
    const arrayOfCounts: number[] = this.createArrayOfCounts(toSort, rangeFrom, rangeTo);
    this.modifyByAddingPrevCounts(arrayOfCounts);

    return this.placeInSortedContainer(toSort, arrayOfCounts);
  }


  createArrayOfCounts(toSort: number[], rangeFrom: number, rangeTo: number): number[] {
    console.log('toSort (1) -->  ', toSort);
    const arrayOfCounts: number[] = [];

    // fill in with zeros
    let index = rangeFrom;
    while (index <= rangeTo) {
      arrayOfCounts[index] = 0;
      index++;
    }


    index = 0;
    while (index < toSort.length) {
      const value = toSort[index];
      arrayOfCounts[value]++;
      index++;
    }

    console.log('arrayOfCounts: ', arrayOfCounts);
    return arrayOfCounts;
  }


  modifyByAddingPrevCounts(modifyArray: number[]) {

    let index = 0;
    while (index < modifyArray.length - 1) {

      modifyArray[index + 1] = modifyArray[index] + modifyArray[index + 1];
      index++;
    }
    console.log('modifyArray: ', modifyArray);

  }


  placeInSortedContainer(toSort: number[], modifiedArrayOfCounts: number[]) {
    const sortedContainer: number[] = [];

    let i = 0;
    while (i < toSort.length) {
      const itemIndex = modifiedArrayOfCounts[toSort[i]];
      sortedContainer[itemIndex] = toSort[i];
      modifiedArrayOfCounts[toSort[i]]--;

      i++;
    }

    console.log('sortedContainer: ', sortedContainer);

    return this.removeEmptyValues(sortedContainer);
  }


  removeEmptyValues(arrayToModify: number[]): number[] {
    return arrayToModify.filter(item => item !== null);
  }

}
