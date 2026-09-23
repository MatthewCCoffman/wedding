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
		client: {start:"_app/immutable/entry/start.CszhEgpN.js",app:"_app/immutable/entry/app.Dqu8T25m.js",imports:["_app/immutable/entry/start.CszhEgpN.js","_app/immutable/chunks/DctaoKeS.js","_app/immutable/chunks/NIGN-ljY.js","_app/immutable/chunks/DxcfLqCq.js","_app/immutable/chunks/CAUIzWXO.js","_app/immutable/chunks/Di41yiQZ.js","_app/immutable/entry/app.Dqu8T25m.js","_app/immutable/chunks/DxcfLqCq.js","_app/immutable/chunks/CAUIzWXO.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/NIGN-ljY.js","_app/immutable/chunks/BKFaIrlh.js","_app/immutable/chunks/Cwulpwd3.js","_app/immutable/chunks/DP0kUkzK.js","_app/immutable/chunks/Di41yiQZ.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js')),
			__memo(() => import('./nodes/9.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/faq",
				pattern: /^\/faq\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/itinerary",
				pattern: /^\/itinerary\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/our_story",
				pattern: /^\/our_story\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/photos",
				pattern: /^\/photos\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/registry",
				pattern: /^\/registry\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/rsvp",
				pattern: /^\/rsvp\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/venue",
				pattern: /^\/venue\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
