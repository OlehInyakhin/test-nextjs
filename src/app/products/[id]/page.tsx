import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';

import { ShopQueryKeys, getProductDetails } from '@/api/products';
import ProductDetails from '@/shared/components/product-details';

type ProductSingleProps = {
  params: Promise<{ id: string }>;
};

export default async function ProductSingle({ params }: ProductSingleProps) {
  const queryClient = new QueryClient();
  const { id } = await params;

  await queryClient.fetchQuery({
    queryKey: [ShopQueryKeys.useGetProductDetails],
    queryFn: () => getProductDetails(id),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="container mx-auto px-4 py-12">
        <ProductDetails />
      </div>
    </HydrationBoundary>
  );
}
