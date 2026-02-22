(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/novara/components/Navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Navbar",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/novara/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/novara/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/novara/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/Desktop/novara/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Desktop/novara/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const navLinkClass = "text-sm font-medium tracking-tight link-lift opacity-90 hover:opacity-100";
function Navbar(param) {
    let { links, settings, ctaText } = param;
    _s();
    const [scrolledPastHero, setScrolledPastHero] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mobileOpen, setMobileOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            const observer = new IntersectionObserver({
                "Navbar.useEffect": (param)=>{
                    let [e] = param;
                    return setScrolledPastHero(!e.isIntersecting);
                }
            }["Navbar.useEffect"], {
                threshold: 0.1,
                rootMargin: "-10% 0px 0px 0px"
            });
            const hero = document.getElementById("hero-section");
            if (hero) observer.observe(hero);
            return ({
                "Navbar.useEffect": ()=>observer.disconnect()
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], []);
    var _settings_brand_name;
    const brandName = (_settings_brand_name = settings === null || settings === void 0 ? void 0 : settings.brand_name) !== null && _settings_brand_name !== void 0 ? _settings_brand_name : "Novara";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-4xl transition-all duration-500 rounded-[2rem] ".concat(scrolledPastHero ? "bg-background/60 backdrop-blur-xl border border-primary/10 text-primary shadow-lg" : "bg-transparent text-ghost"),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "flex items-center justify-between px-6 py-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "text-lg font-semibold tracking-tight link-lift",
                        children: brandName
                    }, void 0, false, {
                        fileName: "[project]/Desktop/novara/components/Navbar.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden md:flex items-center gap-8",
                        children: [
                            links.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: link.href,
                                    className: navLinkClass,
                                    onClick: ()=>setMobileOpen(false),
                                    children: link.label
                                }, link.id, false, {
                                    fileName: "[project]/Desktop/novara/components/Navbar.tsx",
                                    lineNumber: 53,
                                    columnNumber: 13
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "#pricing",
                                className: "px-4 py-2 rounded-full bg-accent text-white text-sm font-medium tracking-tight btn-magnetic overflow-hidden relative group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "absolute inset-0 bg-plasma/80 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/novara/components/Navbar.tsx",
                                        lineNumber: 66,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "relative",
                                        children: ctaText
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/novara/components/Navbar.tsx",
                                        lineNumber: 67,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/novara/components/Navbar.tsx",
                                lineNumber: 62,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/novara/components/Navbar.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "md:hidden p-2 link-lift",
                        onClick: ()=>setMobileOpen((o)=>!o),
                        "aria-label": "Toggle menu",
                        children: mobileOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            size: 20
                        }, void 0, false, {
                            fileName: "[project]/Desktop/novara/components/Navbar.tsx",
                            lineNumber: 77,
                            columnNumber: 25
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                            size: 20
                        }, void 0, false, {
                            fileName: "[project]/Desktop/novara/components/Navbar.tsx",
                            lineNumber: 77,
                            columnNumber: 43
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/novara/components/Navbar.tsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/novara/components/Navbar.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            mobileOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "md:hidden px-6 pb-4 flex flex-col gap-4 border-t border-primary/10 mt-2 pt-4",
                children: [
                    links.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: link.href,
                            className: navLinkClass,
                            onClick: ()=>setMobileOpen(false),
                            children: link.label
                        }, link.id, false, {
                            fileName: "[project]/Desktop/novara/components/Navbar.tsx",
                            lineNumber: 84,
                            columnNumber: 13
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "#pricing",
                        className: "px-4 py-2 rounded-full bg-accent text-white text-sm font-medium text-center btn-magnetic",
                        onClick: ()=>setMobileOpen(false),
                        children: ctaText
                    }, void 0, false, {
                        fileName: "[project]/Desktop/novara/components/Navbar.tsx",
                        lineNumber: 93,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/novara/components/Navbar.tsx",
                lineNumber: 82,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/novara/components/Navbar.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
_s(Navbar, "S1J0hFPYNT/v+22cPtGfgmPv0Rg=");
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/novara/components/Hero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Hero",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/novara/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/novara/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/novara/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/novara/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const DEFAULT_HERO_IMAGE = "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=1920&q=80";
function Hero(param) {
    let { settings } = param;
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const line1Ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const line2Ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const ctaRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    var _settings_hero_line_1;
    const line1 = (_settings_hero_line_1 = settings === null || settings === void 0 ? void 0 : settings.hero_line_1) !== null && _settings_hero_line_1 !== void 0 ? _settings_hero_line_1 : "Interface beyond";
    var _settings_hero_line_2;
    const line2 = (_settings_hero_line_2 = settings === null || settings === void 0 ? void 0 : settings.hero_line_2) !== null && _settings_hero_line_2 !== void 0 ? _settings_hero_line_2 : "boundaries.";
    var _settings_cta_text;
    const ctaText = (_settings_cta_text = settings === null || settings === void 0 ? void 0 : settings.cta_text) !== null && _settings_cta_text !== void 0 ? _settings_cta_text : "Enter the Experience";
    var _settings_hero_background_image_url;
    const heroBg = (_settings_hero_background_image_url = settings === null || settings === void 0 ? void 0 : settings.hero_background_image_url) !== null && _settings_hero_background_image_url !== void 0 ? _settings_hero_background_image_url : DEFAULT_HERO_IMAGE;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Hero.useEffect": ()=>{
            if (!containerRef.current) return;
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context({
                "Hero.useEffect.ctx": ()=>{
                    const tl = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
                        defaults: {
                            ease: "power3.out"
                        }
                    });
                    tl.fromTo(line1Ref.current, {
                        y: 40,
                        opacity: 0
                    }, {
                        y: 0,
                        opacity: 1,
                        duration: 0.8
                    }).fromTo(line2Ref.current, {
                        y: 40,
                        opacity: 0
                    }, {
                        y: 0,
                        opacity: 1,
                        duration: 0.8
                    }, "-=0.5").fromTo(ctaRef.current, {
                        y: 40,
                        opacity: 0
                    }, {
                        y: 0,
                        opacity: 1,
                        duration: 0.6
                    }, "-=0.4");
                }
            }["Hero.useEffect.ctx"], containerRef);
            return ({
                "Hero.useEffect": ()=>ctx.revert()
            })["Hero.useEffect"];
        }
    }["Hero.useEffect"], [
        line1,
        line2,
        ctaText
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "hero-section",
        ref: containerRef,
        className: "relative h-[100dvh] flex flex-col justify-end overflow-hidden rounded-b-[3rem]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-cover bg-center",
                style: {
                    backgroundImage: "url(".concat(heroBg, ")")
                }
            }, void 0, false, {
                fileName: "[project]/Desktop/novara/components/Hero.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-primary/40"
            }, void 0, false, {
                fileName: "[project]/Desktop/novara/components/Hero.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 px-6 sm:px-10 pb-[20dvh] max-w-4xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-ghost/90 text-sm font-mono tracking-wider uppercase mb-4 reveal-item",
                        children: "Precision digital interface"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/novara/components/Hero.tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-4xl sm:text-5xl md:text-6xl font-sans font-bold tracking-tight text-ghost mb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                ref: line1Ref,
                                className: "block",
                                children: line1
                            }, void 0, false, {
                                fileName: "[project]/Desktop/novara/components/Hero.tsx",
                                lineNumber: 64,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                ref: line2Ref,
                                className: "block font-drama italic text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-accent mt-2",
                                children: line2
                            }, void 0, false, {
                                fileName: "[project]/Desktop/novara/components/Hero.tsx",
                                lineNumber: 67,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/novara/components/Hero.tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: ctaRef,
                        className: "mt-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "#pricing",
                            className: "inline-flex items-center px-6 py-3 rounded-full bg-accent text-white font-medium tracking-tight btn-magnetic overflow-hidden relative group",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/novara/components/Hero.tsx",
                                    lineNumber: 79,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "relative",
                                    children: ctaText
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/novara/components/Hero.tsx",
                                    lineNumber: 80,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/novara/components/Hero.tsx",
                            lineNumber: 75,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/novara/components/Hero.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/novara/components/Hero.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/novara/components/Hero.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
_s(Hero, "i8Zcm/WFhVfDUJPLdFn37n7zpcE=");
_c = Hero;
var _c;
__turbopack_context__.k.register(_c, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/novara/components/FeatureCards.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FeatureCards",
    ()=>FeatureCards
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/novara/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/novara/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/novara/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/novara/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature();
"use client";
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
function DiagnosticShuffler(param) {
    let { labels, title, description } = param;
    _s();
    const source = labels.length >= 3 ? labels.slice(0, 3) : [
        "Context-aware layouts",
        "Dynamic component loading",
        "Predictive state management"
    ];
    const [frontIndex, setFrontIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DiagnosticShuffler.useEffect": ()=>{
            if (source.length < 2) return;
            const t = setInterval({
                "DiagnosticShuffler.useEffect.t": ()=>{
                    setFrontIndex({
                        "DiagnosticShuffler.useEffect.t": (prev)=>(prev + 1) % source.length
                    }["DiagnosticShuffler.useEffect.t"]);
                }
            }["DiagnosticShuffler.useEffect.t"], 3000);
            return ({
                "DiagnosticShuffler.useEffect": ()=>clearInterval(t)
            })["DiagnosticShuffler.useEffect"];
        }
    }["DiagnosticShuffler.useEffect"], [
        source.length
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: "bg-background border border-primary/10 rounded-[2rem] p-6 shadow-lg flex flex-col min-h-[220px]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "font-sans font-bold text-primary text-lg mb-1",
                children: title
            }, void 0, false, {
                fileName: "[project]/Desktop/novara/components/FeatureCards.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-graphite/80 text-sm mb-4",
                children: description
            }, void 0, false, {
                fileName: "[project]/Desktop/novara/components/FeatureCards.tsx",
                lineNumber: 38,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative h-28 flex-1 flex items-center justify-center overflow-hidden",
                children: source.map((label, i)=>{
                    const offset = (i - frontIndex + source.length) % source.length;
                    const isFront = offset === 0;
                    const isBack = offset === 1;
                    const isFar = offset === 2;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute w-full max-w-[90%] px-4 py-2.5 rounded-xl bg-ghost/90 border border-accent/20 text-center font-mono text-sm text-primary shadow-sm",
                        style: {
                            transform: "translateY(".concat((offset - 1) * 32, "px) scale(").concat(isFront ? 1 : isBack ? 0.92 : 0.84, ")"),
                            zIndex: isFront ? 30 : isBack ? 20 : 10,
                            opacity: isFront ? 1 : isBack ? 0.85 : 0.6,
                            transition: "transform 0.55s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.4s ease",
                            pointerEvents: "none"
                        },
                        children: label
                    }, i, false, {
                        fileName: "[project]/Desktop/novara/components/FeatureCards.tsx",
                        lineNumber: 47,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/Desktop/novara/components/FeatureCards.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/novara/components/FeatureCards.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
_s(DiagnosticShuffler, "W01yT587OWzdu/KxYkf9Uya+J34=");
_c = DiagnosticShuffler;
function TelemetryTypewriter(param) {
    let { messages, title, description } = param;
    _s1();
    const [currentIndex, setCurrentIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [currentText, setCurrentText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [phase, setPhase] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("typing");
    const list = messages.length ? messages : [
        "Rendering pipeline: 16ms",
        "Input latency: <8ms",
        "State sync: real-time"
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TelemetryTypewriter.useEffect": ()=>{
            const msg = list[currentIndex % list.length];
            if (phase === "typing") {
                if (currentText.length < msg.length) {
                    const t = setTimeout({
                        "TelemetryTypewriter.useEffect.t": ()=>setCurrentText(msg.slice(0, currentText.length + 1))
                    }["TelemetryTypewriter.useEffect.t"], 60);
                    return ({
                        "TelemetryTypewriter.useEffect": ()=>clearTimeout(t)
                    })["TelemetryTypewriter.useEffect"];
                }
                const t = setTimeout({
                    "TelemetryTypewriter.useEffect.t": ()=>setPhase("pause")
                }["TelemetryTypewriter.useEffect.t"], 1200);
                return ({
                    "TelemetryTypewriter.useEffect": ()=>clearTimeout(t)
                })["TelemetryTypewriter.useEffect"];
            } else {
                const t = setTimeout({
                    "TelemetryTypewriter.useEffect.t": ()=>{
                        setCurrentIndex({
                            "TelemetryTypewriter.useEffect.t": (i)=>i + 1
                        }["TelemetryTypewriter.useEffect.t"]);
                        setCurrentText("");
                        setPhase("typing");
                    }
                }["TelemetryTypewriter.useEffect.t"], 2000);
                return ({
                    "TelemetryTypewriter.useEffect": ()=>clearTimeout(t)
                })["TelemetryTypewriter.useEffect"];
            }
        }
    }["TelemetryTypewriter.useEffect"], [
        currentIndex,
        currentText,
        phase,
        list
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-background border border-primary/10 rounded-[2rem] p-6 shadow-lg flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 mb-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "w-2 h-2 rounded-full bg-accent animate-pulse-dot"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/novara/components/FeatureCards.tsx",
                        lineNumber: 103,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs font-mono text-accent uppercase tracking-wider",
                        children: "Live Feed"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/novara/components/FeatureCards.tsx",
                        lineNumber: 104,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/novara/components/FeatureCards.tsx",
                lineNumber: 102,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "font-sans font-bold text-primary text-lg mb-1",
                children: title
            }, void 0, false, {
                fileName: "[project]/Desktop/novara/components/FeatureCards.tsx",
                lineNumber: 106,
                columnNumber: 7
            }, this),
            description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-graphite/80 text-sm mb-4",
                children: description
            }, void 0, false, {
                fileName: "[project]/Desktop/novara/components/FeatureCards.tsx",
                lineNumber: 108,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "font-mono text-sm text-primary min-h-[2.5rem] flex items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: currentText
                    }, void 0, false, {
                        fileName: "[project]/Desktop/novara/components/FeatureCards.tsx",
                        lineNumber: 111,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "inline-block w-2 h-4 bg-accent ml-0.5 animate-pulse"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/novara/components/FeatureCards.tsx",
                        lineNumber: 112,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/novara/components/FeatureCards.tsx",
                lineNumber: 110,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/novara/components/FeatureCards.tsx",
        lineNumber: 101,
        columnNumber: 5
    }, this);
}
_s1(TelemetryTypewriter, "VfbqNG4JpbyRNqpbw4HFZxvdIso=");
_c1 = TelemetryTypewriter;
function CursorProtocolScheduler(param) {
    let { label, title, description } = param;
    _s2();
    const wrapperRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const cursorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [activeDay, setActiveDay] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const days = [
        "S",
        "M",
        "T",
        "W",
        "T",
        "F",
        "S"
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CursorProtocolScheduler.useEffect": ()=>{
            const wrapper = wrapperRef.current;
            const cursor = cursorRef.current;
            if (!wrapper || !cursor) return;
            const grid = wrapper.querySelector("[data-grid]");
            const cells = wrapper.querySelectorAll("[data-day]");
            const saveEl = wrapper.querySelector("[data-save]");
            const targetIndex = 3;
            const target = cells[targetIndex];
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context({
                "CursorProtocolScheduler.useEffect.ctx": ()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(cursor, {
                        left: 0,
                        top: 0,
                        opacity: 1
                    });
                    const tl = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
                        repeat: 0,
                        delay: 0.8
                    });
                    if (target && grid) {
                        const r = target.getBoundingClientRect();
                        const wr = wrapper.getBoundingClientRect();
                        const x = r.left - wr.left + r.width / 2 - 10;
                        const y = r.top - wr.top + r.height / 2 - 10;
                        tl.to(cursor, {
                            left: x,
                            top: y,
                            duration: 0.8,
                            ease: "power2.inOut"
                        }).call({
                            "CursorProtocolScheduler.useEffect.ctx": ()=>setActiveDay(targetIndex)
                        }["CursorProtocolScheduler.useEffect.ctx"]).to(cursor, {
                            scale: 0.95,
                            duration: 0.1
                        }).to(cursor, {
                            scale: 1,
                            duration: 0.15,
                            ease: "power2.out"
                        });
                        if (saveEl) {
                            const sr = saveEl.getBoundingClientRect();
                            tl.to(cursor, {
                                left: sr.left - wr.left + sr.width / 2 - 10,
                                top: sr.top - wr.top + sr.height / 2 - 10,
                                duration: 0.6,
                                ease: "power2.inOut"
                            });
                        }
                        tl.to(cursor, {
                            opacity: 0,
                            duration: 0.3
                        });
                    }
                }
            }["CursorProtocolScheduler.useEffect.ctx"], wrapper);
            return ({
                "CursorProtocolScheduler.useEffect": ()=>ctx.revert()
            })["CursorProtocolScheduler.useEffect"];
        }
    }["CursorProtocolScheduler.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: wrapperRef,
        className: "bg-background border border-primary/10 rounded-[2rem] p-6 shadow-lg flex flex-col relative min-h-[280px]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "font-sans font-bold text-primary text-lg mb-1",
                children: title
            }, void 0, false, {
                fileName: "[project]/Desktop/novara/components/FeatureCards.tsx",
                lineNumber: 171,
                columnNumber: 7
            }, this),
            description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-graphite/80 text-sm mb-4",
                children: description
            }, void 0, false, {
                fileName: "[project]/Desktop/novara/components/FeatureCards.tsx",
                lineNumber: 173,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs font-mono text-accent/90 mb-3",
                children: label
            }, void 0, false, {
                fileName: "[project]/Desktop/novara/components/FeatureCards.tsx",
                lineNumber: 175,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-grid": true,
                className: "relative grid grid-cols-7 gap-2 max-w-[200px] mx-auto",
                children: [
                    days.map((d, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            "data-day": i,
                            className: "w-8 h-8 rounded-lg flex items-center justify-center text-xs font-mono transition-all duration-300 ".concat(activeDay === i ? "bg-accent text-white scale-95" : "bg-ghost/80 text-primary"),
                            children: d
                        }, i, false, {
                            fileName: "[project]/Desktop/novara/components/FeatureCards.tsx",
                            lineNumber: 178,
                            columnNumber: 11
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-save": true,
                        className: "col-span-7 mt-3 py-2 rounded-lg bg-primary/10 text-center text-xs font-mono text-primary",
                        children: "Save"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/novara/components/FeatureCards.tsx",
                        lineNumber: 189,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/novara/components/FeatureCards.tsx",
                lineNumber: 176,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: cursorRef,
                className: "absolute w-5 h-5 pointer-events-none z-10 transition-opacity",
                style: {
                    left: 0,
                    top: 0
                },
                "aria-hidden": true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    viewBox: "0 0 24 24",
                    className: "w-5 h-5 text-accent drop-shadow",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M0 0 L0 20 L8 16 L12 24 L16 20 L12 16 Z",
                        fill: "currentColor",
                        stroke: "var(--color-primary)",
                        strokeWidth: "1"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/novara/components/FeatureCards.tsx",
                        lineNumber: 203,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/novara/components/FeatureCards.tsx",
                    lineNumber: 202,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/novara/components/FeatureCards.tsx",
                lineNumber: 196,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/novara/components/FeatureCards.tsx",
        lineNumber: 170,
        columnNumber: 5
    }, this);
}
_s2(CursorProtocolScheduler, "qkDVSDFIcvzIYvg7WFmOvI+po4g=");
_c2 = CursorProtocolScheduler;
function FeatureCards(param) {
    let { features } = param;
    _s3();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const cardRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FeatureCards.useEffect": ()=>{
            if (!sectionRef.current) return;
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context({
                "FeatureCards.useEffect.ctx": ()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(cardRefs.current.filter(Boolean), {
                        y: 60,
                        opacity: 0
                    }, {
                        y: 0,
                        opacity: 1,
                        duration: 0.7,
                        stagger: 0.15,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: "top 75%",
                            toggleActions: "play none none none"
                        }
                    });
                }
            }["FeatureCards.useEffect.ctx"], sectionRef);
            return ({
                "FeatureCards.useEffect": ()=>ctx.revert()
            })["FeatureCards.useEffect"];
        }
    }["FeatureCards.useEffect"], [
        features
    ]);
    const sorted = [
        ...features
    ].sort((a, b)=>a.order_index - b.order_index);
    const cards = sorted.length >= 3 ? sorted : [
        {
            card_type: "shuffler",
            title: "Adaptive Interface Intelligence",
            description: "Systems that learn and adapt.",
            sub_labels: [
                "Context-aware layouts",
                "Dynamic component loading",
                "Predictive state management"
            ],
            typewriter_messages: [],
            scheduler_label: "Schedule your precision session"
        },
        {
            card_type: "typewriter",
            title: "Real-Time Visual Feedback Systems",
            description: "Every interaction surfaces immediate feedback.",
            sub_labels: [],
            typewriter_messages: [
                "Rendering pipeline: 16ms",
                "Input latency: <8ms",
                "State sync: real-time"
            ],
            scheduler_label: null
        },
        {
            card_type: "scheduler",
            title: "Precision Interaction Architecture",
            description: "Orchestrated interactions with deterministic timing.",
            sub_labels: [],
            typewriter_messages: [],
            scheduler_label: "Schedule your precision session"
        }
    ].map((c, i)=>({
            ...c,
            id: String(i),
            order_index: i
        }));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "experience",
        ref: sectionRef,
        className: "py-24 px-6 sm:px-10 max-w-6xl mx-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "font-sans font-bold text-primary text-2xl sm:text-3xl tracking-tight mb-12 text-center",
                children: "The experience layer"
            }, void 0, false, {
                fileName: "[project]/Desktop/novara/components/FeatureCards.tsx",
                lineNumber: 250,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid md:grid-cols-3 gap-6",
                children: cards.map((card, i)=>{
                    var _card_scheduler_label;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: (el)=>{
                            cardRefs.current[i] = el;
                        },
                        children: [
                            card.card_type === "shuffler" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DiagnosticShuffler, {
                                labels: card.sub_labels,
                                title: card.title,
                                description: card.description
                            }, void 0, false, {
                                fileName: "[project]/Desktop/novara/components/FeatureCards.tsx",
                                lineNumber: 260,
                                columnNumber: 15
                            }, this),
                            card.card_type === "typewriter" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TelemetryTypewriter, {
                                messages: card.typewriter_messages,
                                title: card.title,
                                description: card.description
                            }, void 0, false, {
                                fileName: "[project]/Desktop/novara/components/FeatureCards.tsx",
                                lineNumber: 267,
                                columnNumber: 15
                            }, this),
                            card.card_type === "scheduler" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CursorProtocolScheduler, {
                                label: (_card_scheduler_label = card.scheduler_label) !== null && _card_scheduler_label !== void 0 ? _card_scheduler_label : "Schedule your session",
                                title: card.title,
                                description: card.description
                            }, void 0, false, {
                                fileName: "[project]/Desktop/novara/components/FeatureCards.tsx",
                                lineNumber: 274,
                                columnNumber: 15
                            }, this)
                        ]
                    }, card.id, true, {
                        fileName: "[project]/Desktop/novara/components/FeatureCards.tsx",
                        lineNumber: 255,
                        columnNumber: 11
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/Desktop/novara/components/FeatureCards.tsx",
                lineNumber: 253,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/novara/components/FeatureCards.tsx",
        lineNumber: 245,
        columnNumber: 5
    }, this);
}
_s3(FeatureCards, "lXUUkKP5LkYl7/4pW16d842yKHs=");
_c3 = FeatureCards;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "DiagnosticShuffler");
__turbopack_context__.k.register(_c1, "TelemetryTypewriter");
__turbopack_context__.k.register(_c2, "CursorProtocolScheduler");
__turbopack_context__.k.register(_c3, "FeatureCards");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/novara/components/Philosophy.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Philosophy",
    ()=>Philosophy
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/novara/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/novara/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/novara/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/novara/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
const DEFAULT_TEXTURE = "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=1200&q=60";
function Philosophy(param) {
    let { settings } = param;
    _s();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const commonRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const diffRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const keywordRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    var _settings_philosophy_common;
    const common = (_settings_philosophy_common = settings === null || settings === void 0 ? void 0 : settings.philosophy_common) !== null && _settings_philosophy_common !== void 0 ? _settings_philosophy_common : "Most digital products focus on: features and screens.";
    var _settings_philosophy_differentiated;
    const differentiated = (_settings_philosophy_differentiated = settings === null || settings === void 0 ? void 0 : settings.philosophy_differentiated) !== null && _settings_philosophy_differentiated !== void 0 ? _settings_philosophy_differentiated : "We focus on: experience as instrument.";
    var _settings_philosophy_keyword;
    const keyword = (_settings_philosophy_keyword = settings === null || settings === void 0 ? void 0 : settings.philosophy_keyword) !== null && _settings_philosophy_keyword !== void 0 ? _settings_philosophy_keyword : "experience as instrument";
    var _settings_hero_background_image_url;
    const textureUrl = (_settings_hero_background_image_url = settings === null || settings === void 0 ? void 0 : settings.hero_background_image_url) !== null && _settings_hero_background_image_url !== void 0 ? _settings_hero_background_image_url : DEFAULT_TEXTURE;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Philosophy.useEffect": ()=>{
            if (!sectionRef.current) return;
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context({
                "Philosophy.useEffect.ctx": ()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(commonRef.current, {
                        y: 30,
                        opacity: 0
                    }, {
                        y: 0,
                        opacity: 1,
                        duration: 0.7,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: "top 70%",
                            toggleActions: "play none none none"
                        }
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(diffRef.current, {
                        y: 40,
                        opacity: 0
                    }, {
                        y: 0,
                        opacity: 1,
                        duration: 0.8,
                        delay: 0.15,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: "top 70%",
                            toggleActions: "play none none none"
                        }
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(keywordRef.current, {
                        opacity: 0,
                        scale: 0.98
                    }, {
                        opacity: 1,
                        scale: 1,
                        duration: 0.6,
                        delay: 0.4,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: "top 70%",
                            toggleActions: "play none none none"
                        }
                    });
                }
            }["Philosophy.useEffect.ctx"], sectionRef);
            return ({
                "Philosophy.useEffect": ()=>ctx.revert()
            })["Philosophy.useEffect"];
        }
    }["Philosophy.useEffect"], [
        common,
        differentiated,
        keyword
    ]);
    const parts = differentiated.split(keyword);
    var _parts_;
    const beforeKeyword = (_parts_ = parts[0]) !== null && _parts_ !== void 0 ? _parts_ : "";
    var _parts_1;
    const afterKeyword = (_parts_1 = parts[1]) !== null && _parts_1 !== void 0 ? _parts_1 : "";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "philosophy",
        ref: sectionRef,
        className: "relative py-32 px-6 sm:px-10 rounded-[3rem] overflow-hidden bg-primary text-ghost",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-cover bg-center opacity-20",
                style: {
                    backgroundImage: "url(".concat(textureUrl, ")")
                },
                "aria-hidden": true
            }, void 0, false, {
                fileName: "[project]/Desktop/novara/components/Philosophy.tsx",
                lineNumber: 92,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 max-w-4xl mx-auto text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        ref: commonRef,
                        className: "text-ghost/80 text-base sm:text-lg mb-8 font-sans",
                        children: common
                    }, void 0, false, {
                        fileName: "[project]/Desktop/novara/components/Philosophy.tsx",
                        lineNumber: 98,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        ref: diffRef,
                        className: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-drama italic leading-tight",
                        children: [
                            beforeKeyword,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                ref: keywordRef,
                                className: "text-accent font-drama italic",
                                children: keyword
                            }, void 0, false, {
                                fileName: "[project]/Desktop/novara/components/Philosophy.tsx",
                                lineNumber: 109,
                                columnNumber: 11
                            }, this),
                            afterKeyword
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/novara/components/Philosophy.tsx",
                        lineNumber: 104,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/novara/components/Philosophy.tsx",
                lineNumber: 97,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/novara/components/Philosophy.tsx",
        lineNumber: 87,
        columnNumber: 5
    }, this);
}
_s(Philosophy, "w5LOEnKJbC7psRqsc/eFXiXPQE0=");
_c = Philosophy;
var _c;
__turbopack_context__.k.register(_c, "Philosophy");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/novara/components/Protocol.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Protocol",
    ()=>Protocol
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/novara/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/novara/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/novara/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/novara/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature();
"use client";
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
const DEFAULT_STEP_IMAGES = [
    "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80",
    "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=800&q=80",
    "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&q=80"
];
function GeometricMotif() {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GeometricMotif.useEffect": ()=>{
            if (!ref.current) return;
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context({
                "GeometricMotif.useEffect.ctx": ()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(ref.current, {
                        rotation: 360,
                        duration: 25,
                        repeat: -1,
                        ease: "none"
                    });
                }
            }["GeometricMotif.useEffect.ctx"], ref.current);
            return ({
                "GeometricMotif.useEffect": ()=>ctx.revert()
            })["GeometricMotif.useEffect"];
        }
    }["GeometricMotif.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ref: ref,
        className: "w-24 h-24 text-accent/50 shrink-0",
        viewBox: "0 0 100 100",
        "aria-hidden": true,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                cx: "50",
                cy: "50",
                rx: "45",
                ry: "15",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "1.5"
            }, void 0, false, {
                fileName: "[project]/Desktop/novara/components/Protocol.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                cx: "50",
                cy: "50",
                rx: "15",
                ry: "45",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "1.5"
            }, void 0, false, {
                fileName: "[project]/Desktop/novara/components/Protocol.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "50",
                cy: "50",
                r: "8",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/Desktop/novara/components/Protocol.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/novara/components/Protocol.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_s(GeometricMotif, "8uVE59eA/r6b92xF80p7sH8rXLk=");
_c = GeometricMotif;
function ScanlineGrid() {
    _s1();
    const lineRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScanlineGrid.useEffect": ()=>{
            if (!lineRef.current) return;
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context({
                "ScanlineGrid.useEffect.ctx": ()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(lineRef.current, {
                        x: "-100%"
                    }, {
                        x: "100%",
                        duration: 3,
                        repeat: -1,
                        ease: "none"
                    });
                }
            }["ScanlineGrid.useEffect.ctx"], lineRef.current);
            return ({
                "ScanlineGrid.useEffect": ()=>ctx.revert()
            })["ScanlineGrid.useEffect"];
        }
    }["ScanlineGrid.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute inset-0 overflow-hidden rounded-[2rem] pointer-events-none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 grid grid-cols-8 grid-rows-6 gap-px bg-primary/5",
                children: Array.from({
                    length: 48
                }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-accent/10 rounded-sm"
                    }, i, false, {
                        fileName: "[project]/Desktop/novara/components/Protocol.tsx",
                        lineNumber: 51,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Desktop/novara/components/Protocol.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: lineRef,
                className: "absolute top-1/2 left-0 w-1/2 h-px bg-accent/70 shadow-[0_0_12px_var(--color-accent)]",
                "aria-hidden": true
            }, void 0, false, {
                fileName: "[project]/Desktop/novara/components/Protocol.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/novara/components/Protocol.tsx",
        lineNumber: 48,
        columnNumber: 5
    }, this);
}
_s1(ScanlineGrid, "r+xYozopNRlNwwK5AwI/eJJ/Aks=");
_c1 = ScanlineGrid;
function WaveformEKG() {
    _s2();
    const pathRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WaveformEKG.useEffect": ()=>{
            if (!pathRef.current) return;
            const path = pathRef.current;
            const length = path.getTotalLength();
            path.style.strokeDasharray = String(length);
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context({
                "WaveformEKG.useEffect.ctx": ()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(path, {
                        strokeDashoffset: length
                    }, {
                        strokeDashoffset: 0,
                        duration: 2,
                        repeat: -1,
                        repeatDelay: 0.8,
                        ease: "power2.inOut"
                    });
                }
            }["WaveformEKG.useEffect.ctx"], path);
            return ({
                "WaveformEKG.useEffect": ()=>ctx.revert()
            })["WaveformEKG.useEffect"];
        }
    }["WaveformEKG.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "w-full h-20 text-accent/70 shrink-0",
        viewBox: "0 0 200 60",
        "aria-hidden": true,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            ref: pathRef,
            d: "M0 30 Q20 10 40 30 T80 30 T120 30 T160 30 T200 30",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round"
        }, void 0, false, {
            fileName: "[project]/Desktop/novara/components/Protocol.tsx",
            lineNumber: 81,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/novara/components/Protocol.tsx",
        lineNumber: 80,
        columnNumber: 5
    }, this);
}
_s2(WaveformEKG, "U7GLrS0n/uACschYJYQjrsowHCw=");
_c2 = WaveformEKG;
const SCROLL_VH_PER_STEP = 180;
function Protocol(param) {
    let { steps } = param;
    _s3();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const cardsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const sorted = [
        ...steps
    ].sort((a, b)=>a.order_index - b.order_index);
    const list = sorted.length >= 1 ? sorted : [
        {
            id: "1",
            step_number: 1,
            title: "Define",
            description: "Map intent to a structured experience model.",
            animation_type: "geometric",
            image_url: DEFAULT_STEP_IMAGES[0],
            order_index: 0,
            is_published: true,
            created_at: "",
            updated_at: ""
        },
        {
            id: "2",
            step_number: 2,
            title: "Orchestrate",
            description: "Compose interactions with precise timing.",
            animation_type: "scanline",
            image_url: DEFAULT_STEP_IMAGES[1],
            order_index: 1,
            is_published: true,
            created_at: "",
            updated_at: ""
        },
        {
            id: "3",
            step_number: 3,
            title: "Deliver",
            description: "Render and ship with cinematic fidelity.",
            animation_type: "waveform",
            image_url: DEFAULT_STEP_IMAGES[2],
            order_index: 2,
            is_published: true,
            created_at: "",
            updated_at: ""
        }
    ];
    const totalVh = list.length * SCROLL_VH_PER_STEP;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Protocol.useEffect": ()=>{
            if (!containerRef.current) return;
            const cards = cardsRef.current.filter(Boolean);
            const n = list.length;
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context({
                "Protocol.useEffect.ctx": ()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].create({
                        trigger: containerRef.current,
                        start: "top top",
                        end: "+=".concat(totalVh, "vh"),
                        pin: true,
                        pinSpacing: true
                    });
                    list.forEach({
                        "Protocol.useEffect.ctx": (_, i)=>{
                            const card = cards[i];
                            if (!card) return;
                            const isFirst = i === 0;
                            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(card, {
                                scale: isFirst ? 1 : 0.92,
                                filter: "none",
                                opacity: isFirst ? 1 : 0.6,
                                zIndex: isFirst ? n : i
                            });
                        }
                    }["Protocol.useEffect.ctx"]);
                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].create({
                        trigger: containerRef.current,
                        start: "top top",
                        end: "+=".concat(totalVh, "vh"),
                        scrub: 1.2,
                        onUpdate: {
                            "Protocol.useEffect.ctx": (self)=>{
                                const p = self.progress;
                                const segment = 1 / n;
                                list.forEach({
                                    "Protocol.useEffect.ctx": (_, i)=>{
                                        const card = cards[i];
                                        if (!card) return;
                                        const segStart = i * segment;
                                        const segEnd = (i + 1) * segment;
                                        let scale = 0.92;
                                        let opacity = 0.6;
                                        let zIndex = i;
                                        if (p >= segStart && p <= segEnd) {
                                            const t = (p - segStart) / segment;
                                            scale = 0.92 + 0.08 * t;
                                            opacity = 0.6 + 0.4 * t;
                                            zIndex = n;
                                        } else if (p > segEnd) {
                                            const t = Math.min(1, (p - segEnd) / segment);
                                            scale = 1 - 0.08 * t;
                                            opacity = 1 - 0.4 * t;
                                            zIndex = n;
                                        }
                                        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(card, {
                                            scale,
                                            opacity,
                                            zIndex
                                        });
                                    }
                                }["Protocol.useEffect.ctx"]);
                            }
                        }["Protocol.useEffect.ctx"]
                    });
                }
            }["Protocol.useEffect.ctx"], containerRef);
            return ({
                "Protocol.useEffect": ()=>ctx.revert()
            })["Protocol.useEffect"];
        }
    }["Protocol.useEffect"], [
        list.length,
        totalVh
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "protocol",
        className: "relative bg-primary/95",
        "aria-label": "Protocol",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative",
            ref: containerRef,
            style: {
                height: "".concat(totalVh, "vh")
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sticky top-0 h-screen w-full flex items-center justify-center",
                children: list.map((step, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: (el)=>{
                            if (el) cardsRef.current[i] = el;
                        },
                        className: "absolute inset-4 sm:inset-6 flex items-center justify-center rounded-[3rem] overflow-hidden border border-ghost/10 mx-4 sm:mx-6",
                        style: {
                            zIndex: i,
                            backgroundColor: "var(--color-background)"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 px-6 w-full max-w-4xl",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col items-center justify-center shrink-0 order-2 sm:order-1",
                                    children: [
                                        step.animation_type === "geometric" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GeometricMotif, {}, void 0, false, {
                                            fileName: "[project]/Desktop/novara/components/Protocol.tsx",
                                            lineNumber: 185,
                                            columnNumber: 59
                                        }, this),
                                        step.animation_type === "scanline" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative w-40 h-24",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ScanlineGrid, {}, void 0, false, {
                                                fileName: "[project]/Desktop/novara/components/Protocol.tsx",
                                                lineNumber: 188,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/novara/components/Protocol.tsx",
                                            lineNumber: 187,
                                            columnNumber: 21
                                        }, this),
                                        step.animation_type === "waveform" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-48",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WaveformEKG, {}, void 0, false, {
                                                fileName: "[project]/Desktop/novara/components/Protocol.tsx",
                                                lineNumber: 193,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/novara/components/Protocol.tsx",
                                            lineNumber: 192,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-mono text-accent text-sm mt-3",
                                            children: [
                                                "Step ",
                                                step.step_number
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/novara/components/Protocol.tsx",
                                            lineNumber: 196,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-sans font-bold text-primary text-xl sm:text-2xl mt-1",
                                            children: step.title
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/novara/components/Protocol.tsx",
                                            lineNumber: 199,
                                            columnNumber: 19
                                        }, this),
                                        step.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-graphite/80 text-center text-sm max-w-xs mt-1",
                                            children: step.description
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/novara/components/Protocol.tsx",
                                            lineNumber: 203,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/novara/components/Protocol.tsx",
                                    lineNumber: 184,
                                    columnNumber: 17
                                }, this),
                                (step.image_url || DEFAULT_STEP_IMAGES[i]) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative w-full max-w-sm aspect-[4/3] rounded-2xl overflow-hidden bg-primary/5 shrink-0 order-1 sm:order-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: step.image_url || DEFAULT_STEP_IMAGES[i],
                                        alt: "",
                                        className: "w-full h-full object-cover"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/novara/components/Protocol.tsx",
                                        lineNumber: 210,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/novara/components/Protocol.tsx",
                                    lineNumber: 209,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/novara/components/Protocol.tsx",
                            lineNumber: 183,
                            columnNumber: 15
                        }, this)
                    }, step.id, false, {
                        fileName: "[project]/Desktop/novara/components/Protocol.tsx",
                        lineNumber: 174,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Desktop/novara/components/Protocol.tsx",
                lineNumber: 172,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/novara/components/Protocol.tsx",
            lineNumber: 167,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/novara/components/Protocol.tsx",
        lineNumber: 166,
        columnNumber: 5
    }, this);
}
_s3(Protocol, "rhzAA3Iw8PLm03T+VcnqrqbNYLA=");
_c3 = Protocol;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "GeometricMotif");
__turbopack_context__.k.register(_c1, "ScanlineGrid");
__turbopack_context__.k.register(_c2, "WaveformEKG");
__turbopack_context__.k.register(_c3, "Protocol");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/novara/components/Pricing.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Pricing",
    ()=>Pricing
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/novara/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/novara/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/novara/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/novara/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/novara/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/Desktop/novara/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
function Pricing(param) {
    let { tiers, ctaText } = param;
    _s();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const cardRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Pricing.useEffect": ()=>{
            if (!sectionRef.current) return;
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context({
                "Pricing.useEffect.ctx": ()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(cardRefs.current.filter(Boolean), {
                        y: 50,
                        opacity: 0
                    }, {
                        y: 0,
                        opacity: 1,
                        duration: 0.6,
                        stagger: 0.1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: "top 75%",
                            toggleActions: "play none none none"
                        }
                    });
                }
            }["Pricing.useEffect.ctx"], sectionRef);
            return ({
                "Pricing.useEffect": ()=>ctx.revert()
            })["Pricing.useEffect"];
        }
    }["Pricing.useEffect"], [
        tiers.length
    ]);
    const sorted = [
        ...tiers
    ].sort((a, b)=>a.order_index - b.order_index);
    const list = sorted.length ? sorted : [
        {
            id: "1",
            name: "Essential",
            description: "Core interface toolkit.",
            price_display: "Custom",
            features_list: [
                "Up to 3 projects",
                "Basic support"
            ],
            is_highlighted: false,
            cta_text: "Get Started",
            order_index: 0,
            is_published: true,
            created_at: "",
            updated_at: ""
        },
        {
            id: "2",
            name: "Performance",
            description: "Full precision stack.",
            price_display: "Custom",
            features_list: [
                "Unlimited projects",
                "Priority support",
                "CMS integration"
            ],
            is_highlighted: true,
            cta_text: ctaText,
            order_index: 1,
            is_published: true,
            created_at: "",
            updated_at: ""
        },
        {
            id: "3",
            name: "Enterprise",
            description: "Dedicated architecture.",
            price_display: "Custom",
            features_list: [
                "Everything in Performance",
                "SLA guarantee"
            ],
            is_highlighted: false,
            cta_text: "Contact Sales",
            order_index: 2,
            is_published: true,
            created_at: "",
            updated_at: ""
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "pricing",
        ref: sectionRef,
        className: "py-24 px-6 sm:px-10 max-w-5xl mx-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "font-sans font-bold text-primary text-2xl sm:text-3xl tracking-tight mb-12 text-center",
                children: "Get started"
            }, void 0, false, {
                fileName: "[project]/Desktop/novara/components/Pricing.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid md:grid-cols-3 gap-6",
                children: list.map((tier, i)=>{
                    var _tier_cta_text;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: (el)=>{
                            cardRefs.current[i] = el;
                        },
                        className: "rounded-[2rem] p-6 border shadow-lg flex flex-col ".concat(tier.is_highlighted ? "bg-primary text-ghost border-accent ring-2 ring-accent/50 scale-105 md:scale-105" : "bg-background border-primary/10 text-primary"),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-sans font-bold text-lg",
                                children: tier.name
                            }, void 0, false, {
                                fileName: "[project]/Desktop/novara/components/Pricing.tsx",
                                lineNumber: 72,
                                columnNumber: 13
                            }, this),
                            tier.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm mt-1 ".concat(tier.is_highlighted ? "text-ghost/80" : "text-graphite/80"),
                                children: tier.description
                            }, void 0, false, {
                                fileName: "[project]/Desktop/novara/components/Pricing.tsx",
                                lineNumber: 74,
                                columnNumber: 15
                            }, this),
                            tier.price_display && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-mono text-accent mt-4",
                                children: tier.price_display
                            }, void 0, false, {
                                fileName: "[project]/Desktop/novara/components/Pricing.tsx",
                                lineNumber: 79,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "mt-4 space-y-2 flex-1",
                                children: (tier.features_list || []).map((f, j)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "flex items-center gap-2 text-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                className: "w-4 h-4 text-accent shrink-0"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/novara/components/Pricing.tsx",
                                                lineNumber: 84,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: f
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/novara/components/Pricing.tsx",
                                                lineNumber: 85,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, j, true, {
                                        fileName: "[project]/Desktop/novara/components/Pricing.tsx",
                                        lineNumber: 83,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/novara/components/Pricing.tsx",
                                lineNumber: 81,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "#pricing",
                                className: "mt-6 py-3 rounded-full text-center font-medium text-sm btn-magnetic overflow-hidden relative group ".concat(tier.is_highlighted ? "bg-accent text-white" : "bg-primary/10 text-primary hover:bg-primary hover:text-ghost"),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/novara/components/Pricing.tsx",
                                        lineNumber: 97,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "relative",
                                        children: (_tier_cta_text = tier.cta_text) !== null && _tier_cta_text !== void 0 ? _tier_cta_text : "Get Started"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/novara/components/Pricing.tsx",
                                        lineNumber: 98,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/novara/components/Pricing.tsx",
                                lineNumber: 89,
                                columnNumber: 13
                            }, this)
                        ]
                    }, tier.id, true, {
                        fileName: "[project]/Desktop/novara/components/Pricing.tsx",
                        lineNumber: 63,
                        columnNumber: 11
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/Desktop/novara/components/Pricing.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/novara/components/Pricing.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_s(Pricing, "lXUUkKP5LkYl7/4pW16d842yKHs=");
_c = Pricing;
var _c;
__turbopack_context__.k.register(_c, "Pricing");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/novara/components/Footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Footer",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/novara/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/novara/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
"use client";
;
;
function Footer(param) {
    let { settings, navLinks } = param;
    var _settings_brand_name;
    const brandName = (_settings_brand_name = settings === null || settings === void 0 ? void 0 : settings.brand_name) !== null && _settings_brand_name !== void 0 ? _settings_brand_name : "Novara";
    var _settings_tagline;
    const tagline = (_settings_tagline = settings === null || settings === void 0 ? void 0 : settings.tagline) !== null && _settings_tagline !== void 0 ? _settings_tagline : "Precision digital interface.";
    var _settings_footer_legal_links;
    const legalLinks = (_settings_footer_legal_links = settings === null || settings === void 0 ? void 0 : settings.footer_legal_links) !== null && _settings_footer_legal_links !== void 0 ? _settings_footer_legal_links : [];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "bg-primary text-ghost rounded-t-[4rem] mt-24",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto px-6 sm:px-10 py-16",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-sans font-bold text-lg tracking-tight",
                                    children: brandName
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/novara/components/Footer.tsx",
                                    lineNumber: 22,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-ghost/70 text-sm mt-1 max-w-xs",
                                    children: tagline
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/novara/components/Footer.tsx",
                                    lineNumber: 23,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4 flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "w-2 h-2 rounded-full bg-emerald-500 animate-pulse",
                                            "aria-hidden": true
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/novara/components/Footer.tsx",
                                            lineNumber: 25,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-mono text-xs text-ghost/80",
                                            children: "System Operational"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/novara/components/Footer.tsx",
                                            lineNumber: 26,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/novara/components/Footer.tsx",
                                    lineNumber: 24,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/novara/components/Footer.tsx",
                            lineNumber: 21,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-mono text-xs text-accent uppercase tracking-wider mb-3",
                                    children: "Navigate"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/novara/components/Footer.tsx",
                                    lineNumber: 30,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-2",
                                    children: navLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: link.href,
                                                className: "text-sm link-lift opacity-90 hover:opacity-100",
                                                children: link.label
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/novara/components/Footer.tsx",
                                                lineNumber: 34,
                                                columnNumber: 19
                                            }, this)
                                        }, link.id, false, {
                                            fileName: "[project]/Desktop/novara/components/Footer.tsx",
                                            lineNumber: 33,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/novara/components/Footer.tsx",
                                    lineNumber: 31,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/novara/components/Footer.tsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-mono text-xs text-accent uppercase tracking-wider mb-3",
                                    children: "Legal"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/novara/components/Footer.tsx",
                                    lineNumber: 42,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-2",
                                    children: legalLinks.length ? legalLinks.map((l, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: l.href,
                                                className: "text-sm link-lift opacity-90 hover:opacity-100",
                                                children: l.label
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/novara/components/Footer.tsx",
                                                lineNumber: 46,
                                                columnNumber: 19
                                            }, this)
                                        }, i, false, {
                                            fileName: "[project]/Desktop/novara/components/Footer.tsx",
                                            lineNumber: 45,
                                            columnNumber: 17
                                        }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "#",
                                                    className: "text-sm link-lift opacity-90",
                                                    children: "Privacy"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/novara/components/Footer.tsx",
                                                    lineNumber: 52,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/novara/components/Footer.tsx",
                                                lineNumber: 52,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "#",
                                                    className: "text-sm link-lift opacity-90",
                                                    children: "Terms"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/novara/components/Footer.tsx",
                                                    lineNumber: 53,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/novara/components/Footer.tsx",
                                                lineNumber: 53,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/novara/components/Footer.tsx",
                                    lineNumber: 43,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/novara/components/Footer.tsx",
                            lineNumber: 41,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/novara/components/Footer.tsx",
                    lineNumber: 20,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-ghost/50 text-xs font-mono mt-12 pt-8 border-t border-ghost/10",
                    children: [
                        "© ",
                        new Date().getFullYear(),
                        " ",
                        brandName,
                        ". All rights reserved."
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/novara/components/Footer.tsx",
                    lineNumber: 59,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/novara/components/Footer.tsx",
            lineNumber: 19,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/novara/components/Footer.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_novara_components_ce6fdcce._.js.map