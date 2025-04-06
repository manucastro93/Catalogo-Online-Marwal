export interface Producto {
    id: string;
    codigo: string;
    nombre: string;
    descripcion?: string;
    precio: number;
    categoria_id: string;
    stock: number;
    estado: 'activo' | 'inactivo';
    usuario_id: string;
    created_at: string;
    updated_at: string;
  }