import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';
import { CartService } from '../../cart/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private router: Router,
    private cartService: CartService
  ) { }

  ngOnInit() {
  }

  logout() {
    this.auth.logout().subscribe();
    this.cartService.totalCount = 0;
    this.router.navigate(['/']);
  }
}
