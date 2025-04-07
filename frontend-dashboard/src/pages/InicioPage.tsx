import { Component } from 'solid-js';
import { useNavigate } from '@solidjs/router';
import { useAuth } from '../contexts/authContext';

const InicioPage: Component = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <div class='content'>
      <h1>Página de Inicio</h1>
      <button onClick={handleLogout}>Cerrar Sesión</button>
    </div>
  );
};

export default InicioPage;