import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ImageComponent } from './shared/image/image.component';
import { ImageListComponent } from './shared/image-list/image-list.component';
import { SavedImageComponent } from './saved-image/saved-image.component';
import { SearchImageComponent } from './search-image/search-image.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ImageComponent,
    ImageListComponent,
    SavedImageComponent,
    SearchImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
