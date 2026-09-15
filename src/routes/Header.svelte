<script lang="ts">
	import { page } from '$app/state';
	import logo from '$lib/images/download.png';
	let isMenuOpen = false;

	function closeMenu() {
		isMenuOpen = false;
	}
</script>

	<div class="app-header desktop">		
		<div class="logo-wrapper">
			<img src={logo} alt="Wedding Logo" />
		</div>
		Jailene Evelin Fierro & Matthew Cruz Coffman
	</div>
	<div class="app-header mobile">		
		<div class="logo-wrapper">
			<img src={logo} alt="Wedding Logo" />
		</div>
		Evelin & Matthew
	</div>
			<div class="primary-section">
			<div class="section-info">
				<span class="section-date">November 07, 2026</span>
				<span class="separator">&bull;</span>
				<span class="section-date">Hgo, Mexico</span>
			</div>
		</div>
	
	<div class=mobile>

		<div class="navbar-container">
			<button 
				class="hamburger" 
				on:click={() => isMenuOpen = !isMenuOpen}
				aria-label="Toggle Menu"
			>
				<span class="bar top" class:open={isMenuOpen}></span>
				<span class="bar middle" class:open={isMenuOpen}></span>
				<span class="bar bottom" class:open={isMenuOpen}></span>
			</button>
			<div>
				<nav class:is-open={isMenuOpen}>
					<ul>
						<li aria-current={page.url.pathname === '/' ? 'page' : undefined}>
							<a href="/" on:click={closeMenu}>Home</a>
						</li>
						<li aria-current={page.url.pathname.startsWith('/our_story') ? 'page' : undefined}>
							<a href="/our_story" on:click={closeMenu}>Story</a>
						</li>
						<!-- <li aria-current={page.url.pathname.startsWith('/itinerary') ? 'page' : undefined}>
							<a href="/itinerary" on:click={closeMenu}>Itinerary</a>
						</li> -->
						<li aria-current={page.url.pathname.startsWith('/photos') ? 'page' : undefined}>
							<a href="/photos" on:click={closeMenu}>Photos</a>
						</li>
						<li aria-current={page.url.pathname.startsWith('/venue') ? 'page' : undefined}>
							<a href="/venue" on:click={closeMenu}>Venue</a>
						</li>
						<!-- <li aria-current={page.url.pathname.startsWith('/faq') ? 'page' : undefined}>
							<a href="/faq" on:click={closeMenu}>FAQ</a>
						</li> -->
						<li aria-current={page.url.pathname.startsWith('/registry') ? 'page' : undefined}>
							<a href="/registry" on:click={closeMenu}>Registry</a>
						</li>
						<li aria-current={page.url.pathname.startsWith('/rsvp') ? 'page' : undefined}>
							<a href="/rsvp" on:click={closeMenu}>RSVP</a>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	</div>
	<div class="desktop">
		<div class="navbar-container">
			<nav>
				<ul>
					<li aria-current={page.url.pathname === '/' ? 'page' : undefined}>
						<a href="/">Home</a>
					</li>
					<li aria-current={page.url.pathname.startsWith('/our_story') ? 'page' : undefined}>
						<a href="/our_story">Story</a>
					</li>

					<!-- <li aria-current={page.url.pathname.startsWith('/itinerary') ? 'page' : undefined}>
						<a href="/itinerary">Itinerary</a>
					</li> -->
					<li aria-current={page.url.pathname.startsWith('/photos') ? 'page' : undefined}>
						<a href="/photos">Photos</a>
					</li>
					<li aria-current={page.url.pathname.startsWith('/venue') ? 'page' : undefined}>
						<a href="/venue">Venue</a>
					</li>
					<!-- <li aria-current={page.url.pathname.startsWith('/faq') ? 'page' : undefined}>
						<a href="/faq">FAQ</a>
					</li> -->
					<li aria-current={page.url.pathname.startsWith('/registry') ? 'page' : undefined}>
						<a href="/registry">Registry</a>
					</li>
					<li aria-current={page.url.pathname.startsWith('/rsvp') ? 'page' : undefined}>
						<a href="/rsvp">RSVP</a>
					</li>
					<!-- You can add more nav links here -->
				</ul>
			</nav>
		</div>
	</div>

<style>
	.hamburger {
		display: none;
		flex-direction: column;
		justify-content: space-between;
		width: 24px;
		height: 18px;
		cursor: pointer;
		z-index: 1000; /* keep on top */
		border: none;
		background: transparent;
		padding: 0;
	}

	.hamburger .bar {
		display: block;
		width: 100%;
		height: 3px;
		background-color: var(--text-color, #333);
		border-radius: 3px;
		transition: 0.3s ease;
	}

	/* Animate to X */
	.hamburger .bar.top.open {
		transform: rotate(45deg) translateY(7px);
	}
	.hamburger .bar.middle.open {
		opacity: 0;
	}
	.hamburger .bar.bottom.open {
		transform: rotate(-45deg) translateY(-7px);
	}

	.primary-section {
		text-align: center;
		font-style: italic;
		font-weight:lighter;
		color: #ffffff;
		font-size: 1rem;
		margin-bottom: 3rem;
	}

	.section-date {
		color: rgb(114, 114, 114);
		font-size: 1rem;
		margin-bottom: 0.3rem;
		letter-spacing: 0.1em;
	}
	.navbar-container {
		width: 100%;
		font-family: 'Montserrat', sans-serif;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	nav {
		width: 100%;
		max-width: 1000px;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-bottom: 15px;
	}

	.logo-wrapper img {
		height: 200px;
		width: 200px;
		border-radius: 25%;
		object-fit: contain;
		padding-right: 0%;
		box-shadow: 0 0 5px rgba(0,0,0,0.2);
		margin-bottom:50px;
	}

	nav ul {
		list-style: none;
		display: flex;
		flex-direction: row;
		gap: 1rem;
		margin: 0;
		margin-right: 58px;
	}

	nav li a {
		text-decoration: none;
		color: var(--text-color);
	}

	nav li[aria-current="page"] a {
		color: var(--text-color);
		border-bottom: 1px solid #ddd;
	}

	nav li a:hover {
		color: var(--primary-color);
		transition: 5s;
		border-bottom: 1px solid #ddd;
	}

	.app-header {
		font-family: 'Bodoni Moda', serif;
		font-size: 42px;
		line-height: 2rem;
		margin-top: 50px;
		color:  rgb(71, 70, 70);
		text-align: center;
		padding: 1rem 0;
	}

/* Mobile adjustments: smaller spacing and font */
@media only screen and (max-width: 500px) {

	.hamburger {
		display: flex;
	}

	nav {
		display: none;
		flex-direction: column;
		width: 100%;
		background: var(--accent-color, #fff);
		align-items: center;
		padding: 1rem 0;
	}

	nav.is-open {
		display: flex;
		text-align: center;
	}

	nav ul {
		flex-direction: column;
		gap: 1rem;
		margin: 0;
		padding: 0;
	}

	nav li a {
		font-size: 1.2rem;
	}

	.logo-wrapper img {
		height: 120px;
		width: 120px;
		border-radius: 25%;		
		box-shadow: 0 0 5px rgba(0,0,0,0.2);
		margin-bottom:50px;
	}

  .desktop {
    display: none;
  }

  .mobile {
    display: block;
    font-size: 24px;
  }
  	.app-header {
		font-family: 'Dancing Script', cursive;
		font-size: 52px;
		color: #000000;
		text-align: center;
	}
}

/* Desktop styling */
@media only screen and (min-width: 800px) {
	.desktop {
		display: block;
	}
	.mobile {
		display: none;
	}
}
</style>
