import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import { Client } from '../client.model';
import { IonHeader, IonContent, IonList, IonItem, IonLabel, IonToolbar, IonTitle } from "@ionic/angular/standalone";
import { CommonModule, NgForOf } from '@angular/common';


@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.scss'],
  standalone: true,  
  imports: [IonTitle, IonToolbar, IonLabel, IonItem, IonList, IonContent, IonHeader, CommonModule]
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
    },
    (error) => {
      console.error('Erro ao encontrar clientes:', error);
    })
  }

}
