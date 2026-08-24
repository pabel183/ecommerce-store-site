import getProduct from "@/actions/get-product";
import getProducts from "@/actions/get-products";
import Gallery from "@/components/gallery";
import ProductList from "@/components/product-list";
import Info from "@/components/ui/info";
import Container from "@/components/ui/container";

interface ProductPageProps {
  params: { productId: string };
}

const ProductPage: React.FC<ProductPageProps> = async ({ params }) => {
  const product = await getProduct(params.productId);
  const suggestedProducts = await getProducts({
    categoryId: product?.category?.id,
  });

  return (
    <div className="bg-slate-50/50 min-h-screen">
      <Container>
        <div className="px-4 sm:px-6 lg:px-8 py-10">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-12 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm">
            <Gallery images={product?.images || []} />
            <div className="mt-10 px-2 sm:mt-16 sm:px-0 lg:mt-0">
              <Info data={product} />
            </div>
          </div>
          
          <hr className="my-12 border-slate-200/80" />
          
          <ProductList title="Related Items" items={suggestedProducts} />
        </div>
      </Container>
    </div>
  );
};

export default ProductPage;


// import getProduct from "@/actions/get-product";
// import getProducts from "@/actions/get-products";
// import Gallery from "@/components/gallery";
// import ProductList from "@/components/product-list";
// import Info from "@/components/ui/info";

// interface ProductPageProps{
//     params:{productId:string}
// }
// const ProductPage:React.FC<ProductPageProps>=async({
//     params
// })=>{
//     const product= await getProduct(params.productId);
//     const suggestedProducts=await getProducts({
//         categoryId: product?.category?.id,
//     });
//     return(
//         <div className="bg-white">
//             <div className="px-4 sm:px-6 lg:px-8 py-10">
//                 <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
//                     <Gallery images={product?.images}/>
//                     <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
//                     <Info data={product}/>
//                     </div>
//                 </div>
//                 <hr className="my-10"/>
//                 <ProductList title="Related Items" items={suggestedProducts}/>
//             </div>
//         </div>
//     );
// }
// export default ProductPage;