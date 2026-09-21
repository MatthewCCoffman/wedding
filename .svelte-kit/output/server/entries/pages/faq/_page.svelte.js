import { y as ensure_array_like, u as pop, s as push } from "../../../chunks/index.js";
import { a as attr, e as escape_html } from "../../../chunks/attributes.js";
function _page($$payload, $$props) {
  push();
  let faqs = [
    { question: "Where do I book the flight?", answer: "" },
    { question: "Where are we staying?", answer: "" },
    { question: "How are we getting to the venue?", answer: "" },
    { question: "What is there to do at the venue?", answer: "" },
    { question: "How do I reserve a room?", answer: "" }
  ];
  let openIndexes = /* @__PURE__ */ new Set();
  const each_array = ensure_array_like(faqs);
  $$payload.out += `<section class="faq-section svelte-1v6n1s7"><!--[-->`;
  for (let index = 0, $$length = each_array.length; index < $$length; index++) {
    let faq = each_array[index];
    $$payload.out += `<button type="button" class="faq-card svelte-1v6n1s7"${attr("aria-expanded", openIndexes.has(index))}${attr("aria-controls", `faq-answer-${index}`)}><div class="faq-question svelte-1v6n1s7"><h3>${escape_html(faq.question)}</h3> <span>${escape_html(openIndexes.has(index) ? "−" : "+")}</span></div> `;
    if (openIndexes.has(index)) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<div class="faq-answer svelte-1v6n1s7"${attr("id", `faq-answer-${index}`)}><p>${escape_html(faq.answer)}</p></div>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--></button>`;
  }
  $$payload.out += `<!--]--></section>`;
  pop();
}
export {
  _page as default
};
