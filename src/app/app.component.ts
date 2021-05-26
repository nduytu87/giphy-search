import { Component, OnInit } from '@angular/core';
import { FavoriteService } from './services/favorite.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Giphy Searcher';
  totalFavorited$ = this.favoriteService.store.asObservable();
  constructor(private favoriteService: FavoriteService) {}
}
