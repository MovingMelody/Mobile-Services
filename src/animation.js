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
      },
    },
  };
export const faqVariants = {
    offscreen: {
      opacity : 0,
      x : 50,
      y : -50,
    },
    onscreen: {
      opacity: 1,
      x : 0,
      y : 0,
      transition: {
        type: "ease",
        staggerChildren : 0.5,
        duration: 1,
        delay: 0.5,
      },
    },
  };