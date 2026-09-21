<script lang="ts">
  import { language } from '$lib/stores/language';

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
          body: 'Our first trip to Mexico was more than just a getaway—it was a meaningful step into each other’s worlds. Besides being a trip for her birthday, it was his turn to meet her family and ask for her father’s blessing! He was unsure of what to expect, but very excited. From the moment he arrived, they welcomed him with open arms, warm smiles, and hearts full of love. We spent our days exploring her hometown, sharing homemade meals, and laughing late into the night with family who quickly became part of our family. He asked her father, Isai, for his blessing to marry his daughter and Isai said yes!'
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
          body: 'Nuestro primer viaje a México fue más que un simple escape: fue un paso significativo hacia cada uno de nuestros mundos. Además de ser un viaje por su cumpleaños, era su turno de conocer a su familia y pedir la bendición de su padre. No sabía qué esperar, pero estaba muy emocionado. Desde el momento en que llegó, lo recibieron con los brazos abiertos, sonrisas cálidas y corazones llenos de amor. Pasamos nuestros días explorando su pueblo natal, compartiendo comidas caseras y riendo hasta tarde con una familia que rápidamente se volvió parte de la nuestra. Le pidió a su padre, Isai, su bendición para casarse con su hija y Isai dijo que sí.'
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
    {#each story.entries as entry}
      <div class="timeline-section" data-date={entry.date}>
        <div class="section-header">
            {entry.header}
        </div>
        <div class="section-body">
            {entry.body}
        </div>
      </div>
    {/each}
</div>

<style>
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
  gap: 2.5rem;
  padding: 0 1rem 3rem;
  margin: 0 auto;
  font-family: 'Georgia', serif;
  text-align: center;
  width: 50%;
  color: #4a3c31; /* elegant dark brown */
}

/* Timeline Sections */
.timeline-section {
  padding: 2rem;
  background: var(--background-color);
  border-radius: 1rem;
  box-shadow: 0 6px 15px rgba(211, 211, 211, 0.4);
  transition: background 0.3s ease;
}
.timeline-section:hover {
  background: var(--background-color);
}

/* Section Header */
.section-header {
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
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

/* Mobile Adjustments */
@media only screen and (max-width: 500px) {
  /* Page Content */
  .page-content {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    margin: 0 auto;
    font-family: 'Georgia', serif;
    text-align: center;
    width: 85%;
    margin-left: 3.5%;
    color: #4a3c31; /* elegant dark brown */
  }

  .timeline-section {
    padding: 1.5rem;
  }

  .section-header {
    font-size: 1.3rem;
    text-align: center;
  }

  .section-body {
    font-size: 1rem;
  }

  .timeline-section::before {
    text-align: center;
    font-size: 0.85rem;
  }
}

</style>