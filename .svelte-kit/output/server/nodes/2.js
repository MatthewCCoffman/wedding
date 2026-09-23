import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.Ci7Y7kRQ.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/B-4kwr5-.js","_app/immutable/chunks/C5vZ882h.js","_app/immutable/chunks/CXP6YjQR.js","_app/immutable/chunks/Cr2Vyg6S.js","_app/immutable/chunks/DNzOIEvL.js","_app/immutable/chunks/rl3PgTYx.js","_app/immutable/chunks/V_SFHrdi.js","_app/immutable/chunks/BidjVVxe.js","_app/immutable/chunks/DR_YegwB.js","_app/immutable/chunks/Dq-c7hHc.js","_app/immutable/chunks/D7fxjWqm.js","_app/immutable/chunks/Dv6v09jD.js","_app/immutable/chunks/BZnVTw8J.js","_app/immutable/chunks/BPltodi3.js","_app/immutable/chunks/Cjboox7j.js","_app/immutable/chunks/BHL75YdP.js","_app/immutable/chunks/BeJtPdDY.js","_app/immutable/chunks/AFv-x3Ug.js","_app/immutable/chunks/DRTC_-yU.js","_app/immutable/chunks/DwP0b3M1.js","_app/immutable/chunks/DyP3CVqj.js"];
export const stylesheets = ["_app/immutable/assets/_page.HMULJVil.css","_app/immutable/assets/_page.DRLjD6g7.css","_app/immutable/assets/_page.CsXRf6hT.css","_app/immutable/assets/InvitationEnvelope.BARu6qBH.css","_app/immutable/assets/_page.BO2WpPqX.css","_app/immutable/assets/2.DakUZADp.css"];
export const fonts = [];
