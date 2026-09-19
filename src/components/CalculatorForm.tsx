import { Button, Stack, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import type { CalculatorValues } from '../types/calculator';

interface CalculatorFormProps {
  values: CalculatorValues;
  onChange: (values: CalculatorValues) => void;
  onCalculate: () => void;
  onClear: () => void;
}

interface FieldErrors {
  kilometers?: string;
  consumption?: string;
  pricePerLiter?: string;
}

function validate(values: CalculatorValues): FieldErrors {
  const errors: FieldErrors = {};
  const kilometers = Number(values.kilometers);
  const consumption = Number(values.consumption);
  const pricePerLiter = Number(values.pricePerLiter);

  if (!values.kilometers.trim()) errors.kilometers = 'Introduza os quilómetros.';
  else if (!Number.isFinite(kilometers) || kilometers <= 0) errors.kilometers = 'Os quilómetros devem ser superiores a 0.';

  if (!values.consumption.trim()) errors.consumption = 'Introduza o consumo.';
  else if (!Number.isFinite(consumption) || consumption <= 0) errors.consumption = 'O consumo deve ser superior a 0.';

  if (!values.pricePerLiter.trim()) errors.pricePerLiter = 'Introduza o preço por litro.';
  else if (!Number.isFinite(pricePerLiter) || pricePerLiter <= 0) errors.pricePerLiter = 'O preço deve ser superior a 0.';

  return errors;
}

export function CalculatorForm({ values, onChange, onCalculate, onClear }: CalculatorFormProps) {
  const [errors, setErrors] = useState<FieldErrors>({});

  useEffect(() => {
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) onCalculate();
  }, [values, onCalculate]);

  const update = (field: keyof CalculatorValues, value: string) => {
    onChange({ ...values, [field]: value });
  };

  return (
    <Stack component="form" spacing={2} onSubmit={(event) => { event.preventDefault(); onCalculate(); }} noValidate>
      <TextField
        label="Quilómetros"
        value={values.kilometers}
        onChange={(event) => update('kilometers', event.target.value)}
        type="number"
        inputMode="decimal"
        inputProps={{ min: 0, step: 'any' }}
        error={Boolean(errors.kilometers)}
        helperText={errors.kilometers}
      />
      <TextField
        label="Consumo (L/100 km)"
        value={values.consumption}
        onChange={(event) => update('consumption', event.target.value)}
        type="number"
        inputMode="decimal"
        inputProps={{ min: 0, step: 'any' }}
        error={Boolean(errors.consumption)}
        helperText={errors.consumption}
      />
      <TextField
        label="Preço combustível (€/L)"
        value={values.pricePerLiter}
        onChange={(event) => update('pricePerLiter', event.target.value)}
        type="number"
        inputMode="decimal"
        inputProps={{ min: 0, step: 'any' }}
        error={Boolean(errors.pricePerLiter)}
        helperText={errors.pricePerLiter}
      />
      <Button type="submit" variant="contained" size="large" disabled={Object.keys(errors).length > 0}>
        Calcular
      </Button>
      <Button type="button" variant="text" color="inherit" onClick={onClear} sx={{ alignSelf: 'center', minHeight: 40 }}>
        Limpar
      </Button>
    </Stack>
  );
}
