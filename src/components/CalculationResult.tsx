import { Box, Divider, Stack, Typography } from '@mui/material';
import type { FuelCalculationResult } from '../types/calculator';

interface CalculationResultProps {
  result: FuelCalculationResult | null;
}

const euroFormatter = new Intl.NumberFormat('pt-PT', {
  style: 'currency',
  currency: 'EUR',
});
const literFormatter = new Intl.NumberFormat('pt-PT', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export function CalculationResult({ result }: CalculationResultProps) {
  return (
    <Box
      sx={{
        p: { xs: 2.5, sm: 3 },
        borderRadius: 3,
        bgcolor: 'primary.main',
        color: 'primary.contrastText',
      }}
      aria-live="polite"
    >
      <Typography
        variant="overline"
        sx={{ fontWeight: 700, letterSpacing: 1.2 }}
      >
        Resultado
      </Typography>
      {result ? (
        <Stack spacing={2} mt={1}>
          <Box>
            <Typography
              variant="h6"
              sx={{ opacity: 0.85, fontSize: '0.95rem' }}
            >
              Custo estimado
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: '2.5rem', sm: '3rem' },
                lineHeight: 1.05,
                fontWeight: 800,
              }}
            >
              {euroFormatter.format(result.fuelCost)}
            </Typography>
          </Box>
          <Divider sx={{ borderColor: 'rgba(255,255,255,0.25)' }} />
          <Box>
            <Typography
              variant="h6"
              sx={{ opacity: 0.85, fontSize: '0.95rem' }}
            >
              Combustível necessário
            </Typography>
            <Typography sx={{ fontSize: '1.4rem', fontWeight: 700 }}>
              {literFormatter.format(result.litersRequired)} L
            </Typography>
          </Box>
        </Stack>
      ) : (
        <Typography mt={1} sx={{ opacity: 0.85 }}>
          Preencha os valores para calcular o custo.
        </Typography>
      )}
    </Box>
  );
}
