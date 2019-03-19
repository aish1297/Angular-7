import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { Icecreams } from '../model/icecream.model';
import { IcecreamService } from '../service/icecream.service';

// import { MatTableDataSource, MatSort } from '@angular/material';\
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatTableDataSource} from '@angular/material';
import { AddIcecreamDialogComponent } from '../add-icecream-dialog/add-icecream-dialog.component';
import { UpdateIcecreamDialogComponent } from '../update-icecream-dialog/update-icecream-dialog.component';
import { DeleteIcecreamDialogComponent } from '../delete-icecream-dialog/delete-icecream-dialog.component';



@Component({
  selector: 'app-icecreams',
  templateUrl: './icecreams.component.html',
  styleUrls: ['./icecreams.component.scss']
})
export class IcecreamsComponent implements OnInit {

  displayedColumns: string[] = ['select', 'flavour_id', 'flavour_name', 'price', 'update', 'delete'];


  flavour_id: number;
  flavour_name: string;
  price: number;

  icecreams: Icecreams[];
  data: any;

  constructor(private icecreamService: IcecreamService, private dialog: MatDialog) { }

  @Output()
  selectedFlavour = new EventEmitter();

  ngOnInit() {
    this.getIcecreams();
  }

  public getIcecreams() {
    this.icecreamService.getIcecreams().subscribe((data: Icecreams[])=> {
      this.icecreams = data;
      console.log(data);
    })
  }

    openDialog() {
      const dialogRef = this.dialog.open(AddIcecreamDialogComponent, {
        data: {flavour_id: this.flavour_id, flavour_name: this.flavour_name, price: this.price}
    });

    dialogRef.afterClosed().pipe(filt).subscribe(data => {
      this.icecreams = data;
      console.log(data);

    });

  }

  openEditDialog(i) {
    const dialogRef = this.dialog.open(UpdateIcecreamDialogComponent, {
      data: {flavour_id: this.flavour_id, flavour_name: this.flavour_name, price: this.price}

    });console.log(this.icecreams[i]);
  //  selectedFlavour = this.icecreams[i] ;
  }

  openDeleteDialog(i) {
    const dialogRef = this.dialog.open(DeleteIcecreamDialogComponent, {
      data: {flavour_id: this.flavour_id, flavour_name: this.flavour_name, price: this.price}
  });

}

  // onDelete(index){
  //   this.icecreams.splice(index, 1);
  //   console.log(index);
  //   this.icecreams = [...this.icecreams];
  // }


  onUpdate(i) {
    console.log(i);
    this.selectedFlavour.emit(this.icecreams);
  }
}
