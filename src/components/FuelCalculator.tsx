import { Box, Paper, Stack, Typography } from '@mui/material';
import { useCallback, useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import type {
  CalculatorValues,
  FuelCalculationResult,
} from '../types/calculator';
import { calculateFuelCost } from '../utils/fuelCalculator';
import { CalculationResult } from './CalculationResult';
import { CalculatorForm } from './CalculatorForm';

const INITIAL_VALUES: CalculatorValues = {
  kilometers: '100',
  consumption: '10',
  pricePerLiter: '2',
};

const STORAGE_KEY = 'caravan-cost-calculator:values';

export function FuelCalculator() {
  const [values, setValues] = useLocalStorage<CalculatorValues>(
    STORAGE_KEY,
    INITIAL_VALUES,
  );
  const [result, setResult] = useState<FuelCalculationResult | null>(() => {
    const kilometers = Number(values.kilometers);
    const consumption = Number(values.consumption);
    const pricePerLiter = Number(values.pricePerLiter);
    if (
      [kilometers, consumption, pricePerLiter].every(
        (value) => Number.isFinite(value) && value > 0,
      )
    ) {
      return calculateFuelCost({ kilometers, consumption, pricePerLiter });
    }
    return null;
  });

  const calculate = useCallback(() => {
    const kilometers = Number(values.kilometers);
    const consumption = Number(values.consumption);
    const pricePerLiter = Number(values.pricePerLiter);

    if (
      [kilometers, consumption, pricePerLiter].every(
        (value) => Number.isFinite(value) && value > 0,
      )
    ) {
      setResult(calculateFuelCost({ kilometers, consumption, pricePerLiter }));
    } else {
      setResult(null);
    }
  }, [values]);

  const clear = () => {
    setValues(INITIAL_VALUES);
    setResult(
      calculateFuelCost({
        kilometers: parseFloat(INITIAL_VALUES.kilometers),
        consumption: parseFloat(INITIAL_VALUES.consumption),
        pricePerLiter: parseFloat(INITIAL_VALUES.pricePerLiter),
      }),
    );
  };

  return (
    <Paper
      elevation={0}
      sx={{
        width: '100%',
        maxWidth: 500,
        p: { xs: 2, sm: 3 },
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 3,
      }}
    >
      <Stack spacing={3}>
        <Box>
          <Typography component="h1" variant="h1">
            🚐 Caravan Cost
          </Typography>
          <Typography color="text.secondary" mt={0.5}>
            Calculadora rápida de combustível
          </Typography>
        </Box>
        <CalculatorForm
          values={values}
          onChange={setValues}
          onCalculate={calculate}
          onClear={clear}
        />
        <CalculationResult result={result} />
      </Stack>
    </Paper>
  );
}
