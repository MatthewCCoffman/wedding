<script>
  // @ts-ignore
  import Carousel from './carousel.svelte';
  import { language } from '$lib/stores/language';
  import { weddingPhotos } from '$lib/images/weddingPhotos';

  const pageTitles = {
    en: 'Photos of Us',
    es: 'Fotos de Nosotros'
  };

  $: pageTitle = pageTitles[$language];
</script>

<div class="page-title">
  <div>{pageTitle}</div>
</div>

<div class="page-content">
  <Carousel photos={weddingPhotos} />
</div>
