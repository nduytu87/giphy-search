import { Component, Input, OnInit } from '@angular/core';
import { FavoriteService } from 'src/app/services/favorite.service';
import { GiphyGifObject } from '../../giphy';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
})
export class ImageComponent implements OnInit {
  loaded = false;
  @Input() giphyGifObject!: GiphyGifObject;

  favorited: boolean = false;

  giphyGifObjects!: GiphyGifObject[];

  constructor(private favoriteService: FavoriteService) {
    this.favoriteService.store.subscribe((state) => {
      const { items } = state;
      this.giphyGifObjects = items;
    });
  }

  ngOnInit(): void {
    this.giphyGifObjects = this.favoriteService.state.items;
    this.favorited = this.giphyGifObjects.some(
      (element) => element.id === this.giphyGifObject.id
    );
  }

  saveFavorite() {
    this.favoriteService.save(this.giphyGifObject);
    this.favorited = !this.favorited;
  }
}
