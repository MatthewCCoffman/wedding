import "clsx";
import { G as current_component, u as pop, s as push } from "../../../chunks/index.js";
function onDestroy(fn) {
  var context = (
    /** @type {Component} */
    current_component
  );
  (context.d ??= []).push(fn);
}
function _page($$payload, $$props) {
  push();
  function removeZolaInjectedNodes() {
    if (typeof document === "undefined") return;
    document.querySelectorAll(".zola-registry-embed, [data-registry-key]").forEach((n) => n.remove());
    const script = document.getElementById("zola-wjs");
    if (script && script.parentNode) script.parentNode.removeChild(script);
    document.querySelectorAll("iframe").forEach((f) => {
      try {
        if (f.src && f.src.includes("zola.com")) f.remove();
      } catch (e) {
      }
    });
    document.querySelectorAll('[id*="zola"], [class*="zola"]').forEach((n) => n.remove());
  }
  onDestroy(() => {
    if (typeof document === "undefined") return;
    removeZolaInjectedNodes();
  });
  $$payload.out += `<div class="registry-page svelte-1somcb0"><div class="page-title svelte-1somcb0"><div class="svelte-1somcb0">Wedding Registry</div></div> <div class="registry-intro svelte-1somcb0"><p class="svelte-1somcb0">Your presence at our wedding is the greatest gift of all.</p> <p class="svelte-1somcb0">However, if you wish to honor us with a gift, we've created a registry for your convenience.</p></div> <div class="registry-container svelte-1somcb0"><a class="zola-registry-embed registry-button svelte-1somcb0" href="https://www.zola.com/registry/evelinandmatt2025" data-registry-key="evelinandmatt2025" rel="noopener noreferrer"><span class="button-text svelte-1somcb0">View Our Registry</span> <span class="button-icon svelte-1somcb0">→</span></a></div></div>`;
  pop();
}
export {
  _page as default
};
