'use client';

import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';

import { BackendError } from '@/@types';
import { getProducts, getProductDetails } from '@/api/products/api';
import { ShopQueryKeys } from '@/api/products/query-keys';
import { GetProductsResponse, Product } from '@/api/products/types';

export const useGetProducts = () =>
  useQuery<GetProductsResponse, BackendError>({
    queryKey: [ShopQueryKeys.useGetProducts],
    queryFn: getProducts,
  });

export const useGetProductDetails = () => {
  const { id } = useParams<{ id: string }>();

  return useQuery<Product, BackendError>({
    queryKey: [ShopQueryKeys.useGetProductDetails],
    queryFn: () => getProductDetails(id),
  });
};
