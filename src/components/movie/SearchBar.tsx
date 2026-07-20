import { FaSearch } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

interface SearchBarProps {
    value: string;
    onChange: (value: string) => void;
}

export default function SearchBar({onChange,value}:SearchBarProps){

    return(
        <div className="relative">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" />

            <input
                type="text"
                placeholder="Search Movies or TV Shows"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="w-full rounded-full bg-slate-800/70 border border-slate-700 px-5 py-2 pl-12 pr-12
                text-white placeholder:text-slate-400 focus:border-sky-400 focus:ring-2 
                focus:ring-sky-400/40 outline-none transition-colors duration-300"
            />

            {value && (
                <button 
                    type="button"
                    className="absolute right-5 text-lg top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200 
                    transition-colors duration-300" onClick={() => onChange('')}
                >
                    <FaTimes />
                </button>
            )}  
        </div>
    )
}