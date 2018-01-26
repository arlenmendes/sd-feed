import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post.component';
import { PostListaComponent } from './post-lista/post-lista.component';
import { PostFormComponent } from './post-form/post-form.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [PostComponent, PostListaComponent, PostFormComponent],
  providers: [ PostComponent ],
  exports: [PostComponent]
})
export class PostModule { }
