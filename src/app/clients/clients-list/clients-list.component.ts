import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ClientService, Client } from '../client.service';
import { SharedModule } from 'src/app/SharedModule';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.scss'],
  standalone: true,
  imports: [SharedModule, MatIconModule],
})
export class ClientsListComponent implements OnInit {
  clients: Client[] = [];

  constructor(
    private clientService: ClientService,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
    this.getClients();
  }

  getClients() {
    this.clientService
      .getAllClients()
      .subscribe((clients) => (this.clients = clients));
  }

  goToClientDetail(id: number) {
    this.navCtrl.navigateForward(`/clients/${id}`);
  }

  goBack() {
    this.navCtrl.back(); 
  }
}
