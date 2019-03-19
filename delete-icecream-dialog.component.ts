import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { Icecreams } from '../model/icecream.model';

@Component({
  selector: 'app-delete-icecream-dialog',
  templateUrl: './delete-icecream-dialog.component.html',
  styleUrls: ['./delete-icecream-dialog.component.scss']
})
export class DeleteIcecreamDialogComponent implements OnInit {



  icecreams: Icecreams[];
  confirmationMessage: "Are you sure you want to delete this flavour?"

  constructor(private formBuilder: FormBuilder ,
    public dialogRef: MatDialogRef<DeleteIcecreamDialogComponent>) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onDeleteSelect(i) {
    this.icecreams.splice(i, 1);
    console.log(i);
    this.icecreams = [...this.icecreams];
  }

  onCancelSelect() {
    this.dialogRef.close();
  }
}
