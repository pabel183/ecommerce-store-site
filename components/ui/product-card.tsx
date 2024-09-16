"use client";
import Image from "next/image";
import { Expand, ShoppingCart } from "lucide-react";

import { Product } from "@/types";
import IconButton from "./icon-button";
import Currency from "./currency";

interface ProductCardProps{
    data:Product;
}
const ProductCard:React.FC<ProductCardProps>=({
    data,
})=>{
    return(
        <div className="bg-white group cursor-pointer border rounded-xl p-3 space-y-4">
           
           {/*Image and Action*/}
            <div className="aspect-square rounded-xl bg-gray-100 relative">
                <Image 
                src={data?.images?.[0]?.url}
                fill
                alt="Image"
                className="aspect-square rounded-md object-cover"
                />
                <div className="opacity-0 group-hover:opacity-100 absolute w-full transition px-6 bottom-5">
                    <div className="flex justify-center gap-x-6">
                        <IconButton 
                        onClick={()=>{}}
                        icon={<Expand size={20} className="text-gray-600"/>}
                        className=""
                        />
                        <IconButton 
                        onClick={()=>{}}
                        icon={<ShoppingCart size={20} className="text-gray-600"/>}
                        className=""
                        />
                    </div>
                </div>
            </div>
                {/*Description */}
            <div>
                <p className="font-semibold text-lg">{data?.name}</p>
                <p className="text-sm text-gray-500">{data?.category?.name}</p>
            </div>
            {/**Price */}
            <div className="flex items-center justify-between">
                <Currency value={data?.price}/>
            </div>
        </div>
    );
}
export default ProductCard;