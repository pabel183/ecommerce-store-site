import Link from "next/link";
import getCategories from "@/actions/get-categories";
import Container from "./ui/container";
import MainNav from "./main-nav";
import NavbarActions from "./navbar-actions";
import getStoreName from "@/actions/get-store-name";

export const revalidate = 0;

const Navbar = async () => {
    const categories = await getCategories();
    const { name } = await getStoreName();

    return (
        <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm">
            <Container>
                <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
                    <Link href="/" className="flex items-center gap-x-2 shrink-0">
                        <p className="font-extrabold text-xl tracking-tight text-slate-900 uppercase">
                            {name}
                            <span className="text-emerald-600">.</span>
                        </p>
                    </Link>
                
                    <div className="flex-1 max-w-2xl mx-2">
                        <MainNav data={categories} />
                    </div>
                    <NavbarActions />
                </div>
            </Container>
        </header>
    );
};

export default Navbar;


//Old data

// import Link from "next/link";

// import getCategories from "@/actions/get-categories";
// import Container from "./ui/container";
// import MainNav from "./main-nav";
// import NavbarActions from "./navbar-actions";

// export const revalidate=0;

// const Navbar=async()=>{
//     const categories=await getCategories();
//     return(
//         <div className="border-b">
//             <Container>
//                 <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
//                     <Link href="/" className="ml-4 lg:ml-0 gap-x-2">
//                         <p className="font-bold text-xl">Store</p>
//                     </Link>
//                     <MainNav data={categories} />
//                     <NavbarActions />
//                 </div>
//             </Container>
//         </div>
//     );
// }
// export default Navbar;