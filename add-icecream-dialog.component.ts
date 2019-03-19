import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { Icecreams } from '../model/icecream.model';

@Component({
  selector: 'app-add-icecream-dialog',
  templateUrl: './add-icecream-dialog.component.html',
  styleUrls: ['./add-icecream-dialog.component.scss']
})
export class AddIcecreamDialogComponent implements OnInit {

  flavour_id: number;
  flavour_name: string;
  price: number;

  icecreams: any;

  constructor(private formBuilder: FormBuilder ,
    public dialogRef: MatDialogRef<AddIcecreamDialogComponent>) { }

    onNoClick(): void {
      this.dialogRef.close();
    }

  ngOnInit() { }

  addFlavour(icecreams) {
    console.log(this.icecreams);
    }

  // cancelSelect() {
  //   this.dialogRef.close();
  // }

}
