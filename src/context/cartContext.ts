import {SetStateAction, createContext, Dispatch} from "react";
import {IProduct} from "@/types/IProduct";

export interface CartProduct extends IProduct {
    size: string
}

const cartContext = createContext<{
    products: CartProduct[],
    setProducts: Dispatch<SetStateAction<CartProduct[]>>
}>({
    products: [],
    setProducts: () => {
    },
})

export default cartContext
