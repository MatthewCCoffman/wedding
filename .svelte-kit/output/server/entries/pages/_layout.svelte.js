import "clsx";
import { D as store_get, E as attr_class, F as unsubscribe_stores, B as pop, z as push } from "../../chunks/index2.js";
import { p as page } from "../../chunks/index3.js";
import { l as language } from "../../chunks/language.js";
import { a as attr, e as escape_html } from "../../chunks/attributes.js";
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
  $$payload.out += `<div class="mobile svelte-1el94xj"><div class="navbar-container svelte-1el94xj"><button class="hamburger svelte-1el94xj" aria-label="Toggle Menu"><span${attr_class("bar top svelte-1el94xj", void 0, { "open": isMenuOpen })}></span> <span${attr_class("bar middle svelte-1el94xj", void 0, { "open": isMenuOpen })}></span> <span${attr_class("bar bottom svelte-1el94xj", void 0, { "open": isMenuOpen })}></span></button> <div class="svelte-1el94xj"><nav${attr_class("svelte-1el94xj", void 0, { "is-open": isMenuOpen })}><ul class="svelte-1el94xj"><li${attr("aria-current", page.url.pathname === "/" ? "page" : void 0)} class="svelte-1el94xj"><a href="/" class="svelte-1el94xj">${escape_html(navText.home)}</a></li> <li${attr("aria-current", page.url.pathname.startsWith("/our_story") ? "page" : void 0)} class="svelte-1el94xj"><a href="/#story" class="svelte-1el94xj">${escape_html(navText.story)}</a></li> <li${attr("aria-current", page.url.pathname.startsWith("/photos") ? "page" : void 0)} class="svelte-1el94xj"><a href="/photos" class="svelte-1el94xj">${escape_html(navText.photos)}</a></li> <li${attr("aria-current", page.url.pathname.startsWith("/venue") ? "page" : void 0)} class="svelte-1el94xj"><a href="/#venue" class="svelte-1el94xj">${escape_html(navText.venue)}</a></li> <li${attr("aria-current", page.url.pathname.startsWith("/registry") ? "page" : void 0)} class="svelte-1el94xj"><a href="/#registry" class="svelte-1el94xj">${escape_html(navText.registry)}</a></li> <li${attr("aria-current", page.url.pathname.startsWith("/rsvp") ? "page" : void 0)} class="svelte-1el94xj"><a href="/#rsvp" class="svelte-1el94xj">${escape_html(navText.rsvp)}</a></li></ul></nav></div> <div class="language-toggle svelte-1el94xj" aria-label="Language switcher"><button type="button"${attr("aria-pressed", store_get($$store_subs ??= {}, "$language", language) === "en")}${attr_class("svelte-1el94xj", void 0, {
    "active": store_get($$store_subs ??= {}, "$language", language) === "en"
  })}>EN</button> <button type="button"${attr("aria-pressed", store_get($$store_subs ??= {}, "$language", language) === "es")}${attr_class("svelte-1el94xj", void 0, {
    "active": store_get($$store_subs ??= {}, "$language", language) === "es"
  })}>ES</button></div></div></div> <div class="desktop svelte-1el94xj"><div class="navbar-container svelte-1el94xj"><nav class="svelte-1el94xj"><ul class="svelte-1el94xj"><li${attr("aria-current", page.url.pathname === "/" ? "page" : void 0)} class="svelte-1el94xj"><a href="/" class="svelte-1el94xj">${escape_html(navText.home)}</a></li> <li${attr("aria-current", page.url.pathname.startsWith("/our_story") ? "page" : void 0)} class="svelte-1el94xj"><a href="/#story" class="svelte-1el94xj">${escape_html(navText.story)}</a></li> <li${attr("aria-current", page.url.pathname.startsWith("/photos") ? "page" : void 0)} class="svelte-1el94xj"><a href="/photos" class="svelte-1el94xj">${escape_html(navText.photos)}</a></li> <li${attr("aria-current", page.url.pathname.startsWith("/venue") ? "page" : void 0)} class="svelte-1el94xj"><a href="/#venue" class="svelte-1el94xj">${escape_html(navText.venue)}</a></li> <li${attr("aria-current", page.url.pathname.startsWith("/registry") ? "page" : void 0)} class="svelte-1el94xj"><a href="/#registry" class="svelte-1el94xj">${escape_html(navText.registry)}</a></li> <li${attr("aria-current", page.url.pathname.startsWith("/rsvp") ? "page" : void 0)} class="svelte-1el94xj"><a href="/#rsvp" class="svelte-1el94xj">${escape_html(navText.rsvp)}</a></li></ul></nav> <div class="language-toggle svelte-1el94xj" aria-label="Language switcher"><button type="button"${attr("aria-pressed", store_get($$store_subs ??= {}, "$language", language) === "en")}${attr_class("svelte-1el94xj", void 0, {
    "active": store_get($$store_subs ??= {}, "$language", language) === "en"
  })}>EN</button> <button type="button"${attr("aria-pressed", store_get($$store_subs ??= {}, "$language", language) === "es")}${attr_class("svelte-1el94xj", void 0, {
    "active": store_get($$store_subs ??= {}, "$language", language) === "es"
  })}>ES</button></div></div></div>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
function _layout($$payload, $$props) {
  let { children } = $$props;
  $$payload.out += `<div class="app svelte-1x7t55r">`;
  Header($$payload);
  $$payload.out += `<!----> <main class="svelte-1x7t55r">`;
  children($$payload);
  $$payload.out += `<!----></main> <footer class="footer svelte-1x7t55r"><div class="footer-content-initials svelte-1x7t55r">E&amp;M</div> <div class="bar svelte-1x7t55r"></div> <div class="footer-content-date svelte-1x7t55r">11.07.2026</div></footer></div>`;
}
export {
  _layout as default
};
