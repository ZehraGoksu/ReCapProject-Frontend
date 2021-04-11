import { Component, OnInit } from '@angular/core';
import { CarDetail } from 'src/app/models/carDetail';
import { CarDetailService } from 'src/app/services/car-detail.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cars:CarDetail[]=[];
  carText = "";
  currentCar:CarDetail;
  dataLoaded=false;

  constructor(private carDetailService:CarDetailService) { }

  ngOnInit(): void {
    this.getCars()
  }

  getCars(){
    this.carDetailService.getCarDetails().subscribe(response=>{
      this.cars=response.data
      this.dataLoaded=true;
    })

  }
  
  
  setCurrentCar(car:CarDetail){
    this.currentCar=car;
  }
  
  getCurrentCarClass(car:CarDetail){
    if(car == this.currentCar){
      return "list-group-item  list-group-item-warning"
    }else{
      return "list-group-item"
    }
  }

  getAllCarsClass(){
    if(!this.currentCar){
      return "list-group-item list-group-item-secondary"
    }else{
      return "list-group-item"
    }
  }

}
