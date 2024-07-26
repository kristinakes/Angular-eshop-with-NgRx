import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { RouterLink } from '@angular/router';



@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [MatButtonModule, MatGridListModule, RouterLink],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css',
})
export class HeroSectionComponent {
  title: string = 'Experience the Future of Technology Today!';
  description: string =
    'Unleash your inner tech enthusiast with our wide range of gadgets. Become a pro expert within a moment.';
}
