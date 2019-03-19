import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-update-icecream-dialog',
  templateUrl: './update-icecream-dialog.component.html',
  styleUrls: ['./update-icecream-dialog.component.scss']
})
export class UpdateIcecreamDialogComponent implements OnInit {

  flavour_id: number;
  flavour_name: string;
  price: number;

  constructor(private formBuilder: FormBuilder ,
    public dialogRef: MatDialogRef<UpdateIcecreamDialogComponent>) { }

  @Input('selectedFlavour')

  ngOnInit(
    // flavour_id = selectedFlavour.flavour_id,
    // flavour_name = selectedFlavour.flavour_name,
    // flavour_price = selectedFlavour.price

  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  // updateFlavour(selectedFlavour) {


  // }

  cancelSelect() {
    this.dialogRef.close();
  }

}
