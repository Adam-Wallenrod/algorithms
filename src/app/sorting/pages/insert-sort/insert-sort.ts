export class InsertSort {

  constructor() {

  }

  public static sort(toSort: number[]): number[] {
    const copiedArray: number[] = toSort.slice();

    for (const [i, element] of copiedArray.entries()) {
      let j = i;

      while (j > 0 && copiedArray[j - 1] > copiedArray[j]) {
        InsertSort.swap(copiedArray, j);
        j--;
      }
    }

    return copiedArray;
  }


  public static swap(arrayToModify: number[], j: number) {
    const tmp = arrayToModify[j - 1];
    arrayToModify[j - 1] = arrayToModify[j];
    arrayToModify[j] = tmp;
  }


}
