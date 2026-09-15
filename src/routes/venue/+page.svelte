<script>
  import { onMount } from 'svelte';
  import 'mapbox-gl/dist/mapbox-gl.css';
  import mapboxgl from 'mapbox-gl';

  onMount(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoibWF0dGhldy1jb2ZmbWFuIiwiYSI6ImNtY2lhN2g4aDBoNDkybW9uZzFwNGk0cXIifQ.UuHCF-adGBIVNRFYOM0_2g';

    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/matthew-coffman/cmcia5j5800ie01rye7n9ap9r',
      center: [-99.6569, 20.0942],
      zoom: 12
    });

    const popup = new mapboxgl.Popup().setHTML(
      `<h3>Hotel Real del Bosque</h3><p>Wedding Venue</p>`
    );

    new mapboxgl.Marker()
      .setLngLat([-99.6569, 20.0942])
      .setPopup(popup)
      .addTo(map);

    map.on('zoomend', () => console.log(`Current zoom: ${map.getZoom()}`));

    // Helps in some cases if container size changes after mount
    setTimeout(() => map.resize(), 500);
  });
</script>

<div class="page-title durham-page-title">
  <div>Hotel Real del Bosque, Hidalgo</div>
  <div class="page-subtitle">Zoom in for descriptions</div>
</div>

<div id="map"></div>

<div class="external-guides"></div>

<style>
  html,
  body {
    /* Make sure the page stretches full height */
    height: 100%;
    margin: 0;
  }

  :global(body) {
    /* Svelte requires :global if you want to target <body> */
    height: 100vh;
  }

  #map {
    height: 400px; /* explicit height works best */
    width: 90%;
    margin: 20px auto;
    border: 1px solid #ccc;
  }

  .durham-page-title {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .page-subtitle {
    font-size: 12px;
    font-style: italic;
  }

  .external-guides {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 20%;
  }
</style>
