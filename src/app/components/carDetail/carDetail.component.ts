import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from 'src/app/models/carDetail';
import { CarDetailService } from 'src/app/services/car-detail.service';

@Component({
  selector: 'app-cardetail',
  templateUrl: './cardetail.component.html',
  styleUrls: ['./cardetail.component.css']
})
export class CarDetailComponent implements OnInit {

  carDetails:CarDetail[]=[];
  carImages:CarDetail[]=[];
  car:CarDetail;
  carText ="";
  

  imageBasePath="https://localhost:44394" 
  dataLoaded=true;

  constructor(private carDetailService:CarDetailService,
    private activatedRoute:ActivatedRoute

    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["brandId"]){
        this.getCarDetailsByBrandId(params["brandId"])
      }else if(params["colorId"]){
        this.getCarDetailsByColorId(params["colorId"])}
      else{
        this.getCarDetails()
      }
    })
  }
  setCurrentCar(car:CarDetail){
    this.car=car;
  }

  getAllCarsClass(){
    if(!this.car){
      return "list-group-item list-group-item-secondary"
    }else{
      return "list-group-item"
    }
  }

  getCarDetails(){
  this.carDetailService.getCarDetails().subscribe(response=>{
    this.carDetails=response.data
    this.dataLoaded=true;
  })
  }
  
  getCarDetailsByBrandId(brandId:number){
    this.carDetailService.getCarsByBrand(brandId).subscribe(response=>{
      this.carDetails=response.data
      this.dataLoaded=true;
    })
    }

  getCarDetailsByColorId(colorId:number){
    this.carDetailService.getCarsByColor(colorId).subscribe(response=>{
      this.carDetails=response.data
      this.dataLoaded=true;
    })
    }

  
  getCarByCarId(carId:number){
    this.carDetailService.getCarByCarId(carId).subscribe(response=>{
      this.carDetails=response.data
      this.dataLoaded=true;
    })
    }
    

}