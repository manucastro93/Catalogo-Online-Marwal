import { lazy } from 'solid-js';
import { Routes, Route } from '@solidjs/router';
import ProtectedRoute from './components/ProtectedRoute';

// Ajustar las importaciones dinámicas para que coincidan con el tipo esperado
const InicioPage = lazy(() => import('./pages/InicioPage').then(module => ({ default: module.default })));
const LoginPage = lazy(() => import('./pages/LoginPage').then(module => ({ default: module.default })));
const DashboardComponent = lazy(() => import('./components/DashboardComponent').then(module => ({ default: module.default })));

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" component={LoginPage} />
      <Route path="/inicio" element={<ProtectedRoute><InicioPage /></ProtectedRoute>} />
      <Route path="/dashboard" element={<ProtectedRoute><DashboardComponent /></ProtectedRoute>} />
      <Route path="/" element={<ProtectedRoute><InicioPage /></ProtectedRoute>} />
    </Routes>
  );
};

export default AppRoutes;