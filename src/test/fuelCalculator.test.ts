import { describe, expect, it } from 'vitest';
import { calculateFuelCost } from '../utils/fuelCalculator';

describe('calculateFuelCost', () => {
  it('calculates the normal case correctly', () => {
    expect(calculateFuelCost({ kilometers: 300, consumption: 8.5, pricePerLiter: 1.7 })).toEqual({
      litersRequired: 25.5,
      fuelCost: 43.35,
    });
  });

  it('supports decimal values', () => {
    const result = calculateFuelCost({ kilometers: 325.5, consumption: 10.2, pricePerLiter: 1.729 });
    expect(result.litersRequired).toBeCloseTo(33.201, 10);
    expect(result.fuelCost).toBeCloseTo(57.407529, 10);
  });

  it('supports small values', () => {
    expect(calculateFuelCost({ kilometers: 1, consumption: 5, pricePerLiter: 2 })).toEqual({
      litersRequired: 0.05,
      fuelCost: 0.1,
    });
  });

  it('supports large values', () => {
    const result = calculateFuelCost({ kilometers: 10000, consumption: 12, pricePerLiter: 2 });
    expect(result.litersRequired).toBe(1200);
    expect(result.fuelCost).toBe(2400);
  });

  it.each([
    { kilometers: 0, consumption: 8.5, pricePerLiter: 1.7 },
    { kilometers: -1, consumption: 8.5, pricePerLiter: 1.7 },
    { kilometers: 300, consumption: 0, pricePerLiter: 1.7 },
    { kilometers: 300, consumption: -1, pricePerLiter: 1.7 },
    { kilometers: 300, consumption: 8.5, pricePerLiter: 0 },
    { kilometers: 300, consumption: 8.5, pricePerLiter: -1 },
  ])('rejects invalid input: $kilometers / $consumption / $pricePerLiter', (input) => {
    expect(() => calculateFuelCost(input)).toThrow();
  });
});
