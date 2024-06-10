import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Warehouse } from './warehouse.model';

@Injectable({
  providedIn: 'root',
})
export class WarehouseService {
  private baseUrl = 'http://localhost:5178';

  constructor(private http: HttpClient) {}

  getWarehouses(): Observable<Warehouse[]> {
    return this.http.get<Warehouse[]>(`${this.baseUrl}/Warehouses`).pipe(
      map((warehouses: Warehouse[]) => {
        warehouses.forEach((warehouse: Warehouse) => {
          if (
            warehouse.coordinate &&
            warehouse.coordinate.long !== undefined &&
            warehouse.coordinate.lat !== undefined
          ) {
            warehouse.parsedCoordinate = {
              long: warehouse.coordinate.long,
              lat: warehouse.coordinate.lat,
            };
          } else {
            console.error('Warehouse coordinates are missing:', warehouse);
          }
        });
        return warehouses;
      })
    );
  }

  getWarehouseById(id: number): Observable<Warehouse> {
    return this.http.get<Warehouse>(`${this.baseUrl}/Warehouses/${id}`);
  }

  deleteWarehouse(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/Warehouses/${id}`);
  }
}
