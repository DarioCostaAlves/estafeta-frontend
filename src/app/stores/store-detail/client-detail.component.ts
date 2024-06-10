import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ClientService } from '../store.service'; // Ajuste o caminho conforme necessário
import { SharedModule } from 'src/app/shared.module';
import { IonCardHeader } from "@ionic/angular/standalone";

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.scss'],
  standalone: true,
  imports: [
    SharedModule
  ]
})
export class ClientDetailComponent implements OnInit {
  client: any;

  constructor(
    private route: ActivatedRoute,
    private clientService: ClientService,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
    const clientId = this.route.snapshot.paramMap.get('id');
    // this.clientService.getClientById(+clientId).subscribe(client => {
    //   this.client = client;
    // });
  }

  // onDeleteClient() {
  //   const clientId = this.route.snapshot.paramMap.get('id');
  //   this.clientService.deleteClient(+clientId).subscribe(() => {
  //     this.navCtrl.navigateBack('/clients');
  //   });
  // }
}