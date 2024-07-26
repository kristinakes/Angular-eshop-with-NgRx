import { Component, Input, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButton } from '@angular/material/button';
import { RouterLink } from '@angular/router';

import { Product } from '../../../models/product.model';
import { ActionMenuComponent } from '../../../sharedComponents/action-menu/action-menu.component';
import { ProductService } from '../../../services/product.service';
import { SetBlueTextDirective } from '../../../customDirectives/set-blue-text.directive';


@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [MatCardModule, MatButton, ActionMenuComponent, RouterLink, SetBlueTextDirective],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  @Input() product!: Product;
  private productService = inject(ProductService);

  // onShowProductDetails(productId: number | string) {
  //   this.productService.selectedProductChanged(productId);
  // }
}
