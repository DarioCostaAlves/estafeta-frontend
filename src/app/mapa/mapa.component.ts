import { AfterViewInit, Component } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss'],
})
export class MapaComponent implements AfterViewInit {
  private static map: L.Map;
  private marker: L.Marker | null = null;
  public latitude: number | null = 41.233865; // Valor inicial
  public longitude: number | null = -8.622372; // Valor inicial

  constructor() {}

  ngAfterViewInit(): void {
    this.initMapDefaultLeaflet();
    MapaComponent.invalidadeSize();
  }

  private initMapDefaultLeaflet(): void {
    MapaComponent.map = L.map('map').setView(
      [this.latitude as number, this.longitude as number], // Fórum da Maia
      13
    );

    const tiles = L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        maxZoom: 19,
        minZoom: 3,
        attribution: '&copy;',
      }
    );
    tiles.addTo(MapaComponent.map);

    this.marker = L.marker([
      this.latitude as number,
      this.longitude as number,
    ]).addTo(MapaComponent.map);

    MapaComponent.map.on('click', (e: L.LeafletMouseEvent) => {
      const { lat, lng } = e.latlng;
      this.updateCoordinates(lat, lng);
      this.updateMarkerPosition(lat, lng);
    });
  }

  static invalidadeSize() {
    setTimeout(() => {
      MapaComponent.map.invalidateSize();
    }, 500);
  }

  private updateCoordinates(lat: number, lng: number) {
    this.latitude = lat;
    this.longitude = lng;
    (document.getElementById('latitude') as HTMLInputElement).value =
      lat.toString();
    (document.getElementById('longitude') as HTMLInputElement).value =
      lng.toString();
    console.log(`Latitude: ${lat}, Longitude: ${lng}`);
  }

  private updateMarkerPosition(lat: number, lng: number) {
    if (this.marker) {
      this.marker.setLatLng([lat, lng]);
      MapaComponent.map.setView([lat, lng], 13);
    }
  }

  onLatitudeChange(event: any) {
    const lat = parseFloat(event.target.value);
    if (!isNaN(lat) && this.longitude !== null) {
      this.updateCoordinates(lat, this.longitude);
      this.updateMarkerPosition(lat, this.longitude);
    }
  }

  onLongitudeChange(event: any) {
    const lng = parseFloat(event.target.value);
    if (!isNaN(lng) && this.latitude !== null) {
      this.updateCoordinates(this.latitude, lng);
      this.updateMarkerPosition(this.latitude, lng);
    }
  }
}
