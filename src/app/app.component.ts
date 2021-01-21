import {Component, OnInit} from '@angular/core';
import {Queue} from './data-structures/queue/queue';
import {Stack} from './data-structures/stack/stack';
// import {Add} from './data-structures/queue/undo';
import {Add, OpsStack, Times} from './data-structures/queue/undo2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'sorting-app';
  // addOperations = new Add(2);
  // numberToAdd: number;

  constructor() {
  }


  ngOnInit() {
    const s = new OpsStack();

    s.add( new Add(1));
    s.add( new Add(1));
    s.add( new Times(2));
    console.log('s: ', s);

    s.undo();
    s.undo();
    console.log('s: ', s);
  }


  // addNumber(value: number) {
  //   console.log(`Number to add:  ${this.numberToAdd}`);
  //   this.addOperations.add(value);
  // }
  //
  // undoAdd() {
  //   this.addOperations.undo();
  // }
  //
  // getAddValue() {
  //   return this.addOperations.getValue();
  // }





  /**
   * Different way of converting to array
   */
  createArrays() {
    const listElements = document.documentElement.querySelectorAll('li');
    console.log('listElements: ', listElements);

    // first way:
    const arr1 = Array.from(listElements);
    console.log('Array.from() ---> arr2: ', arr1);

    // second way :
    const arr2 = [].slice.call(listElements);
    console.log('[].slice.call() --> ', arr2);
  }


}
