import { Component } from '@angular/core';
import { GoogleMap, MapAdvancedMarker } from '@angular/google-maps';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [GoogleMap, MapAdvancedMarker],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css',
})
export class MapComponent {
  options: google.maps.MapOptions = {
    center: { lat: 81.60216234789942, lng: -16.661858281016755 },
    zoom: 6,
  };

  markerPositions: google.maps.LatLngLiteral[] = [
    { lat: 81.60216234789942, lng: -16.661858281016755 },
  ];
}
