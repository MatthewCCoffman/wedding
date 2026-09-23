import * as universal from '../entries/pages/registry/_page.ts.js';

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/registry/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/registry/+page.ts";
export const imports = ["_app/immutable/nodes/8.Zr_y0ARY.js","_app/immutable/chunks/D5509SCM.js","_app/immutable/chunks/BdeHYjOc.js","_app/immutable/chunks/DWNUN3Fb.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/CjxFNZOi.js","_app/immutable/chunks/B-tt1JNy.js","_app/immutable/chunks/CA7J9ZwK.js","_app/immutable/chunks/DCdiLMs1.js","_app/immutable/chunks/VA9EM-wK.js","_app/immutable/chunks/BncZb7C5.js","_app/immutable/chunks/DvkmlyyI.js"];
export const stylesheets = ["_app/immutable/assets/_page.CsXRf6hT.css"];
export const fonts = [];
