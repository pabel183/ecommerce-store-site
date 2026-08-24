import Image from "next/image";
import { Tab } from "@headlessui/react";
import { Image as ImageType } from "@/types";
import { cn } from "@/lib/utils";

interface GalleryTabProps {
  image: ImageType;
}

const GalleryTab: React.FC<GalleryTabProps> = ({ image }) => {
  return (
    <Tab className="relative flex items-center justify-center aspect-square bg-white rounded-xl cursor-pointer outline-none focus:ring-0">
      {({ selected }) => (
        <div>
          <span className="absolute inset-0 h-full w-full aspect-square overflow-hidden rounded-xl bg-slate-100">
            <Image
              alt="Thumbnail preview"
              fill
              src={image?.url}
              className="object-cover object-center"
            />
          </span>
          <span
            className={cn(
              "absolute inset-0 rounded-xl ring-2 ring-offset-2 transition-all duration-200",
              selected ? "ring-emerald-600 ring-offset-white" : "ring-transparent"
            )}
          />
        </div>
      )}
    </Tab>
  );
};

export default GalleryTab;


// import Image from "next/image";
// import { Tab } from "@headlessui/react";
// import { Image as ImageType } from "@/types";
// import { cn } from "@/lib/utils";
// interface GalleryTabProps{
//     image: ImageType
// }
// const GalleryTab:React.FC<GalleryTabProps>=({
//     image,
// })=>{
//     return(
//         <Tab className="relative flex items-center justify-center aspect-square bg-white rounded-md cursor-pointer">
//             {({selected})=>(
//                 <div>
//                     <span className="absolute inset-0 h-full w-full aspect-square overflow-hidden rounded-md">
//                         <Image 
//                         alt=""
//                         fill
//                         src={image?.url}
//                         className="object-cover object-center"
//                         />
//                     </span>
//                     <span className={cn(`absolute inset-0 rounded-md ring-2 ring-offset-2`,
//                         selected?"ring-black":"ring-transparent"
//                     )}/>
//                 </div>
//             )}
//         </Tab>
//     );
// };
// export default GalleryTab;