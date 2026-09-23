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
		client: {start:"_app/immutable/entry/start.DqOiBsAS.js",app:"_app/immutable/entry/app.aC-JMvee.js",imports:["_app/immutable/entry/start.DqOiBsAS.js","_app/immutable/chunks/B8ubt6Jg.js","_app/immutable/chunks/V_SFHrdi.js","_app/immutable/chunks/C5vZ882h.js","_app/immutable/chunks/CXP6YjQR.js","_app/immutable/chunks/rl3PgTYx.js","_app/immutable/entry/app.aC-JMvee.js","_app/immutable/chunks/C5vZ882h.js","_app/immutable/chunks/CXP6YjQR.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/V_SFHrdi.js","_app/immutable/chunks/DRTC_-yU.js","_app/immutable/chunks/DwP0b3M1.js","_app/immutable/chunks/DR_YegwB.js","_app/immutable/chunks/DNzOIEvL.js","_app/immutable/chunks/rl3PgTYx.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
			__memo(() => import('./nodes/9.js')),
			__memo(() => import('./nodes/10.js'))
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
				id: "/envelope",
				pattern: /^\/envelope\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/faq",
				pattern: /^\/faq\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/itinerary",
				pattern: /^\/itinerary\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/our_story",
				pattern: /^\/our_story\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/photos",
				pattern: /^\/photos\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/registry",
				pattern: /^\/registry\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/rsvp",
				pattern: /^\/rsvp\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/venue",
				pattern: /^\/venue\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
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
