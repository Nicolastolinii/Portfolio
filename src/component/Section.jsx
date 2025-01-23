const Section = ({ className, id, children }) => {
    return (
      <section
        id={id}
        data-section={id}
        className={`section ${className} scroll-m-20 w-full  container `}
      >
        {children}
      </section>
    );
  };
  
  export default Section;
  