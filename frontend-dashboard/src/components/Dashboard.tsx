import { createSignal, onMount } from 'solid-js';
import { usuarioService } from '../services/usuarioService';

const Dashboard = () => {
  const [usuario, setUsuario] = createSignal(null);

  onMount(async () => {
    try {
      const data = await usuarioService.obtenerUsuarioConectado();
      setUsuario(data);
    } catch (error) {
      console.error('Error obteniendo el usuario conectado:', error);
    }
  });

  if (!usuario()) {
    return <div>Cargando...</div>;
  }

  return (
    <div class="container">
      <h2>Dashboard</h2>
      <p>Bienvenido, {usuario().nombre}</p>
      {/* Agrega más contenido del dashboard aquí */}
    </div>
  );
};

export default Dashboard;