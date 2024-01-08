'use client'
import React, {FC, ReactNode, useState} from 'react';
import CartContext, {CartProduct} from "@/context/cartContext";

const CartProvider: FC<{children: ReactNode}> = ({children}) => {
    const [products, setProducts] = useState<CartProduct[]>([])

    return (
        <CartContext.Provider value={{products, setProducts}}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
