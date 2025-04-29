import { useQuery } from '@tanstack/react-query';

import { BackendError } from '@/@types';
import { getProducts } from '@/api/shop/api';
import { ShopQueryKeys } from '@/api/shop/query-keys';
import { GetProductsResponse } from '@/api/shop/types';

export const useGetProducts = () =>
  useQuery<GetProductsResponse, BackendError>({
    queryKey: [ShopQueryKeys.useGetProducts],
    queryFn: getProducts,
    refetchOnWindowFocus: true,
  });
