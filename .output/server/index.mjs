globalThis.__nitro_main__ = import.meta.url;
import { i as HTTPError, n as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
import { r as FastResponse } from "./_libs/h3-v2+rou3+srvx.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/favicon.ico": {
		"type": "image/vnd.microsoft.icon",
		"etag": "\"4f95-3RXc3p2mhEAs1WBwaIvE0Y0uu0Y\"",
		"mtime": "2026-08-29T07:50:15.000Z",
		"size": 20373,
		"path": "../public/favicon.ico"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"a0-CKGXSIe7TSsqDTmGm/nY1t/o5d0\"",
		"mtime": "2026-08-29T07:50:15.000Z",
		"size": 160,
		"path": "../public/robots.txt"
	},
	"/assets/Ashutosh_Peshkar-ZCP4DiQx.jpg": {
		"type": "image/jpeg",
		"etag": "\"17ec7-GE9KnbiGXTk+jYjwok69f0xX2Ew\"",
		"mtime": "2026-09-17T14:13:07.189Z",
		"size": 97991,
		"path": "../public/assets/Ashutosh_Peshkar-ZCP4DiQx.jpg"
	},
	"/assets/routes-CHHJrTwl.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7380-D6xOi5PmQkjv+YhfVYkDfr5QFmk\"",
		"mtime": "2026-09-17T14:13:07.188Z",
		"size": 29568,
		"path": "../public/assets/routes-CHHJrTwl.js"
	},
	"/assets/Brij_Sarda-CPyF_ry8.jpeg": {
		"type": "image/jpeg",
		"etag": "\"2c018-pzCARSyO2XuahaBFWRMg1m8Patg\"",
		"mtime": "2026-09-17T14:13:07.191Z",
		"size": 180248,
		"path": "../public/assets/Brij_Sarda-CPyF_ry8.jpeg"
	},
	"/assets/Mital_Goyal-vOXjyRVA.jpg": {
		"type": "image/jpeg",
		"etag": "\"1c1d5-jGntHU7K8nXZJtunfBBw3gCIV5s\"",
		"mtime": "2026-09-17T14:13:07.195Z",
		"size": 115157,
		"path": "../public/assets/Mital_Goyal-vOXjyRVA.jpg"
	},
	"/assets/Sushmita_Singh-BGn5X1M_.jpg": {
		"type": "image/jpeg",
		"etag": "\"a11f-bcYcM/HL6Ye4yYKZNgsmmIv7pas\"",
		"mtime": "2026-09-17T14:13:07.198Z",
		"size": 41247,
		"path": "../public/assets/Sushmita_Singh-BGn5X1M_.jpg"
	},
	"/assets/Shreya_Dhananjay_Karkhanis-ogAwXN6S.jpg": {
		"type": "image/jpeg",
		"etag": "\"1d75b-vOic5wwkZI0aI29x/yH4Sw0VQl4\"",
		"mtime": "2026-09-17T14:13:07.197Z",
		"size": 120667,
		"path": "../public/assets/Shreya_Dhananjay_Karkhanis-ogAwXN6S.jpg"
	},
	"/assets/index-B70xOF-K.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"54bc9-Z3IzG+rj5nEkF5Jlh1EM/Epz/Z8\"",
		"mtime": "2026-09-17T14:13:07.186Z",
		"size": 347081,
		"path": "../public/assets/index-B70xOF-K.js"
	},
	"/assets/styles-DzajvXbj.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"15d23-w4Cf8D47ibc0iua6u1iDJ2nFrPA\"",
		"mtime": "2026-09-17T14:13:07.198Z",
		"size": 89379,
		"path": "../public/assets/styles-DzajvXbj.css"
	},
	"/images/professional_1.jpg": {
		"type": "image/jpeg",
		"etag": "\"b316e-vM3gtusyZBP42b3gR20xl+332hQ\"",
		"mtime": "2026-09-01T12:50:02.455Z",
		"size": 733550,
		"path": "../public/images/professional_1.jpg"
	},
	"/images/professional_2.jpg": {
		"type": "image/jpeg",
		"etag": "\"b351d-3QU8Orr4FO2A0AhM8lQ5jm3KICU\"",
		"mtime": "2026-09-01T15:49:51.793Z",
		"size": 734493,
		"path": "../public/images/professional_2.jpg"
	},
	"/images/real-family-child-therapy.jpg": {
		"type": "image/jpeg",
		"etag": "\"bf134-KlgiTAwuJV7CuD5VimsVzE0Ho4s\"",
		"mtime": "2026-09-01T11:15:20.919Z",
		"size": 782644,
		"path": "../public/images/real-family-child-therapy.jpg"
	},
	"/images/professional_3.jpg": {
		"type": "image/jpeg",
		"etag": "\"ab549-n1azlq1YZdPyNrdXQrruLmi9WHo\"",
		"mtime": "2026-09-01T15:52:25.543Z",
		"size": 701769,
		"path": "../public/images/professional_3.jpg"
	},
	"/images/real-child-mental-health.jpg": {
		"type": "image/jpeg",
		"etag": "\"d98bc-RG/eumxhmGVqCx5ZVDZEWfGS2PI\"",
		"mtime": "2026-09-01T11:14:36.696Z",
		"size": 891068,
		"path": "../public/images/real-child-mental-health.jpg"
	},
	"/images/real-teen-counselling.jpg": {
		"type": "image/jpeg",
		"etag": "\"c9a73-Me4MXDx5v+gW8lNpY077eW0nKO8\"",
		"mtime": "2026-09-01T11:15:34.047Z",
		"size": 825971,
		"path": "../public/images/real-teen-counselling.jpg"
	},
	"/images/real-teacher-student-support.jpg": {
		"type": "image/jpeg",
		"etag": "\"ccb4e-CTuGFxg1cWEbiv5FKVpDknqCQXY\"",
		"mtime": "2026-09-01T11:14:51.652Z",
		"size": 838478,
		"path": "../public/images/real-teacher-student-support.jpg"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_f5gRuI = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_f5gRuI
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
