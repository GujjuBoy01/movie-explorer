interface EmptyStateProps {
    title: string;
    description: string;
}

export default function EmptyState({title,description}:EmptyStateProps) {
    return(
        <div className="flex flex-col items-center justify-center text-center py-20 px-4 gap-2">
            <h2 className="text-4xl font-semibold text-red-500">
                {title}
            </h2>

            <p className="text-gray-500 text-lg font-semibold max-w-md">
                {description}
            </p>
        </div>
    )
}