import { Component, OnInit, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';

import { ShopFeature } from '../../../models/shop-feature.model';
import { GetDataService } from '../../../services/getData.service';
import { YellowCardComponent } from '../../../sharedComponents/yellow-card/yellow-card.component';
import { environment } from '../../../../environments/environment.development';

@Component({
  selector: 'app-feature-section',
  standalone: true,
  imports: [YellowCardComponent, AsyncPipe],
  providers: [GetDataService],
  templateUrl: './feature-section.component.html',
  styleUrl: './feature-section.component.css',
})
export class FeatureSectionComponent implements OnInit {
  private getDataService = inject(GetDataService);
  features: ShopFeature[] =[];

  ngOnInit() {
    this.getDataService.getData(environment.shopFeatureUrl).subscribe(
     // eslint-disable-next-line @typescript-eslint/no-explicit-any
     (data: any) => {
        this.features = data;
      },
      (error: Error) => {
        alert(error.message);
      }
    );
  }
}
