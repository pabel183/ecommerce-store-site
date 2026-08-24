import { STORE_API_URL } from "@/lib/api-url";
import { Category } from "@/types";

const URL=`${STORE_API_URL}/categories`;

const getCategories=async():Promise<Category[]>=>{
    const res=await fetch(URL);

    return res.json();
};
export default getCategories;