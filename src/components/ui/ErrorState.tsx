import { BiError } from "react-icons/bi";

interface ErrorStateProps {
    title: string;
    description: string;
    onRetry?: () => void;
}

export default function ErrorState({title,description,onRetry}:ErrorStateProps){
    return(
        <div className=" bg-white/5 border border-red-400/20 p-5 max-w-lg w-full rounded-xl backdrop-blur-lg shadow-xl">
            <div className="flex flex-col items-center gap-2">
                <BiError className="text-red-500 h-15 w-15" />

                <h2 className="text-slate-600/90 text-2xl font-semibold">{title}</h2>

                <p className="text-slate-500 text-md leading-6">{description}</p>

                {onRetry && (
                    <button 
                        className="px-5 py-1 bg-sky-500 hover:bg-sky-400 hover:text-white rounded-md cursor-pointer transition-all duration-300 shadow-lg"
                        onClick={onRetry}
                    >
                        Try Again
                    </button> 
                )}
            </div>
            
        </div>
    )
}