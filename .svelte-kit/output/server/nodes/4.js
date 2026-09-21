import * as universal from '../entries/pages/itinerary/_page.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/itinerary/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/itinerary/+page.ts";
export const imports = ["_app/immutable/nodes/4.KFVsCG3m.js","_app/immutable/chunks/CMeT20LY.js","_app/immutable/chunks/GVBq-6Wn.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/C4eYfkGC.js","_app/immutable/chunks/Bm07ktOW.js","_app/immutable/chunks/Dsqfbp7N.js","_app/immutable/chunks/DZbF_B2I.js"];
export const stylesheets = ["_app/immutable/assets/4.UKIvOa6S.css"];
export const fonts = [];
