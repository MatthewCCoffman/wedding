import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.CTqt1RAg.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/Cs7Xfy4B.js","_app/immutable/chunks/CX9iArb3.js","_app/immutable/chunks/8P8wuwYO.js","_app/immutable/chunks/BqLOYirH.js","_app/immutable/chunks/CUh1PFlT.js","_app/immutable/chunks/CYKRt97Q.js","_app/immutable/chunks/BFqFwktf.js","_app/immutable/chunks/D5KC3lUZ.js","_app/immutable/chunks/CxMZ6AbZ.js","_app/immutable/chunks/Bwzn4CN9.js","_app/immutable/chunks/C2BBXCn2.js","_app/immutable/chunks/F1LHHNiO.js","_app/immutable/chunks/CMgEShrh.js","_app/immutable/chunks/DJzvuIYy.js","_app/immutable/chunks/J0Xrz5bQ.js","_app/immutable/chunks/BPltodi3.js","_app/immutable/chunks/CSZVgN6r.js","_app/immutable/chunks/UlOL8R39.js","_app/immutable/chunks/BqRDjsaJ.js"];
export const stylesheets = ["_app/immutable/assets/_page.omeWj48M.css","_app/immutable/assets/_page.B248b6Dq.css","_app/immutable/assets/_page.DRLjD6g7.css","_app/immutable/assets/_page.XNjRCwC2.css","_app/immutable/assets/_page.Z65Vczry.css","_app/immutable/assets/2.CBBUfEkS.css"];
export const fonts = [];
