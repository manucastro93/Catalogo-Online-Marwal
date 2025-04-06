export interface LogCliente {
    id: string;
    cliente_id: string;
    accion: 'login' | 'logout' | 'view_categoria' | 'view_producto' | 'add_to_cart' | 'remove_from_cart' | 'checkout' | 'contact' | 'search' | 'account_update';
    entidad_id?: string;
    tipo_entidad?: 'categoria' | 'producto' | 'pedido' | 'otro';
    detalles?: string;
    ip?: string;
    user_agent?: string;
    created_at: string;
  }