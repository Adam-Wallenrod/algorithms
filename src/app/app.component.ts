import {Component, OnInit} from '@angular/core';
import {Queue} from './data-structures/queue/queue';

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
    const newQ: Queue = new Queue([5, 4, 3, 2, 1]);
    newQ.displayQueue();
    newQ.enqueue(10);
    newQ.displayQueue();
    newQ.dequeue();
    newQ.displayQueue();
    newQ.dequeue();
    newQ.dequeue();
    newQ.dequeue();
    newQ.dequeue();
    newQ.displayQueue();
    newQ.dequeue();
    newQ.displayQueue();
    newQ.dequeue();


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
