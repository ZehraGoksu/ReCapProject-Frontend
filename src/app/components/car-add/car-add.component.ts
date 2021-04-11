import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CarDetailService } from 'src/app/services/car-detail.service';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css']
})
export class CarAddComponent implements OnInit {

  carAddForm:FormGroup;
  constructor(private carDetailService:CarDetailService, private toastrService:ToastrService ,private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.createCarAddForm();
  }

  createCarAddForm(){
    this.carAddForm = this.formBuilder.group({
      carName:["", Validators.required],
      brandName:["", Validators.required],
      colorName:["", Validators.required],
      modelYear:["", Validators.required],
      dailyPrice:["", Validators.required],
      description:["", Validators.required]
    })

  }

  addCar(){
    if(this.carAddForm.valid){
      let carModel = Object.assign({},this.carAddForm.value)
      this.carDetailService.addCar(carModel).subscribe(data =>{
        this.toastrService.success(data.message, "Başarılı")
     })
    }
    else{
      this.toastrService.error("Hatalı bilgiler","Dikkat")
    }
  }

  update() {
    if (this.carAddForm.valid) {
      let carModel = Object.assign({}, this.carAddForm.value);
      this.carDetailService.update(carModel).subscribe(
        (response) => {this.toastrService.success(response.message, 'Başarılı');},
        (responseError) => {
          if (responseError.error.ValidationErrors.length > 0) {
            for (let i = 0; i < responseError.error.ValidationErrors.length; i++ ) {
              this.toastrService.error( responseError.error.ValidationErrors[i].ErrorMessage,'Doğrulama hatası' );
            }
          }
        }
      );
    } else {
      this.toastrService.error('Formunuz eksik', 'Dikkat');
    }
  }
}


