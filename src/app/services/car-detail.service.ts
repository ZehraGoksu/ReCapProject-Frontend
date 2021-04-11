import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetail } from '../models/carDetail';
import { ListResponseModel } from '../models/listResponseMode';
import { ResponseModel } from '../models/responseModel';


@Injectable({
  providedIn: 'root'
})
export class CarDetailService {
  apiUrl = 'https://localhost:44394/api/';

  constructor(private httpClient: HttpClient) { }

  getCarDetails():Observable<ListResponseModel<CarDetail>> {
    let newPath = this.apiUrl + "cars/getcardetail";
    return this.httpClient.get<ListResponseModel<CarDetail>> (newPath);
  }
  getCarsByBrand(brandId:number):Observable<ListResponseModel<CarDetail>>{
    let newPath = this.apiUrl + "cars/getcarbybrandid?id="+brandId 
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }
  getCarsByColor(colorId:number):Observable<ListResponseModel<CarDetail>>{
    let newPath = this.apiUrl + "cars/getcarbycolorid?id="+colorId 
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }
  getCarByCarId(carId:number):Observable<ListResponseModel<CarDetail>>{
    let newPath=this.apiUrl+"cars/getcarbycarid?id="+carId
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath)
  }
  getCarDetailsById(carId: number): Observable<ListResponseModel<CarDetail>> {
    let newPath = this.apiUrl + 'cars/getcardetailsbyid?carId=' + carId;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }
  getCarImagesByCarId(carId:number):Observable<ListResponseModel<CarDetail>>{
    let newPath=this.apiUrl+ "cars/getimagesbycarid?id=" +carId;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }
  addCar(carDetail:CarDetail):Observable<ResponseModel>{
    let newPath = this.apiUrl+"cars/add"
    return this.httpClient.post<ResponseModel>(newPath,carDetail);
  }
  update(carDetail:CarDetail): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'cars/update', carDetail);
  }


}