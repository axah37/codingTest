import { Injectable } from '@angular/core';
import { Contact } from './contact';
import { FormGroup } from '@angular/forms';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { User } from './user';
import { Url } from './url';


@Injectable({
  providedIn: 'root'
})
export class RestService {

  url:string="http://localhost:8080"
  constructor(private http:HttpClient) { }

  public getContacts(id):Observable<Contact[]>{
    return this.http.get<Contact[]>(this.url+"/contacts/"+id).pipe(catchError(this.errorHandler));
  }

  public addContact(addForm, id):Observable<Contact[]>{
    return this.http.post<Contact[]>(this.url+"/contacts/add/"+id, addForm.value).pipe(catchError(this.errorHandler));
  }

  public deleteContact(id, contactId):Observable<Contact[]>{
    return this.http.get<Contact[]>(this.url+"/contacts/delete/"+id+"/"+contactId).pipe(catchError(this.errorHandler));
  }

  public editContact(editContact){
    console.log(editContact)
  }

  public login(loginForm):Observable<User>{
    return this.http.post<User>(this.url+"/login",loginForm.value).pipe(tap(
      res => {
        if(res !== null){
          localStorage.setItem('username',res.username)
          localStorage.setItem('userId', res.userId.toString())
        }
      }
    ));
  }

  public logout(){
    localStorage.removeItem('username')
    localStorage.removeItem('userId')
  }
  errorHandler(error:HttpErrorResponse){
    return throwError(error.message || "Server error");
  }

  public uploadImage(image):Observable<Url>{
    return this.http.post<Url>(this.url+"/contacts/uploadImage", image).pipe(catchError(this.errorHandler));
  }
}
