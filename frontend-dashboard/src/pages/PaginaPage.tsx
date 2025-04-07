import { Component } from 'solid-js';
import BannersList from '../components/Pagina/BannersList';

const PaginaPage: Component = () => {
  return (
    <div class='content'>
      <h1>Administrar Banners y Logo</h1>
      <BannersList />
    </div>
  );
};

export default PaginaPage;