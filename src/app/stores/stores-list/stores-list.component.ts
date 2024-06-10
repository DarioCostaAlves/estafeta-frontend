import { Component, OnInit } from '@angular/core';
import { StoreService } from '../store.service';
import { Store } from '../store.model';
import { IonHeader, IonContent, IonList, IonItem, IonLabel, IonToolbar, IonTitle } from "@ionic/angular/standalone";
import { CommonModule, NgForOf } from '@angular/common';


@Component({
  selector: 'app-stores-list',
  templateUrl: './stores-list.component.html',
  styleUrls: ['./stores-list.component.scss'],
  standalone: true,  
  imports: [IonTitle, IonToolbar, IonLabel, IonItem, IonList, IonContent, IonHeader, CommonModule]
})
export class StoresListComponent  implements OnInit {

  stores: Store[] = [];

  constructor(private storeService: StoreService) { }

  ngOnInit() {
    this.loadStores();
  }

  loadStores() {
    this.storeService.getStores().subscribe(data => {
      this.stores = data;
    },
    (error) => {
      console.error('Erro ao encontrar lojas:', error);
    })
  }

}
