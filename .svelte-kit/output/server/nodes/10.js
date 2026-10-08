import * as universal from '../entries/pages/venue/_page.ts.js';

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/venue/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/venue/+page.ts";
export const imports = ["_app/immutable/nodes/10.DWoXrH8a.js","_app/immutable/chunks/D5509SCM.js","_app/immutable/chunks/BdeHYjOc.js","_app/immutable/chunks/TOMgm-bx.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/CjxFNZOi.js","_app/immutable/chunks/Y-RICtre.js","_app/immutable/chunks/B-tt1JNy.js","_app/immutable/chunks/uyMHQoKS.js","_app/immutable/chunks/VA9EM-wK.js","_app/immutable/chunks/BncZb7C5.js","_app/immutable/chunks/VRDBsj8j.js"];
export const stylesheets = ["_app/immutable/assets/_page.DRLjD6g7.css"];
export const fonts = [];
