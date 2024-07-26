import { Component, Input} from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { DecimalPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

import { CartItemButtonsComponent } from '../cart-item-buttons/cart-item-buttons.component';
import { cartItem } from '../../../models/cartItem.model';
import { SetBlueTextDirective } from '../../../customDirectives/set-blue-text.directive';


@Component({
  selector: 'app-cart-item-card',
  standalone: true,
  imports: [MatCardModule, CartItemButtonsComponent, DecimalPipe, RouterLink, SetBlueTextDirective],
  templateUrl: './cart-item-card.component.html',
  styleUrl: './cart-item-card.component.css',
})
export class CartItemCardComponent {
  @Input() item!: cartItem;

}
