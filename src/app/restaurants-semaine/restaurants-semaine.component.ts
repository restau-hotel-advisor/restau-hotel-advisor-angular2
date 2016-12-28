import { Component, OnInit } from '@angular/core';

import {Restaurant} from "../admin/restaurant";
import {RestaurantsService} from "../admin/restaurants.service";

@Component({
  selector: 'app-restaurants-semaine',
  templateUrl: './restaurants-semaine.component.html',
  styleUrls: ['./restaurants-semaine.component.css']
})
export class RestaurantsSemaineComponent implements OnInit {

  public restaurants:Restaurant[] = [];
  public Restaurant:Restaurant = new Restaurant();

  constructor(private restaurantsService:RestaurantsService) { }

  ngOnInit() {
    this.restaurantsService.RecupererRestaurantsSemaine().subscribe(p => {
      this.restaurants = p;
    }, err => {
      console.log(err);
    });
  }

}
