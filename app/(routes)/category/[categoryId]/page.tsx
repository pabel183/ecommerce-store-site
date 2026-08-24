import getCategory from "@/actions/get-category";
import getColors from "@/actions/get-colors";
import getProducts from "@/actions/get-products";
import getSizes from "@/actions/get-sizes";
import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";
import Filter from "./components/filter";
import NoResults from "@/components/ui/no-results";
import ProductCard from "@/components/ui/product-card";
import MobileFilters from "./components/MobileFilters";

export const revalidate = 0;

interface CategoryPageProps {
  params: {
    categoryId: string;
  };
  searchParams: {
    colorId: string;
    sizeId: string;
  };
}

const CategoryPage: React.FC<CategoryPageProps> = async ({
  params,
  searchParams,
}) => {
  const products = await getProducts({
    categoryId: params.categoryId,
    colorId: searchParams.colorId,
    sizeId: searchParams.sizeId,
  });

  const sizes = await getSizes();
  const colors = await getColors();
  const category = await getCategory(params.categoryId);

  return (
    <div className="bg-slate-50/50 min-h-screen">
      <Container>
        <div className="pt-6">
          <Billboard data={category?.billboard} />
        </div>
      </Container>
      <div className="px-4 sm:px-6 lg:px-8 pb-24 pt-8">
        <div className="lg:grid lg:grid-cols-5 lg:gap-x-10">
          {/* Mobile Filter Button */}
          <MobileFilters sizes={sizes} colors={colors} />

          {/* Desktop Sidebar Filters */}
          <div className="hidden lg:block space-y-6 bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm self-start">
            <h2 className="text-xl font-extrabold text-slate-900 tracking-tight pb-2 border-b border-slate-100">
              Filters
            </h2>
            <Filter valueKey="sizeId" name="Sizes" data={sizes} />
            <Filter valueKey="colorId" name="Colors" data={colors} />
          </div>

          {/* Product Grid Container */}
          <div className="mt-6 lg:col-span-4 lg:mt-0">
            {products.length === 0 && <NoResults />}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {products.map((item) => (
                <ProductCard key={item.id} data={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;


// import getCategory from "@/actions/get-category";
// import getColors from "@/actions/get-colors";
// import getProducts from "@/actions/get-products";
// import getSizes from "@/actions/get-sizes";
// import Billboard from "@/components/billboard";
// import Container from "@/components/ui/container";
// import Filter from "./components/filter";
// import NoResults from "@/components/ui/no-results";
// import ProductCard from "@/components/ui/product-card";
// import MobileFilters from "./components/MobileFilters";

// export const revalidate=0;

// interface CategoryPageProps{
//     params:{
//         categoryId:string,
//     },
//     searchParams:{
//         colorId:string,
//         sizeId:string,
//     }
// }
// const CategoryPage:React.FC<CategoryPageProps>=async({
//     params,
//     searchParams,
// })=>{
//     const products= await getProducts({
//         categoryId: params.categoryId,
//         colorId: searchParams.colorId,
//         sizeId: searchParams.sizeId,
//     });

//     const sizes=await getSizes();
//     const colors=await getColors();
//     const category=await getCategory(params.categoryId);

//     return(
//         <div className="bg-white">
//             <Container>
//                 <Billboard data={category?.billboard} />
//             </Container>
//             <div className="px-4 sm:px-6 lg:px-8 pb-24">
//                 <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
//                     <MobileFilters sizes={sizes} colors={colors}/>
//                     <div className="hidden lg:block">
//                         <Filter 
//                             valueKey="sizeId"
//                             name="Sizes"
//                             data={sizes}
//                         />
//                         <Filter 
//                             valueKey="colorId"
//                             name="Colors"
//                             data={colors}
//                         />
//                     </div>
//                     <div className="mt-6 lg:col-span-4 lg:mt-0">
//                         {products.length === 0 && <NoResults />}
//                         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//                             {products.map((item)=>(
//                                 <ProductCard 
//                                     key={item.id}
//                                     data={item}
//                                 />
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }
// export default CategoryPage;