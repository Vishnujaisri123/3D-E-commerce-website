export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  imageUrl: string;
  modelUrl?: string;
  colors?: string[];
  sizes?: string[];
  rating?: number;
  inStock: boolean;
  featured?: boolean;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
}