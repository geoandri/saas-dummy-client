import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LogoutComponent} from "./logout/logout.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'logout', component: LogoutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
