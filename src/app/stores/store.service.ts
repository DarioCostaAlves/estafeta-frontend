import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Store } from './store.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private baseUrl = 'http://localhost:5178';

  constructor(private http: HttpClient) { }

  getStores(): Observable<Store[]> {
    return this.http.get<Store[]>(`${this.baseUrl}/Stores`);
  }
  
  //adicionado para store-detail
  getStoreById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  //adicionado para store-detail
  deleteStore(id: number): Observable<any> {
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











