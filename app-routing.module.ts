import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IcecreamsComponent } from './icecreams/icecreams.component';
import { IcecreamCakesComponent } from './icecream-cakes/icecream-cakes.component';
import { SignatureConesComponent } from './signature-cones/signature-cones.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: '', redirectTo : '/login', pathMatch: 'full' },
    { path: 'home', component: HomeComponent, children: [
      { path: 'icecreams', component: IcecreamsComponent},
      { path: 'icecreamcakes', component: IcecreamCakesComponent},
      { path: 'signaturecones', component: SignatureConesComponent}
  ]},
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
