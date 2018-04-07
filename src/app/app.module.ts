import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PostListItemComponent } from './postlistitem/postlistitem.component';
import { FormsModule } from '@angular/forms';
import { PostlistComponent } from './postlist/postlist.component';


@NgModule({
  declarations: [
    AppComponent,
    PostListItemComponent,
    PostlistComponent
  ],
  imports: [
    BrowserModule,
    // Two-way binding :
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
