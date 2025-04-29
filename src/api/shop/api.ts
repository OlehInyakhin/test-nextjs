import api from '@/lib/axios';
import { GetProductsResponse } from '@/api/shop/types';

export const getProducts = async () => {
  const { data } = await api.get<GetProductsResponse>('/products');

  return data;
};
