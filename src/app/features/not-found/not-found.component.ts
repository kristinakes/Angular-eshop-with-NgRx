import { Component } from '@angular/core';

import { PageMessageComponent } from '../../sharedComponents/page-message/page-message.component';
import { SetBlueTextDirective } from '../../customDirectives/set-blue-text.directive';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [PageMessageComponent, SetBlueTextDirective],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css'
})
export class NotFoundComponent {

}
