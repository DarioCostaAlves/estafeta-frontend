export interface Coordinate {
  id: number;
  name: string;
  long: number;
  lat: number;
}

export interface Store {
  id: number;
  name: string;
  coordinate: Coordinate;
  inactive: boolean;
}

export interface Client {
  id: number;
  name: string;
  email: string;
  phoneNumber: string;
}

export interface ProductDetail {
  id: number;
  name: string;
  inactive: boolean;
}

export interface Warehouse {
  id: number;
  name: string;
  coordinate: Coordinate;
  inactive: boolean;
}

export interface OrderProduct {
  id: number;
  warehouse: Warehouse;
  product: ProductDetail;
  quantity: number;
}

export interface Order {
  id: number;
  store: Store;
  client: Client;
  type: string;
  state: string;
  products: OrderProduct[];
}
