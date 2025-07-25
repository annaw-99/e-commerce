import { Component, inject } from '@angular/core';
import { CartService } from '../../core/services/cart.service';
import { CartItemComponent } from "./cart-item/cart-item.component";
import { OrderSummaryComponent } from "../../shared/components/order-summary/order-summary.component";
import { EmptyStateComponent } from "../../shared/components/empty-state/empty-state.component";
import { Router } from '@angular/router';
import { MatDivider } from "@angular/material/divider";

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CartItemComponent, OrderSummaryComponent, EmptyStateComponent, MatDivider],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  private router = inject(Router);
  cartService = inject(CartService);

  onAction() {
    this.router.navigateByUrl('/shop');
  }
}
