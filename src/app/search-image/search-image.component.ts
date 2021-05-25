import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import {
  GiphyGifObject,
  GiphyPaginationObject,
  GiphySearchResult,
} from '../giphy';
import { GiphyApiService } from '../services/giphy-api-service.service';

@Component({
  selector: 'app-search-image',
  templateUrl: './search-image.component.html',
  styleUrls: ['./search-image.component.scss'],
})
export class SearchImageComponent implements OnInit {
  giphyGifObjects: GiphyGifObject[] = [];
  pagination!: GiphyPaginationObject;
  query: string = '';
  isShowMore: boolean = false;
  error: boolean = false;

  private searchTerms = new Subject<string>();

  constructor(private giphyApiService: GiphyApiService) {
    this.query = 'singapore';
  }

  ngOnInit(): void {
    this.searchTerms
      .pipe(
        debounceTime(300), 
        distinctUntilChanged(),
        switchMap((query: string)=> {
          this.query = query;
          return this.giphyApiService
            .search(this.query, this.giphyGifObjects.length);
        })
      ).subscribe((res: GiphySearchResult) => {
        this.giphyGifObjects = [];
        this.pagination = res.pagination;
        this.giphyGifObjects = [...this.giphyGifObjects, ...res.data];
        this.checkShowMoreButton();
      });

    this.callGiphySearchApi();
  }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  loadMoreItems() {
    if (this.pagination.total_count > this.pagination.offset) {
      this.callGiphySearchApi();
    }
  }

  callGiphySearchApi() {
    this.giphyApiService
    .search(this.query, this.giphyGifObjects.length)
    .subscribe((res: GiphySearchResult) => {
      console.log('change');
      this.pagination = res.pagination;
      this.giphyGifObjects = [...this.giphyGifObjects, ...res.data];
      this.checkShowMoreButton();
    }, () => {
      this.error = true;
    });
  }

  checkShowMoreButton() {
    this.isShowMore = this.pagination.total_count > this.pagination.offset;
  }
}
