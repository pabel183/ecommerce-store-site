"use client";

import { MouseEventHandler } from "react";
import { ShoppingCart } from "lucide-react";

import { Product } from "@/types";
import Currency from "./currency";
import Button from "../button";
import useCart from "@/hooks/use-cart";

interface InfoProps {
  data: Product;
}

const Info: React.FC<InfoProps> = ({ data }) => {
  const cart = useCart();

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    cart.addItem(data);
  };

  return (
    <div className="space-y-6">
      {/* Category Tag & Title */}
      <div>
        <span className="text-xs font-semibold text-emerald-600 uppercase tracking-widest bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
          {data?.category?.name}
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
          {data?.name}
        </h1>
      </div>

      {/* Price */}
      <div className="flex items-end justify-between">
        <p className="text-3xl font-extrabold text-slate-900">
          <Currency value={data?.price} />
        </p>
      </div>

      <hr className="border-slate-200/80" />

      {/* Specifications */}
      <div className="flex flex-col gap-y-4">
        {/* Size Badge */}
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-slate-700 w-16">Size:</h3>
          <span className="inline-flex items-center px-3 py-1 rounded-md text-sm font-medium bg-slate-100 text-slate-800 border border-slate-200">
            {data?.size?.name}
          </span>
        </div>

        {/* Color Circle */}
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-slate-700 w-16">Color:</h3>
          <div className="flex items-center gap-x-2">
            <div
              className="h-7 w-7 rounded-full border border-slate-300 shadow-inner"
              style={{ backgroundColor: data?.color?.value }}
            />
            <span className="text-sm font-medium text-slate-600">
              {data?.color?.name}
            </span>
          </div>
        </div>
      </div>

      {/* Add To Cart CTA */}
      <div className="pt-4 flex items-center gap-x-3">
        <Button
          onClick={onAddToCart}
          className="w-full sm:w-auto flex items-center justify-center gap-x-3 rounded-full bg-slate-900 hover:bg-emerald-600 px-8 py-3 text-white transition-all duration-300 shadow-md hover:shadow-emerald-600/20"
        >
          <span className="font-semibold text-sm">Add To Cart</span>
          <ShoppingCart size={18} />
        </Button>
      </div>
    </div>
  );
};

export default Info;


// import { Product } from "@/types";
// import Currency from "./currency";
// import Button from "../button";
// import { ShoppingCart } from "lucide-react";
// interface InfoProps{
//     data:Product,
// }
// const Info:React.FC<InfoProps>=({
//     data,
// })=>{
//     return(
//         <div>
//             <h1 className="text-3xl font-bold text-gray-900">{data?.name}</h1>
//             <div className="mt-3 flex items-end justify-between">
//                 <p className="text-2xl text-gray-900">
//                     <Currency value={data?.price}/> 
//                 </p>
//             </div>
//             <hr className="my-4"/>
//             <div className="flex flex-col gap-y-6">
//                 <div className="flex items-center gap-x-4">
//                     <h3 className="font-semibold text-black">Size:</h3>
//                     <div>
//                         {data?.size?.name}
//                     </div>
//                 </div>
//                 <div className="flex items-center gap-x-4">
//                     <h3 className="font-semibold text-black">Size:</h3>
//                     <div className="h-6 w-6 rounded-full border border-gray-600"
//                     style={{backgroundColor:data?.color?.value}}
//                     />
//                 </div>
//             </div>
//             <div className="mt-10 flex items-center gap-x-3">
//                 <Button className="flex items-center gap-x-2">
//                     Add to Cart
//                     <ShoppingCart />
//                 </Button>
//             </div>
//         </div>
//     );
// }
// export default Info;