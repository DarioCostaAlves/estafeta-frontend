import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GraphNodeService {

  constructor() { }

  extractCoordinates(geom: string): ParsedCoordinates {
    const parsedGeom: GeoJSON.Geometry = JSON.parse(geom);
    if (parsedGeom.type === 'Point' && Array.isArray(parsedGeom.coordinates) && parsedGeom.coordinates.length === 2) {
      const longitude = parsedGeom.coordinates[0];
      const latitude = parsedGeom.coordinates[1];
      return { latitude, longitude };
    } else {
      console.error('Formato geom inválido:', parsedGeom);
      return { latitude: 0, longitude: 0 };
    }
  }
  
}

export interface ParsedCoordinates {
  latitude: number;
  longitude: number;
}