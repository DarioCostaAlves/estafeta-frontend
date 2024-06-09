import { Component, OnInit } from '@angular/core';
import {IonButton} from "@ionic/angular/standalone";

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.scss'],
  standalone: true,  
  imports:[IonButton]
})
export class ClientDetailComponent  implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('ngOnInit has been called');
  }

}
