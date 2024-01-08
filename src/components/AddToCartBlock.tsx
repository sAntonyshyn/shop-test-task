'use client'
import React, {FC, useCallback, useContext, useState} from 'react';
import CartContext, { CartProduct } from "@/context/cartContext";
import {IProduct} from "@/types/IProduct";
import { enqueueSnackbar } from 'notistack';

const AddToCartBlock: FC<{product: IProduct}> = ({product}) => {
    const [selectedSize, setSelectedSize] = useState('xs');
    const {setProducts} = useContext(CartContext)

    const addToCart = useCallback(() => {
        setProducts((prev: CartProduct[]) => [...prev, {
            ...product,
            size: selectedSize
        }])
        enqueueSnackbar('Product added to cart', {variant: 'success'})
    }, [selectedSize, product, setProducts])

    return (
        <div>
            <ul className="items-center w-full text-sm font-medium text-gray-900 gap-2 sm:flex dark:text-white my-2">
                {['xs', 's', 'm', 'l', 'xl'].map((size) => (
                    <li onClick={() => setSelectedSize(size)} key={size} className="cursor-pointer flex items-center px-4 border border-black dark:border-white">
                        <input checked={size === selectedSize} id={`size-${size}`} type="radio" value={size} name="size" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label htmlFor={`size-${size}`} className="w-full uppercase py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{size}</label>
                    </li>
                ))}
            </ul>
            <div className={'py-2'}>
                <button onClick={addToCart} className={'border border-black dark:border-white px-4 py-2'}>
                    Add to cart
                </button>
            </div>
        </div>
    );
};

export default AddToCartBlock;
