import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GiphyGifObject } from '../giphy';
import { FavoriteService } from '../services/favorite.service';

@Component({
  selector: 'app-saved-image',
  templateUrl: './saved-image.component.html',
  styleUrls: ['./saved-image.component.scss']
})
export class SavedImageComponent implements OnInit{

  giphyGifObjects!: GiphyGifObject[];
  constructor(private favoriteService: FavoriteService) {  
    this.favoriteService.store.subscribe(state => {
      const{items} =  state;
      this.giphyGifObjects = items;
    })
  }
  ngOnInit(): void{
    this.giphyGifObjects = this.favoriteService.state.items;
  }
}
