<script lang="ts">
	import Countdown from '../lib/components/countdown.svelte';
	import welcome from '$lib/images/BAD39E09-7157-485A-9A02-3A0C03C3A660.jpeg';
</script>

<svelte:head>
	<title>Evelin & Matthew</title>
	<meta name="description" content="wedding2025" />
</svelte:head>


<div class="page-header-image">
    <img src={welcome} alt="Evelin and Matthew" />
</div>

<div class="page-title">
    <div>COUNTDOWN TO I DO</div>
</div>
<Countdown />

<style>
.page-header-image img {
  max-width: 100%;
  height: auto;
  border-radius: 0.5rem;
  box-shadow: 0 8px 25px rgba(183, 144, 126, 0.25);
  object-fit: cover;
  filter: drop-shadow(0 0 8px rgba(197, 164, 144, 0.5));
}

.page-title div {
  font-family: 'Playfair Display', serif;
  font-size: 2.8rem;
  font-weight: 700;
  text-align: center;
  color:rgb(63, 62, 62);
  margin: 2rem 0 1.5rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

/* Mobile Styles */
@media (max-width: 600px) {
  .page-title div {
    font-style: italic;
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  .page-header-image {
    margin-top: 1rem;
  }
  .page-header-image img {
    border-radius: 0.6rem;
    box-shadow: 0 6px 15px rgba(255, 255, 255, 0.6);
  }
}

</style>