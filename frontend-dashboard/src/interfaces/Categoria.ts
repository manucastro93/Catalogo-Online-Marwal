export interface Categoria {
    id: string;
    nombre: string;
    estado: 'activo' | 'inactivo';
    usuario_id: string;
    created_at: string;
    updated_at: string;
  }