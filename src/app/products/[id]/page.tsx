import React from 'react';
import Image from "next/image";
import AddToCartBlock from "@/components/AddToCartBlock";
import {IProduct} from "@/types/IProduct";

const Product = async ({params: {id}}: any) => {
    const product = await fetch(`https://dummyjson.com/products/${id}`)
    const productData: IProduct = await product.json()

    return (
        <div className={'container mx-auto h-screen'}>
            <div className={'flex gap-5'}>
                <div className={'relative w-4/12 h-[600px]'}>
                    <Image fill src={productData.thumbnail} alt={productData.title} className={'object-cover'}/>
                </div>
                <div className={'w-8/12'}>
                    <div className={'text-4xl font-bold py-2'}>{productData.title}</div>
                    <hr/>
                    <div className={'text-2xl py-2'}>Price: {productData.price}$</div>
                    <hr/>
                    <div>
                        <div className={'py-2'}>Brand: {productData.brand}</div>
                        <div className={'py-2'}>Category: {productData.category}</div>
                        <div className={'py-2'}>Rating: {productData.rating}</div>
                    </div>
                    <hr/>
                    <div className={'w-6/12 text-sm py-2'}>{productData.description}</div>
                    <hr/>
                    <AddToCartBlock product={productData}/>
                </div>
            </div>
        </div>
    );
};

export default Product;
