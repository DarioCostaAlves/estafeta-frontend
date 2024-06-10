import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientService } from '../client.service';
import { NavController } from '@ionic/angular';
import { SharedModule } from 'src/app/SharedModule';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.scss'],
  standalone: true,
  imports: [SharedModule, MatIconModule, FormsModule, ReactiveFormsModule],
})
export class CreateClientComponent {
  clientForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private clientService: ClientService,
    private navCtrl: NavController
  ) {
    this.clientForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
    });
  }

  createClient() {
    if (this.clientForm.valid) {
      this.clientService.createClient(this.clientForm.value).subscribe(() => {
        this.navCtrl.navigateBack('/clients');
      });
    }
  }

  goBack() {
    this.navCtrl.back();
  }
}