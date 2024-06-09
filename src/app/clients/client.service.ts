import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Client{
  id: number;
  name: string;
  email: string;
  phoneNumber: string;
}

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private baseUrl = 'http://localhost:5178';

  constructor(private http: HttpClient) { }

  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(`${this.baseUrl}/Clients`);
  }
  
  //adicionado para client-detail
  getClientById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  //adicionado para client-detail
  deleteClient(id: number): Observable<any> {
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











