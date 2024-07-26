import { Component, Input, OnInit, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/app.state';
// import { Observable} from 'rxjs';
import { AsyncPipe } from '@angular/common';

import {selectCartItemByIdQuantity} from '../../../store/cartStore/cart.selector';
import {
  deleteItem,
  addToCart,
  removeFromCart,
} from '../../../store/cartStore/cart.actions';
import { Product } from '../../../models/product.model';
import { Observable } from 'rxjs';
import { cartItem } from '../../../models/cartItem.model';
// import { cartItem } from '../../models/cartItem.model';

@Component({
  selector: 'app-cart-item-buttons',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, AsyncPipe],
  templateUrl: './cart-item-buttons.component.html',
  styleUrl: './cart-item-buttons.component.css',
})
export class CartItemButtonsComponent implements OnInit {
  @Input() productId!: number | string;
  @Input() product!: Product | cartItem;

  private store = inject(Store<AppState>);
  //to render correct buttons and show quantity of that product in cart
  itemQuantity$!: Observable<number | undefined>;
   
  ngOnInit() {
   this.itemQuantity$ = this.store.select(
     selectCartItemByIdQuantity(this.product.id)
   );
  }

  removeFromCart(productId: string | number) {
    this.store.dispatch(removeFromCart({ productId: productId }));
  }
  addToCart(product: Product | cartItem) {
    this.store.dispatch(addToCart({ product: product }));
  }
  deleteFromCart(productId: number | string) {
    this.store.dispatch(deleteItem({ productId: productId }));
  }
}
