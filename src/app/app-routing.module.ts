import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'snaps' },
  { path: 'snaps', loadChildren: './home/home.module#HomeModule' },
  { path: 'snaps/:id', loadChildren: './post/post.module#PostModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
