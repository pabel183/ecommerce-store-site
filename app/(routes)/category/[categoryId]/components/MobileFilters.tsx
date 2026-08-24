"use client";

import { useState } from "react";
import { Color, Size } from "@/types";
import { Dialog, DialogPanel } from "@headlessui/react";
import { SlidersHorizontal, X } from "lucide-react";

import IconButton from "@/components/ui/icon-button";
import Button from "@/components/button";
import Filter from "./filter";

interface MobileFiltersProps {
  sizes: Size[];
  colors: Color[];
}

const MobileFilters: React.FC<MobileFiltersProps> = ({ sizes, colors }) => {
  const [open, setOpen] = useState(false);

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <>
      <Button
        onClick={onOpen}
        className="flex items-center gap-x-2 lg:hidden bg-white border border-slate-200/80 text-slate-900 hover:bg-slate-50 font-semibold px-4 py-2.5 rounded-full shadow-sm"
      >
        <span>Filters</span>
        <SlidersHorizontal size={16} className="text-emerald-600" />
      </Button>

      <Dialog
        open={open}
        as="div"
        className="relative z-50 lg:hidden"
        onClose={onClose}
      >
        {/* Semi-transparent Backdrop */}
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity" />

        {/* Slide-over Container */}
        <div className="fixed inset-0 z-50 flex">
          <DialogPanel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-6 pb-12 shadow-2xl transition-all duration-300">
            {/* Header */}
            <div className="flex items-center justify-between px-6 pb-4 border-b border-slate-100">
              <div className="flex items-center gap-x-2">
                <SlidersHorizontal size={18} className="text-emerald-600" />
                <h2 className="text-lg font-bold text-slate-900">Filters</h2>
              </div>
              <IconButton
                icon={<X size={16} className="text-slate-600" />}
                onClick={onClose}
                className="bg-slate-100 hover:bg-slate-200 border-none"
              />
            </div>

            {/* Filter Content */}
            <div className="p-6 space-y-6">
              <Filter valueKey="sizeId" name="Sizes" data={sizes} />
              <Filter valueKey="colorId" name="Colors" data={colors} />
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};

export default MobileFilters;


// "use client";
// import { Color, Size } from "@/types";
// import { Dialog, DialogPanel } from "@headlessui/react";
// import { Plus, X } from "lucide-react";
// import { useState } from "react";

// import IconButton from "@/components/ui/icon-button";
// import Button from "@/components/button";
// import Filter from "./filter";

// interface MobileFiltersProps{
//     sizes:Size[];
//     colors:Color[];
// }
// const MobileFilters:React.FC<MobileFiltersProps>=({
//     sizes,
//     colors,
// })=>{
//     const [open, setOpen]=useState(false);

//     const onOpen=()=>setOpen(true);
//     const onClose=()=>setOpen(false);

//     return(
//         <>
//             <Button onClick={onOpen} className="flex items-center gap-x-2 lg:hidden">
//                 Filter
//                 <Plus size={20}/>
//             </Button>
//             <Dialog open={open} as="div" className="relative z-40 lg:hidden" onClose={onClose}>
//                 {/**Background */}
//                 <div className="fixed inset-0 bg-black opacity-25"/>
//                 {/**Dialog position */}
//                 <div className="fixed inset-0 z-40 flex">
//                     <DialogPanel
//                     className="relative ml-auto flex h-full w-full max-w-xs
//                     flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl
//                     "
//                     >
//                         <div className="flex items-center justify-end px-4">
//                             <IconButton icon={<X size={15}/>} onClick={onClose}/>
//                         </div>
//                         <div className="p-4">
//                             <Filter 
//                                 valueKey="sizeId"
//                                 name="Sizes"
//                                 data={sizes}
//                             />
//                             <Filter 
//                                 valueKey="colorId"
//                                 name="Colors"
//                                 data={colors}
//                             />
//                         </div>
//                     </DialogPanel>
//                 </div>
//             </Dialog>
//         </>
//     );
// }
// export default MobileFilters;