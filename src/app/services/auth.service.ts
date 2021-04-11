import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Claims } from '../models/claims';
import { ListResponseModel } from '../models/listResponseMode';
import { LoginModel } from '../models/loginModel';
import { RegisterModel } from '../models/registerModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { TokenModel } from '../models/tokenModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = 'https://localhost:44394/api/auth/';
  constructor(private httpClient:HttpClient) { }
  
  login(loginModel:LoginModel)
  {
    return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl+"login",loginModel)
  }

  register(registerModel:RegisterModel) {
    return this.httpClient.post<SingleResponseModel<TokenModel>>( this.apiUrl + 'auth/register',registerModel );
  }

  isAuthenticated(){
    if(localStorage.getItem("token")){
      return true;
    }
    else{
      return false;
    }
  }

  getClaims(id:number):Observable<ListResponseModel<Claims>>{
    return this.httpClient.get<ListResponseModel<Claims>>(this.apiUrl + 'users/claims?id='+id)
  }

}
