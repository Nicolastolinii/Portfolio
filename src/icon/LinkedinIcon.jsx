import { motion, useAnimation } from 'framer-motion';


const pathVariants = {
  normal: {
    opacity: 1,
    pathLength: 1,
    pathOffset: 0,
    transition: {
      duration: 0.4,
      opacity: { duration: 0.1 },
    },
  },
  animate: {
    opacity: [0, 1],
    pathLength: [0, 1],
    pathOffset: [1, 0],
    transition: {
      duration: 0.6,
      ease: 'linear',
      opacity: { duration: 0.1 },
    },
  },
};

const rectVariants = {
  normal: {
    opacity: 1,
    pathLength: 1,
    pathOffset: 0,
    transition: {
      duration: 0.4,
      opacity: { duration: 0.1 },
    },
  },
  animate: {
    opacity: [0, 1],
    pathLength: [0, 1],
    pathOffset: [1, 0],
    transition: {
      duration: 0.6,
      ease: 'linear',
      opacity: { duration: 0.1 },
    },
  },
};

const circleVariants = {
  normal: {
    opacity: 1,
    pathLength: 1,
    pathOffset: 0,
    transition: {
      duration: 0.4,
      opacity: { duration: 0.1 },
    },
  },
  animate: {
    opacity: [0, 1],
    pathLength: [0, 1],
    pathOffset: [1, 0],
    transition: {
      duration: 0.6,
      ease: 'linear',
      opacity: { duration: 0.1 },
    },
  },
};

const LinkedinIcon = (props) => {
  const pathControls = useAnimation();
  const rectControls = useAnimation();
  const circleControls = useAnimation();

  const handleMouseEnter = () => {
    pathControls.start('animate');
    rectControls.start('animate');
    circleControls.start('animate');
  };

  const handleMouseLeave = () => {
    pathControls.start('normal');
    rectControls.start('normal');
    circleControls.start('normal');
  };

  return (
    <div
      className={`${props.className} cursor-pointer select-none  hover:bg-accent rounded-md  flex items-center justify-center`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.width || 21}
        height={props.height || 21}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <motion.path
          variants={pathVariants}
          initial="normal"
          animate={pathControls}
          d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
        />
        <motion.rect
          variants={rectVariants}
          initial="normal"
          animate={rectControls}
          x="2"
          y="9"
          width="4"
          height="12"
        />
        <motion.circle
          variants={circleVariants}
          initial="normal"
          animate={circleControls}
          cx="4"
          cy="4"
          r="2"
        />
      </svg>
      <span className='mt-[3px] pl-1.5 '>Linkedin</span>
    </div>
  );
};

export default LinkedinIcon;
