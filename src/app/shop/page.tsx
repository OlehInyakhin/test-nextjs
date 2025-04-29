import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';

import { ShopQueryKeys, getProducts } from '@/api/shop';
import ProductsList from '@/shared/components/products-list';

export default async function Shop() {
  const queryClient = new QueryClient();

  await queryClient.fetchQuery({
    queryKey: [ShopQueryKeys.useGetProducts],
    queryFn: getProducts,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6">Shop</h1>
        <p className="text-lg mb-8">
          This is a dummy shop page. The contact page has been fully implemented according to the
          design.
        </p>
        <ProductsList />
      </div>
    </HydrationBoundary>
  );
}
