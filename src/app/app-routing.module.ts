import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { environment } from 'src/environments/environment';

@NgModule({
  imports: [RouterModule.forRoot(environment.routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
