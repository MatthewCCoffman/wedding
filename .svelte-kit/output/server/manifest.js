export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favico.svg","favicon.svg","robots.txt"]),
	mimeTypes: {".svg":"image/svg+xml",".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.DM6qoucy.js",app:"_app/immutable/entry/app.DH1RJFCz.js",imports:["_app/immutable/entry/start.DM6qoucy.js","_app/immutable/chunks/CMlJ4sGi.js","_app/immutable/chunks/Cka0z-Lu.js","_app/immutable/chunks/GVBq-6Wn.js","_app/immutable/chunks/g03WB3eP.js","_app/immutable/chunks/CD9wWGn9.js","_app/immutable/chunks/Dsqfbp7N.js","_app/immutable/entry/app.DH1RJFCz.js","_app/immutable/chunks/GVBq-6Wn.js","_app/immutable/chunks/g03WB3eP.js","_app/immutable/chunks/CD9wWGn9.js","_app/immutable/chunks/Dsqfbp7N.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/Cka0z-Lu.js","_app/immutable/chunks/Bi-9STrC.js","_app/immutable/chunks/D9WGosEL.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		prerendered_routes: new Set(["/","/faq","/itinerary","/our_story","/photos","/registry","/rsvp","/venue"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
