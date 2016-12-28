import { Component, OnInit } from '@angular/core';

import {ActivatedRoute} from '@angular/router';
import {RestaurantsService} from './restaurants.service';
import {Restaurant} from "./restaurant";

@Component({
  selector: 'app-admin-view-restaurant',
  templateUrl: './admin-view-restaurant-component.html',
  styleUrls: ['./admin-view-restaurant-component.css']
})
export class AdminViewRestaurantComponent implements OnInit {

  public id:string = "";
  public Restaurant:Restaurant = new Restaurant();

  constructor(private route:ActivatedRoute, private restaurantsService:RestaurantsService) { }

  ngOnInit() {

    this.id = this.route.snapshot.params['id'];
    //
    this.restaurantsService.RestaurantDetail(this.id).subscribe(p => {
        this.Restaurant = p;
      }
      , err => {
        console.log(err);
      });


  }

}
