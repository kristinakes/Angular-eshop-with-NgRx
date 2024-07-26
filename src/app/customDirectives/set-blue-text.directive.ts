import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appSetBlueText]',
  standalone: true,
})
export class SetBlueTextDirective {

  constructor(element: ElementRef) {
    element.nativeElement.style.color = '#3f51b5';
  }
}