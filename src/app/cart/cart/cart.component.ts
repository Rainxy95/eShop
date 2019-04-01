import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../cart.service'
import { Observable } from '../../../../node_modules/rxjs';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @Input() album;
  qty:number=1;
  message:any;
  constructor(
    private cartService: CartService,
  ) { }

  ngOnInit() {
  }

  decQty(){
    if(this.qty=1)
    return
    this.qty--
  }

  incQty(){
    this.qty++
  }

  addCart(){
    this.cartService.addCart({albumId:this.album._id, qty:this.qty})
      .subscribe(()=>{
        this.message = 'Added to cart'
      },err=>this.message = err.error
      )
  }

}
