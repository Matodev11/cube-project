import { motion } from "framer-motion";
import { useState } from "react";

const arrow = {
  rest: { rotate: 0 },
  hover: { rotate: 360 },
};

const App = () => {
  const [cube, setCube] = useState({ x: "45%", y: "40%" });

  const handleCubeClick = () => {
    const X = `${Math.random() * 100}%`;
    const Y = `${Math.random() * 100}%`;
    setCube({ x: X, y: Y });
  };
  return (
    <>
      <motion.div
        transition={{ type: "spring", stiffness: 10, damping: 10, mass: 10 }}
        onClick={handleCubeClick}
        className="cube"
        variants={arrow}
        initial="rest"
        whileHover="hover"
        animate={{ position: "absolute", left: cube.x, top: cube.y }}
        whileTap={{ scale: 1.1 }}
      />
    </>
  );
};

export default App;
