import { tariffs, Slab } from "@/data/slabs";

function calculateFromSlabs(
  units: number,
  slabs: Slab[]
): number {
  let total = 0;

  let previousLimit = 0;

  for (const slab of slabs) {
    if (units <= previousLimit) break;

    const slabUnits =
      slab.upTo === Infinity
        ? units - previousLimit
        : Math.min(units, slab.upTo) - previousLimit;

    total += slabUnits * slab.rate;

    previousLimit = slab.upTo;
  }

  return Math.round(total);
}

export function calculateBill(units: number) {
  /*
    BELOW 500
  */

  const oldSlabs =
    units <= 500
      ? tariffs.old.below500
      : tariffs.old.above500;

  const newSlabs =
    units <= 500
      ? tariffs.new.below500
      : tariffs.new.above500;

  /*
    CALCULATE
  */

  const oldBill = calculateFromSlabs(
    units,
    oldSlabs
  );

  const newBill = calculateFromSlabs(
    units,
    newSlabs
  );

  return {
    oldBill,
    newBill,
    savings: oldBill - newBill,
  };
}