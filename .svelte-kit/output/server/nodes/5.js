import * as universal from '../entries/pages/our_story/_page.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/our_story/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/our_story/+page.ts";
export const imports = ["_app/immutable/nodes/5.NyopRuxY.js","_app/immutable/chunks/CMeT20LY.js","_app/immutable/chunks/GVBq-6Wn.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/C4eYfkGC.js"];
export const stylesheets = ["_app/immutable/assets/5.omeWj48M.css"];
export const fonts = [];
