import { J as fallback, N as ensure_array_like, O as attr_style, E as attr_class, K as bind_props, B as pop, z as push, P as stringify, D as store_get, F as unsubscribe_stores } from "../../../chunks/index2.js";
import { a as attr, e as escape_html } from "../../../chunks/attributes.js";
import { l as language } from "../../../chunks/language.js";
import { b as pic2, a as pic6, p as pic10 } from "../../../chunks/0F865026-F796-4280-8D61-13C12E0F43E7.js";
import { p as pic25 } from "../../../chunks/BAD39E09-7157-485A-9A02-3A0C03C3A660.js";
function Carousel($$payload, $$props) {
  push();
  let photos = fallback($$props["photos"], () => [], true);
  let currentIndex = 0;
  const each_array = ensure_array_like(photos);
  const each_array_1 = ensure_array_like(photos);
  $$payload.out += `<div class="carousel svelte-1b8srcg"><div class="image-container svelte-1b8srcg" role="button" tabindex="0" aria-label="Wedding photo carousel"${attr_style(`transform: translateX(-${stringify(currentIndex * 100)}%);`)}><!--[-->`;
  for (let i = 0, $$length = each_array.length; i < $$length; i++) {
    let photo = each_array[i];
    $$payload.out += `<img class="image svelte-1b8srcg"${attr("src", photo)}${attr("alt", `Wedding photo ${i + 1}`)}/>`;
  }
  $$payload.out += `<!--]--></div> <button class="button prev svelte-1b8srcg" type="button" aria-label="Previous photo">←</button> <button class="button next svelte-1b8srcg" type="button" aria-label="Next photo">→</button></div> <div class="gallery svelte-1b8srcg" aria-label="Photo thumbnails"><!--[-->`;
  for (let i = 0, $$length = each_array_1.length; i < $$length; i++) {
    let photo = each_array_1[i];
    $$payload.out += `<button type="button"${attr_class(`thumbnail ${stringify(i === currentIndex ? "active" : "")}`, "svelte-1b8srcg")}${attr("aria-label", `View photo ${i + 1}`)}${attr("aria-pressed", i === currentIndex)}><img${attr("src", photo)}${attr("alt", `Thumbnail ${i + 1}`)} class="svelte-1b8srcg"/></button>`;
  }
  $$payload.out += `<!--]--></div>`;
  bind_props($$props, { photos });
  pop();
}
const pic1 = "/_app/immutable/assets/062DAEB1-074F-4D90-B101-378E23FE0F8A.LaI1fBHD.jpeg";
const pic3 = "/_app/immutable/assets/11012DCD-BDF0-4EAE-8233-7CF562139A6D.DV5UYR0E.jpeg";
const pic4 = "/_app/immutable/assets/12E9999A-06D2-42C3-8B01-562FFA2FACB1.DFprikX8.jpeg";
const pic5 = "/_app/immutable/assets/136CD83E-D76A-4386-B063-086EF433C1EA.XntX12gI.jpeg";
const pic7 = "/_app/immutable/assets/30063063-CCC3-49B6-891A-E5FEDC48816B.DKf6oo-h.jpeg";
const pic8 = "/_app/immutable/assets/3BFE13D3-99CC-4747-8E30-DA473E95E922.8VVNm1IU.jpeg";
const pic9 = "/_app/immutable/assets/428DC094-52A7-40BE-B6FF-4CD4786BA07C.B0sMxa2P.jpeg";
const pic11 = "/_app/immutable/assets/4C65CBCA-2166-4B24-B355-04E7D292F492.Cbqr0sAY.jpeg";
const pic12 = "/_app/immutable/assets/520AA0B9-8AD5-4CEB-8D73-1F24C5DED5CD.DXwx4d7C.jpeg";
const pic13 = "/_app/immutable/assets/556D49D0-EAB8-429D-907F-62D20F068288.BLhaAxxD.jpeg";
const pic14 = "/_app/immutable/assets/680CDD29-8359-42D3-9CC6-3DBD8E668A47.B20buPzv.jpeg";
const pic15 = "/_app/immutable/assets/69E70BD2-976E-4898-84D3-D47992649735.DUpw0uF0.jpeg";
const pic16 = "/_app/immutable/assets/73A79ADC-E638-4D7F-8DEC-51A9F71DE407.Ba1fW-kJ.jpeg";
const pic17 = "/_app/immutable/assets/78E1B803-50EE-44A6-BFAF-478F2D6B1F2A.CDi8Nbq4.jpeg";
const pic18 = "/_app/immutable/assets/791C5E6F-B963-4CD1-8ABD-E6FE065F84C6.BY2gVuiL.jpeg";
const pic19 = "/_app/immutable/assets/8508B2FA-66C4-480F-8B21-6D1E1999BCAB.Dm9g5WOv.jpeg";
const pic20 = "/_app/immutable/assets/8D92EEB7-1E64-4396-9BEC-02FCEB206856.dYuglF3f.jpeg";
const pic21 = "/_app/immutable/assets/918428E3-CCCC-4905-95CB-A9FF8F044545.C8gNPoYp.jpeg";
const pic22 = "/_app/immutable/assets/9FABAAFB-583D-4718-A068-56CD09104678.D_0PosBa.jpeg";
const pic23 = "/_app/immutable/assets/A5188E9E-D6CB-43FE-BB90-D4A2E77B9C37.Cr-cIq1H.jpeg";
const pic24 = "/_app/immutable/assets/B5493053-FA34-437B-815D-72EA629C8456.Bo0rttsM.jpeg";
const pic26 = "/_app/immutable/assets/F4FDF068-3001-4860-AC23-0D167013B787.BswYYqR2.jpeg";
const pic27 = "/_app/immutable/assets/F51935B0-65EF-4C57-9BC1-BFBE713D3AE6.B8dQ2nE0.jpeg";
const pic28 = "/_app/immutable/assets/F83C7893-82FB-4257-815D-4FBB8CA5D2E0.bh3uzMOk.jpeg";
const pic29 = "/_app/immutable/assets/Facetune_19-06-2025-18-08-07.DVY4d2rO.jpeg";
function _page($$payload) {
  var $$store_subs;
  let pageTitle;
  const images = [
    pic1,
    pic2,
    pic3,
    pic4,
    pic5,
    pic6,
    pic7,
    pic8,
    pic9,
    pic10,
    pic11,
    pic12,
    pic13,
    pic14,
    pic15,
    pic16,
    pic17,
    pic18,
    pic19,
    pic20,
    pic21,
    pic22,
    pic23,
    pic24,
    pic25,
    pic26,
    pic27,
    pic28,
    pic29
  ];
  const pageTitles = { en: "Photos of Us", es: "Fotos de Nosotros" };
  pageTitle = pageTitles[store_get($$store_subs ??= {}, "$language", language)];
  $$payload.out += `<div class="page-title"><div>${escape_html(pageTitle)}</div></div> <div class="page-content">`;
  Carousel($$payload, { photos: images });
  $$payload.out += `<!----></div>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
}
export {
  _page as default
};
