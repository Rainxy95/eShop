import { Component, OnInit } from '@angular/core';
import { CartService } from '../../cart/cart.service'
@Component({
  selector: 'app-cart-nav',
  templateUrl: './cart-nav.component.html',
  styleUrls: ['./cart-nav.component.css']
})
export class CartNavComponent implements OnInit {

  constructor(
    private cartService: CartService,
  ) { }

  ngOnInit() {
  }
  
  
}
