import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Restaurant} from "./restaurant";


//service pour livre
@Injectable()
export class RestaurantsService {

  private UrlWebApi = 'http://localhost:8080';//http://localhost:3000/data.livre.json
  private http:Http;
  public Restaurants:Restaurant[];

  constructor(http:Http) {
    this.http = http;
  }

  RecupererRestaurants():Observable<Restaurant[]> {
    let restaurants = this.http
      .get((this.UrlWebApi + '/Restaurants'), {headers: this.getHeaders()})
      .map(response => response.json());
    return restaurants;
  }

  RestaurantDetail(id:string):Observable<Restaurant> {
    return this.http
      .get((this.UrlWebApi + '/Restaurant/'+id), {headers: this.getHeaders()})
      .map(response => response.json());
  }

  RestaurantEdit(id:string, body:Object):Observable<Restaurant> {

    return this.http
      .put((this.UrlWebApi + '/RestaurantDetail/'+id), body , {headers: this.getHeaders()})
      .map(response => response.json());

  }


  RestaurantAdd(body:Object):Observable<Restaurant> {

    return this.http
      .post((this.UrlWebApi + '/RestaurantAdd'), body , {headers: this.getHeaders()})
      .map(response => response.json());

  }

  RestaurantDelete(id:string):Observable<Restaurant> {

    return this.http
      .delete((this.UrlWebApi + '/RestaurantDelete/'+id) , {headers: this.getHeaders()})
      .map(response => response.json());

  }



  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  RecupererRestaurantsSemaine():Observable<Restaurant[]> {
    let restaurants = this.http
      .get((this.UrlWebApi + '/RestaurantsSemaine'), {headers: this.getHeaders()})
      .map(response => response.json());
    return restaurants;
  }

  /*
   RestaurantEdit(id:string):Observable<Restaurant> {

   let bodyString = JSON.stringify(body); // Stringify payload
   let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
   let options       = new RequestOptions({ headers: headers }); // Create a request option

   return this.http.put(`${this.commentsUrl}/${body['id']}`, body, options) // ...using put request
   .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
   .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if
   }
   */





  //private func
  private getHeaders() {
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }


}
