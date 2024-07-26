import { Component, inject } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AsyncPipe } from '@angular/common';


import { AppState } from '../../store/app.state';
import { selectCartQuantity } from '../../store/cartStore/cart.selector';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatIconModule,
    RouterLink,
    MatButtonModule,
    MatMenuModule,
    AsyncPipe
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  private store = inject(Store<AppState>)

  cartTotalQuantity$: Observable<number> = this.store.select(selectCartQuantity);
}
