import { J as fallback, K as bind_props, B as pop, z as push, D as store_get, M as head, F as unsubscribe_stores } from "../../chunks/index2.js";
import { e as escape_html, a as attr } from "../../chunks/attributes.js";
import _page$1 from "./our_story/_page.svelte.js";
import _page$2 from "./photos/_page.svelte.js";
import _page$3 from "./venue/_page.svelte.js";
import _page$4 from "./registry/_page.svelte.js";
import _page$5 from "./rsvp/_page.svelte.js";
import { l as language } from "../../chunks/language.js";
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
  $$payload.out += `<div class="countdown svelte-1y1eyyb"><div class="unit svelte-1y1eyyb"><div class="circle svelte-1y1eyyb">${escape_html(timeRemaining.days)}</div> <div class="label svelte-1y1eyyb">${escape_html(translatedLabels.days)}</div></div> <div class="separator svelte-1y1eyyb">:</div> <div class="unit svelte-1y1eyyb"><div class="circle svelte-1y1eyyb">${escape_html(timeRemaining.hours)}</div> <div class="label svelte-1y1eyyb">${escape_html(translatedLabels.hours)}</div></div> <div class="separator svelte-1y1eyyb">:</div> <div class="unit svelte-1y1eyyb"><div class="circle svelte-1y1eyyb">${escape_html(timeRemaining.minutes)}</div> <div class="label svelte-1y1eyyb">${escape_html(translatedLabels.minutes)}</div></div> <div class="separator svelte-1y1eyyb">:</div> <div class="unit svelte-1y1eyyb"><div class="circle svelte-1y1eyyb">${escape_html(timeRemaining.seconds)}</div> <div class="label svelte-1y1eyyb">${escape_html(translatedLabels.seconds)}</div></div></div>`;
  bind_props($$props, { language: language2 });
  pop();
}
const meadowVideo = "/_app/immutable/assets/wedding-meadow.DVyNHFet.mp4";
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
  $$payload.out += `<div class="page-header-image svelte-2prg98"><video class="hero-video svelte-2prg98"${attr("src", meadowVideo)} autoplay muted loop playsinline${attr("aria-label", currentLanguage.alt)}></video> <div class="hero-caption svelte-2prg98"><span class="svelte-2prg98">${escape_html(store_get($$store_subs ??= {}, "$language", language) === "en" ? "The Wedding of" : "La Boda de")}</span> <strong class="svelte-2prg98">Evelin <em class="svelte-2prg98">&amp;</em> Matthew</strong> <span class="svelte-2prg98">${escape_html(store_get($$store_subs ??= {}, "$language", language) === "en" ? "November 07, 2026" : "07 de noviembre de 2026")} <em class="detail-separator svelte-2prg98">•</em> ${escape_html(store_get($$store_subs ??= {}, "$language", language) === "en" ? "Hidalgo, Mexico" : "Hidalgo, México")}</span></div></div> <div class="page-title svelte-2prg98"><div class="svelte-2prg98">${escape_html(currentLanguage.heading)}</div></div> `;
  Countdown($$payload, {
    language: store_get($$store_subs ??= {}, "$language", language)
  });
  $$payload.out += `<!----> <section id="story" class="scroll-section svelte-2prg98">`;
  _page$1($$payload);
  $$payload.out += `<!----></section> <section id="photos" class="scroll-section svelte-2prg98">`;
  _page$2($$payload);
  $$payload.out += `<!----></section> <section id="venue" class="scroll-section svelte-2prg98">`;
  _page$3($$payload);
  $$payload.out += `<!----></section> <section id="registry" class="scroll-section svelte-2prg98">`;
  _page$4($$payload);
  $$payload.out += `<!----></section> <section id="rsvp" class="scroll-section svelte-2prg98">`;
  _page$5($$payload);
  $$payload.out += `<!----></section>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
}
export {
  _page as default
};
