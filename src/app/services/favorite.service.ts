import { isNgTemplate } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { combineLatest, ObjectUnsubscribedError, Observable, of, Subject } from 'rxjs';
import { debounceTime, map, scan, share, shareReplay, switchMap, tap } from 'rxjs/operators';

import { GiphyGifObject, InitialState } from '../giphy';

@Injectable({
  providedIn: 'root'
})

export class FavoriteService {

  
  
  state: InitialState =  {
     items: [],
  };

  store = new Subject<InitialState>();

  save(giphyGifObject: GiphyGifObject) {
    if(this.state.items.some((element:GiphyGifObject)=>  giphyGifObject.id === element.id)) {
        this.state = {
          items: this.state.items.filter(element => element.id !== giphyGifObject.id)
        }
    } else{
      this.state = {
        items: [...this.state.items, giphyGifObject],
      }
    }
    this.store.next(this.state);
  }
}
