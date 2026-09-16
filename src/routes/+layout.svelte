<script lang="ts">
	import Header from './Header.svelte';
	import '../app.css';
	import '../timeline.css';
	let { children } = $props();
</script>

<div class="app">
	<Header />
	<main>
		{@render children()}
	</main>
    <footer class="footer">
            <div class="footer-content-initials">E&amp;M</div>
            <div class="bar"></div>
            <div class="footer-content-date">11.07.2026</div>
	</footer>
</div>

<style>
	.bar {
		display: block;
		width: 60px;
		height: 1px;
		background: linear-gradient(90deg, 
			transparent, 
			var(--accent-color), 
			transparent);
		border-radius: 2px;
		transition: var(--transition-smooth);
		margin: 1.5rem auto;
	}

	.footer {
		width: 100%;
		padding: 3rem 1rem;
		text-align: center;
		background: linear-gradient(180deg, 
			transparent, 
			var(--accent-light));
		margin-top: 4rem;
		border-top: 1px solid var(--border-color);
	}   

	.footer-content-initials {
		display: flex;
		flex-direction: column;
		align-items: center;
		font-family: var(--font-heading);
		font-size: 3rem;
		font-weight: 300;
		color: var(--heading-color);
		letter-spacing: 0.1em;
		margin-bottom: 0.5rem;
	}

	.footer-content-date {
		display: flex;
		flex-direction: column;
		align-items: center;
		font-family: var(--font-accent);
		font-size: 1rem;
		font-weight: 300;
		color: var(--text-light);
		letter-spacing: 0.15em;
		margin-bottom: 1rem;
	}
	
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		background-color: var(--background-color);
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 2rem 1.5rem;
		width: 100%;
		max-width: 68rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	:global(.page-header-image) {
		display: flex;
		width: auto;
		max-height: 55%;
		height: auto;
		object-fit: cover;
		justify-content: center;
		margin: 2rem auto;
	}

	:global(.header-images) {
		height: 400px;
		width: 400px;
		object-fit: cover;
		border-radius: 0.5rem;
		box-shadow: 0 15px 40px rgba(139, 115, 85, 0.15);
		transition: var(--transition-smooth);
	}

	:global(.header-images:hover) {
		transform: scale(1.02);
		box-shadow: 0 20px 50px rgba(139, 115, 85, 0.25);
	}

	:global(.image-row) {
		display: flex;
		flex-wrap: nowrap;
		gap: 2rem;
		justify-content: center;
	}

	:global(.page-title) {
		display: flex;
		font-family: var(--font-heading);
		flex-direction: row;
		font-size: 2rem;
		justify-content: center;
		margin: 2rem auto;
		width: 100%;
	}

	@media (max-width: 768px) {
		main {
			padding: 1.5rem 1rem;
		}

		:global(.image-row) {
			flex-wrap: wrap;
			gap: 1.5rem;
		}

		:global(.header-images) {
			height: 300px;
			width: 300px;
		}

		.footer-content-initials {
			font-size: 2.5rem;
		}

		.footer {
			padding: 2.5rem 1rem;
		}
	}
</style>
