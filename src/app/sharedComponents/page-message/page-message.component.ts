import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

import { SetBlueTextDirective } from '../../customDirectives/set-blue-text.directive';

@Component({
  selector: 'app-page-message',
  standalone: true,
  imports: [MatCardModule, SetBlueTextDirective],
  templateUrl: './page-message.component.html',
  styleUrl: './page-message.component.css'
})
export class PageMessageComponent {
  
}
