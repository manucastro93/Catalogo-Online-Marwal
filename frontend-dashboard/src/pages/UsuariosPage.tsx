import { Component } from 'solid-js';
import UsuariosList from '../components/Usuarios/UsuariosList';

const UsuariosPage: Component = () => {
  return (
    <div>
      <h1>Usuarios</h1>
      <UsuariosList />
    </div>
  );
};

export default UsuariosPage;