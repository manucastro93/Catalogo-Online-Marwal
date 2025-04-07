import { createSignal, onMount } from 'solid-js';
import { usuarioService } from '../../services/usuarioService';
import { Usuario } from '../../interfaces/Usuario';

const UsuariosList = () => {
  const [usuarios, setUsuarios] = createSignal<Usuario[]>([]);

  onMount(async () => {
    const data = await usuarioService.obtenerUsuarios();
    setUsuarios(data);
  });

  return (
    <div>
      <h1>Lista de Usuarios</h1>
      <ul>
        {usuarios().map(usuario => (
          <li>{usuario.nombre}</li>
        ))}
      </ul>
    </div>
  );
};

export default UsuariosList;