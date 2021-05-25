import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SavedImageComponent } from './saved-image/saved-image.component';
import { SearchImageComponent } from './search-image/search-image.component';

const routes: Routes = [
  {path: 'search', component: SearchImageComponent},
  {path: 'saved', component: SavedImageComponent},
  {path: '', redirectTo:'/search', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
