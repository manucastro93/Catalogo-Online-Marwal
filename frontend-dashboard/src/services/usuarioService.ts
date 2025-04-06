import { api } from './api';
import { Usuario } from '../interfaces/Usuario';

export const usuarioService = {
  login: async (usuario: string, contrasena: string) => {
    const response = await api.post('/login', { usuario, contrasena });
    return response.data;
  },
  logout: async () => {
    const response = await api.post('/logout');
    return response.data;
  },
  obtenerUsuarioConectado: async () => {
    const response = await api.get('/me');
    return response.data;
  },
  obtenerUsuarios: async () => {
    const response = await api.get('/usuarios');
    return response.data;
  },
  obtenerUsuarioPorId: async (id: string) => {
    const response = await api.get(`/usuarios/${id}`);
    return response.data;
  },
  crearUsuario: async (usuario: Usuario) => {
    const response = await api.post('/usuarios', usuario);
    return response.data;
  },
  actualizarUsuario: async (id: string, usuario: Usuario) => {
    const response = await api.put(`/usuarios/${id}`, usuario);
    return response.data;
  },
  eliminarUsuario: async (id: string) => {
    const response = await api.delete(`/usuarios/${id}`);
    return response.data;
  },
};