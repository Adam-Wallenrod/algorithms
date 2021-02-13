export class User {

  age: number = null;
  name: string;

  constructor(name: string) {
    this.name = name;

  }


  public setAge(age: number) {
    if (age < 0) {
      throw new Error('passed wrong value for age,');
    }
    this.age = age;
  }


}
