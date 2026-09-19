import { Box, Card, CardContent, Stack, Typography } from '@mui/material';

export function ExpensesPage() {
  return (
    <Box sx={{ maxWidth: 960, mx: 'auto', py: 3 }}>
      <Stack spacing={2}>
        <Typography variant="h4" component="h1">
          Despesas da caravana
        </Typography>
        <Card>
          <CardContent>
            <Typography variant="h6" component="h2" gutterBottom>
              Em desenvolvimento
            </Typography>
            <Typography color="text.secondary">
              Esta área vai permitir controlar campings, manutenção,
              alimentação, gasolina e outros gastos gerais da viatura.
            </Typography>
          </CardContent>
        </Card>
      </Stack>
    </Box>
  );
}
