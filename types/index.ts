export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  inStock: boolean;
  featured?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  customerName: string;
  customerEmail: string;
  shippingAddress: string;
  status: 'pending' | 'paid' | 'shipped' | 'completed';
  venmoUsername?: string;
  createdAt: Date;
}

export type ProductCategory = 
  | 'Plants & Seeds'
  | 'Herbal Remedies'
  | 'Natural Products'
  | 'Spring Water'
  | 'Gifts';
