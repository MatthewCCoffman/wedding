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
		client: {start:"_app/immutable/entry/start.-H2kSQjl.js",app:"_app/immutable/entry/app.B_Ql4E56.js",imports:["_app/immutable/entry/start.-H2kSQjl.js","_app/immutable/chunks/DbC2tyaj.js","_app/immutable/chunks/BFqFwktf.js","_app/immutable/chunks/CX9iArb3.js","_app/immutable/chunks/8P8wuwYO.js","_app/immutable/chunks/CYKRt97Q.js","_app/immutable/entry/app.B_Ql4E56.js","_app/immutable/chunks/CX9iArb3.js","_app/immutable/chunks/8P8wuwYO.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/BFqFwktf.js","_app/immutable/chunks/DJzvuIYy.js","_app/immutable/chunks/CxMZ6AbZ.js","_app/immutable/chunks/CUh1PFlT.js","_app/immutable/chunks/CYKRt97Q.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
