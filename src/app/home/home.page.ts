import { SharedModule } from 'src/app/shared.module';
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { MapaModuleModule } from '../mapa/mapa-module.module';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [SharedModule, MapaModuleModule],
})
export class HomePage {
  constructor(private navCtrl: NavController) {}

  navigateTo(page: string) {
    this.navCtrl.navigateForward(`/${page}`);
  }
}
