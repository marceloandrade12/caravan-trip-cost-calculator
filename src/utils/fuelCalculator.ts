import type { FuelCalculationInput, FuelCalculationResult } from '../types/calculator';

export function calculateFuelCost({
  kilometers,
  consumption,
  pricePerLiter,
}: FuelCalculationInput): FuelCalculationResult {
  if (kilometers <= 0 || consumption <= 0 || pricePerLiter <= 0) {
    throw new Error('All calculation values must be greater than zero.');
  }

  const litersRequired = (kilometers * consumption) / 100;
  const fuelCost = litersRequired * pricePerLiter;

  return { litersRequired, fuelCost };
}
