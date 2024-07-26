import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { UpperCasePipe, AsyncPipe } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';

import { ProductCardComponent } from './product-card/product-card.component';
import { PageMessageComponent } from '../../sharedComponents/page-message/page-message.component';
import { ProductFormComponent } from '../../sharedComponents/product-form/product-form.component';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIcon,
    UpperCasePipe,
    AsyncPipe,
    ProductCardComponent,
    MatGridListModule,
    PageMessageComponent,
    MatDialogModule,
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  private productService = inject(ProductService);
  public dialog = inject(MatDialog);

  products$ = this.productService.products$;

  openDialog() {
    this.dialog.open(ProductFormComponent, { data: { action: 'add' } });
  }
}
