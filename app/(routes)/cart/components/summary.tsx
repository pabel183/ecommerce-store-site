"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";
import { ShieldCheck, ArrowRight } from "lucide-react";

import Button from "@/components/button";
import Currency from "@/components/ui/currency";
import useCart from "@/hooks/use-cart";
import { STORE_API_URL } from "@/lib/api-url";

const Summary = () => {
  const searchParams = useSearchParams();
  const items = useCart((state) => state.items);
  const removeAll = useCart((state) => state.removeAll);

  useEffect(() => {
    if (searchParams.get("success")) {
      toast.success("Payment completed successfully!");
      removeAll();
    }
    if (searchParams.get("canceled")) {
      toast.error("Checkout process was canceled.");
    }
  }, [searchParams, removeAll]);

  const totalPrice = items.reduce((total, item) => {
    return total + Number(item.price);
  }, 0);

  const onCheckOut = async () => {
    const response = await axios.post(`${STORE_API_URL}/checkout`, {
      productIds: items.map((item) => item.id),
    });
    window.location = response.data.url;
  };

  return (
    <div className="mt-10 rounded-3xl bg-slate-900 text-white px-6 py-8 sm:p-8 lg:col-span-5 lg:mt-0 shadow-xl border border-slate-800 space-y-6">
      <div className="flex items-center justify-between border-b border-slate-800 pb-4">
        <h2 className="text-xl font-extrabold tracking-tight">Order Summary</h2>
        <span className="text-xs font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800 px-2.5 py-1 rounded-full">
          Secure Checkout
        </span>
      </div>

      <div className="space-y-4 text-sm">
        <div className="flex items-center justify-between text-slate-400">
          <span>Subtotal</span>
          <span className="text-slate-200">
            <Currency value={totalPrice} />
          </span>
        </div>
        <div className="flex items-center justify-between text-slate-400">
          <span>Estimated Shipping</span>
          <span className="text-emerald-400 font-semibold uppercase text-xs">
            Free
          </span>
        </div>

        <div className="flex items-center justify-between border-t border-slate-800 pt-4 text-base font-bold text-white">
          <span>Total Amount</span>
          <span className="text-xl text-emerald-400 font-extrabold">
            <Currency value={totalPrice} />
          </span>
        </div>
      </div>

      <Button
        disabled={items.length === 0}
        onClick={onCheckOut}
        className="w-full flex items-center justify-center gap-x-2 rounded-full bg-emerald-600 hover:bg-emerald-500 disabled:bg-slate-800 disabled:text-slate-600 disabled:cursor-not-allowed py-3.5 text-white font-semibold shadow-lg shadow-emerald-900/30 transition-all duration-300"
      >
        <span>Proceed To Checkout</span>
        <ArrowRight size={18} />
      </Button>

      <div className="flex items-center justify-center gap-x-2 text-xs text-slate-400 pt-2 border-t border-slate-800/80">
        <ShieldCheck size={16} className="text-emerald-400" />
        <span>Encrypted SSL 256-Bit Payment Protection</span>
      </div>
    </div>
  );
};

export default Summary;


// "use client";

// import Button from "@/components/button";
// import Currency from "@/components/ui/currency";
// import useCart from "@/hooks/use-cart";
// import { STORE_API_URL } from "@/lib/api-url";
// import axios from "axios";
// import { useSearchParams } from "next/navigation";
// import { useEffect } from "react";
// import toast from "react-hot-toast";

// const Summary=()=>{
//     const searchParams=useSearchParams();
//     const items=useCart((state)=>state.items);
//     const removeAll=useCart((state)=>state.removeAll);

//     useEffect(()=>{
//         if(searchParams.get("success")){
//             toast.success("Payment complete.");
//             removeAll();
//         }
//         if(searchParams.get("canceled")){
//             toast.error("Something went wrong.");
//         }
//     },[searchParams,removeAll]);

//     const totalPrice=items.reduce((total,item)=>{
//         return total+Number(item.price);
//     },0);

//     const onCheckOut=async()=>{
//         const response=await axios.post(`${STORE_API_URL}/checkout`,{
//             productIds:items.map((item)=>item.id),
//         });
//         window.location=response.data.url;
//     }
//     return(
//         <div className="mt-16 rounded-lg bg-gray-50 px-4 py-4 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
//             <h2 className="text-lg font-medium text-gray-900">
//                 Order Summary
//             </h2>
//             <div className="mt-6 space-y-4">
//                 <div className="flex items-center justify-between border-t border-gray-200 pt-4">
//                     <div className="text-base font-medium text-gray-900">
//                     Order total
//                     </div>
//                     <Currency value={totalPrice}/>
//                 </div>
//             </div>
//             <Button disabled={items.length===0} onClick={onCheckOut} className="w-full mt-6">
//                 Checkout
//             </Button>
//         </div>
//     );
// }
// export default Summary;