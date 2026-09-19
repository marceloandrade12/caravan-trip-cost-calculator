import { Box, Card, CardContent, Stack, Typography } from '@mui/material';

export function SettingsPage() {
  return (
    <Box sx={{ maxWidth: 960, mx: 'auto', py: 3 }}>
      <Stack spacing={2}>
        <Typography variant="h4" component="h1">
          Configurações
        </Typography>
        <Card>
          <CardContent>
            <Typography variant="h6" component="h2" gutterBottom>
              Preferências da app
            </Typography>
            <Typography color="text.secondary">
              Aqui poderão ficar os dados pessoais, padrões de combustível,
              unidades e ajustes gerais da caravana.
            </Typography>
          </CardContent>
        </Card>
      </Stack>
    </Box>
  );
}
