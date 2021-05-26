import { Component, Input, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { FavoriteService } from 'src/app/services/favorite.service';
import { GiphyGifObject } from '../../giphy';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {
  loaded = false;
  @Input() giphyGifObject!: GiphyGifObject;

  favorited: boolean = false;
  giphyGifObjects!: GiphyGifObject[];
  store$ = this.favoriteService.store.asObservable();

  constructor(private favoriteService: FavoriteService) {}

  ngOnInit(): void {
    this.giphyGifObjects = this.favoriteService.store.getValue().items;
    this.favorited = this.giphyGifObjects.some((element) => element.id === this.giphyGifObject.id);
  }

  saveFavorite() {
    this.favoriteService.save(this.giphyGifObject);
    this.favorited = !this.favorited;
  }
}
