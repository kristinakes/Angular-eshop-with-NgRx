import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appSetBlueBackground]',
  standalone: true
})
export class SetBlueBackgroundDirective {
  constructor(element: ElementRef) {
    element.nativeElement.style.background = '#3f51b5';
    element.nativeElement.style.color = 'white';
   }
}
