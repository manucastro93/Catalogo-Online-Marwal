export interface Pedido {
    id: string;
    cliente_id: string;
    vendedor_id: string;
    total: number;
    metodo_pago: 'efectivo' | 'tarjeta' | 'transferencia';
    estado: 'Pendiente' | 'En Proceso' | 'Finalizado' | 'Rechazado';
    usuario_id: string;
    created_at: string;
    updated_at: string;
  }