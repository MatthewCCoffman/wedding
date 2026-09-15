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
		width: 10%;
		height: 2px;
		background-color: #b4b1b1;
		border-radius: 2px;
		transition: 0.3s ease;
        margin-bottom: 5px;
        margin-left: 45%;
	}
    .footer {
        width: 100%;
        padding: 2rem 0;
        text-align: center;
        color: #ffffff;
        margin-top: 3rem;
    }   

    .footer-content-initials {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-family: 'Playfair Display', serif;
        gap: 1rem;
        font-size: 3rem;
    }

    .footer-content-date {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;
        font-size: 1.2rem;
        margin-bottom: 1rem;
        font-family: 'Montserrat', sans-serif;
    }
    
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

    :global(.page-header-image) {
        display: flex;
        width: auto;
        max-height: 55%;
        height: auto;
        object-fit: cover;
        justify-content: space-around;
    }
    :global(.header-images) {
        height: 400px;
        width: 400px;
        object-fit: cover;
    }
    :global(.image-row) {
        display: flex;
        flex-wrap: nowrap; /* keeps them on a single line */
        gap: 25px; /* space between images */
    }
    :global(.page-title) {
        display: flex;
        font-family: 'Montserrat', sans-serif;
        flex-direction: row;
        font-size: 26px;
        justify-content: space-around;
        margin-top: 20px;
        width: 100%;
    }
</style>
