export class Singleton {
  private static _instance?: Singleton;
  private _num: number = 0;

  private constructor() {}

  public static get instance(): Singleton {
    if (!this._instance) {
      this._instance = new Singleton();
    }
    return this._instance;
  }

  public get num(): number {
    return this._num;
  }

  public increment(): number {
    this._num++;
    return this.num;
  }

  public reset(): number {
    this._num = 0;
    return this.num;
  }
}
