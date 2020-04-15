import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Contact } from '../contact';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {



  editForm: FormGroup = this.fb.group({
    firstName:[this.contact.firstName, Validators.required],
    lastName:[this.contact.lastName, Validators.required],
    email:[this.contact.email, [Validators.required,Validators.email]],
    phoneNumber:[this.contact.phoneNumber,[Validators.required, Validators.pattern("(1[.-]?)?[0-9]{3}[.-]?[0-9]{3}[.-]?[0-9]{4}")]],
    imageURL:[''],
    contactId:[this.contact.contactId]
  });
  constructor(private fb:FormBuilder, private dialogRef:MatDialogRef<EditComponent>, @Inject(MAT_DIALOG_DATA) public contact:Contact) { }

  ngOnInit(): void {
  }

  onCancel(){
    this.dialogRef.close({error: 'Cancelled By User'});
  }

  onDelete(){
    this.dialogRef.close({delete:true});
  }

  onSubmit(){
    this.dialogRef.close({data: this.editForm});
  }
}
