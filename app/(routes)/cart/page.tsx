"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ShoppingBag, ArrowRight } from "lucide-react";

import useCart from "@/hooks/use-cart";
import Container from "@/components/ui/container";
import Button from "@/components/button";
import CartItem from "./components/cart-Item";
import Summary from "./components/summary";

const CartPage = () => {
  const cart = useCart();
  const [isMount, setIsMount] = useState(false);

  useEffect(() => {
    setIsMount(true);
  }, []);

  if (!isMount) {
    return null;
  }

  return (
    <div className="bg-slate-50/50 min-h-screen">
      <Container>
        <div className="px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex items-center gap-x-3 pb-6 border-b border-slate-200/80">
            <ShoppingBag className="text-emerald-600" size={28} />
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Shopping Cart
            </h1>
            <span className="ml-2 text-xs font-semibold text-emerald-700 bg-emerald-100 border border-emerald-200 px-3 py-1 rounded-full">
              {cart.items.length} {cart.items.length === 1 ? "Item" : "Items"}
            </span>
          </div>

          <div className="pt-8 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
            {/* Cart Items List */}
            <div className="lg:col-span-7">
              {cart.items.length === 0 && (
                <div className="flex flex-col items-center justify-center py-16 bg-white rounded-3xl border border-slate-200/80 shadow-sm text-center p-6 space-y-4">
                  <div className="h-16 w-16 bg-slate-100 rounded-full flex items-center justify-center text-slate-400">
                    <ShoppingBag size={32} />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-slate-900">
                      Your cart is currently empty
                    </h3>
                    <p className="text-sm text-slate-500 max-w-sm">
                      Looks like you haven&apos;t added any items to your shopping cart yet.
                    </p>
                  </div>
                  <Link href="/">
                    <Button className="mt-2 flex items-center gap-x-2 bg-slate-900 hover:bg-emerald-600 text-white rounded-full px-6 py-2.5 text-sm font-semibold transition-all">
                      <span>Start Shopping</span>
                      <ArrowRight size={16} />
                    </Button>
                  </Link>
                </div>
              )}

              <ul className="space-y-4">
                {cart.items.map((item) => (
                  <CartItem key={item.id} data={item} />
                ))}
              </ul>
            </div>

            {/* Order Summary */}
            <Summary />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CartPage;

// "use client";

// import useCart from "@/hooks/use-cart";
// import { useEffect, useState } from "react";

// import Container from "@/components/ui/container";
// import CartItem from "./components/cart-Item";
// import Summary from "./components/summary";

// const CartPage=()=>{
//     const cart=useCart();
//     const [isMount,setIsMount]=useState(false);
//     useEffect(()=>{
//         setIsMount(true);
//     },[]);
//     if(!isMount){
//         return null;
//     }
    
//     return(
//         <div className="bg-white">
//             <Container>
//                 <div className="px-4 py-16 sm:px-6 lg:px-8">
//                     <h1 className="text-3xl font-bold text-black">Shopping Cart</h1>
//                     <div className="pt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
//                         <div className="lg:col-span-7">
//                             {cart.items.length ==0 && <p className="text-neutral-500">No items add to cart</p>}
//                             <ul>
//                                 {cart.items.map((item)=>(
//                                     <CartItem 
//                                         key={item.id}
//                                         data={item}
//                                     />
//                                 ))}
//                             </ul>
//                         </div>
//                         <Summary />
//                     </div>
//                 </div>
//             </Container>
//         </div>
//     );
// }
// export default CartPage;