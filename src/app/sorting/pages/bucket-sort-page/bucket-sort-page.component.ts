import {Component, OnInit} from '@angular/core';
import {InsertSort} from '../insert-sort/insert-sort';

@Component({
  selector: 'app-bucket-sort-page',
  templateUrl: './bucket-sort-page.component.html',
  styleUrls: ['./bucket-sort-page.component.sass']
})
export class BucketSortPageComponent implements OnInit {

  arrayToSort: number[] = [0.78, 0.17, 0.39, 0.26, 0.72, 0.94, 0.21, 0.12, 0.23, 0.68];
  sortedArray: number[];


  constructor() {
  }

  ngOnInit() {
    this.sortedArray = this.bucketSort(this.arrayToSort, 10);
    console.log('sortedArray: ', this.sortedArray);
  }


  findMaxValue(arrayToCheck: number[]): number {
    let i = 1;
    let max: number = arrayToCheck[0];

    while (i < arrayToCheck.length) {
      if (arrayToCheck[i] > max) {
        max = arrayToCheck[i];
      }
      i++;
    }

    return max;
  }


  bucketSort(toSort: number[], numberOfBuckets: number): number[] {
    const copiedArray: number[] = toSort.slice();
    const buckets: Map<number, number[]> = this.splitToBuckets(copiedArray, numberOfBuckets);
    this.sortValuesInBuckets(buckets);

    return this.mergeBuckets(buckets);
  }

  /**
   *
   * @param arrayToSplit
   * @param k - number of buckets to use
   */
  splitToBuckets(arrayToSplit: number[], k: number): Map<number, number[]> {
    let i = 0;
    const buckets: Map<number, number[]> = new Map();

    // create an empty Map with k - elements
    for (const value of arrayToSplit) {
      buckets.set(i, [] as number[]);
      i++;
    }

    console.log('empty buckets: ', buckets);

    const maxValue = this.findMaxValue(this.arrayToSort);
    // move values to appropriate buckets
    for (const value of arrayToSplit) {
      const bucketNumber: number = this.calculateBucketNumberForValue(value, k, maxValue);
      const bucket: number[] = buckets.get(bucketNumber);
      bucket.push(value);
    }

    console.log('buckets: ', buckets);
    return buckets;
  }


  sortValuesInBuckets(mapOfBuckets: Map<number, number[]>) {
    console.log('---------------------------------');

    for (const [key, value] of mapOfBuckets.entries()) {
      const sorted = InsertSort.sort(value);
      mapOfBuckets.set(key, sorted);
    }

  }


  mergeBuckets(mapOfBuckets: Map<number, number[]>): number[] {

    console.log('merged: ');
    let mergedBuckets: number[] = [];
    mapOfBuckets.forEach(bucket => {
      if (bucket.length) {
        mergedBuckets = mergedBuckets.concat(bucket);
      }
      console.log('bucket: ', bucket);
    });
    console.log('merged: ', mergedBuckets);
    return mergedBuckets;

  }

  calculateBucketNumberForValue = (value: number, k: number, max: number): number => Math.floor(value * k / max);


}
