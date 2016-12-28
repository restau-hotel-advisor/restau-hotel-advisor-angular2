import { Component, OnInit } from '@angular/core';

import {Observable} from 'rxjs/Rx';

import {ActivatedRoute,Router} from '@angular/router';
import {HotelsService} from './hotels.service';
import {Hotel} from "./hotel";



@Component({
  selector: 'app-admin-list-hotels',
  templateUrl: './admin-list-hotels.component.html',
  styleUrls: ['./admin-list-hotels.component.css']
})
export class AdminListHotelsComponent implements OnInit {


  public hotels:Hotel[] = [];
  public Hotel:Hotel = new Hotel();

  constructor(private router:Router,
              private hotelsService:HotelsService) { }

  deleteHotel(id){
    console.log(id);

    /**/
    this.hotelsService.HotelDelete(id).subscribe(p => {
        this.Hotel = p;
        //this.router.navigate(['admin-list-hotels']);
        this.hotels = this.refresh();
      }
      , err => {
        console.log(err);
      });


  }

  refresh(){
    this.hotelsService.RecupererHotels().subscribe(p => {
      this.hotels = p;
    }, err => {
      console.log(err);
    });
    return this.hotels;
  }


  ngOnInit() {

    /**/
    this.hotelsService.RecupererHotels().subscribe(p => {
      this.hotels = p;
    }, err => {
      console.log(err);
    });



  }

}
