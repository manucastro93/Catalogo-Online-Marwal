import { createSignal, onMount } from 'solid-js';
import { paginaService } from '../../services/paginaService';

const BannersList = () => {
  const [banners, setBanners] = createSignal([]);

  onMount(async () => {
    const data = await paginaService.obtenerBanners();
    setBanners(data);
  });

  return (
    <div>
      <h1>Lista de Banners</h1>
      <ul>
        {banners().map(banner => (
          <li>{banner.titulo}</li>
        ))}
      </ul>
    </div>
  );
};

export default BannersList;