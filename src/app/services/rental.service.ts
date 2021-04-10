import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Rental } from '../models/rental';
import { ListResponseModel } from '../models/listResponseMode';
import { ResponseModel } from '../models/responseModel';


@Injectable({
  providedIn: 'root'
})
export class RentalService {
  apiUrl = 'https://localhost:44394/api/';

  constructor(private httpClient: HttpClient) { }

  getRentals():Observable<ListResponseModel<Rental>> {
    let newPath = this.apiUrl + "rentals/getrentaldetail"
    return this.httpClient.get<ListResponseModel<Rental>>(newPath);
  }

  getCarsByBrand(brandId:number):Observable<ListResponseModel<Rental>>{
    let newPath = this.apiUrl + "cars/getbybrandid?brandId="+brandId 
    return this.httpClient.get<ListResponseModel<Rental>>(newPath);
  }
  AddRental(rental:Rental): Observable<ResponseModel> {
    let newPath = this.apiUrl + 'rentals/add';
    return this.httpClient.post<ResponseModel>(newPath,rental);
  }
}

  