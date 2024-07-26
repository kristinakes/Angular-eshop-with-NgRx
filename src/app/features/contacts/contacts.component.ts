import { Component } from '@angular/core';

import { YellowCardComponent } from '../../sharedComponents/yellow-card/yellow-card.component';
import { MapComponent } from './map/map.component';
import { ShopFeature } from '../../models/shop-feature.model';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [YellowCardComponent, MapComponent],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css',
})
export class ContactsComponent {
  contacts: ShopFeature[] = [
    {
      icon: 'headset',
      title: 'Phone number',
      text: '0123456789',
    },
    {
      icon: 'email',
      title: 'E-mail',
      text: 'gadget@store.com',
    },
  ];

  title: string = 'Contact us by Phone, Email, or Visit us in our Office!';
  adress: string = 'Our address: Station Nord 23456, Greenland';
}
