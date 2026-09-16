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
		height: 100%;
		margin: 0;
	}

	:global(body) {
		height: 100vh;
	}

	#map {
		height: 500px;
		width: 92%;
		margin: 2rem auto;
		border-radius: 0.75rem;
		box-shadow: 0 15px 40px rgba(139, 115, 85, 0.15);
		border: 1px solid var(--border-color);
		overflow: hidden;
		transition: var(--transition-smooth);
	}

	#map:hover {
		box-shadow: 0 20px 50px rgba(139, 115, 85, 0.25);
	}

	.durham-page-title {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-bottom: 1rem;
	}

	.durham-page-title div:first-child {
		font-family: var(--font-heading);
		font-size: 2.5rem;
		font-weight: 300;
		color: var(--heading-color);
		letter-spacing: 0.12em;
		text-align: center;
		margin-bottom: 0.5rem;
	}

	.page-subtitle {
		font-family: var(--font-accent);
		font-size: 0.9rem;
		font-style: italic;
		color: var(--text-light);
		letter-spacing: 0.05em;
	}

	.external-guides {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin: 2rem 0;
		padding: 2rem;
	}

	@media (max-width: 768px) {
		#map {
			height: 400px;
			width: 95%;
			margin: 1.5rem auto;
		}

		.durham-page-title div:first-child {
			font-size: 2rem;
			padding: 0 1rem;
		}

		.page-subtitle {
			font-size: 0.85rem;
		}
	}
</style>
