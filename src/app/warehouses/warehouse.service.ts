import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Warehouse } from './warehouse.model';
import { GraphNodeService, ParsedCoordinates } from '../graph-nodes/graph-node.service';

@Injectable({
  providedIn: 'root'
})
export class WarehouseService {

  private baseUrl = 'http://localhost:5178';

  constructor(private http: HttpClient, private graphNodeService: GraphNodeService) { }

  getWarehouses(): Observable<Warehouse[]> {
    return this.http.get<Warehouse[]>(`${this.baseUrl}/Warehouses`).pipe(
      map((warehouses: Warehouse[]) => {
        warehouses.forEach((warehouse: Warehouse) => {
          warehouse.parsedCoordinate = this.graphNodeService.extractCoordinates(warehouse.coordinate.geom);
        });
        return warehouses;
      })
    );
  }
  
  //adicionado para warehouse-detail
  getWarehouseById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  //adicionado para warehouse-detail
  deleteWarehouse(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}




//Remover//
/*deleteClient_REStAPI(idCliente: number): Observable<Client> {
  return this.httpCliente
  .delete<Client>(`${this.baseUrl}/clients/${idClient}/')
  .pipe(
    tap((_) => console.log(`removeu`)),
    catchError(this.handleError<Client>(`Apagar Client ${idClient}`))
  );
}*/



/*onDeleteClient(){
  this.alertCtrl
  .create({
    header: 'Confirmação',
    message: 'Deseja eliminar este registo de Cliente?',
    buttons: [
      {text: 'Cancelar', role: 'cancel'},
      {text: 'Eliminar',
        handle: () => {
          this.ClientService.deleteClient_REStAPI(this.loadedClient.id).
          subscribe(_ => {
            this.zone.run(() => this.router.navigate(['/clients']));
          })
        },
      },
    ],
  })
  .then((alert) => alert.present());
}*/











