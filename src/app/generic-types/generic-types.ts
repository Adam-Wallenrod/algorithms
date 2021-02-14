export class AnyList {

  values: any[] = [];

  private constructor(values: any[]) {
    this.values = this.values.concat(values);
  }


  public static create(values?: any[]): AnyList {
    return new AnyList(values);
  }


  public add(value: any) {
    this.values.push(value);
  }


  /**
   *  Method allowing to call pass another
   *  method as parameter.
   */
  public filter(functionToPass: (value: any) => boolean): AnyList {
    return AnyList.create(this.values.filter(functionToPass));
  }


  public select (selector: (value: any) => any ): AnyList {
    return AnyList.create(this.values.map(selector));
  }

  public toArray(): any[] {
    return this.values;

  }


}
