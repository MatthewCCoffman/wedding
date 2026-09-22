import { D as store_get, N as ensure_array_like, F as unsubscribe_stores } from "../../../chunks/index2.js";
import { l as language } from "../../../chunks/language.js";
import { e as escape_html, a as attr } from "../../../chunks/attributes.js";
function _page($$payload) {
  var $$store_subs;
  let story;
  const storyContent = {
    en: {
      title: "OUR STORY",
      entries: [
        {
          date: "10.7.23",
          header: "LOVE AT FIRST SIGHT",
          body: "We met at a football watch party, but neither of us realized we were walking into the most important moment of our lives. She caught his eyes instantly as she carried in a bag of ice, not expecting anything more than a night of football and friends. But fate had other plans. He gathered the courage to walk up and say hello, and from that first night, they knew they had found their soulmates."
        },
        {
          date: "10.15.23",
          header: "OUR FIRST DATE",
          body: "Our first date night was unforgettable—and it just so happened to be his birthday. Instead of keeping it simple, he invited his whole family to meet her, because he knew she was special. We dressed up for a fancy dinner and went out to listen to live music, but despite the crowd and the celebration, it felt like it was just the two of us. We stole quiet moments, shared laughs, and started writing the first pages of what would become our love story."
        },
        {
          date: "2.29.24",
          header: "OUR FIRST TRIP",
          body: "Our first trip to Mexico was more than just a getaway—it was a meaningful step into each other’s worlds. Besides being a trip for her birthday, it was his turn to meet her family and ask for her father’s blessing! He was unsure of what to expect, but very excited. From the moment he arrived, they welcomed him with open arms, warm smiles, and hearts full of love. We spent our days exploring her hometown, sharing homemade meals, and laughing late into the night with family. He asked her father, Isai, for his blessing to marry his daughter and Isai said yes!"
        },
        {
          date: "12.29.24",
          header: "PROPOSAL TO FOREVER",
          body: "Our proposal took place in one of the most romantic corners of the world—El Callejón del Beso in Guanajuato, Mexico. Surrounded by legend and love, we stood on the narrow stone steps where centuries-old balconies almost touch. As we reached the top of the balconies across from one another, she leaned in for a kiss, both of their hearts racing, and he got down on one knee. In that moment, he asked her to be his forever. And she said YES."
        },
        {
          date: "∞",
          header: "OUR FUTURE",
          body: "Our story is just beginning. As we step into this new chapter hand in hand, we look forward to a life filled with love, laughter, and shared dreams. We imagine quiet mornings and spontaneous adventures, building a home full of warmth and memories, and growing stronger through every season life brings. We’ll celebrate the wins, hold each other through the challenges, and always find our way back to the love that started it all. Whatever the future holds, we know one thing for sure—it will be beautiful, because we’ll face it together."
        }
      ]
    },
    es: {
      title: "NUESTRA HISTORIA",
      entries: [
        {
          date: "10.7.23",
          header: "AMOR A PRIMERA VISTA",
          body: "Nos conocimos en una fiesta para ver fútbol, pero ninguno de los dos imaginó que estaba entrando en el momento más importante de nuestras vidas. Ella llamó su atención al instante cuando llegó con una bolsa de hielo, sin esperar nada más que una noche de fútbol y amigos. Pero el destino tenía otros planes. Él reunió el valor para acercarse y decir hola, y desde esa primera noche, supieron que habían encontrado a su alma gemela."
        },
        {
          date: "10.15.23",
          header: "NUESTRA PRIMERA CITA",
          body: "Nuestra primera cita fue inolvidable y, por casualidad, también era su cumpleaños. En lugar de hacer algo sencillo, invitó a toda su familia a conocerla porque sabía que era especial. Nos vestimos para una cena elegante y salimos a escuchar música en vivo, pero a pesar de la multitud y la celebración, se sintió como si solo estuviéramos nosotros dos. Robamos momentos tranquilos, compartimos risas y comenzamos a escribir las primeras páginas de lo que sería nuestra historia de amor."
        },
        {
          date: "2.29.24",
          header: "NUESTRO PRIMER VIAJE",
          body: "Nuestro primer viaje a México fue más que un simple escape: fue un paso significativo hacia cada uno de nuestros mundos. Además de ser un viaje por su cumpleaños, era su turno de conocer a su familia y pedir la bendición de su padre. No sabía qué esperar, pero estaba muy emocionado. Desde el momento en que llegó, lo recibieron con los brazos abiertos, sonrisas cálidas y corazones llenos de amor. Pasamos nuestros días explorando su pueblo natal, compartiendo comidas caseras y riendo hasta tarde con la familia. Le pidió a su padre, Isai, su bendición para casarse con su hija y Isai dijo que sí."
        },
        {
          date: "12.29.24",
          header: "PROPUESTA PARA SIEMPRE",
          body: "Nuestra propuesta ocurrió en uno de los rincones más románticos del mundo: El Callejón del Beso en Guanajuato, México. Rodeados por la leyenda y el amor, nos encontramos en los estrechos escalones de piedra donde los balcones de siglos casi se tocan. Cuando llegamos a la parte alta de los balcones frente a frente, ella se inclinó para besarle, con el corazón acelerado, y él se arrodilló. En ese momento, le pidió que fuera su forever. Y ella dijo ¡SÍ!"
        },
        {
          date: "∞",
          header: "NUESTRO FUTURO",
          body: "Nuestra historia apenas comienza. Mientras avanzamos juntos a este nuevo capítulo de la mano, miramos hacia un futuro lleno de amor, risas y sueños compartidos. Imaginamos mañanas tranquilas y aventuras espontáneas, construyendo un hogar lleno de calor y recuerdos, y volviéndonos más fuertes con cada estación que la vida trae. Celebramos los triunfos, nos apoyamos en los desafíos y siempre encontramos el camino de regreso al amor que todo comenzó. Sea lo que el futuro nos depare, sabemos algo con seguridad: será hermoso, porque lo enfrentaremos juntos."
        }
      ]
    }
  };
  story = storyContent[store_get($$store_subs ??= {}, "$language", language)];
  const each_array = ensure_array_like(story.entries);
  $$payload.out += `<div class="page-content svelte-zre082"><div class="page-title svelte-zre082"><div class="svelte-zre082">${escape_html(story.title)}</div></div> <!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let entry = each_array[$$index];
    $$payload.out += `<div class="timeline-section svelte-zre082"${attr("data-date", entry.date)}><div class="section-header svelte-zre082">${escape_html(entry.header)}</div> <div class="section-body svelte-zre082">${escape_html(entry.body)}</div></div>`;
  }
  $$payload.out += `<!--]--></div>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
}
export {
  _page as default
};
