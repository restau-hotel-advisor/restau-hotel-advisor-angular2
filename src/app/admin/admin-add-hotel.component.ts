import { Component, OnInit } from '@angular/core';

//import {ActivatedRoute} from '@angular/router';
//import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {HotelsService} from './hotels.service';
import {Hotel} from "./hotel";

import {NgForm} from "@angular/forms";


@Component({
  selector: 'app-admin-add-hotel',
  templateUrl: './admin-add-hotel.component.html',
  styleUrls: ['./admin-add-hotel.component.css']
})
export class AdminAddHotelComponent implements OnInit {

  //public id:string = "";
  public Hotel:Hotel = new Hotel();

  constructor(private hotelsService:HotelsService) { }

  addHotel(form:NgForm){

    console.log(form.value);

    /**/
    this.hotelsService.HotelAdd(form.value).subscribe(p => {
        this.Hotel = p;
      }
      , err => {
        console.log(err);
      });


  }


  ngOnInit() {

  }

}
