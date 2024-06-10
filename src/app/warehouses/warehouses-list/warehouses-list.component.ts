import { Component, OnInit } from '@angular/core';
import { Warehouse } from '../warehouse.model';
import {
  IonHeader,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonToolbar,
  IonTitle,
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { WarehouseService } from '../warehouse.service';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-warehouses-list',
  templateUrl: './warehouses-list.component.html',
  styleUrls: ['./warehouses-list.component.scss'],
  standalone: true,
  imports: [
    IonTitle,
    IonToolbar,
    IonLabel,
    IonItem,
    IonList,
    IonContent,
    IonHeader,
    CommonModule,
  ],
})
export class WarehousesListComponent implements OnInit {
  warehouses: Warehouse[] = [];

  constructor(
    private warehouseService: WarehouseService,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
    this.loadWarehouses();
  }

  loadWarehouses() {
    this.warehouseService.getWarehouses().subscribe(
      (data) => {
        this.warehouses = data;
      },
      (error) => {
        console.error('Erro ao encontrar armazéns:', error);
      }
    );
  }
  goBack() {
    this.navCtrl.back();
  }
}
