import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from 'src/app/models/carDetail';
import { CarDetailService } from 'src/app/services/car-detail.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  carDetails:CarDetail[]=[];
  

  imageBasePath="https://localhost:44394" 
  dataLoaded=true;

  constructor(private userService:UserService,
    private activatedRoute:ActivatedRoute ) { }

  ngOnInit(): void {
  }

}
