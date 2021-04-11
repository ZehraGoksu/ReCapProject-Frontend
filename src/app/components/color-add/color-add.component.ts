import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color-add',
  templateUrl: './color-add.component.html',
  styleUrls: ['./color-add.component.css']
})
export class ColorAddComponent implements OnInit {

  colorAddForm:FormGroup;
  constructor(private color:ColorService, private toastrService:ToastrService ,private formBuilder:FormBuilder) { }


  ngOnInit(): void {
    this.createColorAddForm();
  }

  createColorAddForm(){
    this.colorAddForm = this.formBuilder.group({
      
      colorName:["", Validators.required]
    })

  }
  addColor(){
    if(this.colorAddForm.valid){
      let colorModel = Object.assign({},this.colorAddForm.value)
      this.color.addCar(colorModel).subscribe(data =>{
        this.toastrService.success(data.message, "Başarılı")
     })
    }
    else{
      this.toastrService.error("Hatalı bilgiler","Dikkat")
    }
  }

  update() {
    if (this.colorAddForm.valid) {
      let colorModel = Object.assign({}, this.colorAddForm.value);
      this.color.update(colorModel).subscribe(
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


