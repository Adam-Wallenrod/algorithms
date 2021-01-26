import {Component, OnInit} from '@angular/core';
import {Queue} from './data-structures/queue/queue';
import {Stack} from './data-structures/stack/stack';
// import {Add} from './data-structures/queue/undo';
import {Add, OpsStack, Times} from './data-structures/queue/undo2';
import {Tree} from '@angular/router/src/utils/tree';
import {BinarySearchTree} from './data-structures/tree/BST';
import {Graph} from './data-structures/graph/graph';

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

    /**
     * Testing Tree data-structure
     */
    // const tree = new BinarySearchTree();
    // tree.insert(10);
    // tree.insert(8);
    // tree.insert(11);
    // tree.insert(23);
    // tree.insert(1);
    // tree.insert(9);
    //
    // console.log('tree: ', tree);
    // tree.print();

    /**
     *  Testing chaining Promises with reduce() method
     */
      // this.chainingPromises();

    const roadGraph = new Graph('roadMap');
    console.log('roadGraph: ', roadGraph);
    roadGraph.addNode('Warszawa');
    roadGraph.addNode('Krakow');
    roadGraph.addNode('Poznan');
    roadGraph.addNode('Gdansk');

    roadGraph.displayNodes();

    roadGraph.addLink(1, 2, 400);
    roadGraph.displayNodes();

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


}
