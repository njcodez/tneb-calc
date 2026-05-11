"use client";

import { motion } from "framer-motion";

interface Props {
  value: number;
  maxValue: number;

  image: string;
  label: string;

  gradient: string;
}

export default function AnimatedBar({
  value,
  maxValue,
  image,
  label,
  gradient,
}: Props) {
  const height = Math.max((value / maxValue) * 320, 60);

  return (
    <div className="flex flex-col items-center gap-5">
      {/* BAR */}

     <div className="relative flex h-[180px] w-[72px] md:h-[420px] md:w-[130px] items-end">
        <motion.div
          initial={{ height: 0 }}
          animate={{ height }}
          transition={{
            duration: 1.5,
            ease: "easeOut",
          }}
          className="relative w-full rounded-t-4xl shadow-2xl"
          style={{
            background: gradient,
          }}
        >
          {/* CM IMAGE */}

          <motion.img
            initial={{ y: 100, opacity: 0 }}
            animate={{
              y: -8,
              opacity: 1,
            }}
            transition={{
              duration: 1.4,
            }}
            src={image}
            alt={label}
            className="absolute left-1/2 top-0 w-[70px] md:w-[90px] -translate-x-1/2 -translate-y-full object-contain drop-shadow-2xl"
          />
        </motion.div>
      </div>

      {/* LABEL */}

    {label && (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{
      delay: 1,
    }}
    className="text-center"
  >
    <p className="text-sm opacity-70">
      {label}
    </p>

    <h2 className="text-3xl font-black">
      ₹{value.toLocaleString()}
    </h2>
  </motion.div>
)}
    </div>
  );
}