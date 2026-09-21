import { u as pop, s as push, x as head } from "../../chunks/index.js";
import { e as escape_html, a as attr } from "../../chunks/attributes.js";
import "clsx";
import { p as pic25 } from "../../chunks/BAD39E09-7157-485A-9A02-3A0C03C3A660.js";
function Countdown($$payload, $$props) {
  push();
  let timeRemaining = {};
  $$payload.out += `<div class="countdown svelte-iapbry"><div class="unit svelte-iapbry"><div class="circle svelte-iapbry">${escape_html(timeRemaining.days)}</div> <div class="label svelte-iapbry">Days</div></div> <div class="separator svelte-iapbry">:</div> <div class="unit svelte-iapbry"><div class="circle svelte-iapbry">${escape_html(timeRemaining.hours)}</div> <div class="label svelte-iapbry">Hours</div></div> <div class="separator svelte-iapbry">:</div> <div class="unit svelte-iapbry"><div class="circle svelte-iapbry">${escape_html(timeRemaining.minutes)}</div> <div class="label svelte-iapbry">Minutes</div></div> <div class="separator svelte-iapbry">:</div> <div class="unit svelte-iapbry"><div class="circle svelte-iapbry">${escape_html(timeRemaining.seconds)}</div> <div class="label svelte-iapbry">Seconds</div></div></div>`;
  pop();
}
function _page($$payload) {
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Evelin &amp; Matthew</title>`;
    $$payload2.out += `<meta name="description" content="wedding2026"/>`;
  });
  $$payload.out += `<div class="page-header-image svelte-14e02kl"><img${attr("src", pic25)} alt="Evelin and Matthew" class="svelte-14e02kl"/></div> <div class="page-title svelte-14e02kl"><div class="svelte-14e02kl">COUNTDOWN TO I DO</div></div> `;
  Countdown($$payload);
  $$payload.out += `<!---->`;
}
export {
  _page as default
};
