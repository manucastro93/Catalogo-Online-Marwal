import { Component, createSignal, onMount, JSX } from "solid-js";
import { useNavigate } from '@solidjs/router';
import { useAuth } from '../../contexts/authContext';
import { usuarioService } from '../../services/usuarioService';

const Header: Component = () => {
      const { logout } = useAuth();
      const navigate = useNavigate();
      const [usuario, setUsername] = createSignal("");
      onMount(async () => {
        try {
          const user = await usuarioService.obtenerUsuarioConectado();
          setUsername(user.usuario);
        } catch (error) {
          console.error("Error al obtener el usuario actual o logo:", error);
        }
      });
      const handleLogout = async () => {
        try {
          await logout();
          navigate('/login');
        } catch (error) {
          console.error('Logout failed:', error);
        }
      };
  return (
    <header class='header'>
      <h1>Dashboard</h1>
      <div class="user-info">
          <span class="username">{usuario()}</span>
          <button class="btn btn-logout" type="button" onClick={handleLogout}>Cerrar Sesión</button>
        </div>
    </header>
  );
};

export default Header;