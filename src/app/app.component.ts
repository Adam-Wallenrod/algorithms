import {Component, OnInit} from '@angular/core';
import {Queue} from './data-structures/queue/queue';
import {Stack} from './data-structures/stack/stack';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'sorting-app';

  constructor() {
  }


  ngOnInit() {
    const testStack: Stack = new Stack([1, 2, 3, 4 ], 10);
    console.log('testStack: ', testStack);
    testStack.add(5);
    console.log('testStack: ', testStack);
    testStack.add(6);
    console.log('testStack: ', testStack);
    const POPPED_1 = testStack.pop();
    console.log(`testStack: ${testStack.stack} and popped element ${POPPED_1}` );
    const POPPED_2 = testStack.pop();
    console.log('popped: ', POPPED_2);
    const POPPED_3 = testStack.pop();
    console.log('popped: ', POPPED_3);
    const POPPED_4 = testStack.pop();
    console.log('popped: ', POPPED_4);
    const POPPED_5 = testStack.pop();
    console.log('popped: ', POPPED_5);
    const POPPED_6 =  testStack.pop();
    console.log('popped: ', POPPED_6);
    console.log('isEmpty: ', testStack.isEmpty());
    console.log('testStack: ', testStack.stack);
    testStack.pop();
  }


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
