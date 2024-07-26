import { Component, OnInit, inject } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';
import { AppState } from '../../store/app.state';
import { Store } from '@ngrx/store';
import { updateItemInCart } from '../../store/cartStore/cart.actions';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    UpperCasePipe,
  ],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css',
})
export class ProductFormComponent implements OnInit {
  public dialog = inject(MatDialog);
  private productService = inject(ProductService);
  public data: {product: Product; action: string} = inject(MAT_DIALOG_DATA);

  //to access cart state if product updated
  private store = inject(Store<AppState>);

  //to store product data if passed trough dialog
  product: Product = this.data.product;

  //to store form imput data befor submiting
  formData!: Product;

  defaultValues = {
    title: '',
    short_description: '',
    long_description: '',
    price: 0,
    year: 0,
    RAM: '',
    warranty_period: '',
  };

  reactiveProductForm: FormGroup = new FormGroup({
    title: new FormControl('Laptop', Validators.required),
    short_description: new FormControl('', Validators.required),
    long_description: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    price: new FormControl('', [Validators.required, Validators.min(0)]),
    year: new FormControl('', [Validators.required, Validators.min(1900)]),
    RAM: new FormControl('', Validators.required),
    warranty_period: new FormControl('', Validators.required),
  });

  ngOnInit(): void {
    if (this.product) {
      this.defaultValues = {
        title: this.product.title,
        short_description: this.product.short_description,
        long_description: this.product.long_description,
        price: this.product.price,
        year: this.product.year,
        RAM: this.product['RAM'],
        warranty_period: this.product.warranty_period,
      };

      this.reactiveProductForm.setValue(this.defaultValues);
    }
  }

  onProductSubmit() {
    if (this.reactiveProductForm.valid) {
      if (this.data.action === 'add') {
        //get data from form
        this.formData = {
          ...this.reactiveProductForm.value,
          features: ['feature 1', 'feature 2'],
          image_url: '/assets/product_images/laptop.png',
        };
        this.productService.postNewProduct(this.formData);
      } else if (this.data.action === 'update') {
        this.formData = {
          ...this.reactiveProductForm.value,
          features: this.product.features,
          image_url: this.product.image_url,
        };
        console.log(this.formData, this.data.product.id);
        this.productService
          .updateProduct(this.formData, this.data.product.id)
          .subscribe(() => this.productService.emitProductAdded());
        //dispatch action to cart store and check if product in cart update its info
        this.store.dispatch(
          updateItemInCart({
            updatedProduct: this.formData,
            productId: this.data.product.id,
          })
        );
      }

      this.reactiveProductForm.reset();
      this.dialog.closeAll();
    }
  }

  onCancel() {
    this.reactiveProductForm.reset();
    this.dialog.closeAll();
  }

  checkForInputErrors(FormControl: AbstractControl): string {
    if (FormControl.hasError('required')) {
      return 'Ths field is required';
    }
    if (FormControl.hasError('minlength')) {
      return `Min length should be ${FormControl.errors?.['minlength'].requiredLength} `;
    }
    if (FormControl.hasError('min')) {
      return `It should be not less than ${FormControl.errors?.['min'].min}`;
    }
    return '';
  }
}
