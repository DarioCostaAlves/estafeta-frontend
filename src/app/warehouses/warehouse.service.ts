import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Warehouse } from './warehouse.model';
import {
  GraphNodeService,
  ParsedCoordinates,
} from '../graph-nodes/graph-node.service';

@Injectable({
  providedIn: 'root',
})
export class WarehouseService {
  private baseUrl = 'http://localhost:5178';

  constructor(
    private http: HttpClient,
    private graphNodeService: GraphNodeService
  ) {}

  getWarehouses(): Observable<Warehouse[]> {
    return this.http.get<Warehouse[]>(`${this.baseUrl}/Warehouses`).pipe(
      map((warehouses: Warehouse[]) => {
        warehouses.forEach((warehouse: Warehouse) => {
          warehouse.parsedCoordinate = this.graphNodeService.extractCoordinates(
            warehouse.coordinate.geom
          );
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
