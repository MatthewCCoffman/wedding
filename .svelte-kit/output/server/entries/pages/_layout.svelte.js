import "clsx";
import { v as attr_class, u as pop, s as push } from "../../chunks/index.js";
import { p as page } from "../../chunks/index2.js";
import { a as attr } from "../../chunks/attributes.js";
const logo = "/_app/immutable/assets/download.69tgjITe.png";
function Header($$payload, $$props) {
  push();
  let isMenuOpen = false;
  $$payload.out += `<div class="app-header desktop svelte-3i8f6p"><div class="logo-wrapper svelte-3i8f6p"><img${attr("src", logo)} alt="Wedding Logo" class="svelte-3i8f6p"/></div> Jailene Evelin Fierro &amp; Matthew Cruz Coffman</div> <div class="app-header mobile svelte-3i8f6p"><div class="logo-wrapper svelte-3i8f6p"><img${attr("src", logo)} alt="Wedding Logo" class="svelte-3i8f6p"/></div> Evelin &amp; Matthew</div> <div class="primary-section svelte-3i8f6p"><div class="section-info"><span class="section-date svelte-3i8f6p">November 07, 2026</span> <span class="separator">•</span> <span class="section-date svelte-3i8f6p">Hgo, Mexico</span></div></div> <div class="mobile svelte-3i8f6p"><div class="navbar-container svelte-3i8f6p"><button class="hamburger svelte-3i8f6p" aria-label="Toggle Menu"><span${attr_class("bar top svelte-3i8f6p", void 0, { "open": isMenuOpen })}></span> <span${attr_class("bar middle svelte-3i8f6p", void 0, { "open": isMenuOpen })}></span> <span${attr_class("bar bottom svelte-3i8f6p", void 0, { "open": isMenuOpen })}></span></button> <div><nav${attr_class("svelte-3i8f6p", void 0, { "is-open": isMenuOpen })}><ul class="svelte-3i8f6p"><li${attr("aria-current", page.url.pathname === "/" ? "page" : void 0)} class="svelte-3i8f6p"><a href="/" class="svelte-3i8f6p">Home</a></li> <li${attr("aria-current", page.url.pathname.startsWith("/our_story") ? "page" : void 0)} class="svelte-3i8f6p"><a href="/our_story" class="svelte-3i8f6p">Story</a></li> <li${attr("aria-current", page.url.pathname.startsWith("/photos") ? "page" : void 0)} class="svelte-3i8f6p"><a href="/photos" class="svelte-3i8f6p">Photos</a></li> <li${attr("aria-current", page.url.pathname.startsWith("/venue") ? "page" : void 0)} class="svelte-3i8f6p"><a href="/venue" class="svelte-3i8f6p">Venue</a></li> <li${attr("aria-current", page.url.pathname.startsWith("/registry") ? "page" : void 0)} class="svelte-3i8f6p"><a href="/registry" class="svelte-3i8f6p">Registry</a></li> <li${attr("aria-current", page.url.pathname.startsWith("/rsvp") ? "page" : void 0)} class="svelte-3i8f6p"><a href="/rsvp" class="svelte-3i8f6p">RSVP</a></li></ul></nav></div></div></div> <div class="desktop svelte-3i8f6p"><div class="navbar-container svelte-3i8f6p"><nav class="svelte-3i8f6p"><ul class="svelte-3i8f6p"><li${attr("aria-current", page.url.pathname === "/" ? "page" : void 0)} class="svelte-3i8f6p"><a href="/" class="svelte-3i8f6p">Home</a></li> <li${attr("aria-current", page.url.pathname.startsWith("/our_story") ? "page" : void 0)} class="svelte-3i8f6p"><a href="/our_story" class="svelte-3i8f6p">Story</a></li> <li${attr("aria-current", page.url.pathname.startsWith("/photos") ? "page" : void 0)} class="svelte-3i8f6p"><a href="/photos" class="svelte-3i8f6p">Photos</a></li> <li${attr("aria-current", page.url.pathname.startsWith("/venue") ? "page" : void 0)} class="svelte-3i8f6p"><a href="/venue" class="svelte-3i8f6p">Venue</a></li> <li${attr("aria-current", page.url.pathname.startsWith("/registry") ? "page" : void 0)} class="svelte-3i8f6p"><a href="/registry" class="svelte-3i8f6p">Registry</a></li> <li${attr("aria-current", page.url.pathname.startsWith("/rsvp") ? "page" : void 0)} class="svelte-3i8f6p"><a href="/rsvp" class="svelte-3i8f6p">RSVP</a></li></ul></nav></div></div>`;
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
