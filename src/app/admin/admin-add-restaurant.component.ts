import { Component, OnInit } from '@angular/core';



import {ActivatedRoute} from '@angular/router';
import {RestaurantsService} from './restaurants.service';
import {Restaurant} from "./restaurant";

import {NgForm} from "@angular/forms";


@Component({
  selector: 'app-admin-add-restaurant',
  templateUrl: './admin-add-restaurant.component.html',
  styleUrls: ['./admin-add-restaurant.component.css']
})
export class AdminAddRestaurantComponent implements OnInit {

  public Restaurant:Restaurant = new Restaurant();

  constructor(private restaurantsService:RestaurantsService) { }

  addRestaurant(form:NgForm){

    console.log(form.value);

    /**/
    this.restaurantsService.RestaurantAdd(form.value).subscribe(p => {
        this.Restaurant = p;
      }
      , err => {
        console.log(err);
      });


  }

  ngOnInit() {
  }

}
