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
		client: {start:"_app/immutable/entry/start.YbMqBTCK.js",app:"_app/immutable/entry/app.CyHRZqNe.js",imports:["_app/immutable/entry/start.YbMqBTCK.js","_app/immutable/chunks/CvyjxYnH.js","_app/immutable/chunks/Y-RICtre.js","_app/immutable/chunks/BdeHYjOc.js","_app/immutable/chunks/B-tt1JNy.js","_app/immutable/chunks/BncZb7C5.js","_app/immutable/entry/app.CyHRZqNe.js","_app/immutable/chunks/BdeHYjOc.js","_app/immutable/chunks/B-tt1JNy.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/Y-RICtre.js","_app/immutable/chunks/DJGnt2k4.js","_app/immutable/chunks/Bvh4aSxU.js","_app/immutable/chunks/DCdiLMs1.js","_app/immutable/chunks/VA9EM-wK.js","_app/immutable/chunks/BncZb7C5.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/3.js'))
		],
		routes: [
			{
				id: "/envelope",
				pattern: /^\/envelope\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set(["/","/faq","/itinerary","/our_story","/photos","/registry","/rsvp","/venue"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
