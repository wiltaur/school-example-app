import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
  
import { PostRoutingModule } from './post-routing.module';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
  
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
  
@NgModule({
  declarations: [IndexComponent, CreateComponent],
  imports: [
    CommonModule,
    PostRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PostModule { }