export class User {

  private _userId: number;
  public get userId(): number {
    return this._userId;
  }
  public set userId(value: number) {
    this._userId = value;
  }

  private _username: string;
  public get username(): string {
    return this._username;
  }
  public set username(value: string) {
    this._username = value;
  }

  constructor(userId:number, username:string){
    this._userId=userId;
    this._username=username;
  }

}
