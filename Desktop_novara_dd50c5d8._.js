module.exports = [
"[project]/Desktop/novara/lib/supabase/client.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createClient",
    ()=>createClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/novara/node_modules/@supabase/ssr/dist/module/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createBrowserClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/novara/node_modules/@supabase/ssr/dist/module/createBrowserClient.js [app-ssr] (ecmascript)");
;
function createClient() {
    const url = ("TURBOPACK compile-time value", "https://dwxclqbkckzrcjmhpsqm.supabase.co");
    const anon = ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR3eGNscWJrY2t6cmNqbWhwc3FtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE3NzE5NTgsImV4cCI6MjA4NzM0Nzk1OH0.2Z63aod2rw1BCed8bt4XYKEVc39a3WiOHY11TxaWrEU");
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createBrowserClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createBrowserClient"])(url, anon);
}
}),
"[project]/Desktop/novara/app/admin/(main)/features/FeaturesEditor.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FeaturesEditor",
    ()=>FeaturesEditor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/novara/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/novara/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/novara/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/novara/lib/supabase/client.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__ = __turbopack_context__.i("[project]/Desktop/novara/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-ssr] (ecmascript) <export default as ChevronUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/Desktop/novara/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__ = __turbopack_context__.i("[project]/Desktop/novara/node_modules/lucide-react/dist/esm/icons/pencil.js [app-ssr] (ecmascript) <export default as Pencil>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/Desktop/novara/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-ssr] (ecmascript) <export default as Trash2>");
"use client";
;
;
;
;
;
function FeaturesEditor({ items: initial }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [items, setItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initial);
    const [editing, setEditing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        title: "",
        description: "",
        card_type: "shuffler",
        sub_labels: "[]",
        typewriter_messages: "[]",
        scheduler_label: ""
    });
    const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createClient"])();
    if (!supabase) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: "text-red-400",
        children: "Supabase not configured."
    }, void 0, false, {
        fileName: "[project]/Desktop/novara/app/admin/(main)/features/FeaturesEditor.tsx",
        lineNumber: 34,
        columnNumber: 25
    }, this);
    function openEdit(item) {
        setEditing(item.id);
        setForm({
            title: item.title,
            description: item.description ?? "",
            card_type: item.card_type,
            sub_labels: JSON.stringify(item.sub_labels ?? [], null, 2),
            typewriter_messages: JSON.stringify(item.typewriter_messages ?? [], null, 2),
            scheduler_label: item.scheduler_label ?? ""
        });
    }
    async function saveEdit() {
        if (!editing) return;
        let sub = [];
        let msg = [];
        try {
            sub = JSON.parse(form.sub_labels);
        } catch  {}
        try {
            msg = JSON.parse(form.typewriter_messages);
        } catch  {}
        await supabase.from("features").update({
            title: form.title,
            description: form.description || null,
            card_type: form.card_type,
            sub_labels: sub,
            typewriter_messages: msg,
            scheduler_label: form.scheduler_label || null
        }).eq("id", editing);
        setItems((prev)=>prev.map((p)=>p.id === editing ? {
                    ...p,
                    ...form,
                    sub_labels: sub,
                    typewriter_messages: msg
                } : p));
        setEditing(null);
        router.refresh();
    }
    async function move(id, dir) {
        const idx = items.findIndex((i)=>i.id === id);
        if (idx === -1 || dir < 0 && idx === 0 || dir > 0 && idx === items.length - 1) return;
        const newOrder = [
            ...items
        ];
        const otherIdx = idx + dir;
        [newOrder[idx], newOrder[otherIdx]] = [
            newOrder[otherIdx],
            newOrder[idx]
        ];
        for(let o = 0; o < newOrder.length; o++){
            await supabase.from("features").update({
                order_index: o
            }).eq("id", newOrder[o].id);
        }
        setItems(newOrder.map((i, o)=>({
                ...i,
                order_index: o
            })));
        router.refresh();
    }
    async function remove(id) {
        if (!confirm("Delete this feature?")) return;
        await supabase.from("features").delete().eq("id", id);
        setItems((prev)=>prev.filter((i)=>i.id !== id));
        router.refresh();
    }
    async function addNew() {
        const maxOrder = items.length ? Math.max(...items.map((i)=>i.order_index)) + 1 : 0;
        const { data } = await supabase.from("features").insert({
            title: "New Feature",
            description: "",
            card_type: "shuffler",
            order_index: maxOrder,
            sub_labels: [],
            typewriter_messages: [],
            scheduler_label: null
        }).select().single();
        if (data) {
            setItems((prev)=>[
                    ...prev,
                    data
                ]);
            setEditing(data.id);
            setForm({
                title: data.title,
                description: "",
                card_type: "shuffler",
                sub_labels: "[]",
                typewriter_messages: "[]",
                scheduler_label: ""
            });
            router.refresh();
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: addNew,
                className: "px-4 py-2 rounded-lg bg-accent text-white text-sm font-medium",
                children: "Add feature"
            }, void 0, false, {
                fileName: "[project]/Desktop/novara/app/admin/(main)/features/FeaturesEditor.tsx",
                lineNumber: 119,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "space-y-2",
                children: items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "p-4 rounded-xl bg-primary/50 border border-ghost/10",
                        children: editing === item.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    value: form.title,
                                    onChange: (e)=>setForm((f)=>({
                                                ...f,
                                                title: e.target.value
                                            })),
                                    className: "w-full px-3 py-2 rounded-lg bg-graphite text-ghost",
                                    placeholder: "Title"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/novara/app/admin/(main)/features/FeaturesEditor.tsx",
                                    lineNumber: 125,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    value: form.description,
                                    onChange: (e)=>setForm((f)=>({
                                                ...f,
                                                description: e.target.value
                                            })),
                                    className: "w-full px-3 py-2 rounded-lg bg-graphite text-ghost",
                                    placeholder: "Description"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/novara/app/admin/(main)/features/FeaturesEditor.tsx",
                                    lineNumber: 131,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    value: form.card_type,
                                    onChange: (e)=>setForm((f)=>({
                                                ...f,
                                                card_type: e.target.value
                                            })),
                                    className: "px-3 py-2 rounded-lg bg-graphite text-ghost",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "shuffler",
                                            children: "Shuffler"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/novara/app/admin/(main)/features/FeaturesEditor.tsx",
                                            lineNumber: 142,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "typewriter",
                                            children: "Typewriter"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/novara/app/admin/(main)/features/FeaturesEditor.tsx",
                                            lineNumber: 143,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "scheduler",
                                            children: "Scheduler"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/novara/app/admin/(main)/features/FeaturesEditor.tsx",
                                            lineNumber: 144,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/novara/app/admin/(main)/features/FeaturesEditor.tsx",
                                    lineNumber: 137,
                                    columnNumber: 17
                                }, this),
                                form.card_type === "shuffler" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    value: form.sub_labels,
                                    onChange: (e)=>setForm((f)=>({
                                                ...f,
                                                sub_labels: e.target.value
                                            })),
                                    rows: 3,
                                    className: "w-full px-3 py-2 rounded-lg bg-graphite text-ghost font-mono text-sm",
                                    placeholder: '["A","B","C"]'
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/novara/app/admin/(main)/features/FeaturesEditor.tsx",
                                    lineNumber: 147,
                                    columnNumber: 19
                                }, this),
                                form.card_type === "typewriter" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    value: form.typewriter_messages,
                                    onChange: (e)=>setForm((f)=>({
                                                ...f,
                                                typewriter_messages: e.target.value
                                            })),
                                    rows: 3,
                                    className: "w-full px-3 py-2 rounded-lg bg-graphite text-ghost font-mono text-sm",
                                    placeholder: '["msg1","msg2"]'
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/novara/app/admin/(main)/features/FeaturesEditor.tsx",
                                    lineNumber: 150,
                                    columnNumber: 19
                                }, this),
                                form.card_type === "scheduler" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    value: form.scheduler_label,
                                    onChange: (e)=>setForm((f)=>({
                                                ...f,
                                                scheduler_label: e.target.value
                                            })),
                                    className: "w-full px-3 py-2 rounded-lg bg-graphite text-ghost",
                                    placeholder: "Scheduler label"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/novara/app/admin/(main)/features/FeaturesEditor.tsx",
                                    lineNumber: 153,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: saveEdit,
                                            className: "px-3 py-1 rounded bg-accent text-white text-sm",
                                            children: "Save"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/novara/app/admin/(main)/features/FeaturesEditor.tsx",
                                            lineNumber: 156,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setEditing(null),
                                            className: "px-3 py-1 rounded bg-ghost/20 text-ghost text-sm",
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/novara/app/admin/(main)/features/FeaturesEditor.tsx",
                                            lineNumber: 157,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/novara/app/admin/(main)/features/FeaturesEditor.tsx",
                                    lineNumber: 155,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/novara/app/admin/(main)/features/FeaturesEditor.tsx",
                            lineNumber: 124,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>move(item.id, -1),
                                    className: "p-1 text-ghost/70 hover:text-ghost",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
                                        size: 18
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/novara/app/admin/(main)/features/FeaturesEditor.tsx",
                                        lineNumber: 162,
                                        columnNumber: 120
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/novara/app/admin/(main)/features/FeaturesEditor.tsx",
                                    lineNumber: 162,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>move(item.id, 1),
                                    className: "p-1 text-ghost/70 hover:text-ghost",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                        size: 18
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/novara/app/admin/(main)/features/FeaturesEditor.tsx",
                                        lineNumber: 163,
                                        columnNumber: 119
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/novara/app/admin/(main)/features/FeaturesEditor.tsx",
                                    lineNumber: 163,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "flex-1 font-medium text-ghost",
                                    children: item.title
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/novara/app/admin/(main)/features/FeaturesEditor.tsx",
                                    lineNumber: 164,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-ghost/60 text-sm",
                                    children: item.card_type
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/novara/app/admin/(main)/features/FeaturesEditor.tsx",
                                    lineNumber: 165,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>openEdit(item),
                                    className: "p-1 text-ghost/70 hover:text-ghost",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__["Pencil"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/novara/app/admin/(main)/features/FeaturesEditor.tsx",
                                        lineNumber: 166,
                                        columnNumber: 117
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/novara/app/admin/(main)/features/FeaturesEditor.tsx",
                                    lineNumber: 166,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>remove(item.id),
                                    className: "p-1 text-red-400 hover:text-red-300",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$novara$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/novara/app/admin/(main)/features/FeaturesEditor.tsx",
                                        lineNumber: 167,
                                        columnNumber: 119
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/novara/app/admin/(main)/features/FeaturesEditor.tsx",
                                    lineNumber: 167,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/novara/app/admin/(main)/features/FeaturesEditor.tsx",
                            lineNumber: 161,
                            columnNumber: 15
                        }, this)
                    }, item.id, false, {
                        fileName: "[project]/Desktop/novara/app/admin/(main)/features/FeaturesEditor.tsx",
                        lineNumber: 122,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Desktop/novara/app/admin/(main)/features/FeaturesEditor.tsx",
                lineNumber: 120,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/novara/app/admin/(main)/features/FeaturesEditor.tsx",
        lineNumber: 118,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=Desktop_novara_dd50c5d8._.js.map