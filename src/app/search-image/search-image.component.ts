import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { catchError, debounceTime, distinctUntilChanged, finalize, switchMap } from 'rxjs/operators';
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
export class SearchImageComponent implements OnInit, OnDestroy {
  giphyGifObjects: GiphyGifObject[] = [];
  pagination!: GiphyPaginationObject;
  query: string = '';
  hasMoreData: boolean = false;
  hasError: boolean = false;
  hasLoading: boolean = true;
  hasNotData: boolean = false;
  searchTermsChangedSubscription: any;
  callGiphySearchApiChangedSubscription: any;

  private searchTerms = new Subject<string>();

  constructor(private giphyApiService: GiphyApiService) {
    this.query = 'singapore';
  }

  ngOnInit(): void {
    this.searchTermsChangedSubscription = this.searchTerms
      .pipe(
        debounceTime(300), 
        distinctUntilChanged(),
        switchMap((query: string)=> {
          //reset all settings before calling search api
          this.hasLoading = true;
          this.hasMoreData = false;
          this.query = query;
          this.giphyGifObjects = []

          return this.searchGiphy();
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
    if(this.callGiphySearchApiChangedSubscription) {
      this.callGiphySearchApiChangedSubscription.unsubscribe();
    }
    this.callGiphySearchApiChangedSubscription = this.searchGiphy()
    .subscribe((res: GiphySearchResult) => {
      this.processResult(res);
    }, () => {
      this.hasError = true;
    });
  }

  processResult(res: GiphySearchResult) {
    this.hasNotData = res.data.length > 0 ? false: true;
    this.pagination = res.pagination;
    this.giphyGifObjects = [...this.giphyGifObjects, ...res.data];
    this.hasMoreData = this.pagination.total_count > this.pagination.offset;
  }

  searchGiphy() {
    return this.giphyApiService
    .search(this.query, this.giphyGifObjects.length)
    .pipe(finalize(() => {
      this.hasLoading = false;
    }))
    ;
  }
  ngOnDestroy() {
    if(this.searchTermsChangedSubscription) {
      this.searchTermsChangedSubscription.unsubscribe();
    }
    if(this.callGiphySearchApiChangedSubscription) {
      this.callGiphySearchApiChangedSubscription.unsubscribe();
    }
  }
  
}
