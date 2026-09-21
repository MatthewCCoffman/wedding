import * as universal from '../entries/pages/photos/_page.ts.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/photos/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/photos/+page.ts";
export const imports = ["_app/immutable/nodes/6.DaKf2qsr.js","_app/immutable/chunks/CMeT20LY.js","_app/immutable/chunks/GVBq-6Wn.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/C4eYfkGC.js","_app/immutable/chunks/CD9wWGn9.js","_app/immutable/chunks/Dsqfbp7N.js","_app/immutable/chunks/Djtn5bZ9.js","_app/immutable/chunks/Bm07ktOW.js","_app/immutable/chunks/gSPsnrv7.js","_app/immutable/chunks/CKnjliEN.js","_app/immutable/chunks/D9WGosEL.js","_app/immutable/chunks/DZbF_B2I.js","_app/immutable/chunks/BauKuMfo.js"];
export const stylesheets = ["_app/immutable/assets/6.DcOQykBD.css"];
export const fonts = [];
