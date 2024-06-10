import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapaComponent } from './mapa.component';
import { SharedModule } from '../shared.module';



@NgModule({
  declarations: [MapaModuleModule.mapa],
  imports: [
    CommonModule, SharedModule
  ],
  exports:[MapaModuleModule.mapa]
})
export class MapaModuleModule {
  static mapa = MapaComponent;
 }
