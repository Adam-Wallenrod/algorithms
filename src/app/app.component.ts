import {Component, OnInit} from '@angular/core';
import {Queue} from './data-structures/queue/queue';
import {Stack} from './data-structures/stack/stack';
// import {Add} from './data-structures/queue/undo';
import {Add, OpsStack, Times} from './data-structures/queue/undo2';
import {Tree} from '@angular/router/src/utils/tree';
import {BinarySearchTree} from './data-structures/tree/BST';
import {Graph} from './data-structures/graph/graph';
import {AnyList} from './generic-types/generic-types';
import {User} from './generic-types/user';

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
    const myFirstTuple: [string, string, number] = ['first', 'second', 44];

    console.log('tuple: ', myFirstTuple);
    console.log('[0]: ', myFirstTuple[0]);
    console.log('[1]: ', myFirstTuple[1]);
    console.log('[2]: ', myFirstTuple[2]);

    /***************************************************/
    // const userList: AnyList = AnyList.create([new User('George'), new User('Jerry') ]);
    // userList.add(new User('Elaine'));
    // // userList.add(145);
    // // userList.add('what am I even doing here?');
    // console.log('userList: ', userList);
    // const filteredUser: AnyList = userList.filter( (user) => user.getName() === 'Jerry');
    // console.log('filteredUser: ', filteredUser);
    // const seinfeldCast: AnyList = userList.select((user) => 'Seinfeld star: ' + user.getName());
    // console.log('seinfeldCast: ', seinfeldCast);
    // console.log(seinfeldCast === userList);


    console.log(this.identity<string>('zzz'));
    console.log(this.identityArrow<number[]>([1000000, 2000000, 3000000]));

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


}
