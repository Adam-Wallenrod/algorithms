export class User {

  private age: number = null;
  private name: string;

  constructor(name: string) {
    this.name = name;

  }


  public setAge(age: number) {
    if (age < 0) {
      throw new Error('passed wrong value for age,');
    }
    this.age = age;
  }

  public getAge(): number {
    return this.age;
  }


  public getName(): string {
    return this.name;
  }


}
