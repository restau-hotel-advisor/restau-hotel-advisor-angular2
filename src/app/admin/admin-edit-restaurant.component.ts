import { Component, OnInit } from '@angular/core';

import {ActivatedRoute} from '@angular/router';
import {RestaurantsService} from './restaurants.service';
import {Restaurant} from "./restaurant";

import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-admin-edit-restaurant',
  templateUrl: './admin-edit-restaurant.component.html',
  styleUrls: ['./admin-edit-restaurant.component.css']
})
export class AdminEditRestaurantComponent implements OnInit {

  public id:string = "";
  public Restaurant:Restaurant = new Restaurant();

  //formGroupHotel:FormGroup;
  constructor(private route:ActivatedRoute, private restaurantsService:RestaurantsService) { }

  updateRestaurant(form:NgForm){

    console.log(form.value);

    /**/
    this.restaurantsService.RestaurantEdit(this.id, form.value).subscribe(p => {
        this.Restaurant = p;
      }
      , err => {
        console.log(err);
      });


  }

  ngOnInit() {

    this.id = this.route.snapshot.params['id'];

    this.restaurantsService.RestaurantDetail(this.id).subscribe(p => {
        this.Restaurant = p;
      }
      , err => {
        console.log(err);
      });

  }

}
