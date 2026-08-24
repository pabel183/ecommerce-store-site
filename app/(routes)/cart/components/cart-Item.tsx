"use client";

import Image from "next/image";
import { X } from "lucide-react";

import Currency from "@/components/ui/currency";
import IconButton from "@/components/ui/icon-button";
import useCart from "@/hooks/use-cart";
import { Product } from "@/types";

interface CartItemProps {
  data: Product;
}

const CartItem: React.FC<CartItemProps> = ({ data }) => {
  const cart = useCart();

  const onRemove = () => {
    cart.removeItem(data.id);
  };

  return (
    <li className="flex p-4 sm:p-6 bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:border-slate-300 transition-all duration-200">
      {/* Product Image */}
      <div className="relative h-24 w-24 sm:h-32 sm:w-32 rounded-xl overflow-hidden bg-slate-100 shrink-0 border border-slate-100">
        <Image
          fill
          alt={data.name}
          src={data.images[0]?.url}
          className="object-cover object-center"
        />
      </div>

      {/* Product Details */}
      <div className="relative ml-4 sm:ml-6 flex flex-1 flex-col justify-between">
        {/* Delete Button */}
        <div className="absolute z-10 right-0 top-0">
          <IconButton
            onClick={onRemove}
            icon={
              <X
                size={16}
                className="text-slate-500 group-hover:text-white transition-colors"
              />
            }
            className="bg-slate-100 hover:bg-rose-500 border border-slate-200 hover:border-rose-500 group transition-all duration-200"
          />
        </div>

        <div className="pr-10 sm:pr-0">
          <p className="text-xs font-semibold text-emerald-600 uppercase tracking-wider mb-1">
            {data.category?.name}
          </p>
          <h3 className="text-base sm:text-lg font-bold text-slate-900 line-clamp-1">
            {data.name}
          </h3>

          {/* Size & Color Tags */}
          <div className="mt-2 flex items-center gap-x-2 text-xs font-medium">
            <span className="px-2.5 py-1 bg-slate-100 text-slate-700 rounded-md border border-slate-200">
              Size: {data.size?.name}
            </span>
            <div className="flex items-center gap-x-1.5 px-2.5 py-1 bg-slate-100 text-slate-700 rounded-md border border-slate-200">
              <span>Color:</span>
              <div
                className="h-3 w-3 rounded-full border border-slate-300"
                style={{ backgroundColor: data.color?.value }}
              />
              <span>{data.color?.name}</span>
            </div>
          </div>
        </div>

        {/* Item Price */}
        <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between">
          <div className="font-extrabold text-slate-900 text-base">
            <Currency value={data.price} />
          </div>
        </div>
      </div>
    </li>
  );
};

export default CartItem;


// "use client";

// import Currency from "@/components/ui/currency";
// import IconButton from "@/components/ui/icon-button";
// import useCart from "@/hooks/use-cart";
// import { Product } from "@/types";
// import { X } from "lucide-react";
// import Image from "next/image";

// interface CartItemProps{
//     data:Product;
// }
// const CartItem:React.FC<CartItemProps>=({
//     data,
// })=>{
//     const cart=useCart();
//     const onRemove=()=>{
//         cart.removeItem(data.id);
//     }
//     return(
//         <li className="flex py-6 border-b">
//             <div className="relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48">
//                 <Image 
//                 fill
//                 alt=""
//                 src={data.images[0].url}
//                 className="object-cover object-center"
//                 />
//             </div>
//             <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
//                 <div className="absolute z-10 right-0 top-0">
//                     <IconButton onClick={onRemove} icon={<X size={15}/>}/>
//                 </div>
//                 <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
//                     <div className="flex justify-between">
//                         <p className="text-lg font-semibold text-black">
//                             {data.name}
//                         </p>
//                     </div>
//                     <div className="mt-1 flex text-sm">
//                         <p className="text-gray-500">{data.color.name}</p>
//                         <p className="text-gray-500 ml-4 border-l border-x-gray-200 pl-4">{data.size.name}</p>
//                     </div>
//                     <Currency value={data.price}/>
//                 </div>
//             </div>
//         </li>
//     );
// }
// export default CartItem;