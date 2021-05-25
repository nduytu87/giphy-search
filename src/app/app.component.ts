import { Component, OnInit } from '@angular/core';
import { FavoriteService } from './services/favorite.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = "Giphy Searcher"
  totalFavorited: number = 0;
  savedTitle: string = 'My Favorite';
  constructor(private favoriteService: FavoriteService) {  
    this.favoriteService.store.subscribe(state => {
      const{items} =  state;
      this.totalFavorited = items.length;
      this.savedTitle = this.totalFavorited > 0 ? `My Favorite (${this.totalFavorited})` : this.savedTitle;
    })
  }
}
