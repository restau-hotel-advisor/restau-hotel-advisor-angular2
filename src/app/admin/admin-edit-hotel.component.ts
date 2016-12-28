import { Component, OnInit } from '@angular/core';

import {ActivatedRoute} from '@angular/router';
//import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {HotelsService} from './hotels.service';
import {Hotel} from "./hotel";

import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-admin-edit-hotel',
  templateUrl: './admin-edit-hotel.component.html',
  styleUrls: ['./admin-edit-hotel.component.css']
})
export class AdminEditHotelComponent implements OnInit {

  public id:string = "";
  public Hotel:Hotel = new Hotel();

  //formGroupHotel:FormGroup;

  constructor(private route:ActivatedRoute, private hotelsService:HotelsService) { }

  updateHotel(form:NgForm){

    console.log(form.value);

    /**/
    this.hotelsService.HotelEdit(this.id, form.value).subscribe(p => {
        this.Hotel = p;
      }
      , err => {
        console.log(err);
      });


  }

  ngOnInit() {

    this.id = this.route.snapshot.params['id'];

    this.hotelsService.HotelDetail(this.id).subscribe(p => {
      this.Hotel = p;
    }
    , err => {
      console.log(err);
    });

  }



}
