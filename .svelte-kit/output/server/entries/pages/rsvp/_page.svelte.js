import { J as maybe_selected, u as pop, s as push } from "../../../chunks/index.js";
import { a as attr, e as escape_html } from "../../../chunks/attributes.js";
function _page($$payload, $$props) {
  push();
  let name = "";
  let email = "";
  let attending = "Yes";
  let guests = 1;
  let message = "";
  let loading = false;
  {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<div class="rsvp-body svelte-17kygup"><div class="page-title svelte-17kygup"><div class="page-title-text svelte-17kygup">RSVP</div></div> <form class="rsvp-box rsvp-form svelte-17kygup" novalidate>`;
    {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--> <label class="svelte-17kygup">First and Last Name * <input type="text"${attr("value", name)} required class="svelte-17kygup"/></label> <label class="svelte-17kygup">Email * <input type="email"${attr("value", email)} required class="svelte-17kygup"/></label> <label class="svelte-17kygup">Will you attend? <select class="svelte-17kygup">`;
    $$payload.select_value = attending;
    $$payload.out += `<option value="Yes"${maybe_selected($$payload, "Yes")}>Yes</option><option value="No"${maybe_selected($$payload, "No")}>No</option>`;
    $$payload.select_value = void 0;
    $$payload.out += `</select></label> <label class="svelte-17kygup">Number of Guests <input type="number" min="1"${attr("value", guests)} class="svelte-17kygup"/></label> <label class="svelte-17kygup">Message <textarea class="svelte-17kygup">`;
    const $$body = escape_html(message);
    if ($$body) {
      $$payload.out += `${$$body}`;
    }
    $$payload.out += `</textarea></label> <button type="submit"${attr("disabled", loading, true)} class="svelte-17kygup">`;
    {
      $$payload.out += "<!--[!-->";
      $$payload.out += `Submit RSVP`;
    }
    $$payload.out += `<!--]--></button></form></div>`;
  }
  $$payload.out += `<!--]-->`;
  pop();
}
export {
  _page as default
};
