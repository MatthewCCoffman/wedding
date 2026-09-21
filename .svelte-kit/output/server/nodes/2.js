import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.BNUBJW96.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/Bo3o7pVy.js","_app/immutable/chunks/CZ66Ec-2.js","_app/immutable/chunks/C8QyZOnr.js","_app/immutable/chunks/D_TP6Lv1.js","_app/immutable/chunks/CZBTUNSU.js","_app/immutable/chunks/D307xVm4.js","_app/immutable/chunks/DBTkKc9Y.js","_app/immutable/chunks/iBMV8SoY.js","_app/immutable/chunks/CwvwxinQ.js","_app/immutable/chunks/c73eB7gh.js","_app/immutable/chunks/NUrYsw-t.js","_app/immutable/chunks/BauKuMfo.js"];
export const stylesheets = ["_app/immutable/assets/2.C9fbZ5MC.css"];
export const fonts = [];
