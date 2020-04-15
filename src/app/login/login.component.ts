import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RestService } from '../rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup = this.fb.group({
    username:['',Validators.required],
    password:['',Validators.required]
  })

  constructor(private fb:FormBuilder, private http:RestService, private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.http.login(this.loginForm).subscribe(
      (data) => {
        if (data === null){
          console.log('wrong')
        }
        else{
          this.router.navigate(['home'])
        }
      }
    )
  }
}
