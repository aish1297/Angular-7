import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule,
         FormsModule} from '@angular/forms';
import { MatFormFieldModule,
         MatCardModule,
         MatPaginatorModule,
         MatSortModule,
         MatTableModule,
         MatDialogModule,
         MatTableDataSource} from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HttpClientModule } from '@angular/common/http';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatStepperModule} from '@angular/material/stepper';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { IcecreamsComponent } from './icecreams/icecreams.component';
import { IcecreamCakesComponent } from './icecream-cakes/icecream-cakes.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SignatureConesComponent } from './signature-cones/signature-cones.component';
import { IcecreamService } from './service/icecream.service';
import { AddIcecreamDialogComponent } from './add-icecream-dialog/add-icecream-dialog.component';
import { UpdateIcecreamDialogComponent } from './update-icecream-dialog/update-icecream-dialog.component';
import { DeleteIcecreamDialogComponent } from './delete-icecream-dialog/delete-icecream-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    IcecreamsComponent,
    IcecreamCakesComponent,
    PageNotFoundComponent,
    SignatureConesComponent,
    AddIcecreamDialogComponent,
    UpdateIcecreamDialogComponent,
    DeleteIcecreamDialogComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatToolbarModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatSortModule,
    HttpClientModule,
    MatTableModule,
    MatCheckboxModule,
    MatStepperModule,
    MatDialogModule,

  ],

  entryComponents:[AddIcecreamDialogComponent, UpdateIcecreamDialogComponent, DeleteIcecreamDialogComponent],
  providers: [IcecreamService],
  bootstrap: [AppComponent]
})
export class AppModule { }
