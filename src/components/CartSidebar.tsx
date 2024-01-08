'use client';
import React, {useContext, useMemo} from 'react';
import CartContext, {CartProduct} from "@/context/cartContext";
import SidebarContext from "@/context/sidebarContext";
import Image from "next/image";

const CartSidebar = () => {
    const {products} = useContext(CartContext)
    const {setIsCartSidebarOpen} = useContext(SidebarContext)
    const cartData = useMemo(() => {
        return products.reduce((acc, product) => {
            acc.accumulateProduct[`${product.id}-${product.size}`] = {
                ...product,
                size: product.size,
                count: (acc.accumulateProduct[`${product.id}-${product.size}`]?.count || 0) + 1
            }

            return {...acc, fullPrice: acc.fullPrice + product.price}
        }, {
            accumulateProduct: {} as Record<string, CartProduct & { count: number }>,
            fullPrice: 0
        })
    }, [products])

    return (
        <div className={'absolute top-0 right-0 w-1/3 flex flex-col dark:bg-black bg-white z-30 h-full px-3 py-2 border-l'}>
            <div className={'flex justify-between'}>
               <div className={'flex gap-2 items-center'}>
                   <div onClick={() => setIsCartSidebarOpen(false)} className={'cursor-pointer'}>
                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                           <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                       </svg>
                   </div>
                   <div className={'text-4xl font-bold'}>
                       Your cart
                   </div>
               </div>
                <div>
                    Total: {cartData.fullPrice}$
                </div>
            </div>
            <div className={'flex flex-col gap-2 mt-3 overflow-y-auto'}>
                {
                    Object.values(cartData.accumulateProduct).map((product) => (
                        <div className={'flex justify-between gap-2'} key={`${product.id}-${product.size}`}>
                            <div className={'flex gap-2'}>
                                <div>
                                    <Image width={70} height={70} src={product.thumbnail} alt={product.title}/>
                                </div>
                                <div>
                                    <div>
                                        Name: {product.title}
                                    </div>
                                    <div>
                                        Price: {product.price}$
                                    </div>
                                    {product.size && <div>
                                        Size: {product.size}
                                    </div>}
                                </div>
                            </div>
                            <div>
                                {product.count}
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default CartSidebar;
