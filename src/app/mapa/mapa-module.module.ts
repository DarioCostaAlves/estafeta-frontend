import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapaComponent } from './mapa.component';



@NgModule({
  declarations: [MapaModuleModule.mapa],
  imports: [
    CommonModule
  ],
  exports:[MapaModuleModule.mapa]
})
export class MapaModuleModule {
  static mapa = MapaComponent;
 }
