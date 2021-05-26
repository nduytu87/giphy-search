import { isNgTemplate } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

import { GiphyGifObject, FavoritedState } from '../giphy';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  private state: FavoritedState = {
    items: []
  };

  store = new BehaviorSubject<FavoritedState>(this.state);

  save(giphyGifObject: GiphyGifObject) {
    if (this.state.items.some((element: GiphyGifObject) => giphyGifObject.id === element.id)) {
      this.state = {
        items: this.state.items.filter((element) => element.id !== giphyGifObject.id)
      };
    } else {
      this.state = {
        items: [...this.state.items, giphyGifObject]
      };
    }
    this.store.next(this.state);
  }
}
