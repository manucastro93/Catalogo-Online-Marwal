import { Component } from 'solid-js';
import { NavLink } from '@solidjs/router';

const Sidebar: Component = () => {
  return (
    <aside class='sidebar'>
      <nav>
        <ul>
          <li><NavLink href="/dashboard/productos">Productos</NavLink></li>
          <li><NavLink href="/dashboard/clientes">Clientes</NavLink></li>
          <li><NavLink href="/dashboard/pedidos">Pedidos</NavLink></li>
          <li><NavLink href="/dashboard/pagina">Página</NavLink></li>
          <li><NavLink href="/dashboard/usuarios">Usuarios</NavLink></li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;