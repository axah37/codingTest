export class Contact {

  private _contactId: number;
  public get contactId(): number {
    return this._contactId;
  }
  public set contactId(value: number) {
    this._contactId = value;
  }
  private _firstName: string;
  public get firstName(): string {
    return this._firstName;
  }
  public set firstName(value: string) {
    this._firstName = value;
  }
  private _lastName: string;
  public get lastName(): string {
    return this._lastName;
  }
  public set lastName(value: string) {
    this._lastName = value;
  }
  private _email: string;
  public get email(): string {
    return this._email;
  }
  public set email(value: string) {
    this._email = value;
  }
  private _phoneNumber: string;
  public get phoneNumber(): string {
    return this._phoneNumber;
  }
  public set phoneNumber(value: string) {
    this._phoneNumber = value;
  }
  private _imageURL: string;
  public get imageURL(): string {
    return this._imageURL;
  }
  public set imageURL(value: string) {
    this._imageURL = value;
  }

  constructor(firstName:string,lastName:string,email:string,phoneNumber:string,imageURL:string){
    this._firstName = firstName;
    this._lastName = lastName;
    this._email = email;
    this._phoneNumber = phoneNumber;
    this._imageURL = imageURL;
  }


}
