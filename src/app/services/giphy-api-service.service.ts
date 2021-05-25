import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GiphySearchResult } from '../giphy';

@Injectable({
  providedIn: 'root'
})

export class GiphyApiService {

  private URL = environment.api.url;
  private params = new HttpParams().set('api_key', environment.api.key); 

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private httpClient: HttpClient) { }

  search(query: string, offset: number = 0, limit : number = environment.app.requestLimit): Observable<GiphySearchResult> {
    if(!query.trim()) {
      return of();
    }
    return this.httpClient.get<GiphySearchResult>(this.URL, {
        params: this.params.set('q', query)
                  .set('limit', `${limit}`)
                  .set('offset', `${offset}`)
    })
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
        console.log(error);

        this.log(`${operation} failed: ${error.message}`);

        return of(result as T);
    };
  }

  private log(message: string) {
      console.log(`Error: ${message}`);
  }
}
