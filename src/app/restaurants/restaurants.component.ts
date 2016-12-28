import { Component, OnInit } from '@angular/core';

import {Restaurant} from "../admin/restaurant";
import {RestaurantsService} from "../admin/restaurants.service";

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

  public restaurants:Restaurant[] = [];
  public Restaurant:Restaurant = new Restaurant();

  constructor(private restaurantsService:RestaurantsService) { }

  ngOnInit() {

    this.restaurantsService.RecupererRestaurants().subscribe(p => {
      this.restaurants = p;
    }, err => {
      console.log(err);
    });

  }

}
