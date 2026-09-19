import {
  Box,
  Checkbox,
  Divider,
  FormControlLabel,
  Paper,
  Stack,
  Typography,
} from '@mui/material';

const sections = [
  {
    title: '1. Pneus e rodas',
    items: ['Verificar pressão dos 2 pneus a frio (2.5)'],
  },
  {
    title: '2. Engate / ligação ao carro',
    items: [
      'Engatar corretamente a cabeça da caravana na bola',
      'Confirmar que o mecanismo de engate ficou bloqueado',
      'Ligar o cabo de segurança',
      'Levantar completamente a roda jockey',
    ],
  },
  {
    title: '3. Travões',
    items: ['Confirmar que o travão de mão da caravana está destravado'],
  },
  {
    title: '4. Iluminação',
    subtitle: 'Com a ficha ligada:',
    items: [
      'Luzes de presença',
      'Piscas esquerdo',
      'Piscas direito',
      'Luzes de travão',
      'Luz da matrícula',
    ],
  },
  {
    title: '5. Carga interior',
    items: [
      'Armários fechados',
      'Portas/trincos fechados',
      'Objetos pesados devidamente acondicionados',
      'Nada solto sobre mesas/bancadas',
      'Frigorífico fechado e trancado',
      'Janelas fechadas e bloqueadas',
      'Claraboias fechadas',
      'Cortinas/persianas presas',
      'Mesa convertida/cama devidamente fixa',
      'Objetos que possam cair durante a viagem acondicionados',
    ],
  },
  {
    title: '6. Exterior da caravana',
    subtitle: 'Fazer uma volta completa à caravana:',
    items: [
      'Porta principal fechada e trancada',
      'Portas exteriores dos compartimentos fechadas',
      'Tampas de acesso fechadas',
      'Janelas fechadas',
      'Claraboias fechadas',
      'Cabo elétrico do parque desligado e guardado',
      'Calços removidos',
      'Nada ficou ligado ao parque',
    ],
  },
  {
    title: '7. Sistema elétrico 230 V',
    items: ['Desligar alimentação 230 V'],
  },
  {
    title: '8. Segurança / equipamento',
    items: [
      'Extintor acessível e dentro da validade',
      'Kit primeiros socorros',
      'Lanterna',
      'Calços',
      'Macaco',
      'Chave de rodas',
      'Roda suplente',
      'Ferramentas básicas',
    ],
  },
  {
    title: '9. Antes de sair do parque',
    subtitle: 'Depois de tudo ligado:',
    items: [
      'Retirar calços',
      'Retirar travão de mão da caravana',
      'Baixar/levantar corretamente a roda jockey',
      'Confirmar novamente o engate',
      'Confirmar cabo de segurança',
      'Confirmar ficha elétrica',
      'Fazer volta final de 360° à caravana',
      'Confirmar que não ficou absolutamente nada ligado ao parque',
      'Verificar espelhos do Ateca',
      'Confirmar visibilidade traseira',
      'Fazer teste de travagem suave nos primeiros metros',
    ],
  },
];

export function ChecklistStartPage() {
  return (
    <Box sx={{ maxWidth: 1000, mx: 'auto', py: 3 }}>
      <Stack spacing={3}>
        <Box>
          <Typography variant="h4" component="h1" sx={{ fontWeight: 800 }}>
            Checklist — Antes de arrancar
          </Typography>
        </Box>

        {sections.map((section) => (
          <Paper
            key={section.title}
            elevation={0}
            sx={{
              border: '1px solid',
              borderColor: 'divider',
              borderRadius: 3,
              p: { xs: 2, sm: 3 },
            }}
          >
            <Stack spacing={2}>
              <Typography variant="h5" component="h2" sx={{ fontWeight: 700 }}>
                {section.title}
              </Typography>

              {section.subtitle ? (
                <Typography color="text.secondary" sx={{ fontWeight: 500 }}>
                  {section.subtitle}
                </Typography>
              ) : null}

              <Divider />

              <Stack spacing={1}>
                {section.items.map((item) => (
                  <FormControlLabel
                    key={item}
                    control={<Checkbox color="primary" />}
                    label={item}
                    sx={{ alignItems: 'center', ml: 0 }}
                  />
                ))}
              </Stack>
            </Stack>
          </Paper>
        ))}
      </Stack>
    </Box>
  );
}
