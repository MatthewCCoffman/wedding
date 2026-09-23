import { J as fallback, N as ensure_array_like, E as attr_class, O as attr_style, K as bind_props, B as pop, z as push, P as stringify, D as store_get, F as unsubscribe_stores } from "../../../chunks/index2.js";
import { a as attr, e as escape_html } from "../../../chunks/attributes.js";
import { l as language } from "../../../chunks/language.js";
import { w as weddingPhotos } from "../../../chunks/weddingPhotos.js";
function Carousel($$payload, $$props) {
  push();
  let photos = fallback($$props["photos"], () => [], true);
  let autoplay = fallback($$props["autoplay"], false);
  let showControls = fallback($$props["showControls"], true);
  let showThumbnails = fallback($$props["showThumbnails"], true);
  let fullBleed = fallback($$props["fullBleed"], false);
  let interval = fallback($$props["interval"], 5e3);
  let currentIndex = 0;
  const each_array = ensure_array_like(photos);
  $$payload.out += `<div${attr_class("carousel svelte-4iylbs", void 0, { "full-bleed": fullBleed })}><div class="image-container svelte-4iylbs" role="button" tabindex="0" aria-label="Wedding photo carousel"${attr_style(`transform: translateX(-${stringify(currentIndex * 100)}%);`)}><!--[-->`;
  for (let i = 0, $$length = each_array.length; i < $$length; i++) {
    let photo = each_array[i];
    $$payload.out += `<img class="image svelte-4iylbs"${attr("src", photo)}${attr("alt", `Wedding photo ${i + 1}`)}/>`;
  }
  $$payload.out += `<!--]--></div> `;
  if (showControls) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<button class="button prev svelte-4iylbs" type="button" aria-label="Previous photo">←</button> <button class="button next svelte-4iylbs" type="button" aria-label="Next photo">→</button>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div> `;
  if (showThumbnails) {
    $$payload.out += "<!--[-->";
    const each_array_1 = ensure_array_like(photos);
    $$payload.out += `<div class="gallery svelte-4iylbs" aria-label="Photo thumbnails"><!--[-->`;
    for (let i = 0, $$length = each_array_1.length; i < $$length; i++) {
      let photo = each_array_1[i];
      $$payload.out += `<button type="button"${attr_class(`thumbnail ${stringify(i === currentIndex ? "active" : "")}`, "svelte-4iylbs")}${attr("aria-label", `View photo ${i + 1}`)}${attr("aria-pressed", i === currentIndex)}><img${attr("src", photo)}${attr("alt", `Thumbnail ${i + 1}`)} class="svelte-4iylbs"/></button>`;
    }
    $$payload.out += `<!--]--></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, {
    photos,
    autoplay,
    showControls,
    showThumbnails,
    fullBleed,
    interval
  });
  pop();
}
function _page($$payload) {
  var $$store_subs;
  let pageTitle;
  const pageTitles = { en: "", es: "" };
  pageTitle = pageTitles[store_get($$store_subs ??= {}, "$language", language)];
  $$payload.out += `<div class="page-title"><div>${escape_html(pageTitle)}</div></div> <div class="page-content">`;
  Carousel($$payload, { photos: weddingPhotos });
  $$payload.out += `<!----></div>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
}
export {
  _page as default
};
