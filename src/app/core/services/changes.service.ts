import {Injectable} from '@angular/core';
import {ChangeModel} from '../models';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {MessagesService} from './messages.service';
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChangesService {
  private changeUrl = 'api/flightChangeRecord';

  constructor(
    private http: HttpClient,
    private messages: MessagesService
  ) {
  }

  getChangeList(): Observable<ChangeModel[]> {
    return this.http.get<ChangeModel[]>(this.changeUrl)
      .pipe(
        catchError(this.handleError('getJobs', []))
      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messages.add('HeroService: ' + message);
  }
}
