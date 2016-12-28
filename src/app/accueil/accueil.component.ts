import { Component, OnInit } from '@angular/core';
import {HotelsService} from "../admin/hotels.service";
import {Hotel} from "../admin/hotel";
//import {Restaurant} from "../admin/restaurant";
import {RestaurantsService} from "../admin/restaurants.service";

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  public hotels:Hotel[] = [];
  //public restaurants:Restaurant[] = [];

  constructor(private hotelsService: HotelsService, private restaurantsService:RestaurantsService) { }

  ngOnInit() {
    //recuperer les hotels
    this.hotelsService.RecupererHotels().subscribe(p => {
      this.hotels = p;
    }, err => {
      console.log(err);
    });


  }

}
