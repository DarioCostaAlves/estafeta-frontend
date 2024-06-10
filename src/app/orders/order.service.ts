import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from './order.model';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private apiUrl = 'http://localhost:5178';

  constructor(private http: HttpClient) {}

  getAllOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.apiUrl}/Orders`);
  }

  getOrderById(id: number): Observable<Order> {
    return this.http.get<Order>(`${this.apiUrl}/Orders/${id}`);
  }

  createOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(`${this.apiUrl}/Orders`, order);
  }

  updateOrder(id: number, order: Order): Observable<Order> {
    return this.http.put<Order>(`${this.apiUrl}/Orders/${id}`, order);
  }

  deleteOrder(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/Orders/${id}`);
  }
}
