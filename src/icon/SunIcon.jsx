import { motion, useAnimation } from 'framer-motion';

const pathVariants = {
  normal: { opacity: 1 },
  animate: (i) => ({
    opacity: [0, 1],
    transition: { delay: i * 0.05, duration: 0.2 },
  }),
};

const SunIcon = () => {
  const controls = useAnimation();

  const paths = [
    'M12 2v2',
    'm19.07 4.93-1.41 1.41',
    'M20 12h2',
    'm17.66 17.66 1.41 1.41',
    'M12 20v2',
    'm6.34 17.66-1.41 1.41',
    'M2 12h2',
    'm4.93 4.93 1.41 1.41',
  ];

  return (
    <div
      className="cursor-pointer select-none opacity-80 hover:opacity-100 p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center"
      onMouseEnter={() => controls.start('animate')}
      onMouseLeave={() => controls.start('normal')}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="4" />
        {paths.map((d, index) => (
          <motion.path
            key={d}
            d={d}
            animate={controls}
            variants={pathVariants}
            custom={index + 1}
          />
        ))}
      </svg>
    </div>
  );
};

export default SunIcon;
