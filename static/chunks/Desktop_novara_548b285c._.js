(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/novara/lib/supabase/client.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createClient",
    ()=>createClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/novara/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/novara/node_modules/@supabase/ssr/dist/module/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createBrowserClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/novara/node_modules/@supabase/ssr/dist/module/createBrowserClient.js [app-client] (ecmascript)");
;
function createClient() {
    const url = ("TURBOPACK compile-time value", "https://dwxclqbkckzrcjmhpsqm.supabase.co");
    const anon = ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR3eGNscWJrY2t6cmNqbWhwc3FtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE3NzE5NTgsImV4cCI6MjA4NzM0Nzk1OH0.2Z63aod2rw1BCed8bt4XYKEVc39a3WiOHY11TxaWrEU");
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createBrowserClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createBrowserClient"])(url, anon);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/novara/app/admin/(main)/settings/SettingsForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SettingsForm",
    ()=>SettingsForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/novara/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/novara/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/novara/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/novara/lib/supabase/client.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function SettingsForm(param) {
    let { settings } = param;
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [saving, setSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    var _settings_brand_name, _settings_tagline, _settings_cta_text, _settings_hero_line_1, _settings_hero_line_2, _settings_hero_background_image_url, _settings_philosophy_common, _settings_philosophy_differentiated, _settings_philosophy_keyword, _settings_footer_legal_links;
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        brand_name: (_settings_brand_name = settings === null || settings === void 0 ? void 0 : settings.brand_name) !== null && _settings_brand_name !== void 0 ? _settings_brand_name : "",
        tagline: (_settings_tagline = settings === null || settings === void 0 ? void 0 : settings.tagline) !== null && _settings_tagline !== void 0 ? _settings_tagline : "",
        cta_text: (_settings_cta_text = settings === null || settings === void 0 ? void 0 : settings.cta_text) !== null && _settings_cta_text !== void 0 ? _settings_cta_text : "",
        hero_line_1: (_settings_hero_line_1 = settings === null || settings === void 0 ? void 0 : settings.hero_line_1) !== null && _settings_hero_line_1 !== void 0 ? _settings_hero_line_1 : "",
        hero_line_2: (_settings_hero_line_2 = settings === null || settings === void 0 ? void 0 : settings.hero_line_2) !== null && _settings_hero_line_2 !== void 0 ? _settings_hero_line_2 : "",
        hero_background_image_url: (_settings_hero_background_image_url = settings === null || settings === void 0 ? void 0 : settings.hero_background_image_url) !== null && _settings_hero_background_image_url !== void 0 ? _settings_hero_background_image_url : "",
        philosophy_common: (_settings_philosophy_common = settings === null || settings === void 0 ? void 0 : settings.philosophy_common) !== null && _settings_philosophy_common !== void 0 ? _settings_philosophy_common : "",
        philosophy_differentiated: (_settings_philosophy_differentiated = settings === null || settings === void 0 ? void 0 : settings.philosophy_differentiated) !== null && _settings_philosophy_differentiated !== void 0 ? _settings_philosophy_differentiated : "",
        philosophy_keyword: (_settings_philosophy_keyword = settings === null || settings === void 0 ? void 0 : settings.philosophy_keyword) !== null && _settings_philosophy_keyword !== void 0 ? _settings_philosophy_keyword : "",
        footer_legal_links: JSON.stringify((_settings_footer_legal_links = settings === null || settings === void 0 ? void 0 : settings.footer_legal_links) !== null && _settings_footer_legal_links !== void 0 ? _settings_footer_legal_links : [], null, 2)
    });
    async function handleSubmit(e) {
        e.preventDefault();
        setSaving(true);
        const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClient"])();
        if (!supabase) {
            setSaving(false);
            return;
        }
        let parsed = [];
        try {
            parsed = JSON.parse(form.footer_legal_links);
        } catch (e) {
            parsed = [];
        }
        if (settings === null || settings === void 0 ? void 0 : settings.id) {
            await supabase.from("site_settings").update({
                brand_name: form.brand_name,
                tagline: form.tagline || null,
                cta_text: form.cta_text,
                hero_line_1: form.hero_line_1 || null,
                hero_line_2: form.hero_line_2 || null,
                hero_background_image_url: form.hero_background_image_url || null,
                philosophy_common: form.philosophy_common || null,
                philosophy_differentiated: form.philosophy_differentiated || null,
                philosophy_keyword: form.philosophy_keyword || null,
                footer_legal_links: parsed
            }).eq("id", settings.id);
        } else {
            await supabase.from("site_settings").insert({
                brand_name: form.brand_name,
                tagline: form.tagline || null,
                cta_text: form.cta_text,
                hero_line_1: form.hero_line_1 || null,
                hero_line_2: form.hero_line_2 || null,
                hero_background_image_url: form.hero_background_image_url || null,
                philosophy_common: form.philosophy_common || null,
                philosophy_differentiated: form.philosophy_differentiated || null,
                philosophy_keyword: form.philosophy_keyword || null,
                footer_legal_links: parsed
            });
        }
        setSaving(false);
        router.refresh();
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: handleSubmit,
        className: "space-y-6 max-w-2xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-sm text-ghost/70 mb-1",
                        children: "Brand name"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/novara/app/admin/(main)/settings/SettingsForm.tsx",
                        lineNumber: 86,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        value: form.brand_name,
                        onChange: (e)=>setForm((f)=>({
                                    ...f,
                                    brand_name: e.target.value
                                })),
                        className: "w-full px-4 py-2 rounded-lg bg-primary border border-ghost/20 text-ghost"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/novara/app/admin/(main)/settings/SettingsForm.tsx",
                        lineNumber: 87,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/novara/app/admin/(main)/settings/SettingsForm.tsx",
                lineNumber: 85,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-sm text-ghost/70 mb-1",
                        children: "Tagline"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/novara/app/admin/(main)/settings/SettingsForm.tsx",
                        lineNumber: 94,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        value: form.tagline,
                        onChange: (e)=>setForm((f)=>({
                                    ...f,
                                    tagline: e.target.value
                                })),
                        className: "w-full px-4 py-2 rounded-lg bg-primary border border-ghost/20 text-ghost"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/novara/app/admin/(main)/settings/SettingsForm.tsx",
                        lineNumber: 95,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/novara/app/admin/(main)/settings/SettingsForm.tsx",
                lineNumber: 93,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-sm text-ghost/70 mb-1",
                        children: "CTA text"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/novara/app/admin/(main)/settings/SettingsForm.tsx",
                        lineNumber: 102,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        value: form.cta_text,
                        onChange: (e)=>setForm((f)=>({
                                    ...f,
                                    cta_text: e.target.value
                                })),
                        className: "w-full px-4 py-2 rounded-lg bg-primary border border-ghost/20 text-ghost"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/novara/app/admin/(main)/settings/SettingsForm.tsx",
                        lineNumber: 103,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/novara/app/admin/(main)/settings/SettingsForm.tsx",
                lineNumber: 101,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-sm text-ghost/70 mb-1",
                        children: "Hero line 1"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/novara/app/admin/(main)/settings/SettingsForm.tsx",
                        lineNumber: 110,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        value: form.hero_line_1,
                        onChange: (e)=>setForm((f)=>({
                                    ...f,
                                    hero_line_1: e.target.value
                                })),
                        className: "w-full px-4 py-2 rounded-lg bg-primary border border-ghost/20 text-ghost"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/novara/app/admin/(main)/settings/SettingsForm.tsx",
                        lineNumber: 111,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/novara/app/admin/(main)/settings/SettingsForm.tsx",
                lineNumber: 109,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-sm text-ghost/70 mb-1",
                        children: "Hero line 2"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/novara/app/admin/(main)/settings/SettingsForm.tsx",
                        lineNumber: 118,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        value: form.hero_line_2,
                        onChange: (e)=>setForm((f)=>({
                                    ...f,
                                    hero_line_2: e.target.value
                                })),
                        className: "w-full px-4 py-2 rounded-lg bg-primary border border-ghost/20 text-ghost"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/novara/app/admin/(main)/settings/SettingsForm.tsx",
                        lineNumber: 119,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/novara/app/admin/(main)/settings/SettingsForm.tsx",
                lineNumber: 117,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-sm text-ghost/70 mb-1",
                        children: "Hero background image URL"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/novara/app/admin/(main)/settings/SettingsForm.tsx",
                        lineNumber: 126,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        value: form.hero_background_image_url,
                        onChange: (e)=>setForm((f)=>({
                                    ...f,
                                    hero_background_image_url: e.target.value
                                })),
                        className: "w-full px-4 py-2 rounded-lg bg-primary border border-ghost/20 text-ghost"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/novara/app/admin/(main)/settings/SettingsForm.tsx",
                        lineNumber: 127,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/novara/app/admin/(main)/settings/SettingsForm.tsx",
                lineNumber: 125,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-sm text-ghost/70 mb-1",
                        children: "Philosophy common"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/novara/app/admin/(main)/settings/SettingsForm.tsx",
                        lineNumber: 134,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        value: form.philosophy_common,
                        onChange: (e)=>setForm((f)=>({
                                    ...f,
                                    philosophy_common: e.target.value
                                })),
                        className: "w-full px-4 py-2 rounded-lg bg-primary border border-ghost/20 text-ghost"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/novara/app/admin/(main)/settings/SettingsForm.tsx",
                        lineNumber: 135,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/novara/app/admin/(main)/settings/SettingsForm.tsx",
                lineNumber: 133,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-sm text-ghost/70 mb-1",
                        children: "Philosophy differentiated"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/novara/app/admin/(main)/settings/SettingsForm.tsx",
                        lineNumber: 142,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        value: form.philosophy_differentiated,
                        onChange: (e)=>setForm((f)=>({
                                    ...f,
                                    philosophy_differentiated: e.target.value
                                })),
                        className: "w-full px-4 py-2 rounded-lg bg-primary border border-ghost/20 text-ghost"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/novara/app/admin/(main)/settings/SettingsForm.tsx",
                        lineNumber: 143,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/novara/app/admin/(main)/settings/SettingsForm.tsx",
                lineNumber: 141,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-sm text-ghost/70 mb-1",
                        children: "Philosophy keyword (accent)"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/novara/app/admin/(main)/settings/SettingsForm.tsx",
                        lineNumber: 150,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        value: form.philosophy_keyword,
                        onChange: (e)=>setForm((f)=>({
                                    ...f,
                                    philosophy_keyword: e.target.value
                                })),
                        className: "w-full px-4 py-2 rounded-lg bg-primary border border-ghost/20 text-ghost"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/novara/app/admin/(main)/settings/SettingsForm.tsx",
                        lineNumber: 151,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/novara/app/admin/(main)/settings/SettingsForm.tsx",
                lineNumber: 149,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-sm text-ghost/70 mb-1",
                        children: "Footer legal links (JSON)"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/novara/app/admin/(main)/settings/SettingsForm.tsx",
                        lineNumber: 158,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        value: form.footer_legal_links,
                        onChange: (e)=>setForm((f)=>({
                                    ...f,
                                    footer_legal_links: e.target.value
                                })),
                        rows: 4,
                        className: "w-full px-4 py-2 rounded-lg bg-primary border border-ghost/20 text-ghost font-mono text-sm"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/novara/app/admin/(main)/settings/SettingsForm.tsx",
                        lineNumber: 159,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/novara/app/admin/(main)/settings/SettingsForm.tsx",
                lineNumber: 157,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "submit",
                disabled: saving,
                className: "px-4 py-2 rounded-lg bg-accent text-white font-medium disabled:opacity-50",
                children: saving ? "Saving…" : "Save"
            }, void 0, false, {
                fileName: "[project]/Desktop/novara/app/admin/(main)/settings/SettingsForm.tsx",
                lineNumber: 166,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/novara/app/admin/(main)/settings/SettingsForm.tsx",
        lineNumber: 84,
        columnNumber: 5
    }, this);
}
_s(SettingsForm, "Y0aA1PODhSkPHoJpfECHQuNRB9I=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = SettingsForm;
var _c;
__turbopack_context__.k.register(_c, "SettingsForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_novara_548b285c._.js.map