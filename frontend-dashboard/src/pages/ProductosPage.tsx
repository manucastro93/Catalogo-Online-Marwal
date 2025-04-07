import { Component } from 'solid-js';
import ProductosList from '../components/Productos/ProductosList';

const ProductosPage: Component = () => {
  return (
    <div class='content'>
      <h1>Productos</h1>
      <ProductosList />
    </div>
  );
};

export default ProductosPage;