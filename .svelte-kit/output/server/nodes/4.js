import * as universal from '../entries/pages/itinerary/_page.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/itinerary/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/itinerary/+page.ts";
export const imports = ["_app/immutable/nodes/4.BlPFTTqV.js","_app/immutable/chunks/CSkjkaNF.js","_app/immutable/chunks/DxcfLqCq.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/rjj_29Ik.js","_app/immutable/chunks/BwtFyopC.js","_app/immutable/chunks/BPltodi3.js"];
export const stylesheets = ["_app/immutable/assets/4.UKIvOa6S.css"];
export const fonts = [];
