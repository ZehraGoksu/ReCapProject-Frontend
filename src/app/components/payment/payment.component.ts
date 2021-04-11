import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CreditCard } from 'src/app/models/creditCard';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  payment:CreditCard[]=[];
  constructor(private paymentService:PaymentService ,private toastrService:ToastrService) { }

  ngOnInit(): void {
  }

  addToCart(payment:CreditCard){
    if(payment.id==1){
      this.toastrService.error("Ürün sepete eklenemez.")
    }
    else{
      this.toastrService.success("Sepete eklendi", payment.firstLastName) 
    }
  }

  
}
