import { BiMoviePlay } from "react-icons/bi";

interface EmptyStateProps {
    title: string;
    description: string;
}

export default function EmptyState({title,description}:EmptyStateProps) {
    return(
        <div className="flex justify-center py-20">
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl 
            shadow-2xl hover:border-sky-300/40 hover:bg-white/10 transition-all duration-300">
                
                <div className="p-7 flex flex-col items-center text-center gap-2">
                    <BiMoviePlay className="text-sky-300 w-14 h-14 " />

                    <h2 className="text-2xl font-semibold text-slate-400">
                        {title}
                    </h2>

                    <p className="text-slate-600 text-base font-semibold max-w-md">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    )
}