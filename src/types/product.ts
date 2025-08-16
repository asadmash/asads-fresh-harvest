export interface Product {
  id: string;
  productName: string;
  description: string;
  price: number;
  images: string[];
  stock: number;
  categoryId: string;
  categoryName?: string;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
  quantity?: number;
}