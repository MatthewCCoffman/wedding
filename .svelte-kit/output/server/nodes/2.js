import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.DCeWBruw.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/CjxFNZOi.js","_app/immutable/chunks/BdeHYjOc.js","_app/immutable/chunks/B-tt1JNy.js","_app/immutable/chunks/CA7J9ZwK.js","_app/immutable/chunks/VA9EM-wK.js","_app/immutable/chunks/BncZb7C5.js","_app/immutable/chunks/Y-RICtre.js","_app/immutable/chunks/uyMHQoKS.js","_app/immutable/chunks/DCdiLMs1.js","_app/immutable/chunks/ClIW01Pj.js","_app/immutable/chunks/sWjv6PZ2.js","_app/immutable/chunks/DQ00dbHb.js","_app/immutable/chunks/Cc6AZ3-k.js","_app/immutable/chunks/BPltodi3.js","_app/immutable/chunks/DvkmlyyI.js","_app/immutable/chunks/VRDBsj8j.js","_app/immutable/chunks/TOMgm-bx.js","_app/immutable/chunks/DWNUN3Fb.js","_app/immutable/chunks/DoPrPBnp.js","_app/immutable/chunks/DJGnt2k4.js","_app/immutable/chunks/WzOM4z_n.js","_app/immutable/chunks/Bvh4aSxU.js"];
export const stylesheets = ["_app/immutable/assets/_page.HMULJVil.css","_app/immutable/assets/_page.DRLjD6g7.css","_app/immutable/assets/_page.CsXRf6hT.css","_app/immutable/assets/InvitationEnvelope.B1VWlWrH.css","_app/immutable/assets/_page.Cibsp-9m.css","_app/immutable/assets/2.DakUZADp.css"];
export const fonts = [];
