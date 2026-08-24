import { STORE_API_URL } from "@/lib/api-url";
import { Category } from "@/types";

const URL=`${STORE_API_URL}/categories`;

const getCategory=async(id:string):Promise<Category>=>{
    const res=await fetch(`${URL}/${id}`);

    return res.json();
};
export default getCategory;