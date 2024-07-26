import { Component } from '@angular/core';

import { SetBlueBackgroundDirective } from '../../customDirectives/set-blue-background.directive';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [SetBlueBackgroundDirective],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
