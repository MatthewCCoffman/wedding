import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.BxPg_urC.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/rjj_29Ik.js","_app/immutable/chunks/DxcfLqCq.js","_app/immutable/chunks/CAUIzWXO.js","_app/immutable/chunks/BwtFyopC.js","_app/immutable/chunks/DP0kUkzK.js","_app/immutable/chunks/Di41yiQZ.js","_app/immutable/chunks/NIGN-ljY.js","_app/immutable/chunks/qxHhMW0I.js","_app/immutable/chunks/Cwulpwd3.js","_app/immutable/chunks/8ypJgNFB.js","_app/immutable/chunks/D-qocksY.js","_app/immutable/chunks/Bi3rZ4uF.js","_app/immutable/chunks/DFRkSjVM.js","_app/immutable/chunks/BPltodi3.js","_app/immutable/chunks/DPLS5ont.js","_app/immutable/chunks/C0Axciro.js","_app/immutable/chunks/BKFaIrlh.js","_app/immutable/chunks/QVCaQLIy.js","_app/immutable/chunks/C36j_FA7.js","_app/immutable/chunks/Bn-k6igA.js"];
export const stylesheets = ["_app/immutable/assets/_page.DYAosMus.css","_app/immutable/assets/_page.B248b6Dq.css","_app/immutable/assets/_page.DRLjD6g7.css","_app/immutable/assets/_page.CsXRf6hT.css","_app/immutable/assets/_page.Z65Vczry.css","_app/immutable/assets/2.DakUZADp.css"];
export const fonts = [];
