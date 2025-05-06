'use client';

import Link from 'next/link';
import Image from 'next/image';

import { useGetProductDetails } from '@/api/products';
import { Button } from '@/shared/ui/button';
import { Badge } from '@/shared/ui/badge';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/shared/ui/breadcrumb';

export default function ProductDetails() {
  const { data, isLoading } = useGetProductDetails();

  if (isLoading) return <p>Loading...</p>;

  if (!data) return <p>No product found</p>;

  return (
    <>
      <Breadcrumb className="mb-4">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <Link href="/products">
              <BreadcrumbLink>Products</BreadcrumbLink>
            </Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{data.title}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex gap-8 items-start">
        <Image
          src={data.image}
          alt={data.title}
          width={500}
          height={500}
          className="rounded-lg max-w-1/3 max-md:hidden"
        />
        <div className="flex flex-col items-start gap-4">
          <h1 className="text-4xl font-bold mb-4">{data.title}</h1>
          <Image
            src={data.image}
            alt={data.title}
            width={500}
            height={500}
            className="rounded-lg w-full md:hidden"
          />
          <p className="flex items-center gap-2 text-lg">
            Category:
            <Badge className="text-lg px-4 rounded-full">{data.category}</Badge>
          </p>
          <p className="text-lg mb-4">{data.description}</p>
          <p className="text-4xl font-bold">${data.price}</p>
          <Button
            className="w-auto h-auto py-3 sm:px-12 mt-6 text-xl max-md:w-full"
            size="lg"
            variant="default"
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </>
  );
}
