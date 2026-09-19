export interface FuelCalculationInput {
  kilometers: number;
  consumption: number;
  pricePerLiter: number;
}

export interface FuelCalculationResult {
  litersRequired: number;
  fuelCost: number;
}

export interface CalculatorValues {
  kilometers: string;
  consumption: string;
  pricePerLiter: string;
}
