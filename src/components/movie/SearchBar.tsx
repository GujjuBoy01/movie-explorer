
interface SearchBarProps {
    value: string;
    onChange: (value: string) => void;
}

export default function SearchBar({onChange,value}:SearchBarProps){

    return(
        <form>
            <input
                type="text"
                placeholder="Search Movies or TV Shows"
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        </form>
    )
}