import { Component, OnInit } from '@angular/core';
import { Client, ClientService } from '../client.service';
import { NavController, IonHeader, IonContent, IonList, IonItem, IonLabel, IonToolbar, IonTitle } from "@ionic/angular/standalone";


@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.scss'],
  standalone: true,  
  imports: [IonTitle, IonToolbar, IonLabel, IonItem, IonList, IonContent, IonHeader]
})
export class ClientsListComponent  implements OnInit {

  clients: Client[] = [];

  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.loadClients();
  }

  loadClients() {
    this.clientService.getClients().subscribe(data => {
      this.clients = data;
    })
  }

}
