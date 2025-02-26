export interface TProductResponseData {
  id: string;
  name: string;
  price: number;
  stock: number;
  description: string;
  image: string | undefined;
  sellerId: string;
  updatedAt: string;
  createdAt: string;
}

export interface TProductResponse {
  data: TProductResponseData[];
  message: string;
}
