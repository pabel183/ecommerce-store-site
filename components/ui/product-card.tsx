"use client";

import Image from "next/image";
import { Expand, ShoppingCart } from "lucide-react";
import { MouseEventHandler } from "react";
import { useRouter } from "next/navigation";

import { Product } from "@/types";
import IconButton from "./icon-button";
import Currency from "./currency";
import usePreviewModal from "@/hooks/use-preview-modal";
import useCart from "@/hooks/use-cart";

interface ProductCardProps {
  data: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const router = useRouter();
  const previewModal = usePreviewModal();
  const cart = useCart();

  const handleClick = () => {
    router.push(`/product/${data?.id}`);
  };

  const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    previewModal.onOpen(data);
  };

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    cart.addItem(data);
  };

  return (
    <div
      onClick={handleClick}
      className="bg-white group cursor-pointer border border-slate-200/80 hover:border-emerald-500/50 rounded-2xl p-3 space-y-4 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
    >
      {/* Image Container & Action Buttons */}
      <div className="aspect-square rounded-xl bg-slate-100 relative overflow-hidden">
        <Image
          src={data?.images?.[0]?.url}
          fill
          alt={data?.name || "Product image"}
          className="aspect-square rounded-xl object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="opacity-0 group-hover:opacity-100 absolute w-full transition-opacity duration-300 px-6 bottom-4">
          <div className="flex justify-center gap-x-4">
            <IconButton
              onClick={onPreview}
              icon={<Expand size={18} className="text-slate-700 group-hover/btn:text-white" />}
              className="bg-white/90 hover:bg-emerald-600 border border-slate-200 shadow-md transition-colors duration-200"
            />
            <IconButton
              onClick={onAddToCart}
              icon={<ShoppingCart size={18} className="text-slate-700 group-hover/btn:text-white" />}
              className="bg-white/90 hover:bg-emerald-600 border border-slate-200 shadow-md transition-colors duration-200"
            />
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="space-y-1">
        <p className="text-xs font-semibold uppercase tracking-wider text-emerald-600">
          {data?.category?.name}
        </p>
        <p className="font-bold text-base text-slate-900 group-hover:text-emerald-600 transition-colors line-clamp-1">
          {data?.name}
        </p>
      </div>

      {/* Price */}
      <div className="flex items-center justify-between pt-1 border-t border-slate-100">
        <div className="font-extrabold text-slate-900 text-lg">
          <Currency value={data?.price} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

// "use client";
// import Image from "next/image";
// import { Expand, ShoppingCart } from "lucide-react";
// import { MouseEventHandler } from "react";

// import { Product } from "@/types";
// import IconButton from "./icon-button";
// import Currency from "./currency";
// import { useRouter } from "next/navigation";
// import usePreviewModal from "@/hooks/use-preview-modal";
// import useCart from "@/hooks/use-cart";

// interface ProductCardProps{
//     data:Product;
// }
// const ProductCard:React.FC<ProductCardProps>=({
//     data,
// })=>{
//     const router=useRouter();
//     const previewModal=usePreviewModal();
//     const cart=useCart();

//     const handleClick=()=>{
//         router.push(`/product/${data?.id}`);
//     }
//     const onPreview:MouseEventHandler<HTMLButtonElement>=(event)=>{
//         event.stopPropagation();
//         previewModal.onOpen(data);
//     }
//     const onAddToCard: MouseEventHandler<HTMLButtonElement>=(event)=>{
//         event.stopPropagation();
//         cart.addItem(data);
//     }
//     return(
//         <div onClick={handleClick} className="bg-white group cursor-pointer border rounded-xl p-3 space-y-4">
           
//            {/*Image and Action*/}
//             <div className="aspect-square rounded-xl bg-gray-100 relative">
//                 <Image 
//                 src={data?.images?.[0]?.url}
//                 fill
//                 alt="Image"
//                 className="aspect-square rounded-md object-cover"
//                 />
//                 <div className="opacity-0 group-hover:opacity-100 absolute w-full transition px-6 bottom-5">
//                     <div className="flex justify-center gap-x-6">
//                         <IconButton 
//                         onClick={onPreview}
//                         icon={<Expand size={20} className="text-gray-600"/>}
//                         className=""
//                         />
//                         <IconButton 
//                         onClick={onAddToCard}
//                         icon={<ShoppingCart size={20} className="text-gray-600"/>}
//                         className=""
//                         />
//                     </div>
//                 </div>
//             </div>
//                 {/*Description */}
//             <div>
//                 <p className="font-semibold text-lg">{data?.name}</p>
//                 <p className="text-sm text-gray-500">{data?.category?.name}</p>
//             </div>
//             {/**Price */}
//             <div className="flex items-center justify-between">
//                 <Currency value={data?.price}/>
//             </div>
//         </div>
//     );
// }
// export default ProductCard;