export const cardVariants = {
    offscreen: {
      opacity : 0,
      y : 100
    },
    onscreen: {
      opacity: 1,
      y : 0,
      transition: {
        type: "ease",
        duration: 1.2,
        staggerChildren: 0.5
      },
    },
  };