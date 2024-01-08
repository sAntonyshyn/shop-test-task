import React from 'react';
import ProductCard from "@/components/ProductCard";
import Link from "next/link";
import { IProduct } from "@/types/IProduct";

const Page = async () => {
  const products = await fetch ('https://dummyjson.com/products')
  const productsData = await products.json()

  return (
    <div className={'container mx-auto'}>
      <div className="grid grid-cols-4 gap-4">
        {productsData?.products?.map((product: IProduct) => (
          <Link key={product.id} href={`/products/${product.id}`}>
            <ProductCard image={product.thumbnail} price={product.price} name={product.title}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Page;
