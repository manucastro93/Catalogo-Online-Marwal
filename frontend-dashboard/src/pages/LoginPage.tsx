import { createSignal } from 'solid-js';
import { usuarioService } from '../services/usuarioService';

const LoginPage = () => {
  const [nombreUsuario, setNombreUsuario] = createSignal('');
  const [contrasena, setContrasena] = createSignal('');

  const handleSubmit = async (event: Event) => {
    event.preventDefault();
    try {
      const data = await usuarioService.login(nombreUsuario(), contrasena());
      console.log('Login exitoso:', data);
    } catch (error) {
      console.error('Error en el login:', error);
    }
  };

  return (
    <div class="container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div class="mb-3">
          <label for="nombreUsuario" class="form-label">Usuario</label>
          <input
            type="text"
            class="form-control"
            id="nombreUsuario"
            value={nombreUsuario()}
            onInput={(e) => setNombreUsuario(e.currentTarget.value)}
            required
          />
        </div>
        <div class="mb-3">
          <label for="contrasena" class="form-label">Contraseña</label>
          <input
            type="password"
            class="form-control"
            id="contrasena"
            value={contrasena()}
            onInput={(e) => setContrasena(e.currentTarget.value)}
            required
          />
        </div>
        <button type="submit" class="btn btn-primary">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;