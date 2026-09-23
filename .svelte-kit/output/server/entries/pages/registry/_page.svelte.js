import { J as fallback, M as head, K as bind_props } from "../../../chunks/index2.js";
import { a as attr, e as escape_html } from "../../../chunks/attributes.js";
function _page($$payload, $$props) {
  let copy;
  let language = fallback($$props["language"], "en");
  const registryUrl = "https://www.zola.com/registry/evelinandmatt2025";
  const translations = {
    en: {
      label: "Wedding Registry",
      headingFirst: "",
      headingEmphasis: "",
      message: "Celebrating with you in Hidalgo is the greatest gift we could receive.",
      details: "For those who have asked, we have selected a few things for the home and life we are building together.",
      button: "View Our Registry",
      note: "Registry hosted by Zola",
      imageAlt: "Evelin and Matthew"
    },
    es: {
      label: "Mesa de Regalos",
      headingFirst: "Un regalo para nuestro",
      headingEmphasis: "próximo capítulo.",
      message: "Celebrar con ustedes en Hidalgo es el mejor regalo que podríamos recibir.",
      details: "Para quienes nos han preguntado, hemos elegido algunas cosas para el hogar y la vida que estamos construyendo juntos.",
      button: "Ver Nuestra Mesa",
      note: "Mesa de regalos en Zola",
      imageAlt: "Evelin y Matthew"
    }
  };
  copy = translations[language] ?? translations.en;
  head($$payload, ($$payload2) => {
    $$payload2.out += `<link rel="preconnect" href="https://fonts.googleapis.com"/> <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous"/> <link href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,400;0,6..96,500;1,6..96,400&amp;display=swap" rel="stylesheet"/>`;
  });
  $$payload.out += `<div class="registry-section svelte-jftpj1"><div class="photo-column svelte-jftpj1"><div class="photo-frame svelte-jftpj1"><img src="src/lib/images/918428E3-CCCC-4905-95CB-A9FF8F044545.jpeg"${attr("alt", copy.imageAlt)} loading="lazy" class="svelte-jftpj1"/> <span class="section-number svelte-jftpj1" aria-hidden="true">05</span></div></div> <div class="registry-content svelte-jftpj1"><p class="lead svelte-jftpj1">${escape_html(copy.message)}</p> <p class="details svelte-jftpj1">${escape_html(copy.details)}</p> <a class="registry-button svelte-jftpj1"${attr("href", registryUrl)} target="_blank" rel="noopener noreferrer">${escape_html(copy.button)} <span aria-hidden="true" class="svelte-jftpj1">↗</span></a></div></div>`;
  bind_props($$props, { language });
}
export {
  _page as default
};
