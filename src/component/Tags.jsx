
export const Tags = ({ className ,name}) => {
    return (
        <span
            className={`px-3 py-1 text-xs  -tracking-tight flex items-center font-medium rounded-full hover:bg-opacity-80 transition-colors text-white bg-slate-600 duration-200 ${className}`}
        >
            {name}
        </span>
    )
}
