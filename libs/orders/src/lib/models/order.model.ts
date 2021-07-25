import { OrderItem } from './order-item.model';
import { User } from '@e-commerce/users';

export interface Order {
  id?: any;
  orderItems: OrderItem[];
  shippingAddress1: string;
  shippingAddress2: string;
  city: string;
  zip: string;
  country: string;
  phone: string;
  status: string;
  totalPrice?: number;
  user: any;
  dateOrdered: string;
}
