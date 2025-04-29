'use client';

import Image from 'next/image';

import { Button } from '@/shared/ui/button';
import { Skeleton } from '@/shared/ui/skeleton';
import { Product } from '@/api/shop/types';

type ProductCardProps = {
  product?: Product;
};

export default function ProductCard(props: ProductCardProps) {
  const { product } = props;

  if (!product) {
    return (
      <div className="flex flex-col border rounded-lg overflow-hidden bg-gray-50 shadow-lg">
        <div className="bg-white aspect-1/1 overflow-hidden">
          <Skeleton className="w-full h-full" />
        </div>
        <div className="p-4 flex flex-col flex-grow">
          <Skeleton className="w-full h-3" />
          <h3 className="text-lg font-semibold mb-2">Product title</h3>
          <p className="text-sm line-clamp-3 mb-4">description</p>
          <Skeleton className="w-3/4 h-2" />
          <Skeleton className="w-3/4 h-2" />
          <Skeleton className="w-3/4 h-2" />
          <p className="text-lg font-bold text-gray-600 mt-auto">price $</p>
          <Skeleton className="w-1/4 h-2" />
          <Button
            className="w-full h-auto py-3 mt-4 text-lg cursor-pointer"
            size="lg"
            variant="default"
          >
            Add to Cart
          </Button>
          <Skeleton className="w-full rounded-lg h-8" />
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col border rounded-lg overflow-hidden bg-gray-50 shadow-lg">
      <div className="bg-white aspect-1/1 overflow-hidden">
        <Image
          alt={product.title}
          className="w-full h-full object-contain hover:scale-110 transition-transform duration-300"
          height={800}
          src={product.image}
          width={600}
        />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold mb-2">Product {product.title}</h3>
        <p className="text-sm line-clamp-3 mb-4">{product.description}</p>
        <p className="text-lg font-bold text-gray-600 mt-auto">{`${product.price} $`}</p>
        <Button
          className="w-full h-auto py-3 mt-4 text-lg cursor-pointer"
          size="lg"
          variant="default"
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
}
