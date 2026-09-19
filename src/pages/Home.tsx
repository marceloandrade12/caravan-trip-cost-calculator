import { Box } from '@mui/material';
import { FuelCalculator } from '../components/FuelCalculator';

export function Home() {
  return (
    <Box component="main" sx={{ minHeight: '100dvh', display: 'grid', placeItems: 'center', p: { xs: 1.5, sm: 3 } }}>
      <FuelCalculator />
    </Box>
  );
}
