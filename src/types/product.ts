export interface Product {
  id: string;
  productName: string;
  description: string;
  price: number;
  images: string[];
  stock: number;
  categoryId: string;
  categoryName?: string;
  rating: number;
  reviews: string[];
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
  quantity?: number;
}
