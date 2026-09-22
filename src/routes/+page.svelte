<script lang="ts">
	import Countdown from '../lib/components/countdown.svelte';
	import StoryPage from './our_story/+page.svelte';
	import PhotosPage from './photos/+page.svelte';
	import VenuePage from './venue/+page.svelte';
	import RegistryPage from './registry/+page.svelte';
	import RsvpPage from './rsvp/+page.svelte';
	import { language } from '$lib/stores/language';
	import meadowVideo from '$lib/images/wedding-meadow.mp4';

	const translations = {
		en: {
			heading: 'COUNTDOWN TO I DO',
			alt: 'Evelin and Matthew'
		},
		es: {
			heading: 'CUENTA REGRESIVA PARA DECIR SÍ',
			alt: 'Evelin y Matthew'
		}
	} as const;

	$: currentLanguage = translations[$language];
</script>

<svelte:head>
	<title>{$language === 'en' ? 'Evelin & Matthew' : 'Evelin y Matthew'}</title>
	<meta name="description" content={$language === 'en' ? 'wedding2026' : 'boda2026'} />
</svelte:head>

<div class="page-header-image">
	<video class="hero-video" src={meadowVideo} autoplay muted loop playsinline aria-label={currentLanguage.alt}></video>
    <div class="hero-caption">
		<span>{$language === 'en' ? 'The Wedding of' : 'La Boda de'}</span>
		<strong>Evelin <em>&amp;</em> Matthew</strong>
		<span>{$language === 'en' ? 'November 07, 2026' : '07 de noviembre de 2026'} <em class="detail-separator">&bull;</em> {$language === 'en' ? 'Hidalgo, Mexico' : 'Hidalgo, México'}</span>
	</div>
</div>

<div class="page-title">
    <div>{currentLanguage.heading}</div>
</div>
<Countdown language={$language} />

<section id="story" class="scroll-section">
	<StoryPage />
</section>

<section id="photos" class="scroll-section">
	<PhotosPage />
</section>

<section id="venue" class="scroll-section">
	<VenuePage />
</section>

<section id="registry" class="scroll-section">
	<RegistryPage />
</section>

<section id="rsvp" class="scroll-section">
	<RsvpPage />
</section>

<style>
.page-header-image {
	width: 100vw;
	max-width: none;
	margin: 0 0 3rem calc(50% - 50vw);
	position: relative;
	background: var(--background-color);
}

.page-header-image::before {
	display: none;
}

.hero-video {
	width: 100%;
	height: min(78vh, 850px);
	border-radius: 0;
	box-shadow: none;
	object-fit: cover;
	display: block;
	object-position: center;
	background: var(--primary-color);
	transition: var(--transition-smooth);
}

.hero-video:hover {
	transform: none;
}

.hero-caption {
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 0.35rem;
	color: #fff;
	text-align: center;
	text-shadow: 0 2px 18px rgba(0, 0, 0, 0.45);
	white-space: nowrap;
		max-width: calc(100% - 2rem);
}

.hero-caption span {
	font-family: var(--font-accent);
	font-size: 0.65rem;
	letter-spacing: 0.2em;
	text-transform: uppercase;
}

.hero-caption strong {
	font-family: var(--font-script);
	font-size: clamp(2.8rem, 7vw, 5.5rem);
	font-weight: 400;
	line-height: 0.9;
}

.hero-caption em {
	color: #e2b99f;
	font-weight: 300;
}

.page-title {
	margin: 3rem 0 2rem;
}

.scroll-section {
	border-top: 1px solid var(--border-color);
	margin-top: 5rem;
	padding-top: 4rem;
	scroll-margin-top: 1.5rem;
}

.scroll-section :global(.page-title) {
	margin-top: 0;
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
		margin-top: 1rem;
		margin-bottom: 1.5rem;
	}

	.page-header-image::before {
		display: none;
	}

	.hero-video {
		border-radius: 0;
		height: min(74svh, 680px);
		object-fit: cover;
		object-position: center center;
	}

	.page-header-image :global(.carousel) {
		height: min(74svh, 680px);
	}

	.hero-caption {
		gap: 0.2rem;
		white-space: normal;
		width: calc(100% - 2rem);
	}

	.hero-caption span {
		font-size: 0.55rem;
		letter-spacing: 0.14em;
	}

	.hero-caption strong {
		font-size: clamp(2.5rem, 13vw, 4rem);
		line-height: 0.95;
	}
}
</style>