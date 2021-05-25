import { Component } from '@angular/core';
import { GiphyGifObject } from '../giphy';
import { FavoriteService } from '../services/favorite.service';

@Component({
  selector: 'app-saved-image',
  templateUrl: './saved-image.component.html',
  styleUrls: ['./saved-image.component.scss']
})
export class SavedImageComponent{

  //giphyGifObjects!: GiphyGifObject[];
  giphyGifObjects = this.favoriteService.store.getValue().items;

  constructor(private favoriteService: FavoriteService) {  }
}
