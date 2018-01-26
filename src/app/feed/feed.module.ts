import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './feed.component';
import {PostModule} from '../post/post.module';

@NgModule({
  imports: [
    CommonModule,
    PostModule,
  ],
  exports: [],
  declarations: [FeedComponent]
})
export class FeedModule { }
