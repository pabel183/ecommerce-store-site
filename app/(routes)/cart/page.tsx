"use client";

import useCart from "@/hooks/use-cart";
import { useEffect, useState } from "react";

import Container from "@/components/ui/container";
import CartItem from "./components/cart-Item";
import Summary from "./components/summary";

const CartPage=()=>{
    const cart=useCart();
    const [isMount,setIsMount]=useState(false);
    useEffect(()=>{
        setIsMount(true);
    },[]);
    if(!isMount){
        return null;
    }
    
    return(
        <div className="bg-white">
            <Container>
                <div className="px-4 py-16 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-black">Shopping Cart</h1>
                    <div className="pt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
                        <div className="lg:col-span-7">
                            {cart.items.length ==0 && <p className="text-neutral-500">No items add to cart</p>}
                            <ul>
                                {cart.items.map((item)=>(
                                    <CartItem 
                                        key={item.id}
                                        data={item}
                                    />
                                ))}
                            </ul>
                        </div>
                        <Summary />
                    </div>
                </div>
            </Container>
        </div>
    );
}
export default CartPage;