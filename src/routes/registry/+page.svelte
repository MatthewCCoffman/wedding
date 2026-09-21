<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
 import { language } from '$lib/stores/language';

 const translations = {
  en: {
   title: 'Wedding Registry',
   intro: [
	'Your presence at our wedding is the greatest gift of all.',
	"However, if you wish to honor us with a gift, we've created a registry for your convenience."
   ],
   button: 'View Our Registry'
  },
  es: {
   title: 'Mesa de Regalos',
   intro: [
	'Su presencia en nuestra boda es el mejor regalo de todos.',
	'Sin embargo, si desea honrarnos con un regalo, hemos creado una mesa de regalos para su comodidad.'
   ],
   button: 'Ver Nuestra Mesa de Regalos'
  }
 };

 $: currentTranslations = translations[$language];

	function removeZolaInjectedNodes() {
		if (typeof document === 'undefined') return;
		// remove any anchors or placeholders
		document.querySelectorAll('.zola-registry-embed, [data-registry-key]').forEach(n => n.remove());
		// remove the widget loader script if present
		const script = document.getElementById('zola-wjs');
		if (script && script.parentNode) script.parentNode.removeChild(script);
		// remove any iframes or nodes that reference zola
		document.querySelectorAll('iframe').forEach((f: HTMLIFrameElement) => {
			try {
				if (f.src && f.src.includes('zola.com')) f.remove();
			} catch (e) {
				// ignore cross-origin access
			}
		});
		document.querySelectorAll('[id*="zola"], [class*="zola"]').forEach(n => n.remove());
	}

	onMount(() => {
		// ensure the zola script is loaded client-side
		if (!document.getElementById('zola-wjs')) {
			const s = document.createElement('script');
			s.src = 'https://widget.zola.com/js/widget.js';
			s.async = true;
			s.id = 'zola-wjs';
			document.head.appendChild(s);
		}
	});

	onDestroy(() => {
		if (typeof document === 'undefined') return;
		// cleanup any DOM the widget injected so it doesn't persist after navigation
		removeZolaInjectedNodes();
	});
</script>

<div class="registry-page">
	<div class="page-title">
		<div>{currentTranslations.title}</div>
	</div>

	<div class="registry-intro">
		<p>{currentTranslations.intro[0]}</p>
		<p>{currentTranslations.intro[1]}</p>
	</div>

	<div class="registry-container">
		<a
			class="zola-registry-embed registry-button"
			href="https://www.zola.com/registry/evelinandmatt2025"
			data-registry-key="evelinandmatt2025"
			on:click|preventDefault={() => window.open('https://www.zola.com/registry/evelinandmatt2025', '_blank', 'noopener,noreferrer')}
			rel="noopener noreferrer"
		>
			<span class="button-text">{currentTranslations.button}</span>
			<span class="button-icon">→</span>
		</a>
	</div>
</div>

<style>
	.registry-page {
		max-width: 800px;
		margin: 0 auto;
		padding: 2rem;
	}

	.page-title {
		text-align: center;
		margin-bottom: 3rem;
	}

	.page-title div {
		font-family: var(--font-heading);
		font-size: 3rem;
		font-weight: 300;
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
		width: 100px;
		height: 2px;
		background: linear-gradient(90deg, 
			transparent, 
			var(--accent-color), 
			transparent);
	}

	.registry-intro {
		text-align: center;
		margin: 3rem auto;
		max-width: 600px;
	}

	.registry-intro p {
		font-family: 'Crimson Text', 'Georgia', serif;
		font-size: 1.2rem;
		line-height: 1.8;
		color: var(--text-color);
		margin-bottom: 1rem;
	}

	.registry-container {
		display: flex;
		justify-content: center;
		margin: 3rem 0;
	}

	.registry-button {
		display: inline-flex;
		align-items: center;
		gap: 1rem;
		padding: 1.2rem 3rem;
		font-family: var(--font-accent);
		font-size: 1.1rem;
		font-weight: 500;
		text-transform: uppercase;
		letter-spacing: 0.12em;
		color: #ffffff;
		background: linear-gradient(135deg, var(--accent-green), var(--accent-green-dark));
		border: 2px solid var(--accent-green);
		border-radius: 0.5rem;
		text-decoration: none;
		transition: var(--transition-smooth);
		box-shadow: 0 10px 30px rgba(139, 155, 126, 0.25);
		cursor: pointer;
		position: relative;
		overflow: hidden;
	}

	.registry-button::before {
		content: '';
		position: absolute;
		top: 0;
		left: -100%;
		width: 100%;
		height: 100%;
		background: linear-gradient(90deg, 
			transparent, 
			rgba(255, 255, 255, 0.3), 
			transparent);
		transition: left 0.5s ease;
	}

	.registry-button:hover::before {
		left: 100%;
	}

	.registry-button:hover {
		transform: translateY(-3px);
		box-shadow: 0 15px 40px rgba(139, 155, 126, 0.35);
		border-color: var(--accent-green-dark);
	}

	.button-text {
		position: relative;
		z-index: 1;
	}

	.button-icon {
		position: relative;
		z-index: 1;
		font-size: 1.5rem;
		transition: transform 0.3s ease;
	}

	.registry-button:hover .button-icon {
		transform: translateX(5px);
	}

	@media (max-width: 768px) {
		.registry-page {
			padding: 1.5rem 1rem;
		}

		.page-title div {
			font-size: 2.2rem;
		}

		.registry-intro p {
			font-size: 1.1rem;
			padding: 0 1rem;
		}

		.registry-button {
			padding: 1rem 2rem;
			font-size: 1rem;
		}
	}
</style>