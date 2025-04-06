export interface Cliente {
    id: string;
    nombre: string;
    email: string;
    telefono: string;
    cuit_cuil: string;
    direccion: string;
    localidad: string;
    provincia: string;
    ip?: string;
    vendedor_id: string;
    estado: 'activo' | 'inactivo';
    usuario_id: string;
    created_at: string;
    updated_at: string;
  }