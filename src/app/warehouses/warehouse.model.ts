export interface Warehouse {
  id: number;
  name: string;
  coordinate: {
    id: number;
    name: string;
    long: number;
    lat: number;
    geom: string;
  };
  inactive: boolean;
  parsedCoordinate?: ParsedCoordinates;
}

export interface ParsedCoordinates {
  long: number;
  lat: number;
}
