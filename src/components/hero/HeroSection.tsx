"use client";

import { motion } from "framer-motion";

interface Props {
  units: string;
  setUnits: (value: string) => void;
  onCalculate: () => void;

  text: {
    title: string;
    subtitle: string;
    placeholder: string;
    button: string;
  };
}

export default function HeroSection({
  units,
  setUnits,
  onCalculate,
  text,
}: Props) {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-28 md:px-10">
      {/* CINEMATIC GLOWS */}

      <div className="hero-glow-red left-[-10rem] top-[5rem]" />

      <div className="hero-glow-yellow bottom-[-10rem] right-[-10rem]" />

      {/* GRID */}

      <div className="grid w-full max-w-[1500px] grid-cols-1 items-center gap-10 md:grid-cols-[340px_1fr_340px]">
        {/* LEFT CARD */}

       

    <motion.div
  initial={{
    opacity: 0,
    y: 80,
    scale: 0.96,
  }}
  animate={{
    opacity: 1,
    y: 0,
    scale: 1,
  }}
  transition={{
    duration: 1,
    ease: [0.22, 1, 0.36, 1],
  }} 
  className="hidden md:flex justify-center"
>

  <motion.div
 whileHover={{
  y: -6,
  scale: 1.015,
  transition: {
    duration: 0.35,
  },
}}
    className="glass overflow-hidden border border-red-500/30 shadow-[0_0_60px_rgba(128,0,0,0.28)]"
style={{
  clipPath:
  "polygon(0% 0%, 100% 5%, 100% 95%, 0% 100%)",
}}
  >
    <img
      src="/images/old-cm.png"
      alt="Old CM"
      className="h-[320px] w-[520px] object-cover"
    />

    <div className="border-t border-white/10 bg-black/50 p-5 text-center backdrop-blur-xl">
      <h3 className="text-3xl font-black text-white">
        2021 - 2026
      </h3>

      <p className="mt-1 text-base text-red-300">
        Previous Tariff
      </p>
    </div>
  </motion.div>
</motion.div>

        {/* CENTER */}

        <div className="relative text-center">
          {/* TITLE */}

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="mx-auto max-w-[760px] text-5xl font-black leading-[0.92] tracking-tight md:text-8xl"
          >
            <span className="gradient-text">
              TNEB Bill
            </span>

            <br />

            <span className="gradient-text">
              Comparison
            </span>

            <br />

            <span className="gradient-text">
              Calculator
            </span>
          </motion.h1>

          {/* SUBTITLE */}

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.8,
            }}
            className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white/75 md:text-2xl"
          >
            {text.subtitle}
          </motion.p>

          {/* INPUT CARD */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.4,
              duration: 0.8,
            }}
            className="glass mx-auto mt-12 max-w-xl rounded-[2.5rem] border border-white/10 p-6 shadow-[0_0_60px_rgba(255,215,0,0.22)]"
          >
            <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-3">
              <input
                type="number"
                autoComplete="off"
                value={units}
                onChange={(e) => setUnits(e.target.value)}
                placeholder={text.placeholder}
                className="w-full bg-transparent px-4 py-4 text-xl outline-none"
              />
            </div>

            <motion.button
              whileHover={{
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.97,
              }}
              onClick={onCalculate}
              className="mt-5 w-full rounded-[1.5rem] bg-[#FFD700] px-5 py-5 text-xl font-black text-black shadow-[0_0_40px_rgba(255,215,0,0.25)]"
            >
              ⚡ {text.button}
            </motion.button>
          </motion.div>
        </div>

        {/* RIGHT CARD */}

<motion.div
  initial={{
    opacity: 0,
    y: 80,
    scale: 0.96,
  }}
  animate={{
    opacity: 1,
    y: 0,
    scale: 1,
  }}
  transition={{
    duration: 1,
    delay: 0.15,
    ease: [0.22, 1, 0.36, 1],
  }}
  className="hidden md:flex justify-center"
>
  <motion.div
    whileHover={{
  y: -6,
  scale: 1.015,
  transition: {
    duration: 0.35,
  },
}}
   className="glass overflow-hidden border border-yellow-400/30 shadow-[0_0_60px_rgba(255,215,0,0.28)]"
style={{
  clipPath:
    "polygon(0% 8%, 100% 0%, 100% 100%, 0% 92%)",
}}
  >
    <img
      src="/images/new-cm.png"
      alt="New CM"
      className="h-[320px] w-[560px]  object-cover"
    />

    <div className="border-t border-white/10 bg-black/50 p-5 text-center backdrop-blur-xl">
      <h3 className="text-3xl font-black text-white">
        2026 - Unknown
      </h3>

      <p className="mt-1 text-base text-yellow-300">
        Revised Tariff
      </p>
    </div>
  </motion.div>
</motion.div>
      </div>
    </section>
  );
}