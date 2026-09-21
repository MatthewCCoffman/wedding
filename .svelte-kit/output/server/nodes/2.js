import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.B0n97z0P.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/C4eYfkGC.js","_app/immutable/chunks/GVBq-6Wn.js","_app/immutable/chunks/g03WB3eP.js","_app/immutable/chunks/CD9wWGn9.js","_app/immutable/chunks/Dsqfbp7N.js","_app/immutable/chunks/Bm07ktOW.js","_app/immutable/chunks/Cka0z-Lu.js","_app/immutable/chunks/CKnjliEN.js","_app/immutable/chunks/BauKuMfo.js"];
export const stylesheets = ["_app/immutable/assets/2.tlNlS0BI.css"];
export const fonts = [];
