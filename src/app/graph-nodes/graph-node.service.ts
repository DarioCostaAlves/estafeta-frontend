import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GraphNodeService {
  extractCoordinates(geom: string): ParsedCoordinates {
    if (!geom) {
      return { long: 0, lat: 0 };
    }

    const coordinates = geom.match(/[-.\d]+/g);
    if (coordinates && coordinates.length === 2) {
      const parsedCoordinates = {
        long: parseFloat(coordinates[0]),
        lat: parseFloat(coordinates[1]),
      };
      return parsedCoordinates;
    }
    return { long: 0, lat: 0 };
  }
}

export interface ParsedCoordinates {
  long: number;
  lat: number;
}
