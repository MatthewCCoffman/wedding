import * as universal from '../entries/pages/our_story/_page.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/our_story/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/our_story/+page.ts";
export const imports = ["_app/immutable/nodes/5.FKLTVtNt.js","_app/immutable/chunks/DaEFjpCs.js","_app/immutable/chunks/CX9iArb3.js","_app/immutable/chunks/Bwzn4CN9.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/Cs7Xfy4B.js","_app/immutable/chunks/8P8wuwYO.js","_app/immutable/chunks/C2BBXCn2.js","_app/immutable/chunks/BqLOYirH.js","_app/immutable/chunks/CUh1PFlT.js","_app/immutable/chunks/CYKRt97Q.js","_app/immutable/chunks/F1LHHNiO.js"];
export const stylesheets = ["_app/immutable/assets/_page.omeWj48M.css"];
export const fonts = [];
