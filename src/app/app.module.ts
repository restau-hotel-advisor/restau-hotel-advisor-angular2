import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { AccueilComponent } from './accueil/accueil.component';
import {routing} from "./app.routing";
import { HotelsComponent } from './hotels/hotels.component';
import { AdminComponent } from './admin/admin.component';
import { AdminListHotelsComponent } from './admin/admin-list-hotels.component';

//providers
import {HotelsService} from './admin/hotels.service';

import { AdminViewHotelComponent } from './admin/admin-view-hotel.component';
import { AdminEditHotelComponent } from './admin/admin-edit-hotel.component';
import { AdminAddHotelComponent } from './admin/admin-add-hotel.component';
import { AdminListRestaurantsComponent } from './admin/admin-list-restaurants.component';
import {RestaurantsService} from "./admin/restaurants.service";
import { AdminViewRestaurantComponent } from './admin/admin-view-restaurant-component';
import { AdminEditRestaurantComponent } from './admin/admin-edit-restaurant.component';
import { AdminAddRestaurantComponent } from './admin/admin-add-restaurant.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuLeftComponent } from './menu-left/menu-left.component';
import { MenuRightComponent } from './menu-right/menu-right.component';
import { HotelsSemaineComponent } from './hotels-semaine/hotels-semaine.component';
import { RestaurantsSemaineComponent } from './restaurants-semaine/restaurants-semaine.component';

@NgModule({
  declarations: [
    AppComponent,
    RestaurantsComponent,
    AccueilComponent,
    HotelsComponent,
    AdminComponent,
    AdminListHotelsComponent,
    AdminViewHotelComponent,
    AdminEditHotelComponent,
    AdminAddHotelComponent,
    AdminListRestaurantsComponent,
    AdminViewRestaurantComponent,
    AdminEditRestaurantComponent,
    AdminAddRestaurantComponent,
    HeaderComponent,
    FooterComponent,
    MenuLeftComponent,
    MenuRightComponent,
    HotelsSemaineComponent,
    RestaurantsSemaineComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [HotelsService,RestaurantsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
