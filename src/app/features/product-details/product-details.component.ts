import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { AsyncPipe } from '@angular/common';
import { switchMap } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { CartItemButtonsComponent } from '../cart/cart-item-buttons/cart-item-buttons.component';
import { ActionMenuComponent } from '../../sharedComponents/action-menu/action-menu.component';
import { ProductService } from '../../services/product.service';
import { SetBlueTextDirective } from '../../customDirectives/set-blue-text.directive';



@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [
    MatCardModule,
    CartItemButtonsComponent,
    ActionMenuComponent,
    AsyncPipe,
    SetBlueTextDirective
  ],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent {
  private productService = inject(ProductService);
  private route = inject(ActivatedRoute);

  product$ = this.route.paramMap
    .pipe(
      switchMap((params: ParamMap) => this.productService.getProduct(params.get('id')!))
    );
}
