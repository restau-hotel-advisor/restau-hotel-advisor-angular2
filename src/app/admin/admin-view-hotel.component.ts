import { Component, OnInit } from '@angular/core';

import {ActivatedRoute} from '@angular/router';
import {HotelsService} from './hotels.service';
import {Hotel} from "./hotel";

@Component({
  selector: 'app-admin-view-hotel',
  templateUrl: './admin-view-hotel.component.html',
  styleUrls: ['./admin-view-hotel.component.css']
})
export class AdminViewHotelComponent implements OnInit {

  public id:string = "";
  public Hotel:Hotel = new Hotel();

  constructor(private route:ActivatedRoute, private hotelsService:HotelsService) { }

  ngOnInit() {

    this.id = this.route.snapshot.params['id'];
    //
    this.hotelsService.HotelDetail(this.id).subscribe(p => {
      this.Hotel = p;
    }
    , err => {
      console.log(err);
    }); 


  }

}
