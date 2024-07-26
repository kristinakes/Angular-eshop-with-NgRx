import { Component } from '@angular/core';

import { HeroSectionComponent } from './hero-section/hero-section.component';
import { FeatureSectionComponent } from './feature-section/feature-section.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroSectionComponent, FeatureSectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
