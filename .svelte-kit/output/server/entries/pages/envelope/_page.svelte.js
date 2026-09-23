import { J as fallback, E as attr_class, K as bind_props, B as pop, z as push, M as head } from "../../../chunks/index2.js";
/* empty css                                                               */
import { a as attr, e as escape_html } from "../../../chunks/attributes.js";
function InvitationEnvelope($$payload, $$props) {
  push();
  let guestAllowed = fallback($$props["guestAllowed"], true);
  let guestName = fallback($$props["guestName"], "");
  let lifted = false;
  let opening = false;
  let opened = false;
  $$payload.out += `<section${attr_class("invitation-section svelte-7fc5v9", void 0, { "lifted": lifted, "opening": opening, "opened": opened })}><button class="envelope-button svelte-7fc5v9" type="button" aria-label="Open Evelin and Matthew's wedding invitation"${attr("aria-expanded", opened)}><div class="envelope-shadow svelte-7fc5v9"></div> <div class="envelope svelte-7fc5v9"><div class="envelope-back svelte-7fc5v9"></div> <div class="invitation-card svelte-7fc5v9">`;
  if (guestName) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<span class="guest-name svelte-7fc5v9">${escape_html(guestName)}</span>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> `;
  if (guestAllowed) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<span class="small-text svelte-7fc5v9">The Wedding of</span> <strong class="svelte-7fc5v9">Evelin <i class="svelte-7fc5v9">&amp;</i> Matthew</strong> <span class="date svelte-7fc5v9">November 7, 2026</span> <span class="location svelte-7fc5v9">Hidalgo, Mexico</span>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<strong class="uninvited-title svelte-7fc5v9">Not on the list</strong>`;
  }
  $$payload.out += `<!--]--></div> <div class="flap svelte-7fc5v9"></div> <div class="front-pocket svelte-7fc5v9"></div> <div class="seal svelte-7fc5v9"><span class="svelte-7fc5v9">E</span> <i class="svelte-7fc5v9">&amp;</i> <span class="svelte-7fc5v9">M</span></div></div></button> <button type="button" class="open-label svelte-7fc5v9"${attr("disabled", opened, true)}></button></section>`;
  bind_props($$props, { guestAllowed, guestName });
  pop();
}
function _page($$payload) {
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Wedding Invitation</title>`;
    $$payload2.out += `<meta name="description" content="Open Evelin and Matthew's wedding invitation"/>`;
  });
  InvitationEnvelope($$payload, {});
}
export {
  _page as default
};
