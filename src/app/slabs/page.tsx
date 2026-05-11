"use client";

import Link from "next/link";

import { motion } from "framer-motion";

import SlabTable from "@/components/slabs/SlabTable";

import { tariffs } from "@/data/slabs";

export default function SlabsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden px-6 py-32">
      {/* BACKGROUND */}

      <div className="background-flow" />

      <div className="hero-glow-red left-[-10rem] top-[10rem]" />

      <div className="hero-glow-yellow bottom-[-10rem] right-[-10rem]" />

      {/* NAVBAR */}

      <nav className="fixed left-1/2 top-6 z-50 flex -translate-x-1/2 items-center gap-3 rounded-full border border-white/10 bg-black/40 px-6 py-4 backdrop-blur-2xl">
        <Link
          href="/"
          className="text-white/70 transition hover:text-white"
        >
          Home
        </Link>

        <div className="h-5 w-px bg-white/10" />

        <Link
          href="/slabs"
          className="font-bold text-[#FFD700]"
        >
          Slabs
        </Link>
      </nav>

      {/* HERO */}

      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.8,
        }}
        className="mx-auto max-w-5xl text-center"
      >
        <h1 className="gradient-text text-5xl font-black md:text-7xl">
          Tariff Slabs
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg text-white/70 md:text-2xl">
          Compare the previous and revised TNEB
          electricity tariff structures.
        </p>
      </motion.div>

      {/* BELOW 500 */}

      <section className="mx-auto mt-24 max-w-7xl">
        <motion.h2
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          className="mb-10 text-center text-4xl font-black"
        >
          Consumption Below 500 Units
        </motion.h2>

        <div className="grid gap-10 md:grid-cols-2">
          <SlabTable
            title="Old CM Tariff"
            slabs={tariffs.old.below500}
            theme="red"
          />

          <SlabTable
            title="New CM Tariff"
            slabs={tariffs.new.below500}
            theme="yellow"
          />
        </div>
      </section>

      {/* ABOVE 500 */}

      <section className="mx-auto mt-28 max-w-7xl">
        <motion.h2
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          className="mb-10 text-center text-4xl font-black"
        >
          Consumption Above 500 Units(Unchanged)
        </motion.h2>

        <div className="grid gap-10 md:grid-cols-2">
          <SlabTable
            title="Old CM Tariff"
            slabs={tariffs.old.above500}
            theme="red"
          />

          <SlabTable
            title="New CM Tariff"
            slabs={tariffs.new.above500}
            theme="yellow"
          />
        </div>
      </section>
    </main>
  );
}