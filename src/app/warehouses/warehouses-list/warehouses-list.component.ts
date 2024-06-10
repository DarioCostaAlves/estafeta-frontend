import { Component, OnInit } from '@angular/core';
import { Warehouse } from '../warehouse.model';
import { IonHeader, IonContent, IonList, IonItem, IonLabel, IonToolbar, IonTitle } from "@ionic/angular/standalone";
import { CommonModule, NgForOf } from '@angular/common';
import { WarehouseService } from '../warehouse.service';


@Component({
  selector: 'app-warehouses-list',
  templateUrl: './warehouses-list.component.html',
  styleUrls: ['./warehouses-list.component.scss'],
  standalone: true,  
  imports: [IonTitle, IonToolbar, IonLabel, IonItem, IonList, IonContent, IonHeader, CommonModule]
})
export class WarehousesListComponent  implements OnInit {

  warehouses: Warehouse[] = [];

  constructor(private warehouseService: WarehouseService) { }

  ngOnInit() {
    this.loadWarehouses();
  }

  loadWarehouses() {
    this.warehouseService.getWarehouses().subscribe(data => {
      this.warehouses = data;
    },
    (error) => {
      console.error('Erro ao encontrar lojas:', error);
    })
  }

}
