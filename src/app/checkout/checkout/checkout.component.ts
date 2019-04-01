import { Component, OnInit } from '@angular/core';
import { CartService  } from '../../cart/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  items=[];
  totalCount:number=99;
  totalPrice:number=99;
  constructor(
    private cartService: CartService,
  ) { }

  ngOnInit() {
    this.cartService.getCheckout().subscribe(data=>{
      this.items = data.items;
      this.totalCount = data.totalCount;
      this.totalPrice = data.totalPrice
    })
  }

}
