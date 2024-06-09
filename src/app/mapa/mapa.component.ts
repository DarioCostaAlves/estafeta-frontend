import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss'],
})
export class MapaComponent  implements AfterViewInit {

  private static map: L.Map;

  constructor() { }

  ngAfterViewInit(): void {
    this.initMapDefaultLeaflet();
    MapaComponent.invalidadeSize();
  }

  private initMapDefaultLeaflet(): void{
    MapaComponent.map = L.map('map').setView(
      [41.233865, -8.622372], //Fórum da Maia
      13
    );
    
    const tiles = L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        maxZoom: 19,
        minZoom:3,
        attribution: '&copy;'
      }
    );
    tiles.addTo(MapaComponent.map);
  }

  static invalidadeSize(){
    setTimeout(() => {
      MapaComponent.map.invalidateSize();
    }, 500);
  };

  /*addMarker(position:, title: , iconUrl: string =''){
    const marker = new L.Marker({
      position: '',
      map: this.map,
      title: title,
      icon: iconUrl
    });
    return marker
  }*/

}
