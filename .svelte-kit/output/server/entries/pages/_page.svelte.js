import { J as fallback, K as bind_props, B as pop, z as push, D as store_get, M as head, E as attr_class, F as unsubscribe_stores } from "../../chunks/index2.js";
import { e as escape_html, a as attr } from "../../chunks/attributes.js";
import { l as language } from "../../chunks/language.js";
import { p as pic25 } from "../../chunks/BAD39E09-7157-485A-9A02-3A0C03C3A660.js";
function Countdown($$payload, $$props) {
  push();
  let translatedLabels;
  let language2 = fallback($$props["language"], "en");
  let timeRemaining = {};
  const labels = {
    en: {
      days: "Days",
      hours: "Hours",
      minutes: "Minutes",
      seconds: "Seconds"
    },
    es: {
      days: "Días",
      hours: "Horas",
      minutes: "Minutos",
      seconds: "Segundos"
    }
  };
  translatedLabels = labels[language2] || labels.en;
  $$payload.out += `<div class="countdown svelte-iapbry"><div class="unit svelte-iapbry"><div class="circle svelte-iapbry">${escape_html(timeRemaining.days)}</div> <div class="label svelte-iapbry">${escape_html(translatedLabels.days)}</div></div> <div class="separator svelte-iapbry">:</div> <div class="unit svelte-iapbry"><div class="circle svelte-iapbry">${escape_html(timeRemaining.hours)}</div> <div class="label svelte-iapbry">${escape_html(translatedLabels.hours)}</div></div> <div class="separator svelte-iapbry">:</div> <div class="unit svelte-iapbry"><div class="circle svelte-iapbry">${escape_html(timeRemaining.minutes)}</div> <div class="label svelte-iapbry">${escape_html(translatedLabels.minutes)}</div></div> <div class="separator svelte-iapbry">:</div> <div class="unit svelte-iapbry"><div class="circle svelte-iapbry">${escape_html(timeRemaining.seconds)}</div> <div class="label svelte-iapbry">${escape_html(translatedLabels.seconds)}</div></div></div>`;
  bind_props($$props, { language: language2 });
  pop();
}
function _page($$payload) {
  var $$store_subs;
  let currentLanguage;
  const translations = {
    en: { heading: "COUNTDOWN TO I DO", alt: "Evelin and Matthew" },
    es: {
      heading: "CUENTA REGRESIVA PARA DECIR SÍ",
      alt: "Evelin y Matthew"
    }
  };
  currentLanguage = translations[store_get($$store_subs ??= {}, "$language", language)];
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>${escape_html(store_get($$store_subs ??= {}, "$language", language) === "en" ? "Evelin & Matthew" : "Evelin y Matthew")}</title>`;
    $$payload2.out += `<meta name="description"${attr("content", store_get($$store_subs ??= {}, "$language", language) === "en" ? "wedding2026" : "boda2026")}/>`;
  });
  $$payload.out += `<div class="language-toggle svelte-ufzz6t" aria-label="Language switcher"><button type="button"${attr("aria-pressed", store_get($$store_subs ??= {}, "$language", language) === "en")}${attr_class("svelte-ufzz6t", void 0, {
    "active": store_get($$store_subs ??= {}, "$language", language) === "en"
  })}>EN</button> <button type="button"${attr("aria-pressed", store_get($$store_subs ??= {}, "$language", language) === "es")}${attr_class("svelte-ufzz6t", void 0, {
    "active": store_get($$store_subs ??= {}, "$language", language) === "es"
  })}>ES</button></div> <div class="page-header-image svelte-ufzz6t"><img${attr("src", pic25)}${attr("alt", currentLanguage.alt)} class="svelte-ufzz6t"/></div> <div class="page-title svelte-ufzz6t"><div class="svelte-ufzz6t">${escape_html(currentLanguage.heading)}</div></div> `;
  Countdown($$payload, {
    language: store_get($$store_subs ??= {}, "$language", language)
  });
  $$payload.out += `<!---->`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
}
export {
  _page as default
};
