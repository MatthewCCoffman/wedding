import * as universal from '../entries/pages/our_story/_page.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/our_story/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/our_story/+page.ts";
export const imports = ["_app/immutable/nodes/5.CS-KR-jh.js","_app/immutable/chunks/1TaiWJlh.js","_app/immutable/chunks/CZ66Ec-2.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/Bo3o7pVy.js","_app/immutable/chunks/C8QyZOnr.js","_app/immutable/chunks/BEmhYwQF.js","_app/immutable/chunks/D_TP6Lv1.js","_app/immutable/chunks/D307xVm4.js","_app/immutable/chunks/DBTkKc9Y.js","_app/immutable/chunks/NUrYsw-t.js"];
export const stylesheets = ["_app/immutable/assets/5.omeWj48M.css"];
export const fonts = [];
