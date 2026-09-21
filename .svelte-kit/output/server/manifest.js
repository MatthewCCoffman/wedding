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
		client: {start:"_app/immutable/entry/start.ZXhM7pjv.js",app:"_app/immutable/entry/app.CoivoN9w.js",imports:["_app/immutable/entry/start.ZXhM7pjv.js","_app/immutable/chunks/Dt00eoN7.js","_app/immutable/chunks/iBMV8SoY.js","_app/immutable/chunks/CZ66Ec-2.js","_app/immutable/chunks/C8QyZOnr.js","_app/immutable/chunks/DBTkKc9Y.js","_app/immutable/entry/app.CoivoN9w.js","_app/immutable/chunks/CZ66Ec-2.js","_app/immutable/chunks/C8QyZOnr.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/iBMV8SoY.js","_app/immutable/chunks/BiX4kcoW.js","_app/immutable/chunks/c73eB7gh.js","_app/immutable/chunks/D307xVm4.js","_app/immutable/chunks/DBTkKc9Y.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
