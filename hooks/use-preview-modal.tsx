import { Product } from "@/types";
import { create } from "zustand";

interface PreviewModalStore{
    isOpean:boolean;
    data?:Product;
    onOpen:(data:Product)=>void;
    onClose:()=>void;
}
const usePreviewModal=create<PreviewModalStore>((set)=>({
    isOpean:false,
    data:undefined,
    onOpen:(data:Product)=>set({data,isOpean:true}),
    onClose:()=>set({isOpean:false}),
}));

export default usePreviewModal;