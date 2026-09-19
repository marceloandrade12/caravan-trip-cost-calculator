import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import { ChecklistStartPage } from '../pages/ChecklistStart';
import { ExpensesPage } from '../pages/Expenses';
import { Home } from '../pages/Home';
import { SettingsPage } from '../pages/Settings';
import { TripPlannerPage } from '../pages/TripPlanner';

const navItems = [
  { label: 'Combustível', path: '/', icon: '⛽' },
  { label: 'Checklist', path: '/checklist', icon: '✅' },
  { label: 'Viagem', path: '/viagem', icon: '🗺️' },
  { label: 'Despesas', path: '/despesas', icon: '💶' },
  { label: 'Configurações', path: '/configuracoes', icon: '⚙️' },
];

function NavMenu({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <List sx={{ p: 2, display: 'grid', gap: 1 }}>
      {navItems.map((item) => (
        <ListItem key={item.path} disablePadding>
          <ListItemButton
            component={NavLink}
            to={item.path}
            end={item.path === '/'}
            onClick={onNavigate}
            sx={({ palette }) => ({
              borderRadius: 2,
              px: 1.5,
              py: 1,
              color: 'text.primary',
              justifyContent: 'flex-start',
              '&.active': {
                bgcolor: palette.primary.main,
                color: palette.primary.contrastText,
                fontWeight: 700,
              },
              '&:hover': {
                bgcolor: palette.action.hover,
              },
            })}
          >
            <Box
              component="span"
              sx={{ mr: 1.5, fontSize: '1.1rem', display: 'inline-flex' }}
            >
              {item.icon}
            </Box>
            <ListItemText primary={item.label} sx={{ my: 0 }} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
}

export function AppLayout() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobileMenu = () => setMobileOpen(false);

  const drawer = <NavMenu onNavigate={closeMobileMenu} />;

  return (
    <Box sx={{ minHeight: '100dvh', bgcolor: 'background.default' }}>
      <AppBar
        position="sticky"
        color="transparent"
        elevation={0}
        sx={{
          borderBottom: '1px solid',
          borderColor: 'divider',
          backdropFilter: 'blur(8px)',
        }}
      >
        <Toolbar sx={{ px: { xs: 2, md: 3 } }}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{ width: '100%' }}
          >
            <Stack direction="row" alignItems="center" spacing={1}>
              <IconButton
                color="inherit"
                aria-label="Abrir menu"
                onClick={() => setMobileOpen(true)}
                sx={{
                  display: { xs: 'inline-flex', md: 'none' },
                  color: 'text.primary',
                  bgcolor: 'background.paper',
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 2,
                }}
              >
                ☰
              </IconButton>
              <Typography variant="h6" component="div" sx={{ fontWeight: 700 }}>
                Caravan Life
              </Typography>
            </Stack>
          </Stack>
        </Toolbar>
      </AppBar>

      <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
        <Box
          component="nav"
          sx={{
            width: 280,
            display: { xs: 'none', md: 'block' },
            borderRight: '1px solid',
            borderColor: 'divider',
            minHeight: 'calc(100dvh - 73px)',
            bgcolor: 'background.paper',
            boxShadow: 'inset -1px 0 0 rgba(0,0,0,0.04)',
          }}
        >
          {drawer}
        </Box>

        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={closeMobileMenu}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 260 },
          }}
        >
          {drawer}
        </Drawer>

        <Box component="main" sx={{ flex: 1, p: { xs: 2, md: 3 } }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/checklist" element={<ChecklistStartPage />} />
            <Route path="/viagem" element={<TripPlannerPage />} />
            <Route path="/despesas" element={<ExpensesPage />} />
            <Route path="/configuracoes" element={<SettingsPage />} />
          </Routes>
        </Box>
      </Box>
    </Box>
  );
}
