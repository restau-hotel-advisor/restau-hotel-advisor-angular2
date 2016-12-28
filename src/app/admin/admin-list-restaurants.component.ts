import { Component, OnInit } from '@angular/core';


import {Observable} from 'rxjs/Rx';

import {ActivatedRoute,Router} from '@angular/router';
import {RestaurantsService} from './restaurants.service';
import {Restaurant} from "./restaurant";

@Component({
  selector: 'app-admin-list-restaurants',
  templateUrl: './admin-list-restaurants.component.html',
  styleUrls: ['./admin-list-restaurants.component.css']
})

export class AdminListRestaurantsComponent implements OnInit {

  public restaurants:Restaurant[] = [];
  public Restaurant:Restaurant = new Restaurant();

  constructor(private router:Router,
              private restaurantsService:RestaurantsService) { }

  deleteRestaurant(id){
    console.log(id);

    /**/
    this.restaurantsService.RestaurantDelete(id).subscribe(p => {
        this.Restaurant = p;
        //this.router.navigate(['admin-list-hotels']);
        this.restaurants = this.refresh();
      }
      , err => {
        console.log(err);
      });


  }

  refresh(){
    this.restaurantsService.RecupererRestaurants().subscribe(p => {
      this.restaurants = p;
    }, err => {
      console.log(err);
    });
    return this.restaurants;
  }

  ngOnInit() {
    /**/
    this.restaurantsService.RecupererRestaurants().subscribe(p => {
      this.restaurants = p;
    }, err => {
      console.log(err);
    });
  }

}
