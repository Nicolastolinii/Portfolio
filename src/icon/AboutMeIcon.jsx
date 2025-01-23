import { motion, useAnimation } from 'framer-motion';

const pathVariants = {
  normal: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 0.4,
    },
  },
  animate: {
    opacity: [0, 1],
    pathLength: [0, 1],
    transition: {
      duration: 0.6,
      ease: 'linear',
    },
  },
};

const AboutMeIcon = ({
  className = '',
  width = 24,
  height = 24,
  strokeWidth = 2,
  strokeColor = 'currentColor',
  ...props
}) => {
  const controls = useAnimation();

  const handleMouseEnter = () => {
    controls.start('animate');
  };

  const handleMouseLeave = () => {
    controls.start('normal');
  };

  return (
    <div
      className={`${className} cursor-pointer select-none hover:bg-accent rounded-md flex items-center justify-center`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`icon icon-tabler icon-tabler-user ${className}`}
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
          animate={controls}
          stroke="none"
          d="M0 0h24v24H0z"
          fill="none"
        />
        <motion.circle
          variants={pathVariants}
          initial="normal"
          animate={controls}
          cx="12"
          cy="7"
          r="4"
        />
        <motion.path
          variants={pathVariants}
          initial="normal"
          animate={controls}
          d="M5.5 21a8.38 8.38 0 0 1 13 0"
        />
      </svg>
    </div>
  );
};

export default AboutMeIcon;
