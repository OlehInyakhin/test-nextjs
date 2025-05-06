'use client';

import Image from 'next/image';

import { Button } from '@/shared/ui/button';
import { Skeleton } from '@/shared/ui/skeleton';
import { Product } from '@/api/products/types';
import Link from 'next/link';

type ProductCardProps = {
  product?: Product;
};

export default function ProductCard(props: ProductCardProps) {
  const { product } = props;

  if (!product) {
    return (
      <div className="flex flex-col border rounded-lg overflow-hidden bg-gray-50 shadow-lg">
        <div className="bg-white aspect-1/1 overflow-hidden">
          <Skeleton className="w-full h-full rounded-none" />
        </div>
        <div className="p-4 flex flex-col flex-grow gap-2">
          <Skeleton className="w-full h-5 rounded-s" />
          <Skeleton className="w-3/4 h-3 rounded-xs" />
          <Skeleton className="w-3/4 h-3 rounded-xs" />
          <Skeleton className="w-3/4 h-3 rounded-xs mb-2" />
          <Skeleton className="w-1/4 mt-auto h-4 rounded-xs" />
          <Skeleton className="w-full rounded-md h-12" />
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col border rounded-lg overflow-hidden bg-gray-50 shadow-lg">
      <Link className="bg-white aspect-1/1 overflow-hidden" href={`/products/${product.id}`}>
        <Image
          alt={product.title}
          className="w-full h-full object-contain hover:scale-110 transition-transform duration-300"
          height={800}
          src={product.image}
          width={600}
        />
      </Link>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold mb-2">
          <Link
            className="text-gray-800 hover:text-gray-600 transition-colors duration-300"
            href={`/products/${product.id}`}
          >
            {product.title}
          </Link>
        </h3>
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
