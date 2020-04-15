import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  userId = localStorage.getItem('userId')
  constructor(private http:RestService, private router:Router) { }

  ngOnInit(): void {
  }

  onLogout(){
    this.http.logout();
    this.router.navigate(['login'])
  }
}
