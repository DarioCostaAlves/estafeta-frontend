import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  imports: [CommonModule, IonicModule],
  exports: [CommonModule, IonicModule],
  providers: [
    provideHttpClient(), 
  ],
})
export class SharedModule {}
