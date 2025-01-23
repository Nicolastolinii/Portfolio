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

const rectVariants = {
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

const MailIcon = (props) => {
  const pathControls = useAnimation();
  const rectControls = useAnimation();

  const handleMouseEnter = () => {
    pathControls.start('animate');
    rectControls.start('animate');
  };

  const handleMouseLeave = () => {
    pathControls.start('normal');
    rectControls.start('normal');
  };

  return (
    <div
      className={`${props.className} cursor-pointer select-none hover:bg-accent rounded-md flex items-center justify-center`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.width || 24}
        height={props.height || 24}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        {/* Sobre (Envelope) */}
        <motion.path
          variants={pathVariants}
          initial="normal"
          animate={pathControls}
          d="M3 5l9 7 9-7"
        />
        <motion.rect
          variants={rectVariants}
          initial="normal"
          animate={rectControls}
          x="3"
          y="5"
          width="18"
          height="14"
          rx="2"
        />
        {/* Detalles de la carta */}
        <motion.path
          variants={pathVariants}
          initial="normal"
          animate={pathControls}
          d="M3 5h18v14H3z"
        />
      </svg>
      <span className='pl-1.5'>Email</span>
    </div>
  );
};

export default MailIcon;
