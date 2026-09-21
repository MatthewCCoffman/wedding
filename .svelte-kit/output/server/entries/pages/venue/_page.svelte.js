import { D as store_get, F as unsubscribe_stores, B as pop, z as push } from "../../../chunks/index2.js";
import { l as language } from "../../../chunks/language.js";
import "mapbox-gl";
import { e as escape_html } from "../../../chunks/attributes.js";
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  let currentText;
  const translations = {
    en: {
      title: "Hotel Real del Bosque, Hidalgo",
      subtitle: "Zoom in for descriptions",
      venue: "Wedding Venue"
    },
    es: {
      title: "Hotel Real del Bosque, Hidalgo",
      subtitle: "Acércate para ver más detalles",
      venue: "Lugar de la boda"
    }
  };
  currentText = translations[store_get($$store_subs ??= {}, "$language", language)];
  $$payload.out += `<div class="page-title durham-page-title svelte-1h85fim"><div class="svelte-1h85fim">${escape_html(currentText.title)}</div> <div class="page-subtitle svelte-1h85fim">${escape_html(currentText.subtitle)}</div></div> <div id="map" class="svelte-1h85fim"></div> <div class="external-guides svelte-1h85fim"></div>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _page as default
};
