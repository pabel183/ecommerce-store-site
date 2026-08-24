"use client";

import { usePathname } from "next/navigation";
import { Category } from "@/types";
import CategoriesPopover from "@/components/ui/categories-popover";
import { ChevronRight } from "lucide-react";

interface MainNavProps {
  data: Category[];
}

const MainNav: React.FC<MainNavProps> = ({ data }) => {
  const pathname = usePathname();

  const activeCategory = data.find(
    (category) => pathname === `/category/${category.id}`
  );

  return (
    <nav className="mx-2 sm:mx-4 flex items-center space-x-2 sm:space-x-2.5">
      {/* All Categories Dropdown Button */}
      <CategoriesPopover categories={data} />

      {/* Active Category Indicator */}
      {activeCategory && (
        <div className="flex items-center space-x-2 animate-in fade-in-50 slide-in-from-left-2 duration-200 shrink-0 cursor-default select-none">
          {/* Chevron Divider */}
          <ChevronRight size={16} className="text-slate-400 shrink-0 stroke-[2.5]" />

          {/* Active Category Text with Green Dot & Underline */}
          <div className="flex items-center gap-x-2 text-xs sm:text-sm font-semibold text-emerald-800">
            <span className="h-2 w-2 rounded-full bg-emerald-600 animate-pulse" />
            <span className="underline decoration-emerald-500 decoration-1 underline-offset-4">
              {activeCategory.name}
            </span>
          </div>
        </div>
      )}
    </nav>
  );
};

export default MainNav;


// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { Category } from "@/types";
// import { cn } from "@/lib/utils";
// import CategoriesPopover from "@/components/ui/categories-popover";

// interface MainNavProps {
//   data: Category[];
// }

// const MainNav: React.FC<MainNavProps> = ({ data }) => {
//   const pathname = usePathname();

//   return (
//     <nav className="mx-4 sm:mx-6 flex items-center space-x-4 lg:space-x-6">
//       <CategoriesPopover categories={data} />
//     </nav>
//   );
// };

// export default MainNav;



// Old data

// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";

// import { cn } from "@/lib/utils";
// import { Category } from "@/types";

// interface MainNavProps{
//     data:Category[];
// }
// const MainNav:React.FC<MainNavProps>=({
//     data
// })=>{
//     const pathname=usePathname();
//     const routes=data.map((route)=>({
//         href:`/category/${route.id}`,
//         label:route.name,
//         active:pathname===`/category/${route.id}`
//     }));
//     return(
//         <nav className="mx-6 flex items-center space-x-4 lg:space-x-6">
//             {routes.map((route)=>(
//                 <Link
//                 key={route.href}
//                 href={route.href}
//                 className={cn(`text-sm font-medium transition-colors hover:text-black`,
//                     route.active?"text-balck":"text-neutral-500"
//                 )}
//                 >
//                 {route.label}
//                 </Link>
//             ))}
//         </nav>
//     );
// }
// export default MainNav;