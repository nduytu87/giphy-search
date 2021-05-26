import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { FavoriteService } from './services/favorite.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Giphy Searcher';
  totalFavorited$ = this.favoriteService.store.pipe(map((s) => s.items.length));
  constructor(private favoriteService: FavoriteService) {}
}
