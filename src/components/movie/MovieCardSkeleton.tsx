export function MovieCardSkeleton() {
  return (
    <div className="ice-skeleton rounded-xl overflow-hidden bg-[#132842] border border-sky-100/10">
      {/* Poster */}
      <div className="ice-block h-80" />

      {/* Content */}
      <div className="p-4 space-y-3">
        {/* Title */}
        <div className="ice-block h-5 w-3/4 rounded" />

        {/* Rating */}
        <div className="ice-block h-4 w-1/4 rounded" />

        {/* Date */}
        <div className="ice-block h-4 w-1/2 rounded" />
      </div>
    </div>
  );
}


// export function MovieCardSkeleton(){
//     return(
//         <div className="animate-shimmer rounded-xl overflow-hidden bg-slate-800/50 border border-white/5">
//             {/* Poster */}
//             <div
//                 className="h-80 bg-slate-700/50"
//             />
            
//             {/* Content */}
//             <div className="p-4 space-y-3">
//                 {/* Title */}
//                 <h2 className="h-5 w-3/4 bg-slate-600/60 rounded" />

//                 {/* Rating */}
//                 <p className="h-4 w-1/4 bg-slate-600/60 rounded" />

//                 {/* Date */}
//                 <p className="h-4 w-1/2 bg-slate-600/60 rounded"/>
//             </div>
//         </div>
//     )
// }