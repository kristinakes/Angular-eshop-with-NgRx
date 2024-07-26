import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';

import { ShopFeature } from '../../models/shop-feature.model';

@Component({
  selector: 'app-yellow-card',
  standalone: true,
  imports: [MatCardModule, MatIcon],
  templateUrl: './yellow-card.component.html',
  styleUrl: './yellow-card.component.css',
})
export class YellowCardComponent {
  @Input() feature!: ShopFeature;
}
