import { Component, onMount } from 'solid-js';
import { useNavigate } from 'solid-start/router';
import Dashboard from '../components/Dashboard';
import { usuarioService } from '../services/usuarioService';

const Inicio: Component = () => {
  const navigate = useNavigate();

  onMount(async () => {
    try {
      await usuarioService.obtenerUsuarioConectado();
    } catch (error) {
      console.error('Error obteniendo el usuario conectado:', error);
      navigate('/login');
    }
  });

  return (
    <div>
      <Dashboard />
    </div>
  );
};

export default Inicio;