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
  loading: boolean = true;

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
          //reset all setting before calling search api
          this.loading = true;
          this.isShowMore = false;
          this.query = query;
          this.giphyGifObjects = []

          return this.giphyApiService
            .search(this.query, this.giphyGifObjects.length);
        })
      ).subscribe((res: GiphySearchResult) => {
        this.processResult(res);
      });
      //load initial
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
      this.processResult(res);
    }, () => {
      this.error = true;
    });
  }

  processResult(res: GiphySearchResult) {
    if (res) {
      this.loading = false;
    }
    this.pagination = res.pagination;
    this.giphyGifObjects = [...this.giphyGifObjects, ...res.data];
    this.isShowMore = this.pagination.total_count > this.pagination.offset;
  }

  
}
