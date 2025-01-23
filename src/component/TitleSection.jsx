const TitleSection = ({ className, children }) => {
    return (
      <h2
        className={`flex items-center mb-6 font-onest text-4xl font-semibold gap-x-3 text-black/80 dark:text-white ${className}`}
      >
        {children}
      </h2>
    );
  };
  
  export default TitleSection;