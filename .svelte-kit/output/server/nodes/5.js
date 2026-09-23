import * as universal from '../entries/pages/our_story/_page.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/our_story/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/our_story/+page.ts";
export const imports = ["_app/immutable/nodes/5.DNr_PYbF.js","_app/immutable/chunks/CSkjkaNF.js","_app/immutable/chunks/DxcfLqCq.js","_app/immutable/chunks/8ypJgNFB.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/rjj_29Ik.js","_app/immutable/chunks/CAUIzWXO.js","_app/immutable/chunks/D-qocksY.js","_app/immutable/chunks/BwtFyopC.js","_app/immutable/chunks/Bi3rZ4uF.js","_app/immutable/chunks/DFRkSjVM.js","_app/immutable/chunks/BPltodi3.js","_app/immutable/chunks/qxHhMW0I.js","_app/immutable/chunks/DP0kUkzK.js","_app/immutable/chunks/Di41yiQZ.js","_app/immutable/chunks/DPLS5ont.js"];
export const stylesheets = ["_app/immutable/assets/_page.DYAosMus.css"];
export const fonts = [];
