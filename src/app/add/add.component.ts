import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  addForm: FormGroup = this.fb.group({
    firstName:['', Validators.required],
    lastName:['', Validators.required],
    email:['', [Validators.required,Validators.email]],
    phoneNumber:['',[Validators.required, Validators.pattern("(1[.-]?)?[0-9]{3}[.-]?[0-9]{3}[.-]?[0-9]{4}")]],
    imageURL:['']
  });
  file:File;
  constructor(private fb:FormBuilder, private dialogRef:MatDialogRef<AddComponent>, private http:RestService) { }

  ngOnInit(): void {

  }

  onCancel(){
    this.dialogRef.close({error: 'Cancelled By User'});
  }

  onSubmit(){
    // let formData:FormData = new FormData();
    // formData.append('imageFile',this.file)
    // this.http.uploadImage(formData).subscribe(
    //   (data) => {
    //     this.addForm.controls.imageURL.setValue(data)
    //     this.dialogRef.close({data: this.addForm});
    //   }
    // )

    this.dialogRef.close({data: this.addForm});

  }

  // onFileSelected(event) {
  //   var reader = new FileReader();
  //   reader.readAsDataURL(event.target.files[0]);
  //   this.file=event.target.files[0];
  // }
}
