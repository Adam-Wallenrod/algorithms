import {Component, OnInit} from '@angular/core';
import {InsertSort} from './insert-sort';

@Component({
  selector: 'app-insert-sort',
  templateUrl: './insert-sort-page.component.html',
  styleUrls: ['./insert-sort.component.sass']
})
export class InsertSortPageComponent implements OnInit {

  arrayToSort: number[] = [2, 8, 5, 3, 9, 4];
  sortedArray: number[];

  constructor() {
  }

  ngOnInit() {
    this.sortedArray = InsertSort.sort(this.arrayToSort);
    console.log('this.sortedArray: ', this.sortedArray);
  }

}
