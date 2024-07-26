import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AsyncPipe, DecimalPipe } from '@angular/common';

import { AppState } from '../../store/app.state';
import { selectCartAmount, selectCartItems, selectCartQuantity } from '../../store/cartStore/cart.selector';
import { CartItemCardComponent } from './cart-item-card/cart-item-card.component';
import { PageMessageComponent } from '../../sharedComponents/page-message/page-message.component';
import { cartItem } from '../../models/cartItem.model';
import { SetBlueTextDirective } from '../../customDirectives/set-blue-text.directive';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [PageMessageComponent, RouterLink, CartItemCardComponent, AsyncPipe, DecimalPipe, SetBlueTextDirective],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  private store = inject(Store<AppState>);

  cartTotalAmount$: Observable<number> = this.store.select(selectCartAmount);
  cartTotalQuantity$: Observable<number> =
    this.store.select(selectCartQuantity);
  cartItems$: Observable<cartItem[]> =
    this.store.select(selectCartItems);
}
