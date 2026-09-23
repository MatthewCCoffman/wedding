import * as universal from '../entries/pages/venue/_page.ts.js';

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/venue/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/venue/+page.ts";
export const imports = ["_app/immutable/nodes/10.D6vxVnFL.js","_app/immutable/chunks/CtaFuuz7.js","_app/immutable/chunks/C5vZ882h.js","_app/immutable/chunks/BHL75YdP.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/B-4kwr5-.js","_app/immutable/chunks/V_SFHrdi.js","_app/immutable/chunks/CXP6YjQR.js","_app/immutable/chunks/BidjVVxe.js","_app/immutable/chunks/DNzOIEvL.js","_app/immutable/chunks/rl3PgTYx.js","_app/immutable/chunks/Cjboox7j.js"];
export const stylesheets = ["_app/immutable/assets/_page.DRLjD6g7.css"];
export const fonts = [];
