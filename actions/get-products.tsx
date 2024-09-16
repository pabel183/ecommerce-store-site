import { Product } from "@/types";
import queryString from "query-string";

interface Query{
    categoryId?:string,
    colorId?:string,
    sizeId?:string,
    isFeatured?:boolean,
}

const URL=`${process.env.NEXT_PUBLIC_API_URL}/products`;

const getProducts=async(query:Query):Promise<Product[]>=>{
    const res=await fetch(URL);
    const url= queryString.stringifyUrl({
            url:URL,
            query:{
                categoryId: query.categoryId,
                colorId: query.colorId,
                sizeId: query.sizeId,
                isFeatured: query.isFeatured,
            }
    });
    return res.json();
};
export default getProducts;