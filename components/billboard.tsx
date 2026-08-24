import { Billboard as BillboardType } from "@/types";

interface BillboardProps {
  data: BillboardType;
}

const Billboard: React.FC<BillboardProps> = ({ data }) => {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 pt-4">
      {/* Motto Banner
      <div className="w-full bg-gradient-to-r from-emerald-950 via-slate-900 to-slate-950 rounded-2xl p-6 sm:p-8 mb-6 text-white shadow-xl border border-emerald-900/30 relative overflow-hidden">
        <div className="absolute right-0 top-0 -mt-4 -mr-4 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl" />
        <p className="text-xs sm:text-sm font-semibold text-emerald-400 uppercase tracking-widest mb-1">
          Curated Collections
        </p>
        <h1 className="font-extrabold text-2xl sm:text-4xl lg:text-5xl tracking-tight leading-tight">
          ✨ Elevate Your Everyday Style
        </h1>
      </div> */}
      {/* Main Image Banner */}
      <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200/80">
        <div
          className="rounded-2xl relative aspect-[16/9] md:aspect-[2.5/1] overflow-hidden bg-cover bg-center transition-all duration-500"
          style={{ backgroundImage: `url(${data?.imageUrl})` }}
        >
          {/* Overlay to guarantee text legibility */}
          <div className="h-full w-full flex flex-col justify-center items-center text-center p-6 bg-gradient-to-t from-slate-950/80 via-slate-900/40 to-transparent">
            <div className="font-black text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs text-white drop-shadow-md tracking-tight">
              {data?.label}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billboard;


// import { Billboard as BillboardType } from "@/types";

// interface BillboardProps {
//     data: BillboardType
// }
// const Billboard: React.FC<BillboardProps> = ({
//     data
// }) => {
//     return (
//         <div className="w-full">
//             {/* motto */}
//             <div className="w-full bg-green-50 p-3">
//                 <h1 className="font-bold text-3xl sm:text-5xl lg:text-6xl w-full">
//                     ✨ Elevate Your Everyday Style . . .
//                 </h1>
//             </div>

//             <div className="py-1 sm:py-2 lg:p-4 rounded-xl overflow-hidden">
//                 <div
//                     className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover"
//                     style={{ backgroundImage: `url(${data?.imageUrl})` }}
//                 >
//                     <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
//                         <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs">
//                             {data?.label}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }
// export default Billboard;