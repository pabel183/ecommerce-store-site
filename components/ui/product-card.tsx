"use client";
import Image from "next/image";
import { Expand, ShoppingCart } from "lucide-react";
import { MouseEventHandler } from "react";

import { Product } from "@/types";
import IconButton from "./icon-button";
import Currency from "./currency";
import { useRouter } from "next/navigation";
import usePreviewModal from "@/hooks/use-preview-modal";

interface ProductCardProps{
    data:Product;
}
const ProductCard:React.FC<ProductCardProps>=({
    data,
})=>{
    const router=useRouter();
    const previewModal=usePreviewModal();
    const handleClick=()=>{
        router.push(`/product/${data?.id}`);
    }
    const onPreview:MouseEventHandler<HTMLButtonElement>=(event)=>{
        event.stopPropagation();
        previewModal.onOpen(data);
    }
    return(
        <div onClick={handleClick} className="bg-white group cursor-pointer border rounded-xl p-3 space-y-4">
           
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
                        onClick={onPreview}
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