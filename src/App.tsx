import { motion } from "framer-motion";
import { useState } from "react";


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
          onClick={handleCubeClick}
          className="cube"
          animate={{position:"absolute", left: cube.x, top: cube.y }}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1.1 }}
        />
      </>
    );
  };

  export default App;
