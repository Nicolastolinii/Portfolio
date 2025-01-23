import { motion, useAnimation } from 'framer-motion';

const pathVariants = {
  normal: {
    opacity: 1,
    pathLength: 1,
    pathOffset: 0,
    transition: {
      duration: 0.3,
      opacity: { duration: 0.1 },
    },
  },
  animate: {
    opacity: [0, 1],
    pathLength: [0, 1],
    pathOffset: [1, 0],
    transition: {
      duration: 0.5,
      ease: 'linear',
      opacity: { duration: 0.1 },
    },
  },
};

const ProjectsIcon = ({
  className = '',
  width = 24,
  height = 24,
  strokeWidth = 2,
  strokeColor = 'currentColor',
  ...props
}) => {
  const leftArrowControls = useAnimation();
  const rightArrowControls = useAnimation();
  const centerLineControls = useAnimation();

  const handleMouseEnter = () => {
    leftArrowControls.start('animate');
    rightArrowControls.start('animate');
    centerLineControls.start('animate');
  };

  const handleMouseLeave = () => {
    leftArrowControls.start('normal');
    rightArrowControls.start('normal');
    centerLineControls.start('normal');
  };

  return (
    <div
      className={`${className} cursor-pointer select-none hover:bg-accent rounded-md flex items-center justify-center`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        className={`icon icon-tabler icon-tabler-code ${className}`}
        width={width}
        height={height}
        viewBox="0 0 24 24"
        strokeWidth={strokeWidth}
        stroke={strokeColor}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <motion.path
          variants={pathVariants}
          initial="normal"
          animate={leftArrowControls}
          d="M7 8l-4 4l4 4"
        />
        <motion.path
          variants={pathVariants}
          initial="normal"
          animate={rightArrowControls}
          d="M17 8l4 4l-4 4"
        />
        <motion.path
          variants={pathVariants}
          initial="normal"
          animate={centerLineControls}
          d="M14 4l-4 16"
        />
      </motion.svg>

    </div>
  );
};

export default ProjectsIcon;
