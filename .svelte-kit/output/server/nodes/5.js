import * as universal from '../entries/pages/itinerary/_page.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/itinerary/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/itinerary/+page.ts";
export const imports = ["_app/immutable/nodes/5.uDS1KrP1.js","_app/immutable/chunks/CtaFuuz7.js","_app/immutable/chunks/C5vZ882h.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/B-4kwr5-.js","_app/immutable/chunks/Cr2Vyg6S.js","_app/immutable/chunks/BPltodi3.js"];
export const stylesheets = ["_app/immutable/assets/5.UKIvOa6S.css"];
export const fonts = [];
