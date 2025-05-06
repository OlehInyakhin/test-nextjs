import api from '@/lib/axios';
import { GetProductsResponse, Product } from '@/api/products/types';

export const getProducts = async () => {
  const { data } = await api.get<GetProductsResponse>('/products');
  return data;
};

export const getProductDetails = async (id: string) => {
  const { data } = await api.get<Product>(`/products/${id}`);
  return data;
};
