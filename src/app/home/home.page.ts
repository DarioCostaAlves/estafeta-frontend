import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonList, IonItem, IonIcon, IonLabel } from '@ionic/angular/standalone';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonLabel, IonIcon, IonItem, IonList, IonCardContent, IonCardTitle, IonCardHeader, IonCard, IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage {
  constructor(private navCtrl: NavController) { }

  navigateTo(page: string) {
    this.navCtrl.navigateForward(`/${page}`);
  }
}
