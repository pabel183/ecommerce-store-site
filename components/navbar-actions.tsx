"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ShoppingBag } from "lucide-react";

import Button from "./button";
import useCart from "@/hooks/use-cart";

const NavbarActions=()=>{
    const router=useRouter();
    const cart=useCart();
    const [isMount,setIsMount]=useState(false);

    useEffect(()=>{
        setIsMount(true);
    },[]);

    if(!isMount){
        return null;
    }

    return(
        <div className="ml-auto flex items-center gap-x-4">
            <Button onClick={()=>router.push(`/cart`)} className="flex items-center rounded-full bg-black px-4 py-2">
                <ShoppingBag 
                size={20}
                color="white"
                />
                <span className="ml-2 text-sm font-medium text-white">
                    {cart.items.length}
                </span>
            </Button>
        </div>
    );
}
export default NavbarActions;