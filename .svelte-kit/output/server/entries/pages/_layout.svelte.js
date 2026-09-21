import "clsx";
import { D as store_get, E as attr_class, F as unsubscribe_stores, B as pop, z as push } from "../../chunks/index2.js";
import { p as page } from "../../chunks/index3.js";
import { l as language } from "../../chunks/language.js";
import { a as attr, e as escape_html } from "../../chunks/attributes.js";
const logo = "/_app/immutable/assets/download.69tgjITe.png";
function Header($$payload, $$props) {
  push();
  var $$store_subs;
  let navText;
  let isMenuOpen = false;
  const navTranslations = {
    en: {
      home: "Home",
      story: "Story",
      photos: "Photos",
      venue: "Venue",
      registry: "Registry",
      rsvp: "RSVP"
    },
    es: {
      home: "Inicio",
      story: "Historia",
      photos: "Fotos",
      venue: "Lugar",
      registry: "Regalos",
      rsvp: "RSVP"
    }
  };
  navText = navTranslations[store_get($$store_subs ??= {}, "$language", language)];
  $$payload.out += `<div class="app-header desktop svelte-3i8f6p"><div class="logo-wrapper svelte-3i8f6p"><img${attr("src", logo)} alt="Wedding Logo" class="svelte-3i8f6p"/></div> Jailene Evelin Fierro &amp; Matthew Cruz Coffman</div> <div class="app-header mobile svelte-3i8f6p"><div class="logo-wrapper svelte-3i8f6p"><img${attr("src", logo)} alt="Wedding Logo" class="svelte-3i8f6p"/></div> Evelin &amp; Matthew</div> <div class="primary-section svelte-3i8f6p"><div class="section-info"><span class="section-date svelte-3i8f6p">${escape_html(store_get($$store_subs ??= {}, "$language", language) === "en" ? "November 07, 2026" : "07 de noviembre de 2026")}</span> <span class="separator">•</span> <span class="section-date svelte-3i8f6p">${escape_html(store_get($$store_subs ??= {}, "$language", language) === "en" ? "Hgo, Mexico" : "Hgo, México")}</span></div></div> <div class="mobile svelte-3i8f6p"><div class="navbar-container svelte-3i8f6p"><button class="hamburger svelte-3i8f6p" aria-label="Toggle Menu"><span${attr_class("bar top svelte-3i8f6p", void 0, { "open": isMenuOpen })}></span> <span${attr_class("bar middle svelte-3i8f6p", void 0, { "open": isMenuOpen })}></span> <span${attr_class("bar bottom svelte-3i8f6p", void 0, { "open": isMenuOpen })}></span></button> <div><nav${attr_class("svelte-3i8f6p", void 0, { "is-open": isMenuOpen })}><ul class="svelte-3i8f6p"><li${attr("aria-current", page.url.pathname === "/" ? "page" : void 0)} class="svelte-3i8f6p"><a href="/" class="svelte-3i8f6p">${escape_html(navText.home)}</a></li> <li${attr("aria-current", page.url.pathname.startsWith("/our_story") ? "page" : void 0)} class="svelte-3i8f6p"><a href="/our_story" class="svelte-3i8f6p">${escape_html(navText.story)}</a></li> <li${attr("aria-current", page.url.pathname.startsWith("/photos") ? "page" : void 0)} class="svelte-3i8f6p"><a href="/photos" class="svelte-3i8f6p">${escape_html(navText.photos)}</a></li> <li${attr("aria-current", page.url.pathname.startsWith("/venue") ? "page" : void 0)} class="svelte-3i8f6p"><a href="/venue" class="svelte-3i8f6p">${escape_html(navText.venue)}</a></li> <li${attr("aria-current", page.url.pathname.startsWith("/registry") ? "page" : void 0)} class="svelte-3i8f6p"><a href="/registry" class="svelte-3i8f6p">${escape_html(navText.registry)}</a></li> <li${attr("aria-current", page.url.pathname.startsWith("/rsvp") ? "page" : void 0)} class="svelte-3i8f6p"><a href="/rsvp" class="svelte-3i8f6p">${escape_html(navText.rsvp)}</a></li></ul></nav></div></div></div> <div class="desktop svelte-3i8f6p"><div class="navbar-container svelte-3i8f6p"><nav class="svelte-3i8f6p"><ul class="svelte-3i8f6p"><li${attr("aria-current", page.url.pathname === "/" ? "page" : void 0)} class="svelte-3i8f6p"><a href="/" class="svelte-3i8f6p">${escape_html(navText.home)}</a></li> <li${attr("aria-current", page.url.pathname.startsWith("/our_story") ? "page" : void 0)} class="svelte-3i8f6p"><a href="/our_story" class="svelte-3i8f6p">${escape_html(navText.story)}</a></li> <li${attr("aria-current", page.url.pathname.startsWith("/photos") ? "page" : void 0)} class="svelte-3i8f6p"><a href="/photos" class="svelte-3i8f6p">${escape_html(navText.photos)}</a></li> <li${attr("aria-current", page.url.pathname.startsWith("/venue") ? "page" : void 0)} class="svelte-3i8f6p"><a href="/venue" class="svelte-3i8f6p">${escape_html(navText.venue)}</a></li> <li${attr("aria-current", page.url.pathname.startsWith("/registry") ? "page" : void 0)} class="svelte-3i8f6p"><a href="/registry" class="svelte-3i8f6p">${escape_html(navText.registry)}</a></li> <li${attr("aria-current", page.url.pathname.startsWith("/rsvp") ? "page" : void 0)} class="svelte-3i8f6p"><a href="/rsvp" class="svelte-3i8f6p">${escape_html(navText.rsvp)}</a></li></ul></nav></div></div>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
function _layout($$payload, $$props) {
  let { children } = $$props;
  $$payload.out += `<div class="app svelte-35m3su">`;
  Header($$payload);
  $$payload.out += `<!----> <main class="svelte-35m3su">`;
  children($$payload);
  $$payload.out += `<!----></main> <footer class="footer svelte-35m3su"><div class="footer-content-initials svelte-35m3su">E&amp;M</div> <div class="bar svelte-35m3su"></div> <div class="footer-content-date svelte-35m3su">11.07.2026</div></footer></div>`;
}
export {
  _layout as default
};
