import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { BrandListComponent } from './components/brand-list/brand-list.component';
import { BrandComponent } from './components/brand/brand.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { CarComponent } from './components/car/car.component';
import { CarDetailComponent } from './components/carDetail/carDetail.component';
import { ColorAddComponent } from './components/color-add/color-add.component';
import { ColorListComponent } from './components/color-list/color-list.component';
import { PaymentComponent } from './components/payment/payment.component';
import { RentalComponent } from './components/rental/rental.component';

const routes: Routes = [
  {path:"" , component:CarComponent},
  {path:"cars/:carId", component:CarDetailComponent},
  {path:"cars", component:CarComponent},
  {path:"payment/:carId", component:PaymentComponent},
  {path:"carDetails/:carId", component:CarComponent},
  {path:"cars/car/:carId", component:CarDetailComponent},
  {path:"cars/brand/:brandId", component:CarDetailComponent},
  {path:"cars/color/:colorId", component:CarDetailComponent},
  {path:"carsAdd/add", pathMatch:"full", component:CarAddComponent },
  {path:"carsUpdate/update/:carId", component:CarAddComponent},
  {path:"colorsAdd/add", pathMatch:"full", component:ColorAddComponent },
  {path:"colorsUpdate/update/:colorId", component:ColorAddComponent},
  {path:"brandsAdd/add", pathMatch:"full", component:BrandAddComponent },
  {path:"brandsUpdate/update/:brandId", component:BrandAddComponent},
  {path:"brands", component:BrandListComponent},
  {path:"colors", component:ColorListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
