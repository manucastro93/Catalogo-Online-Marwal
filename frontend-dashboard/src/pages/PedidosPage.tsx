import { Component } from 'solid-js';
import PedidosList from '../components/Pedidos/PedidosList';

const PedidosPage: Component = () => {
  return (
    <div class='content'>
      <h1>Pedidos</h1>
      <PedidosList />
    </div>
  );
};

export default PedidosPage;