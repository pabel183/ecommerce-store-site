"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Color, Size } from "@/types";
import Button from "@/components/button";
import { cn } from "@/lib/utils";
import qs from "query-string";

interface FilterProps {
  data: (Size | Color)[];
  name: string;
  valueKey: string;
}

const Filter: React.FC<FilterProps> = ({ data, name, valueKey }) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const selectedValue = searchParams.get(valueKey);

  const onClick = (id: string) => {
    const current = qs.parse(searchParams.toString());

    const query = {
      ...current,
      [valueKey]: id,
    };

    if (current[valueKey] === id) {
      query[valueKey] = null;
    }

    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      { skipNull: true }
    );

    router.push(url);
  };

  return (
    <div className="mb-6">
      <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">
        {name}
      </h3>
      <div className="flex flex-wrap gap-2">
        {data.map((filter) => {
          const isSelected = selectedValue === filter.id;
          const colorValue = "value" in filter ? filter.value : null;

          return (
            <div key={filter.id} className="flex items-center">
              <Button
                className={cn(
                  "rounded-xl text-xs font-semibold px-3.5 py-2 bg-white border border-slate-200 text-slate-700 hover:border-slate-400 hover:bg-slate-50 transition-all duration-200 flex items-center gap-x-2 shadow-sm",
                  isSelected &&
                    "bg-slate-900 border-slate-900 text-white hover:bg-slate-800 hover:border-slate-800 shadow-md"
                )}
                onClick={() => onClick(filter.id)}
              >
                {/* Render small color circle if filter item is a color */}
                {colorValue && (
                  <span
                    className={cn(
                      "h-3 w-3 rounded-full border border-slate-300",
                      isSelected && "border-white/50"
                    )}
                    style={{ backgroundColor: colorValue }}
                  />
                )}
                <span>{filter.name}</span>
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Filter;


// "use client";

// import { useRouter, useSearchParams } from "next/navigation";

// import { Color, Size } from "@/types";
// import Button from "@/components/button";
// import { cn } from "@/lib/utils";
// import qs from "query-string";

// interface FilterProps{
//     data: ( Size | Color )[];
//     name:string;
//     valueKey:string;
// }
// const Filter:React.FC<FilterProps>=({
//     data,
//     name,
//     valueKey,
// })=>{
//     const searchParams=useSearchParams();
//     const router=useRouter();

//     const selectedValue=searchParams.get(valueKey);

//     const onClick=(id:string)=>{
//         const current= qs.parse(searchParams.toString());
        
//         const query= {
//             ...current,
//             [valueKey]:id,
//         };

//         if(current[valueKey]===id){
//             query[valueKey]=null;
//         }
//         const url=qs.stringifyUrl({
//             url:window.location.href,
//             query
//         },{skipNull:true});

//         router.push(url);
//     }

//     return(
//         <div className="mb-8">
//             <h3 className="text-lg font-semibold">{name}</h3>
//             <hr className="my-4"/>
//             <div className="flex flex-wrap gap-2">
//                 {data.map((filter)=>(
//                     <div key={filter.id} className="flex items-center">
//                         <Button
//                         className={cn(`rounded-md text-sm text-gray-800 p-2 bg-white border border-gray-300`,
//                             selectedValue===filter.id && "bg-black text-white"
//                         )}
//                         onClick={()=>onClick(filter.id)}
//                         >
//                             {filter.name}
//                         </Button>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }
// export default Filter;