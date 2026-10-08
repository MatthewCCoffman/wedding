<script>
  // @ts-ignore
  import Carousel from './carousel.svelte';
  import { language } from '$lib/stores/language';
  import { photosPagePhotos } from '$lib/images/weddingPhotos';

  const pageTitles = {
    en: '',
    es: ''
  };

  $: pageTitle = pageTitles[$language];
</script>

<div class="page-title">
  <div>{pageTitle}</div>
</div>

<div class="page-content">
  <Carousel photos={photosPagePhotos} />
</div>
