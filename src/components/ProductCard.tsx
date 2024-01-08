import React, {FC} from 'react';
import Image from "next/image";

interface Props {
    name: string
    price: number
    image: string
}
const ProductCard: FC<Props> = ({name, price, image}) => {
    return (
        <div>
            <div className={'relative w-full h-96'}>
                <Image fill src={image} alt={name} className={'object-cover'}/>
            </div>
            <div className={'flex justify-between py-1.5'}>
                <div>{name}</div>
                <div>{price}$</div>
            </div>
        </div>
    );
};

export default ProductCard;
