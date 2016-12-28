import { Component, OnInit } from '@angular/core';

import {HotelsService} from "../admin/hotels.service";
import {Hotel} from "../admin/hotel";

@Component({
  selector: 'app-hotels-semaine',
  templateUrl: './hotels-semaine.component.html',
  styleUrls: ['./hotels-semaine.component.css']
})
export class HotelsSemaineComponent implements OnInit {

  public hotels:Hotel[] = [];

  constructor(private hotelsService: HotelsService) { }

  ngOnInit() {
    //recuperer les hotels
    this.hotelsService.RecupererHotelsSemaine().subscribe(p => {
      this.hotels = p;
    }, err => {
      console.log(err);
    });


  }

}
