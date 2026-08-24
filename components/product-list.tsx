import { Product } from "@/types";
import NoResults from "./ui/no-results";
import ProductCard from "./ui/product-card";

interface ProductListProps {
  title: string;
  items: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ title, items }) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between border-b border-slate-200/80 pb-4">
        <h3 className="font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
          {title}
        </h3>
        <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
          {items.length} Items Available
        </span>
      </div>

      {items.length === 0 && <NoResults />}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {items.map((item) => (
          <ProductCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;


// import { Product } from "@/types";
// import NoResults from "./ui/no-results";
// import ProductCard from "./ui/product-card";

// interface ProductListProps{
//     title: string;
//     items: Product[];
// }
// const ProductList:React.FC<ProductListProps>=({
//     title,
//     items,
// })=>{
//     return(
//         <div className="space-y-3">
//             <h3 className="font-bold text-3xl">{title}</h3>
//             {items.length===0 && <NoResults />}
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//                 {items.map((item)=>(
//                    <ProductCard key={item.id} data={item}/>
//                 ))}
//             </div>
//         </div>
//     );
// }
// export default ProductList;