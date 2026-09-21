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
