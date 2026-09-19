import { Box, Card, CardContent, Stack, Typography } from '@mui/material';

export function TripPlannerPage() {
  return (
    <Box sx={{ maxWidth: 960, mx: 'auto', py: 3 }}>
      <Stack spacing={2}>
        <Typography variant="h4" component="h1">
          Planeamento de viagem
        </Typography>
        <Card>
          <CardContent>
            <Typography variant="h6" component="h2" gutterBottom>
              Próximas funcionalidades
            </Typography>
            <Typography color="text.secondary">
              Aqui será possível gerir itinerários, paragens, distâncias e
              previsões de consumo ao longo do percurso.
            </Typography>
          </CardContent>
        </Card>
      </Stack>
    </Box>
  );
}
