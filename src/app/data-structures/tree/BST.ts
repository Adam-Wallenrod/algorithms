import {Tree} from '@angular/router/src/utils/tree';

class TreeNode {
  value: number;
  leftNode: TreeNode;
  rightNode: TreeNode;

  constructor(value: number) {
    this.value = value;
    this.leftNode = null;
    this.rightNode = null;
  }

}


/**
 * Binary Search Tree
 */
export class BinarySearchTree {

  root: TreeNode;

  constructor() {
    console.log('creating a new tree!');
  }


  public insert(newValue: number, node?: TreeNode) {
    if (!this.root) {
      this.root = new TreeNode(newValue);
      return null;
    }

    if (!node) {
      node = this.root;
    }

    // is less than node
    if (newValue < node.value) {

      if (node.leftNode) {
        this.insert(newValue, node.leftNode);
      } else {
        node.leftNode = new TreeNode(newValue);
        return null;
      }


    } else {
      if (node.rightNode) {
        this.insert(newValue, node.rightNode);
      } else {
        node.rightNode = new TreeNode(newValue);
        return null;
      }
    }


  }

}
