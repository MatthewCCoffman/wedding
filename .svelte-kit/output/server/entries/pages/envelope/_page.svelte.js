import { J as fallback, E as attr_class, K as bind_props, B as pop, z as push, M as head } from "../../../chunks/index2.js";
/* empty css                                                               */
import { a as attr, e as escape_html } from "../../../chunks/attributes.js";
function InvitationEnvelope($$payload, $$props) {
  push();
  let guestAllowed = fallback($$props["guestAllowed"], true);
  let guestName = fallback($$props["guestName"], "");
  let compact = fallback($$props["compact"], false);
  let lifted = false;
  let opening = false;
  let opened = false;
  $$payload.out += `<section${attr_class("invitation-section svelte-d7ctnn", void 0, {
    "lifted": lifted,
    "opening": opening,
    "opened": opened,
    "compact": compact
  })}><button class="envelope-button svelte-d7ctnn" type="button" aria-label="Open Evelin and Matthew's wedding invitation"${attr("aria-expanded", opened)}><div class="envelope-shadow svelte-d7ctnn"></div> <div class="envelope svelte-d7ctnn"><div class="envelope-back svelte-d7ctnn"></div> <div class="invitation-card svelte-d7ctnn">`;
  if (guestName) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<span class="guest-name svelte-d7ctnn">${escape_html(guestName)}</span>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> `;
  if (guestAllowed) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<span class="small-text svelte-d7ctnn">The Wedding of</span> <strong class="svelte-d7ctnn">Evelin <i class="svelte-d7ctnn">&amp;</i> Matthew</strong> <span class="date svelte-d7ctnn">November 7, 2026</span> <span class="location svelte-d7ctnn">Hidalgo, Mexico</span>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<strong class="uninvited-title svelte-d7ctnn">Not on the list</strong>`;
  }
  $$payload.out += `<!--]--></div> <div class="flap svelte-d7ctnn"></div> <div class="front-pocket svelte-d7ctnn"></div> <div class="seal svelte-d7ctnn"><span class="svelte-d7ctnn">E</span> <i class="svelte-d7ctnn">&amp;</i> <span class="svelte-d7ctnn">M</span></div></div></button> <button type="button" class="open-label svelte-d7ctnn"${attr("disabled", opened, true)}></button></section>`;
  bind_props($$props, { guestAllowed, guestName, compact });
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
