import { Component, OnInit } from '@angular/core';

import {HotelsService} from "../admin/hotels.service";
import {Hotel} from "../admin/hotel";


@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {

  public hotels:Hotel[] = [];

  constructor(private hotelsService: HotelsService) { }

  ngOnInit() {
    //recuperer les hotels
    this.hotelsService.RecupererHotels().subscribe(p => {
      this.hotels = p;
    }, err => {
      console.log(err);
    });


  }

}
