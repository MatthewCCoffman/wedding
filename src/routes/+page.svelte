<script lang="ts">
	import Countdown from '../lib/components/countdown.svelte';
	import welcome from '$lib/images/BAD39E09-7157-485A-9A02-3A0C03C3A660.jpeg';
</script>

<svelte:head>
	<title>Evelin & Matthew</title>
	<meta name="description" content="wedding2026" />
</svelte:head>


<div class="page-header-image">
    <img src={welcome} alt="Evelin and Matthew" />
</div>

<div class="page-title">
    <div>COUNTDOWN TO I DO</div>
</div>
<Countdown />

<style>
.page-header-image {
	margin: 0 auto 3rem;
	max-width: 900px;
	position: relative;
}

.page-header-image::before {
	content: '';
	position: absolute;
	top: -15px;
	left: -15px;
	right: 15px;
	bottom: 15px;
	border: 2px solid var(--accent-light);
	border-radius: 1rem;
	z-index: -1;
	opacity: 0.5;
}

.page-header-image img {
	max-width: 100%;
	height: auto;
	border-radius: 0.75rem;
	box-shadow: 0 20px 60px rgba(139, 115, 85, 0.2);
	object-fit: cover;
	transition: var(--transition-smooth);
}

.page-header-image img:hover {
	transform: translateY(-5px);
	box-shadow: 0 25px 70px rgba(139, 115, 85, 0.3);
}

.page-title {
	margin: 3rem 0 2rem;
}

.page-title div {
	font-family: var(--font-heading);
	font-size: 3rem;
	font-weight: 300;
	text-align: center;
	color: var(--heading-color);
	letter-spacing: 0.15em;
	text-transform: uppercase;
	position: relative;
	display: inline-block;
	width: 100%;
}

.page-title div::after {
	content: '';
	position: absolute;
	bottom: -15px;
	left: 50%;
	transform: translateX(-50%);
	width: 80px;
	height: 2px;
	background: linear-gradient(90deg, 
		transparent, 
		var(--accent-color), 
		transparent);
}

/* Mobile Styles */
@media (max-width: 600px) {
	.page-title div {
		font-size: 1.8rem;
		margin-bottom: 1.5rem;
		letter-spacing: 0.1em;
	}

	.page-header-image {
		margin-top: 1.5rem;
		margin-bottom: 2rem;
	}

	.page-header-image::before {
		top: -10px;
		left: -10px;
		right: 10px;
		bottom: 10px;
	}

	.page-header-image img {
		border-radius: 0.5rem;
		box-shadow: 0 15px 40px rgba(139, 115, 85, 0.2);
	}
}
</style>