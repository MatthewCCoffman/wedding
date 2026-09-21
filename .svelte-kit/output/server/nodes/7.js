import * as universal from '../entries/pages/registry/_page.ts.js';

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/registry/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/registry/+page.ts";
export const imports = ["_app/immutable/nodes/7.BZcZ9bls.js","_app/immutable/chunks/CMeT20LY.js","_app/immutable/chunks/GVBq-6Wn.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/C4eYfkGC.js","_app/immutable/chunks/Cka0z-Lu.js","_app/immutable/chunks/g03WB3eP.js","_app/immutable/chunks/CD9wWGn9.js","_app/immutable/chunks/Dsqfbp7N.js","_app/immutable/chunks/CKnjliEN.js"];
export const stylesheets = ["_app/immutable/assets/7.XNjRCwC2.css"];
export const fonts = [];
