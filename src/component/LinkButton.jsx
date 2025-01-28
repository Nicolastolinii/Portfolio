const LinkButton = ({
    children,
    href,
    bg,
    onClick,
    focus = false,
    className = '',
    target = '_blank',
    rel = 'noopener noreferrer',
    padding = true,
    ...props
}) => {

    return (
        <a
            onClick={onClick}
            href={href}
            target={target}
            rel={rel}
            className={` ${focus ? "dark:bg-gray-100" : `${bg ? `${bg}`: "dark:bg-gray-800 dark:hover:bg-gray-100 dark:text-white dark:hover:text-black"} hover:border-gray-700  `}  flex items-center justify-center gap-2 ${padding ? "px-4 py-1.5" : ""}  transition bg-gray-100 border border-gray-300 rounded-lg  dark:border-gray-600   text-md     dark:hover:border-gray-300  group focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black font-medium ${className}`}
            {...props}
        >
            {children}
        </a>
    );
};

export default LinkButton;