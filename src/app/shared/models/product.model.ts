export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: ProductCategory;
  isAvailable: boolean;
  isFeatured?: boolean;
  tags?: string[];
}

export type ProductCategory =
  | 'cake'
  | 'cupcake'
  | 'cookie'
  | 'macaron'
  | 'bread'
  | 'seasonal';

export interface CartItem {
  product: Product;
  quantity: number;
}
