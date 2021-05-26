import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { FavoriteService } from 'src/app/services/favorite.service';
import { GiphyGifObject } from '../../giphy';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent {
  loaded = false;
  @Input() giphyGifObject!: GiphyGifObject;

  favorited$: Observable<boolean> = this.favoriteService.store.pipe(
    map((s) => s.items.some((element) => element.id === this.giphyGifObject.id))
  );

  constructor(private favoriteService: FavoriteService) {}

  saveFavorite() {
    this.favoriteService.save(this.giphyGifObject);
  }
}
