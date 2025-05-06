'use client';

import { useGetProducts } from '@/api/products';
import ProductCard from '@/shared/components/product-card';

export default function ProductsList() {
  const { data, isLoading } = useGetProducts();
  const skeletonItems = Array(4).fill(null);

  if (isLoading) return skeletonItems.map((_, index) => <ProductCard key={index} />);

  if (!data?.length) return <p>No products found</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {data?.map(item => <ProductCard key={item.id} product={item} />)}
    </div>
  );
}
