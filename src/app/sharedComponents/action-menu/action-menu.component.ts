import { Component, Input, inject} from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatButton } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { RouterLink } from '@angular/router';

import { ProductFormComponent } from '../product-form/product-form.component';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import { deleteItem } from '../../store/cartStore/cart.actions';
import { AppState } from '../../store/app.state';


@Component({
  selector: 'app-action-menu',
  standalone: true,
  imports: [MatMenuModule, MatButton, RouterLink],
  templateUrl: './action-menu.component.html',
  styleUrl: './action-menu.component.css',
})
export class ActionMenuComponent {
  @Input() product!: Product;

  private store = inject(Store<AppState>);
  private productService = inject(ProductService);
  public dialog = inject(MatDialog);


  openDialog() {
    this.dialog.open(ProductFormComponent, {
      data: { product: this.product, action: 'update' },
    });
  }

  onProductDelete(productId: number | string) {
    this.productService
      .deleteProduct(productId)
      .subscribe(() => this.productService.emitProductAdded());

      //if product deleted, also remove from cart
    this.store.dispatch(deleteItem({ productId: productId }));
  }
}
