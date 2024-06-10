import { AfterViewInit, Component } from '@angular/core';
import * as L from 'leaflet';
import { WarehouseService } from '../warehouses/warehouse.service';
import { Warehouse } from '../warehouses/warehouse.model';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss'],
})
export class MapaComponent implements AfterViewInit {
  private static map: L.Map;
  private clickMarker: L.Marker | null = null;
  public latitude: number | null = 41.233865; // Valor inicial
  public longitude: number | null = -8.622372; // Valor inicial

  constructor(private warehouseService: WarehouseService) {}

  ngAfterViewInit(): void {
    this.initMapDefaultLeaflet();
    this.loadWarehouses();
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
        attribution: '&copy; OpenStreetMap contributors',
      }
    );
    tiles.addTo(MapaComponent.map);

    MapaComponent.map.on('click', (e: L.LeafletMouseEvent) => {
      const { lat, lng } = e.latlng;
      this.updateCoordinates(lat, lng);
      this.updateClickMarker(lat, lng);
    });
  }

  private loadWarehouses(): void {
    this.warehouseService.getWarehouses().subscribe(
      (warehouses: Warehouse[]) => {
        warehouses.forEach((warehouse: Warehouse) => {
          if (warehouse.parsedCoordinate) {
            this.addWarehouseMarker(warehouse);
          }
        });
      },
      (error) => {
        console.error('Erro ao encontrar armazéns:', error);
      }
    );
  }

  private addWarehouseMarker(warehouse: Warehouse): void {
    if (warehouse.parsedCoordinate) {
      const warehouseIcon = L.divIcon({
        className: 'custom-icon',
        html: `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="red" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home"><path d="M20 20V14H4v6H20zM2 12L12 3l10 9v10H2V12z"></path></svg>`,
        iconSize: [24, 24],
        iconAnchor: [12, 24],
      });

      L.marker(
        [warehouse.parsedCoordinate.lat, warehouse.parsedCoordinate.long],
        { icon: warehouseIcon }
      )
        .addTo(MapaComponent.map)
        .bindPopup(`${warehouse.name}`);
    } else {
      console.error('Cannot add marker, coordinates are invalid:', warehouse);
    }
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
  }

  private updateClickMarker(lat: number, lng: number) {
    const locationIcon = L.divIcon({
      className: 'custom-icon',
      html: `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="blue" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-map-pin"><path d="M21 10c0 4.418-7.032 11-9 11S3 14.418 3 10a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>`,
      iconSize: [24, 24],
      iconAnchor: [12, 24],
    });

    if (this.clickMarker) {
      this.clickMarker.setLatLng([lat, lng]);
    } else {
      this.clickMarker = L.marker([lat, lng], { icon: locationIcon }).addTo(
        MapaComponent.map
      );
    }
    MapaComponent.map.setView([lat, lng], 13);
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

  private updateMarkerPosition(lat: number, lng: number) {
    if (this.clickMarker) {
      this.clickMarker.setLatLng([lat, lng]);
    } else {
      this.clickMarker = L.marker([lat, lng]).addTo(MapaComponent.map);
    }
    MapaComponent.map.setView([lat, lng], 13);
  }
}
