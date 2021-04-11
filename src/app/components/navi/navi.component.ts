import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {UserService} from '../../services/user.service';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';
import {User} from '../../models/user';
import { LocalStorageService } from 'src/app/services/local-stroge.service';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {
  email = this.localStorageService.get('email');
  user:User = new User();
  control:boolean;

  constructor(private authService:AuthService,
              private localStorageService:LocalStorageService,
              private userService:UserService,
              private toastrService:ToastrService,
              private router:Router) { }

  ngOnInit(): void {
    this.load();
  }

  load(){
    this.control = this.authService.isAuthenticated();
    this.checkToEmail();
    this.getEmail();
    this.checkAdmin();
  }

  checkToEmail(){
    if(this.localStorageService.get('email')){
      return true;
    }else{
      return false;
    }
  }


  getEmail(){
    if(this.email){
      this.userService.getByEmail(this.email).subscribe(response=>{
        this.user = response;
        this.authService.getClaims(this.user.id).subscribe(response=>{
          if(response.data.length>0){
            this.localStorageService.set('yetki','var')
            this.localStorageService.set('id',this.user.id.toString())
          }
        })
      })
    }
  }

  checkAdmin(){
    if(this.localStorageService.get('yetki')){
      return true;
    }else{
      return false;
    }
  }

}