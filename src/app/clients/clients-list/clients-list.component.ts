import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ClientService, Client } from '../client.service';
import { SharedModule } from 'src/app/SharedModule';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.scss'],
  standalone: true,
  imports: [SharedModule, MatIconModule, FormsModule],
})
export class ClientsListComponent implements OnInit {
  clients: Client[] = [];
  filteredClients: Client[] = [];
  searchQuery: string = '';
  constructor(
    private clientService: ClientService,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
    this.getClients();
  }

  getClients() {
    this.clientService.getAllClients().subscribe((clients) => {
      this.clients = clients;
      this.filteredClients = clients;
    });
  }
  filterClients() {
    this.filteredClients = this.clients.filter((client) => {
      const query = this.searchQuery.toLowerCase();
      return (
        client.name.toLowerCase().includes(query) ||
        client.email.toLowerCase().includes(query) ||
        client.phoneNumber.toLowerCase().includes(query)
      );
    });
  }

  goToCreateClient() {
    this.navCtrl.navigateForward(`/create-client`);
  }
  goToClientDetail(id: number) {
    this.navCtrl.navigateForward(`/clients/${id}`);
  }

  goBack() {
    this.navCtrl.back();
  }
}
