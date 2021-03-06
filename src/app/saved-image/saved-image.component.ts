import { Component } from '@angular/core';
import { GiphyGifObject } from '../giphy';
import { FavoriteService } from '../services/favorite.service';

@Component({
  selector: 'app-saved-image',
  templateUrl: './saved-image.component.html',
  styleUrls: ['./saved-image.component.scss']
})
export class SavedImageComponent {
  store$ = this.favoriteService.store;
  giphyGifObjects$ = this.favoriteService.items$;

  constructor(private favoriteService: FavoriteService) {}
}
