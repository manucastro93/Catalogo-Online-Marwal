import { lazy } from 'solid-js';
import { Routes, Route } from '@solidjs/router';
import ProtectedRoute from './components/ProtectedRoute';

const LoginPage = lazy(() => import('./pages/LoginPage').then(module => ({ default: module.default })));
const DashboardComponent = lazy(() => import('./components/DashboardComponent').then(module => ({ default: module.default })));
const InicioPage = lazy(() => import('./pages/InicioPage').then(module => ({ default: module.default })));
const ProductosPage = lazy(() => import('./pages/ProductosPage').then(module => ({ default: module.default })));
const ClientesPage = lazy(() => import('./pages/ClientesPage').then(module => ({ default: module.default })));
const PedidosPage = lazy(() => import('./pages/PedidosPage').then(module => ({ default: module.default })));
const PaginaPage = lazy(() => import('./pages/PaginaPage').then(module => ({ default: module.default })));
const UsuariosPage = lazy(() => import('./pages/UsuariosPage').then(module => ({ default: module.default })));

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" component={LoginPage} />
      <Route path="/" component={LoginPage} />
      <Route path="/admin" component={LoginPage} />
      <Route path="/dashboard" element={<ProtectedRoute><DashboardComponent /></ProtectedRoute>}>
        <Route path="/inicio" element={<InicioPage />} />
        <Route path="/productos" element={<ProductosPage />} />
        <Route path="/clientes" element={<ClientesPage />} />
        <Route path="/pedidos" element={<PedidosPage />} />
        <Route path="/pagina" element={<PaginaPage />} />
        <Route path="/usuarios" element={<UsuariosPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;