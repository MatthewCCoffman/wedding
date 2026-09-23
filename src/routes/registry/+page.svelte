<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
  <link
    href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,400;0,6..96,500;1,6..96,400&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<script>
  import registryImage from '$lib/images/918428E3-CCCC-4905-95CB-A9FF8F044545.jpeg';

  export let language = 'en';

  const registryUrl =
    'https://www.zola.com/registry/evelinandmatt2025';

  const translations = {
    en: {
      label: 'Wedding Registry',
      headingFirst: '',
      headingEmphasis: '',
      message:
        'Celebrating with you in Hidalgo is the greatest gift we could receive.',
      details:
        'For those who have asked, we have selected a few things for the home and life we are building together.',
      button: 'View Our Registry',
      note: 'Registry hosted by Zola',
      imageAlt: 'Evelin and Matthew'
    },
    es: {
      label: 'Mesa de Regalos',
      headingFirst: 'Un regalo para nuestro',
      headingEmphasis: 'próximo capítulo.',
      message:
        'Celebrar con ustedes en Hidalgo es el mejor regalo que podríamos recibir.',
      details:
        'Para quienes nos han preguntado, hemos elegido algunas cosas para el hogar y la vida que estamos construyendo juntos.',
      button: 'Ver Nuestra Mesa',
      note: 'Mesa de regalos en Zola',
      imageAlt: 'Evelin y Matthew'
    }
  };

  $: copy = translations[language] ?? translations.en;
</script>

<div class="registry-section">
  <div class="photo-column">
    <div class="photo-frame">
      <img
        src={registryImage}
        alt={copy.imageAlt}
        loading="lazy"
      />

      <span class="section-number" aria-hidden="true">05</span>
    </div>
  </div>

  <div class="registry-content">


    <p class="lead">{copy.message}</p>

    <p class="details">{copy.details}
		
	</p>

    <a
      class="registry-button"
      href={registryUrl}
      target="_blank"
      rel="noopener noreferrer"
    >
      {copy.button}
      <span aria-hidden="true">↗</span>
    </a>

  </div>
</div>

<style>
  .registry-section {
    display: grid;
    grid-template-columns: minmax(300px, 0.9fr) minmax(380px, 1.1fr);
    align-items: center;
    gap: clamp(4rem, 9vw, 8rem);
    width: min(calc(100% - 3rem), 1100px);
    margin: 0 auto;
    padding: clamp(6rem, 11vw, 10rem) 0;
  }

  /* Photograph */

  .photo-column {
    padding: 1.25rem 0 0 1.25rem;
  }

  .photo-frame {
    position: relative;
    max-width: 430px;
  }

  .photo-frame::before {
    position: absolute;
    top: -1.25rem;
    left: -1.25rem;
    width: 100%;
    height: 100%;
    content: "";
    border: 1px solid rgba(165, 108, 82, 0.55);
  }

  .photo-frame img {
    position: relative;
    z-index: 1;
    display: block;
    width: 100%;
    aspect-ratio: 4 / 5;
    object-fit: cover;
    filter: grayscale(100%) sepia(8%) contrast(92%);
  }

  .section-number {
    position: absolute;
    right: -1.5rem;
    bottom: 2rem;
    z-index: 2;
    padding: 0.5rem 0;
    font-family: "Bodoni Moda", serif;
    font-size: 0.8rem;
    color: var(--accent-color);
    letter-spacing: 0.2em;
    writing-mode: vertical-rl;
  }

  /* Written content */

  .registry-content {
    max-width: 520px;
  }

  .eyebrow {
    margin: 0 0 1.5rem;
    font-family: var(--font-accent);
    font-size: 0.7rem;
    font-weight: 500;
    color: var(--accent-color);
    letter-spacing: 0.28em;
    text-transform: uppercase;
  }

  h2 {
    margin: 0;
    font-family: "Bodoni Moda", "Cormorant Garamond", serif;
    font-size: clamp(3.5rem, 6vw, 5.75rem);
    font-weight: 400;
    line-height: 0.93;
    color: var(--heading-color);
    letter-spacing: -0.045em;
  }

  h2 em {
    display: block;
    padding-top: 0.15em;
    font-weight: 400;
    color: var(--accent-color);
  }

  .ornament {
    display: flex;
    align-items: center;
    gap: 0.7rem;
    width: 150px;
    margin: 2.25rem 0;
  }

  .ornament span {
    width: 58px;
    height: 1px;
    background: rgba(40, 53, 45, 0.35);
  }

  .ornament i {
    width: 5px;
    height: 5px;
    background: var(--accent-color);
    transform: rotate(45deg);
  }

  .lead {
    max-width: 500px;
    margin: 0 0 1rem;
    font-family: "Bodoni Moda", "Cormorant Garamond", serif;
    font-size: 1.45rem;
    line-height: 1.5;
    color: var(--heading-color);
  }

  .details {
    max-width: 485px;
    margin: 0 0 2.5rem;
    font-family: "Cormorant Garamond", serif;
    font-size: 1.15rem;
    line-height: 1.7;
    color: var(--text-color);
  }

  /* Registry link */

  .registry-button {
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    gap: 3rem;
    min-width: 250px;
    padding: 1rem 1.35rem;
    font-family: var(--font-accent);
    font-size: 0.7rem;
    font-weight: 500;
    color: #f8f4ed;
    letter-spacing: 0.2em;
    text-decoration: none;
    text-transform: uppercase;
    background: var(--heading-color);
    border: 1px solid var(--heading-color);
    transition:
      color 200ms ease,
      background 200ms ease,
      transform 200ms ease;
  }

  .registry-button:hover {
    color: var(--heading-color);
    background: transparent;
    transform: translateY(-2px);
  }

  .registry-button span {
    font-size: 1rem;
  }

  .registry-note {
    margin: 0.8rem 0 0;
    font-family: var(--font-accent);
    font-size: 0.62rem;
    color: var(--text-light);
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .couple {
    margin: 3.5rem 0 0;
    font-family: "Bodoni Moda", "Cormorant Garamond", serif;
    font-size: 1.25rem;
    color: var(--heading-color);
    letter-spacing: 0.04em;
  }

  .couple i {
    padding: 0 0.35rem;
    font-weight: 400;
    color: var(--accent-color);
  }

  /* Mobile */

  @media (max-width: 760px) {
    .registry-section {
      grid-template-columns: 1fr;
      gap: 4rem;
      width: min(calc(100% - 3rem), 560px);
      padding: 5rem 0 6rem;
    }

    .photo-column {
      padding: 1rem 1rem 0;
    }

    .photo-frame {
      max-width: 390px;
      margin: 0 auto;
    }

    .photo-frame::before {
      top: -1rem;
      left: -1rem;
    }

    .section-number {
      right: -0.75rem;
    }

    .registry-content {
      text-align: center;
    }

    .eyebrow {
      margin-bottom: 1.25rem;
    }

    h2 {
      font-size: clamp(3.25rem, 14vw, 4.75rem);
    }

    .ornament {
      justify-content: center;
      margin: 2rem auto;
    }

    .lead,
    .details {
      margin-right: auto;
      margin-left: auto;
    }

    .registry-button {
      width: fit-content;
      max-width: 100%;
      margin: 0 auto;
      justify-content: center;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .registry-button {
      transition: none;
    }
  }
</style>