import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './components/car/car.component';
import { CarDetailComponent } from './components/carDetail/carDetail.component';
import { PaymentComponent } from './components/payment/payment.component';
import { RentalComponent } from './components/rental/rental.component';

const routes: Routes = [
  {path:"" , component:CarComponent},
  {path:"cars/:carId", component:CarDetailComponent},
  {path:"cars", component:CarComponent},
  {path:"payment/:carId", component:PaymentComponent},
  {path:"carDetails/:carId", component:CarComponent},
  {path:"cars/brand/:brandId", component:CarDetailComponent},
  {path:"cars/color/:colorId", component:CarDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
