import { Component } from 'solid-js';
import ClientesList from '../components/Clientes/ClientesList';

const ClientesPage: Component = () => {
  return (
    <div>
      <h1>Clientes</h1>
      <ClientesList />
    </div>
  );
};

export default ClientesPage;