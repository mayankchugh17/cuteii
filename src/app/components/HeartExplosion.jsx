"use client";

import { useState } from "react";
import { motion } from "framer-motion";

function HeartExplosion() {
  const [hearts, setHearts] = useState([]);

  const handleClick = (e) => {
    const newHearts = [];

    for (let i = 0; i < 8; i++) {
      newHearts.push({
        id: Date.now() + i,
        x: e.clientX,
        y: e.clientY,
      });
    }

    setHearts((prev) => [...prev, ...newHearts]);

    setTimeout(() => {
      setHearts((prev) => prev.slice(8));
    }, 2000);
  };

  return (
    <div
      onClick={handleClick}
      className="fixed inset-0 z-50 pointer-events-auto"
    >
      {hearts.map((heart) => (
        <motion.span
          key={heart.id}
          initial={{
            x: heart.x,
            y: heart.y,
            opacity: 1,
            scale: 1,
          }}
          animate={{
            x: heart.x + (Math.random() - 0.5) * 200,
            y: heart.y - Math.random() * 200,
            opacity: 0,
            scale: 1.5,
          }}
          transition={{ duration: 1.5 }}
          className="fixed text-2xl"
        >
          ❤️
        </motion.span>
      ))}
    </div>
  );
}

export default HeartExplosion;