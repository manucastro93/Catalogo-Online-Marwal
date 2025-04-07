import { Component } from 'solid-js';
import ProductosList from '../components/Productos/ProductosList';

const ProductosPage: Component = () => {
  console.log('ProductosPage');
  return (
    <div>
      <h1>Productos</h1>
      <ProductosList />
    </div>
  );
};

export default ProductosPage;