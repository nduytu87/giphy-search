import { Component, Input } from '@angular/core';
import { GiphyGifObject } from 'src/app/giphy';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.scss'],
})
export class ImageListComponent {
  loaded = false;
  @Input() giphyGifObjects!: GiphyGifObject[];
}
