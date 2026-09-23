<script lang="ts">
  import { language } from '$lib/stores/language';
  import { weddingPhotos } from '$lib/images/weddingPhotos';

  const reveal = (node: HTMLElement) => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        node.classList.add('is-visible');
        observer.unobserve(node);
      }
    }, { threshold: 0.2 });

    observer.observe(node);

    return {
      destroy() {
        observer.disconnect();
      }
    };
  };

  let activeIndex = 0;
  let touchStartX = 0;
  const storyPhotoIndexes = [21, 1, 2, 3, 23];

  function goToStory(index: number) {
    activeIndex = Math.max(0, Math.min(index, story.entries.length - 1));
  }

  function handleTouchStart(event: TouchEvent) {
    touchStartX = event.touches[0]?.clientX ?? 0;
  }

  function handleTouchEnd(event: TouchEvent) {
    const touchEndX = event.changedTouches[0]?.clientX ?? touchStartX;
    const swipeDistance = touchEndX - touchStartX;

    if (Math.abs(swipeDistance) >= 50) {
      goToStory(activeIndex + (swipeDistance < 0 ? 1 : -1));
    }
  }

  const storyContent = {
    en: {
      title: 'OUR STORY',
      entries: [
        {
          date: '10.7.23',
          header: 'LOVE AT FIRST SIGHT',
          body: 'We met at a football watch party, but neither of us realized we were walking into the most important moment of our lives. She caught his eyes instantly as she carried in a bag of ice, not expecting anything more than a night of football and friends. But fate had other plans. He gathered the courage to walk up and say hello, and from that first night, they knew they had found their soulmates.'
        },
        {
          date: '10.15.23',
          header: 'OUR FIRST DATE',
          body: 'Our first date night was unforgettable—and it just so happened to be his birthday. Instead of keeping it simple, he invited his whole family to meet her, because he knew she was special. We dressed up for a fancy dinner and went out to listen to live music, but despite the crowd and the celebration, it felt like it was just the two of us. We stole quiet moments, shared laughs, and started writing the first pages of what would become our love story.'
        },
        {
          date: '2.29.24',
          header: 'OUR FIRST TRIP',
          body: 'Our first trip to Mexico was more than just a getaway—it was a meaningful step into each other’s worlds. Besides being a trip for her birthday, it was his turn to meet her family and ask for her father’s blessing! He was unsure of what to expect, but very excited. From the moment he arrived, they welcomed him with open arms, warm smiles, and hearts full of love. We spent our days exploring her hometown, sharing homemade meals, and laughing late into the night with family. He asked her father, Isai, for his blessing to marry his daughter and Isai said yes!'
        },
        {
          date: '12.29.24',
          header: 'PROPOSAL TO FOREVER',
          body: 'Our proposal took place in one of the most romantic corners of the world—El Callejón del Beso in Guanajuato, Mexico. Surrounded by legend and love, we stood on the narrow stone steps where centuries-old balconies almost touch. As we reached the top of the balconies across from one another, she leaned in for a kiss, both of their hearts racing, and he got down on one knee. In that moment, he asked her to be his forever. And she said YES.'
        },
        {
          date: '∞',
          header: 'OUR FUTURE',
          body: 'Our story is just beginning. As we step into this new chapter hand in hand, we look forward to a life filled with love, laughter, and shared dreams. We imagine quiet mornings and spontaneous adventures, building a home full of warmth and memories, and growing stronger through every season life brings. We’ll celebrate the wins, hold each other through the challenges, and always find our way back to the love that started it all. Whatever the future holds, we know one thing for sure—it will be beautiful, because we’ll face it together.'
        }
      ]
    },
    es: {
      title: 'NUESTRA HISTORIA',
      entries: [
        {
          date: '10.7.23',
          header: 'AMOR A PRIMERA VISTA',
          body: 'Nos conocimos en una fiesta para ver fútbol, pero ninguno de los dos imaginó que estaba entrando en el momento más importante de nuestras vidas. Ella llamó su atención al instante cuando llegó con una bolsa de hielo, sin esperar nada más que una noche de fútbol y amigos. Pero el destino tenía otros planes. Él reunió el valor para acercarse y decir hola, y desde esa primera noche, supieron que habían encontrado a su alma gemela.'
        },
        {
          date: '10.15.23',
          header: 'NUESTRA PRIMERA CITA',
          body: 'Nuestra primera cita fue inolvidable y, por casualidad, también era su cumpleaños. En lugar de hacer algo sencillo, invitó a toda su familia a conocerla porque sabía que era especial. Nos vestimos para una cena elegante y salimos a escuchar música en vivo, pero a pesar de la multitud y la celebración, se sintió como si solo estuviéramos nosotros dos. Robamos momentos tranquilos, compartimos risas y comenzamos a escribir las primeras páginas de lo que sería nuestra historia de amor.'
        },
        {
          date: '2.29.24',
          header: 'NUESTRO PRIMER VIAJE',
          body: 'Nuestro primer viaje a México fue más que un simple escape: fue un paso significativo hacia cada uno de nuestros mundos. Además de ser un viaje por su cumpleaños, era su turno de conocer a su familia y pedir la bendición de su padre. No sabía qué esperar, pero estaba muy emocionado. Desde el momento en que llegó, lo recibieron con los brazos abiertos, sonrisas cálidas y corazones llenos de amor. Pasamos nuestros días explorando su pueblo natal, compartiendo comidas caseras y riendo hasta tarde con la familia. Le pidió a su padre, Isai, su bendición para casarse con su hija y Isai dijo que sí.'
        },
        {
          date: '12.29.24',
          header: 'PROPUESTA PARA SIEMPRE',
          body: 'Nuestra propuesta ocurrió en uno de los rincones más románticos del mundo: El Callejón del Beso en Guanajuato, México. Rodeados por la leyenda y el amor, nos encontramos en los estrechos escalones de piedra donde los balcones de siglos casi se tocan. Cuando llegamos a la parte alta de los balcones frente a frente, ella se inclinó para besarle, con el corazón acelerado, y él se arrodilló. En ese momento, le pidió que fuera su forever. Y ella dijo ¡SÍ!'
        },
        {
          date: '∞',
          header: 'NUESTRO FUTURO',
          body: 'Nuestra historia apenas comienza. Mientras avanzamos juntos a este nuevo capítulo de la mano, miramos hacia un futuro lleno de amor, risas y sueños compartidos. Imaginamos mañanas tranquilas y aventuras espontáneas, construyendo un hogar lleno de calor y recuerdos, y volviéndonos más fuertes con cada estación que la vida trae. Celebramos los triunfos, nos apoyamos en los desafíos y siempre encontramos el camino de regreso al amor que todo comenzó. Sea lo que el futuro nos depare, sabemos algo con seguridad: será hermoso, porque lo enfrentaremos juntos.'
        }
      ]
    }
  };

  $: story = storyContent[$language];
</script>

<div class="page-content">
    <div class="page-title"><div>{story.title}</div></div>
    <div
      class="story-carousel"
      ontouchstart={handleTouchStart}
      ontouchend={handleTouchEnd}
    >
      <div class="story-track" style={`--active-index: ${activeIndex}`}>
        {#each story.entries as entry, index}
          <div class="timeline-section" use:reveal>
            <div class="story-copy">
              <div class="section-header">
                  {entry.header}
              </div>
              <div class="section-body">
                  {entry.body}
              </div>
            </div>
            <div class="story-photo">
              <img src={weddingPhotos[storyPhotoIndexes[index]]} alt={entry.header} loading="lazy" />
            </div>
          </div>
        {/each}
      </div>
    </div>
    <div class="carousel-controls" aria-label="Story navigation">
      <button type="button" onclick={() => goToStory(activeIndex - 1)} disabled={activeIndex === 0} aria-label="Previous story">
        &#8592;
      </button>
      <div class="carousel-dots">
        {#each story.entries as entry, index}
          <button
            type="button"
            class:active={activeIndex === index}
            onclick={() => goToStory(index)}
            aria-label={`Go to story ${index + 1}`}
            aria-current={activeIndex === index ? 'step' : undefined}
          ></button>
        {/each}
      </div>
      <button type="button" onclick={() => goToStory(activeIndex + 1)} disabled={activeIndex === story.entries.length - 1} aria-label="Next story">
        &#8594;
      </button>
    </div>
</div>

<style>
.page-title {
	text-align: center;
  margin-bottom: 0.75rem;
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
	padding-bottom: 1rem;
}

.page-title div::after {
	content: '';
	position: absolute;
	bottom: 0;
	left: 50%;
	transform: translateX(-50%);
	width: 80px;
	height: 2px;
	background: linear-gradient(90deg, 
		transparent, 
		var(--accent-color), 
		transparent);
}

/* Page Content */
.page-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 0 1rem 3rem;
  margin: 0 auto;
  font-family: 'Georgia', serif;
  width: min(90%, 72rem);
  color: #4a3c31; /* elegant dark brown */
}

/* Timeline Sections */
.timeline-section {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(18rem, 0.9fr);
  align-items: center;
  gap: clamp(2rem, 7vw, 6rem);
  min-height: 22rem;
  padding: 2rem 0;
  margin: 0;
  border: 0 !important;
  border-radius: 0;
  position: relative;
  opacity: 0;
  transform: translateY(2rem);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.story-carousel {
  width: 100%;
}

.story-track {
  display: contents;
}

.carousel-controls {
  display: none;
}

.timeline-section::before {
  display: none;
}

.timeline-section:global(.is-visible) {
  opacity: 1;
  transform: translateY(0);
}

.story-copy {
  text-align: left;
  transform: translateX(-2.5rem);
  transition: transform 0.8s ease 0.1s;
}

.story-photo {
  width: min(100%, 22rem);
  justify-self: center;
  transform: translateX(2.5rem);
  transition: transform 0.8s ease 0.2s;
}

.timeline-section:global(.is-visible) .story-copy,
.timeline-section:global(.is-visible) .story-photo {
  transform: translateX(0);
}

.story-photo img {
  display: block;
  width: 100%;
  aspect-ratio: 4 / 5;
  object-fit: cover;
  border-radius: 0.25rem;
  box-shadow: 0 1rem 2rem rgba(40, 53, 45, 0.14);
}

/* Section Header */
.section-header {
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  margin-top: 0 !important;
  color:rgb(31, 31, 31); /* muted rose brown */
  letter-spacing: 0.05em;
  text-transform: uppercase;
  font-family: 'Playfair Display', serif;
  text-shadow: 0 1px 2px rgba(202, 201, 200, 0.3);
}

/* Section Body */
.section-body {
  font-size: 1.1rem;
  line-height: 1.75;
  color:rgb(107, 107, 107);
  font-family: 'Georgia', serif;
}

@media (prefers-reduced-motion: reduce) {
  .timeline-section,
  .story-copy,
  .story-photo {
    opacity: 1;
    transform: none;
    transition: none;
  }
}

/* Mobile Adjustments */
@media only screen and (max-width: 500px) {
  /* Page Content */
  .page-content {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin: 0 auto;
    font-family: 'Georgia', serif;
    text-align: center;
    width: 85%;
    color: #4a3c31; /* elegant dark brown */
  }

  .timeline-section {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    min-height: 0;
    padding: 1.5rem;
    flex: 0 0 100%;
    box-sizing: border-box;
  }

  .story-carousel {
    overflow: hidden;
    touch-action: pan-y;
  }

  .story-track {
    display: flex;
    transform: translateX(calc(var(--active-index) * -100%));
    transition: transform 0.45s ease;
  }

  .story-track .timeline-section {
    opacity: 1;
    transform: none;
  }

  .story-track .story-copy,
  .story-track .story-photo {
    transform: none;
    transition: none;
  }

  .story-track .story-photo {
    width: min(100%, 15rem);
  }

  .carousel-controls {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    width: 100%;
    margin-top: 1rem;
  }

  .carousel-controls > button {
    display: grid;
    width: 2.5rem;
    height: 2.5rem;
    place-items: center;
    border: 1px solid var(--accent-green);
    border-radius: 50%;
    background: transparent;
    color: var(--accent-green-dark);
    font-size: 1.25rem;
    cursor: pointer;
  }

  .carousel-controls > button:disabled {
    opacity: 0.3;
    cursor: default;
  }

  .carousel-dots {
    display: flex;
    gap: 0.5rem;
  }

  .carousel-dots button {
    width: 0.45rem;
    height: 0.45rem;
    padding: 0;
    border: 0;
    border-radius: 50%;
    background: var(--accent-green-light);
    cursor: pointer;
  }

  .carousel-dots button.active {
    background: var(--accent-green-dark);
    transform: scale(1.35);
  }

  .story-copy {
    text-align: center;
  }

  .story-photo {
    order: 2;
  }

  .section-header {
    font-size: 1.2rem;
    line-height: 1.25;
    text-align: center;
  }

  .section-body {
    font-size: 0.98rem;
    line-height: 1.55;
    overflow-wrap: break-word;
  }

  .timeline-section::before {
    text-align: center;
    font-size: 0.85rem;
  }
}

</style>