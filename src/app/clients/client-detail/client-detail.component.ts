import { MatIconModule } from '@angular/material/icon';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService, Client } from '../client.service';
import { SharedModule } from 'src/app/SharedModule';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.scss'],
  standalone: true,
  imports: [SharedModule, ReactiveFormsModule, MatIconModule],
})
export class ClientDetailComponent implements OnInit {
  client?: Client;
  clientForm: FormGroup;
  isEditMode: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private clientService: ClientService,
    private router: Router,
    private alertController: AlertController,
    private fb: FormBuilder,
    private navCtrl: NavController
  ) {
    this.clientForm = this.fb.group({
      id: [{ value: '', disabled: true }],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.getClient();
  }

  getClient() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.clientService
      .getClientById(id)
      .subscribe((client) => (this.client = client));
  }

  toggleEditMode() {
    this.isEditMode = !this.isEditMode;
  }

  saveClient() {
    if (this.clientForm.valid && this.client) {
      const updatedClient = { ...this.clientForm.value, id: this.client.id };
      this.clientService
        .updateClient(this.client.id, updatedClient)
        .subscribe(() => {
          this.isEditMode = false;
          this.getClient();
        });
    }
  }

  async deleteClient() {
    const alert = await this.alertController.create({
      header: 'Confirm',
      message: 'Are you sure you want to delete this client?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Delete',
          handler: () => {
            if (this.client) {
              this.clientService.deleteClient(this.client.id).subscribe(
                () => {
                  console.log('Client deleted successfully');
                  this.router.navigate(['/clients']).then(() => {
                    window.location.reload();
                  });
                },
                (error) => {
                  console.error('Error deleting client:', error);
                }
              );
            }
          },
        },
      ],
    });

    await alert.present();
  }

  goBack() {
    this.navCtrl.back();
  }
}
