import * as universal from '../entries/pages/registry/_page.ts.js';

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/registry/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/registry/+page.ts";
export const imports = ["_app/immutable/nodes/7.l47GRTWn.js","_app/immutable/chunks/CSkjkaNF.js","_app/immutable/chunks/DxcfLqCq.js","_app/immutable/chunks/C36j_FA7.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/rjj_29Ik.js","_app/immutable/chunks/CAUIzWXO.js","_app/immutable/chunks/BwtFyopC.js","_app/immutable/chunks/Cwulpwd3.js","_app/immutable/chunks/DP0kUkzK.js","_app/immutable/chunks/Di41yiQZ.js"];
export const stylesheets = ["_app/immutable/assets/_page.CsXRf6hT.css"];
export const fonts = [];
