import * as universal from '../entries/pages/registry/_page.ts.js';

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/registry/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/registry/+page.ts";
export const imports = ["_app/immutable/nodes/8.CH-dbcdK.js","_app/immutable/chunks/CtaFuuz7.js","_app/immutable/chunks/C5vZ882h.js","_app/immutable/chunks/BeJtPdDY.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/B-4kwr5-.js","_app/immutable/chunks/CXP6YjQR.js","_app/immutable/chunks/Cr2Vyg6S.js","_app/immutable/chunks/DR_YegwB.js","_app/immutable/chunks/DNzOIEvL.js","_app/immutable/chunks/rl3PgTYx.js"];
export const stylesheets = ["_app/immutable/assets/_page.CsXRf6hT.css"];
export const fonts = [];
