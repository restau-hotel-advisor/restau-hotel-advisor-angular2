import {Routes, RouterModule} from "@angular/router";
import {AccueilComponent} from "./accueil/accueil.component";
import {RestaurantsComponent} from "./restaurants/restaurants.component";
import {HotelsComponent} from "./hotels/hotels.component";
import {AdminComponent} from "./admin/admin.component";
import {AdminListHotelsComponent} from "./admin/admin-list-hotels.component";
import {AdminViewHotelComponent} from "./admin/admin-view-hotel.component";
import {AdminEditHotelComponent} from "./admin/admin-edit-hotel.component";
import {AdminAddHotelComponent} from "./admin/admin-add-hotel.component";
import {AdminListRestaurantsComponent} from "./admin/admin-list-restaurants.component";
import {AdminViewRestaurantComponent} from "./admin/admin-view-restaurant-component";
import {AdminEditRestaurantComponent} from "./admin/admin-edit-restaurant.component";
import {AdminAddRestaurantComponent} from "./admin/admin-add-restaurant.component";
import {HotelsSemaineComponent} from "./hotels-semaine/hotels-semaine.component";
import {RestaurantsSemaineComponent} from "./restaurants-semaine/restaurants-semaine.component";

const  APP_ROUTES: Routes = [
  {path: '' , component: AccueilComponent   },
  {path: 'restaurants' , component: RestaurantsComponent   },
  {path: 'restaurants-semaine' , component: RestaurantsSemaineComponent   },
  {path: 'hotels' , component: HotelsComponent   },
  {path: 'hotels-semaine' , component: HotelsSemaineComponent   },
  {path: 'admin' , component: AdminComponent   },

  {path: 'admin-list-hotels' , component: AdminListHotelsComponent   },
  {path: 'admin-view-hotel/:id', component: AdminViewHotelComponent},
  {path: 'admin-edit-hotel/:id', component: AdminEditHotelComponent},
  {path: 'admin-add-hotel', component: AdminAddHotelComponent},
  {path: 'admin-list-restaurant' , component: AdminListRestaurantsComponent   },
  {path: 'admin-view-restaurant/:id', component: AdminViewRestaurantComponent},
  {path: 'admin-edit-restaurant/:id', component: AdminEditRestaurantComponent},
  {path: 'admin-add-restaurant', component: AdminAddRestaurantComponent}


];

export const routing = RouterModule.forRoot(APP_ROUTES);
