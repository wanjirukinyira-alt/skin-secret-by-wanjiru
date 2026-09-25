"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ScrollZoomImage({ src, alt, className = "" }) {
  const imageRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.28, 1, 0.84]);

  return (
    <div ref={imageRef} className={`overflow-hidden ${className}`}>
      <motion.img src={src} alt={alt} style={{ scale }} className="size-full object-cover" />
    </div>
  );
}
