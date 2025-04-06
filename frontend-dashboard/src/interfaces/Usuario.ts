export interface Usuario {
    id: string;
    usuario: string;
    nombre: string;
    email: string;
    telefono?: string;
    contrasena: string;
    rol: 'supremo' | 'administrador' | 'vendedor';
    link?: string;
    estado: string;
    created_at: string;
    updated_at: string;
  }