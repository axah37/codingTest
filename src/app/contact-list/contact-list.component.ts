import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { RestService } from '../rest.service';
import { MatDialog } from '@angular/material/dialog';
import { AddComponent } from '../add/add.component';
import { FormGroup } from '@angular/forms';
import { EditComponent } from '../edit/edit.component';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts:Contact[];
  filteredContacts:Contact[];
  userId:string = localStorage.getItem('userId');
  search:string = '';
  order:boolean = false;
  constructor(private http:RestService, private dialog:MatDialog) { }

  ngOnInit(): void {
    this.http.getContacts(this.userId).subscribe(
      data => {
        this.contacts = data
        this.filteredContacts = data
      },
      error => console.log(error),
      () => console.log('done getting contacts')
    );
  }

  onAdd(){
    const diaglogReg = this.dialog.open(AddComponent, {
      width: '250px'
    })

    diaglogReg.afterClosed().subscribe(
      (data) => {
        this.http.addContact(data.data, this.userId).subscribe(
          (c) => {
            this.contacts = c
            this.filteredContacts = c
          }
        );
      },
      error => console.log(error),
      () => console.log("done adding contact")
    );
  }

  onEdit(contact:Contact){
    console.log(contact.contactId);
    const diaglogReg = this.dialog.open(EditComponent, {
      width:"250px",
      data:contact
    });

    diaglogReg.afterClosed().subscribe(
      (data) => {
        if(data.delete){
          this.http.deleteContact(this.userId, contact.contactId).subscribe(
            d => {this.contacts = d
              this.filteredContacts = d}
          )
        }else if(data.error){
          console.log(data.error)
        }
        else{
          this.http.addContact(data.data, this.userId).subscribe(
            d => {this.contacts = d
              this.filteredContacts = d}
          );
        }
      },
      error => console.log("error"),
      () => console.log("done editing contact")
    )
  }

  public onChange(event){
    if(this.search.length === 0){
      this.filteredContacts = this.contacts;
    }else{
      this.filteredContacts = this.contacts.filter(contact => !contact.firstName.toLowerCase().search(this.search.toLowerCase()) || !contact.lastName.toLowerCase().search(this.search.toLowerCase()))
    }
  }

  public onSort(){
    if(this.order){
      this.filteredContacts.sort((c1,c2) => c1.lastName.localeCompare(c2.lastName))
    }else{
      this.filteredContacts.sort((c1,c2) => c2.lastName.localeCompare(c1.lastName))
    }
    this.order = !this.order;
  }
}

