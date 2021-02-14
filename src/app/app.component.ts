import {Component, OnInit} from '@angular/core';


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
    const myFirstTuple: [string, string, number] = ['first', 'second', 44];

    console.log('tuple: ', myFirstTuple);
    console.log('[0]: ', myFirstTuple[0]);
    console.log('[1]: ', myFirstTuple[1]);
    console.log('[2]: ', myFirstTuple[2]);


    console.log(this.identity<string>('zzz'));
    console.log(this.identityArrow<number[]>([1000000, 2000000, 3000000]));


    console.log('random option: ', this.getRandomOption('McRolay ', 1, {burger: 'chickenburger'}));


  }


  /**
   * An example of the simplest method which
   * is using Generic Types.
   *
   * @param input
   */
  identity<T>(input: T): T {
    return input;
  }

  identityArrow = <T>(input: T): T => input;


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


  /**
   * Chaining promises with reduce
   */
  async chainingPromises() {

    const promises = [

      async () => 1,
      async () => 2,
      async () => 3
    ];

    const result = await promises.reduce((promise, fn) => promise.then(fn), Promise.resolve(0));
    console.log('result: ', result);

  }


  getRandomOption<T, U, V>(one: T, two: U, three: V): T | U | V {
    // tuple
    const options: [T, U, V] = [one, two, three];
    const randomIndex: number = this.getRandomFormRange(0, 2);

    return  options[randomIndex];
  }


  getRandomFormRange(min: number, max: number) {
    const initNumber = Math.random() * (max - min + 1);
    const randomNumber: number = Math.floor(initNumber);
    return randomNumber;
  }

}
