import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Hotel} from "./hotel";


//service pour livre
@Injectable()
export class HotelsService {

  private UrlWebApi = 'http://localhost:8080';//http://localhost:3000/data.livre.json
  private http:Http;
  public Hotels:Hotel[];

  constructor(http:Http) {
    this.http = http;
  }

  RecupererHotels():Observable<Hotel[]> {
    let hotels = this.http
      .get((this.UrlWebApi + '/Hotels'), {headers: this.getHeaders()})
      .map(response => response.json());
    return hotels;
  }

  HotelDetail(id:string):Observable<Hotel> {
    return this.http
      .get((this.UrlWebApi + '/Hotel/'+id), {headers: this.getHeaders()})
      .map(response => response.json());
  }

  HotelEdit(id:string, body:Object):Observable<Hotel> {

    return this.http
      .put((this.UrlWebApi + '/HotelDetail/'+id), body , {headers: this.getHeaders()})
      .map(response => response.json());

  }


  HotelAdd(body:Object):Observable<Hotel> {

    return this.http
      .post((this.UrlWebApi + '/HotelAdd/'), body , {headers: this.getHeaders()})
      .map(response => response.json());

  }

  HotelDelete(id:string):Observable<Hotel> {

    return this.http
      .delete((this.UrlWebApi + '/HotelDelete/'+id) , {headers: this.getHeaders()})
      .map(response => response.json());

  }

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  RecupererHotelsSemaine():Observable<Hotel[]> {
    let hotels = this.http
      .get((this.UrlWebApi + '/HotelsSemaine'), {headers: this.getHeaders()})
      .map(response => response.json());
    return hotels;
  }




  /*
  HotelEdit(id:string):Observable<Hotel> {

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
