import { Q as current_component, D as store_get, F as unsubscribe_stores, B as pop, z as push } from "../../../chunks/index2.js";
import { l as language } from "../../../chunks/language.js";
import { e as escape_html } from "../../../chunks/attributes.js";
function onDestroy(fn) {
  var context = (
    /** @type {Component} */
    current_component
  );
  (context.d ??= []).push(fn);
}
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  let currentTranslations;
  const translations = {
    en: {
      title: "Wedding Registry",
      intro: [
        "Your presence at our wedding is the greatest gift of all.",
        "However, if you wish to honor us with a gift, we've created a registry for your convenience."
      ],
      button: "View Our Registry"
    },
    es: {
      title: "Mesa de Regalos",
      intro: [
        "Su presencia en nuestra boda es el mejor regalo de todos.",
        "Sin embargo, si desea honrarnos con un regalo, hemos creado una mesa de regalos para su comodidad."
      ],
      button: "Ver Nuestra Mesa de Regalos"
    }
  };
  function removeZolaInjectedNodes() {
    if (typeof document === "undefined") return;
    document.querySelectorAll(".zola-registry-embed, [data-registry-key]").forEach((n) => n.remove());
    const script = document.getElementById("zola-wjs");
    if (script && script.parentNode) script.parentNode.removeChild(script);
    document.querySelectorAll("iframe").forEach((f) => {
      try {
        if (f.src && f.src.includes("zola.com")) f.remove();
      } catch (e) {
      }
    });
    document.querySelectorAll('[id*="zola"], [class*="zola"]').forEach((n) => n.remove());
  }
  onDestroy(() => {
    if (typeof document === "undefined") return;
    removeZolaInjectedNodes();
  });
  currentTranslations = translations[store_get($$store_subs ??= {}, "$language", language)];
  $$payload.out += `<div class="registry-page svelte-1somcb0"><div class="page-title svelte-1somcb0"><div class="svelte-1somcb0">${escape_html(currentTranslations.title)}</div></div> <div class="registry-intro svelte-1somcb0"><p class="svelte-1somcb0">${escape_html(currentTranslations.intro[0])}</p> <p class="svelte-1somcb0">${escape_html(currentTranslations.intro[1])}</p></div> <div class="registry-container svelte-1somcb0"><a class="zola-registry-embed registry-button svelte-1somcb0" href="https://www.zola.com/registry/evelinandmatt2025" data-registry-key="evelinandmatt2025" rel="noopener noreferrer"><span class="button-text svelte-1somcb0">${escape_html(currentTranslations.button)}</span> <span class="button-icon svelte-1somcb0">→</span></a></div></div>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _page as default
};
