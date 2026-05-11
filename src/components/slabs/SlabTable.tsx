"use client";

import { motion } from "framer-motion";

import { Slab } from "@/data/slabs";

interface Props {
  title: string;

  slabs: Slab[];

  theme: "red" | "yellow";
}

export default function SlabTable({
  title,
  slabs,
  theme,
}: Props) {
  const isRed = theme === "red";

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
      }}
      className={`glass overflow-hidden rounded-[2.5rem] border ${
        isRed
          ? "border-red-500/30"
          : "border-yellow-400/30"
      }`}
    >
      {/* HEADER */}

      <div
        className={`border-b border-white/10 px-8 py-6 ${
          isRed
            ? "bg-red-900/20"
            : "bg-yellow-400/10"
        }`}
      >
        <h2
          className={`text-3xl font-black ${
            isRed
              ? "text-red-300"
              : "text-yellow-300"
          }`}
        >
          {title}
        </h2>
      </div>

      {/* SLABS */}

      <div className="divide-y divide-white/10">
        {slabs.map((slab, index) => (
          <div
            key={index}
            className="flex items-center justify-between px-8 py-5 transition hover:bg-white/5"
          >
            <div>
              <p className="text-lg font-semibold">
                {slab.display.split(":")[0]}
              </p>
            </div>

            <div>
              <p
                className={`text-lg font-bold ${
                  slab.rate === 0
                    ? "text-green-400"
                    : isRed
                    ? "text-red-300"
                    : "text-yellow-300"
                }`}
              >
                {slab.display.split(":")[1]}
              </p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}