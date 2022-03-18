import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './post/index/index.component';
import { CreateComponent } from './post/create/create.component';

const routes: Routes = [
  { path: 'index', redirectTo: './post', pathMatch: 'full'},
  { path: './post/index', component: IndexComponent },
  { path: './post/create', component: CreateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
