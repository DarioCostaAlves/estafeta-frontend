import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { Order } from '../order.model';
import { SharedModule } from 'src/app/SharedModule';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss'],
  standalone: true,
  imports: [SharedModule, MatIconModule, FormsModule],
})
export class OrderListComponent implements OnInit {
  orders: Order[] = [];
  filteredOrders: Order[] = [];
  searchQuery: string = '';

  constructor(
    private orderService: OrderService,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
    this.getOrders();
  }

  getOrders() {
    this.orderService.getAllOrders().subscribe((orders) => {
      this.orders = orders;
      this.filteredOrders = orders; 
    });
  }

  filterOrders() {
    const query = this.searchQuery.toLowerCase();
    this.filteredOrders = this.orders.filter((order) => {
      return (
        order.client.name.toLowerCase().includes(query) ||
        order.state.toLowerCase().includes(query)
      );
    });
  }

  goToOrderDetail(id: number) {
    this.navCtrl.navigateForward(`/order-detail/${id}`);
  }

  goBack() {
    this.navCtrl.back();
  }
}
 