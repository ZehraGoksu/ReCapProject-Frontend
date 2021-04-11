import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../models/user';
import {ResponseModel} from '../models/responseModel';
import {SingleResponseModel} from '../models/singleResponseModel';
import { ListResponseModel } from '../models/listResponseMode';
import { FindeksModel } from '../models/findeksModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = 'https://localhost:44394/api/';

  constructor(private httpClient:HttpClient) { }

  getByEmail(email:string):Observable<User>{
    return this.httpClient.get<User>(this.apiUrl + 'users/email?email='+email);
  }

  getUsers():Observable<ListResponseModel<User>>{
    return this.httpClient.get<ListResponseModel<User>>(this.apiUrl + 'users')
  }


  fakeFindeks(findeksModel:FindeksModel):Observable<SingleResponseModel<FindeksModel>>{
    return this.httpClient.post<SingleResponseModel<FindeksModel>>(this.apiUrl+'users/getuserfindeks',findeksModel)
  }

}