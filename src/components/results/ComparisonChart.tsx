"use client";

import { motion } from "framer-motion";

import AnimatedBar from "./AnimatedBar";

interface Props {
  oldBill: number;
  newBill: number;
  savings: number;

  savingsText: string;

  language: "en" | "ta";
}

export default function ComparisonChart({
  oldBill,
  newBill,
  savings,
  language,
}: Props) {
  const maxValue = Math.max(oldBill, newBill);

  return (
    <motion.section
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.9,
      }}
      className="relative mx-auto mb-24 max-w-7xl px-6"
    >
      {/* CONTAINER */}

  <div className="relative overflow-hidden rounded-[3rem] border border-white/10 bg-black/20 p-8 pt-16 backdrop-blur-xl md:p-14" >
    {/* BACKGROUND GLOW */}

        <div className="absolute inset-0 bg-gradient-to-r from-red-900/5 via-transparent to-yellow-400/5" />

        {/* TITLE */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.2,
            duration: 0.7,
          }}
          className="relative z-10 mb-16 text-center"
        >
          <h2 className="text-4xl font-black md:text-6xl">
            Bill Comparison
          </h2>

          <p className="mt-4 text-lg text-white/70">
            {language === "en"
              ? "Visual comparison between previous and revised tariff"
              : "பழைய மற்றும் புதிய கட்டண ஒப்பீடு"}
          </p>
        </motion.div>

        {/* CHART AREA */}

        {/* DESKTOP */}

<div className="relative z-10 hidden items-end justify-center gap-20 md:flex">
  {/* LEFT */}

  <div className="flex flex-col items-center">
    <p className="mb-3 text-lg font-bold text-red-400">
      Previous Tariff
    </p>

    <h3 className="mb-8 text-4xl font-black">
      ₹{oldBill.toLocaleString()}
    </h3>

    <AnimatedBar
      value={oldBill}
      maxValue={maxValue}
      image="/images/old-cm-bar.png"
      label=""
      gradient="linear-gradient(to top, #800000, #ff1e1e)"
    />
  </div>

  {/* ORB */}

  <motion.div
    initial={{
      opacity: 0,
      scale: 0.5,
    }}
    whileInView={{
      opacity: 1,
      scale: 1,
    }}
    transition={{
      delay: 1,
      duration: 0.8,
      type: "spring",
    }}
    className="relative mb-10 flex h-[260px] w-[260px] items-center justify-center rounded-full border border-yellow-400/40 bg-black/40 backdrop-blur-2xl"
  >
    <div className="absolute inset-0 rounded-full bg-yellow-400/10 blur-2xl" />

    <div className="absolute inset-3 rounded-full border border-yellow-400/20" />

    <div className="relative z-10 text-center">
      <p className="text-2xl font-semibold text-[#FFD700]">
        NEW CM SAVED
      </p>

      <h2 className="mt-3 text-6xl font-black text-white">
        ₹{savings.toLocaleString()}
      </h2>
    </div>
  </motion.div>

  {/* RIGHT */}

  <div className="flex flex-col items-center">
    <p className="mb-3 text-lg font-bold text-yellow-300">
      Revised Tariff
    </p>

    <h3 className="mb-8 text-4xl font-black">
      ₹{newBill.toLocaleString()}
    </h3>

    <AnimatedBar
      value={newBill}
      maxValue={maxValue}
      image="/images/new-cm-bar.png"
      label=""
      gradient="linear-gradient(to top, #FFD700, #fff07a)"
    />
  </div>
</div>

{/* MOBILE */}

<div className="relative z-10 md:hidden">
  {/* SAVINGS */}

  <motion.div
    initial={{
      opacity: 0,
      scale: 0.8,
    }}
    whileInView={{
      opacity: 1,
      scale: 1,
    }}
    className="mx-auto mb-50 flex w-fit flex-col items-center rounded-[2rem] border border-yellow-400/30 bg-yellow-400/10 px-8 py-6 text-center backdrop-blur-xl"
  >
    <p className="text-lg font-bold text-[#FFD700]">
      NEW CM SAVED
    </p>

    <h2 className="mt-2 text-5xl font-black">
      ₹{savings.toLocaleString()}
    </h2>
  </motion.div>

  {/* BARS */}

  <div className="mt-10 flex items-end justify-center gap-8">
    {/* LEFT */}

    <div className="flex flex-col items-center">
      <p className="mb-2 text-sm font-bold text-red-400">
        OLD
      </p>

      <AnimatedBar
        value={oldBill}
        maxValue={maxValue}
        image="/images/old-cm-bar.png"
        label=""
        gradient="linear-gradient(to top, #800000, #ff1e1e)"
      />

      <h3 className="mt-4 text-3xl font-black">
        ₹{oldBill.toLocaleString()}
      </h3>
    </div>

    {/* RIGHT */}

    <div className="flex flex-col items-center">
      <p className="mb-2 text-sm font-bold text-yellow-300">
        NEW
      </p>

      <AnimatedBar
        value={newBill}
        maxValue={maxValue}
        image="/images/new-cm-bar.png"
        label=""
        gradient="linear-gradient(to top, #FFD700, #fff07a)"
      />

      <h3 className="mt-4 text-3xl font-black">
        ₹{newBill.toLocaleString()}
      </h3>
    </div>
  </div>
</div>
      </div>
    </motion.section>
  );
}