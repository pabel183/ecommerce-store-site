import { Store } from "@/types";

const STORE_URL = `${process.env.NEXT_PUBLIC_API_URL}/stores/${process.env.NEXT_PUBLIC_STORE_ID}`;

const getStoreName = async (): Promise<Store> => {
    try {
        const res = await fetch(STORE_URL, {
            next: { revalidate: 3600 },
        });

        if (!res.ok) {
            return { name: "Store" };
        }

        return await res.json();
    } catch (error) {
        console.error("[GET_STORE_NAME_ERROR]", error);
        return { name: "Store" };
    }
};

export default getStoreName;