(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/app/music_cont/components/searchBar/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const SearchBar = ({ className = '', readonly = false, inputMode = "text", value, onChange1, onChange2, onClick, placeholderText })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        className: `${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                htmlFor: "default-search",
                className: "mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white",
                children: "Search"
            }, void 0, false, {
                fileName: "[project]/src/app/music_cont/components/searchBar/index.tsx",
                lineNumber: 15,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "w-4 h-4 text-gray-500 dark:text-gray-400",
                            "aria-hidden": "true",
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "none",
                            viewBox: "0 0 20 20",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                stroke: "currentColor",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: "2",
                                d: "m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                            }, void 0, false, {
                                fileName: "[project]/src/app/music_cont/components/searchBar/index.tsx",
                                lineNumber: 19,
                                columnNumber: 7
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/music_cont/components/searchBar/index.tsx",
                            lineNumber: 18,
                            columnNumber: 6
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/music_cont/components/searchBar/index.tsx",
                        lineNumber: 17,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        readOnly: readonly,
                        inputMode: inputMode,
                        id: "default-search",
                        className: "text-base block w-full p-4 ps-10 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
                        placeholder: placeholderText ?? "Suggest a Song Here!",
                        value: value,
                        onChange: (e)=>{
                            onChange1(e.target.value);
                            if (onChange2) {
                                onChange2(e.target.value);
                            }
                        },
                        onClick: onClick,
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/src/app/music_cont/components/searchBar/index.tsx",
                        lineNumber: 22,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/music_cont/components/searchBar/index.tsx",
                lineNumber: 16,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/music_cont/components/searchBar/index.tsx",
        lineNumber: 14,
        columnNumber: 3
    }, this);
};
_c = SearchBar;
const __TURBOPACK__default__export__ = SearchBar;
var _c;
__turbopack_context__.k.register(_c, "SearchBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/music_cont/components/songButton/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
;
;
;
function SongButton({ className = '', song_name, song_url, album_cover, artists_data }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `flex items-center gap-4 ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-[50px] h-[50px] md:w-[100px] md:h-[100px] shrink-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: album_cover[1].url,
                    alt: "album logo",
                    fill: true,
                    className: "object-cover rounded"
                }, void 0, false, {
                    fileName: "[project]/src/app/music_cont/components/songButton/index.tsx",
                    lineNumber: 15,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/music_cont/components/songButton/index.tsx",
                lineNumber: 14,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-64",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: song_url,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "md:text-xl",
                                children: song_name
                            }, void 0, false, {
                                fileName: "[project]/src/app/music_cont/components/songButton/index.tsx",
                                lineNumber: 26,
                                columnNumber: 9
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/music_cont/components/songButton/index.tsx",
                            lineNumber: 26,
                            columnNumber: 6
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/music_cont/components/songButton/index.tsx",
                        lineNumber: 25,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-row flex-wrap space-x-1",
                        children: artists_data ? artists_data.map(({ external_urls, name }, index)=>index === artists_data.length - 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: external_urls.spotify,
                                target: "_blank",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                    children: name
                                }, void 0, false, {
                                    fileName: "[project]/src/app/music_cont/components/songButton/index.tsx",
                                    lineNumber: 29,
                                    columnNumber: 173
                                }, this)
                            }, name, false, {
                                fileName: "[project]/src/app/music_cont/components/songButton/index.tsx",
                                lineNumber: 29,
                                columnNumber: 114
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: external_urls.spotify,
                                target: "_blank",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                    children: [
                                        name,
                                        ","
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/music_cont/components/songButton/index.tsx",
                                    lineNumber: 29,
                                    columnNumber: 254
                                }, this)
                            }, name, false, {
                                fileName: "[project]/src/app/music_cont/components/songButton/index.tsx",
                                lineNumber: 29,
                                columnNumber: 195
                            }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                            children: "No Artist"
                        }, void 0, false, {
                            fileName: "[project]/src/app/music_cont/components/songButton/index.tsx",
                            lineNumber: 29,
                            columnNumber: 279
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/music_cont/components/songButton/index.tsx",
                        lineNumber: 28,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/music_cont/components/songButton/index.tsx",
                lineNumber: 24,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-64",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                            className: "w-10 h-10 md:w-20 md:h-20 stroke-[0.8]"
                        }, void 0, false, {
                            fileName: "[project]/src/app/music_cont/components/songButton/index.tsx",
                            lineNumber: 36,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                            className: "text-sm md:text-base",
                            children: "Added By: Un-named"
                        }, void 0, false, {
                            fileName: "[project]/src/app/music_cont/components/songButton/index.tsx",
                            lineNumber: 37,
                            columnNumber: 6
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/music_cont/components/songButton/index.tsx",
                    lineNumber: 35,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/music_cont/components/songButton/index.tsx",
                lineNumber: 34,
                columnNumber: 4
            }, this)
        ]
    }, song_name, true, {
        fileName: "[project]/src/app/music_cont/components/songButton/index.tsx",
        lineNumber: 12,
        columnNumber: 3
    }, this);
}
_c = SongButton;
const __TURBOPACK__default__export__ = SongButton;
var _c;
__turbopack_context__.k.register(_c, "SongButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/music_cont/components/blank_album_cover.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/blank_album_cover.3c4612fb.png");}}),
"[project]/src/app/music_cont/components/blank_album_cover.png.mjs { IMAGE => \"[project]/src/app/music_cont/components/blank_album_cover.png (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$music_cont$2f$components$2f$blank_album_cover$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/music_cont/components/blank_album_cover.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$music_cont$2f$components$2f$blank_album_cover$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 256,
    height: 256,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAq0lEQVR42n2LyRKCMBAF8/9f5sWyyrJcEBdAE0CQNWEJVks4efLQNTP93ohG9+huoB8s1k7Y6cMwWkw/4jJRtx2t6elm4dDzrs2wPC2Foja4UtUa/CBm7z94xO/FlY1BvIqGvGxx8xYlyLQgUhnvSi9OyFeJyipCleOHMZcwwbtJ4tm5TNxlzl1mrDYe22PAenflcHkSKOdzhB+lnMOUw1XhBQnu/kWcZvmPL1h072yvmcB/AAAAAElFTkSuQmCC",
    blurWidth: 8,
    blurHeight: 8
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/music_cont/components/currSongPreview/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$music_cont$2f$components$2f$blank_album_cover$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$music_cont$2f$components$2f$blank_album_cover$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/app/music_cont/components/blank_album_cover.png.mjs { IMAGE => "[project]/src/app/music_cont/components/blank_album_cover.png (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
;
;
const CurrSongPreview = ({ className = '', is_playing, progress_ms, song_artists, song_cover_art, song_duration, song_name, song_direct_link })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `flex flex-row items-start gap-4 ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-[50px] h-[50px] md:w-[100px] md:h-[100px] shrink-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    className: "rounded",
                    src: song_cover_art ? song_cover_art[1].url : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$music_cont$2f$components$2f$blank_album_cover$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$music_cont$2f$components$2f$blank_album_cover$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                    fill: true,
                    alt: "album logo"
                }, void 0, false, {
                    fileName: "[project]/src/app/music_cont/components/currSongPreview/index.tsx",
                    lineNumber: 14,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/music_cont/components/currSongPreview/index.tsx",
                lineNumber: 13,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: song_direct_link ?? undefined,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-xl",
                                children: song_name ?? "Not listing to music"
                            }, void 0, false, {
                                fileName: "[project]/src/app/music_cont/components/currSongPreview/index.tsx",
                                lineNumber: 18,
                                columnNumber: 9
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/music_cont/components/currSongPreview/index.tsx",
                            lineNumber: 18,
                            columnNumber: 6
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/music_cont/components/currSongPreview/index.tsx",
                        lineNumber: 17,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-row flex-wrap space-x-1",
                        children: song_artists ? song_artists.map(({ external_urls, name }, index)=>index === song_artists.length - 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: external_urls.spotify,
                                target: "_blank",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                    children: name
                                }, void 0, false, {
                                    fileName: "[project]/src/app/music_cont/components/currSongPreview/index.tsx",
                                    lineNumber: 21,
                                    columnNumber: 173
                                }, this)
                            }, name, false, {
                                fileName: "[project]/src/app/music_cont/components/currSongPreview/index.tsx",
                                lineNumber: 21,
                                columnNumber: 114
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: external_urls.spotify,
                                target: "_blank",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                    children: [
                                        name,
                                        ","
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/music_cont/components/currSongPreview/index.tsx",
                                    lineNumber: 21,
                                    columnNumber: 254
                                }, this)
                            }, name, false, {
                                fileName: "[project]/src/app/music_cont/components/currSongPreview/index.tsx",
                                lineNumber: 21,
                                columnNumber: 195
                            }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                            children: "No Artist"
                        }, void 0, false, {
                            fileName: "[project]/src/app/music_cont/components/currSongPreview/index.tsx",
                            lineNumber: 21,
                            columnNumber: 279
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/music_cont/components/currSongPreview/index.tsx",
                        lineNumber: 20,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/music_cont/components/currSongPreview/index.tsx",
                lineNumber: 16,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/music_cont/components/currSongPreview/index.tsx",
        lineNumber: 12,
        columnNumber: 3
    }, this);
};
_c = CurrSongPreview;
const __TURBOPACK__default__export__ = CurrSongPreview;
var _c;
__turbopack_context__.k.register(_c, "CurrSongPreview");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/music_cont/components/topItem/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
;
function TopItem({ className = '', name, external_urls, album, artists }) {
    return(// Outer border with full width
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `w-full ${className}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-4 py-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative w-[50px] h-[50px] md:w-[100px] md:h-[100px] shrink-0",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        className: "rounded",
                        src: album.images[1].url,
                        fill: true,
                        alt: "album logo"
                    }, void 0, false, {
                        fileName: "[project]/src/app/music_cont/components/topItem/index.tsx",
                        lineNumber: 17,
                        columnNumber: 6
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/music_cont/components/topItem/index.tsx",
                    lineNumber: 16,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: external_urls.spotify,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-xl",
                                    children: name
                                }, void 0, false, {
                                    fileName: "[project]/src/app/music_cont/components/topItem/index.tsx",
                                    lineNumber: 22,
                                    columnNumber: 10
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/music_cont/components/topItem/index.tsx",
                                lineNumber: 22,
                                columnNumber: 7
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/music_cont/components/topItem/index.tsx",
                            lineNumber: 21,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-row flex-wrap space-x-1",
                            children: artists ? artists.map(({ external_urls, name }, index)=>index === artists.length - 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: external_urls.spotify,
                                    target: "_blank",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                        children: name
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/music_cont/components/topItem/index.tsx",
                                        lineNumber: 25,
                                        columnNumber: 159
                                    }, this)
                                }, name, false, {
                                    fileName: "[project]/src/app/music_cont/components/topItem/index.tsx",
                                    lineNumber: 25,
                                    columnNumber: 100
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: external_urls.spotify,
                                    target: "_blank",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                        children: [
                                            name,
                                            ","
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/music_cont/components/topItem/index.tsx",
                                        lineNumber: 25,
                                        columnNumber: 240
                                    }, this)
                                }, name, false, {
                                    fileName: "[project]/src/app/music_cont/components/topItem/index.tsx",
                                    lineNumber: 25,
                                    columnNumber: 181
                                }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                children: "No Artist"
                            }, void 0, false, {
                                fileName: "[project]/src/app/music_cont/components/topItem/index.tsx",
                                lineNumber: 25,
                                columnNumber: 265
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/music_cont/components/topItem/index.tsx",
                            lineNumber: 24,
                            columnNumber: 6
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/music_cont/components/topItem/index.tsx",
                    lineNumber: 20,
                    columnNumber: 5
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/music_cont/components/topItem/index.tsx",
            lineNumber: 14,
            columnNumber: 4
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/music_cont/components/topItem/index.tsx",
        lineNumber: 12,
        columnNumber: 3
    }, this));
}
_c = TopItem;
const __TURBOPACK__default__export__ = TopItem;
var _c;
__turbopack_context__.k.register(_c, "TopItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/music_cont/components/currSongPick_modal/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$music_cont$2f$components$2f$blank_album_cover$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$music_cont$2f$components$2f$blank_album_cover$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/app/music_cont/components/blank_album_cover.png.mjs { IMAGE => "[project]/src/app/music_cont/components/blank_album_cover.png (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
;
;
const CurrSongPick_modal = ({ className = '', song_artists, song_cover_art, song_name })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `flex flex-row items-start gap-4 ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-[50px] h-[50px] md:w-[100px] md:h-[100px] shrink-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    className: "rounded",
                    src: song_cover_art ? song_cover_art[1].url : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$music_cont$2f$components$2f$blank_album_cover$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$music_cont$2f$components$2f$blank_album_cover$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                    fill: true,
                    alt: "album logo"
                }, void 0, false, {
                    fileName: "[project]/src/app/music_cont/components/currSongPick_modal/index.tsx",
                    lineNumber: 9,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/music_cont/components/currSongPick_modal/index.tsx",
                lineNumber: 8,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-xl",
                                children: song_name ?? "Not listing to music"
                            }, void 0, false, {
                                fileName: "[project]/src/app/music_cont/components/currSongPick_modal/index.tsx",
                                lineNumber: 13,
                                columnNumber: 9
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/music_cont/components/currSongPick_modal/index.tsx",
                            lineNumber: 13,
                            columnNumber: 6
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/music_cont/components/currSongPick_modal/index.tsx",
                        lineNumber: 12,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-row flex-wrap space-x-1",
                        children: song_artists ? song_artists.map(({ external_urls, name }, index)=>index === song_artists.length - 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: external_urls.spotify,
                                target: "_blank",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                    children: name
                                }, void 0, false, {
                                    fileName: "[project]/src/app/music_cont/components/currSongPick_modal/index.tsx",
                                    lineNumber: 16,
                                    columnNumber: 173
                                }, this)
                            }, name, false, {
                                fileName: "[project]/src/app/music_cont/components/currSongPick_modal/index.tsx",
                                lineNumber: 16,
                                columnNumber: 114
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: external_urls.spotify,
                                target: "_blank",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                    children: [
                                        name,
                                        ","
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/music_cont/components/currSongPick_modal/index.tsx",
                                    lineNumber: 16,
                                    columnNumber: 254
                                }, this)
                            }, name, false, {
                                fileName: "[project]/src/app/music_cont/components/currSongPick_modal/index.tsx",
                                lineNumber: 16,
                                columnNumber: 195
                            }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                            children: "No Artist"
                        }, void 0, false, {
                            fileName: "[project]/src/app/music_cont/components/currSongPick_modal/index.tsx",
                            lineNumber: 16,
                            columnNumber: 279
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/music_cont/components/currSongPick_modal/index.tsx",
                        lineNumber: 15,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/music_cont/components/currSongPick_modal/index.tsx",
                lineNumber: 11,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/music_cont/components/currSongPick_modal/index.tsx",
        lineNumber: 7,
        columnNumber: 3
    }, this);
};
_c = CurrSongPick_modal;
const __TURBOPACK__default__export__ = CurrSongPick_modal;
var _c;
__turbopack_context__.k.register(_c, "CurrSongPick_modal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/db_actions/connection.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "openDB": (()=>openDB)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$better$2d$sqlite3$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/better-sqlite3/lib/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$path$2d$browserify$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/path-browserify/index.js [app-client] (ecmascript)");
;
;
function openDB() {
    console.log(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].cwd());
    const dbPath = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$path$2d$browserify$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].join(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].cwd(), "db_actions", "user_info.db");
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$better$2d$sqlite3$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](dbPath, {
        verbose: ()=>{}
    });
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/db_actions/sessions.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "createSession": (()=>createSession),
    "deleteSession": (()=>deleteSession),
    "getSession": (()=>getSession),
    "updateSession": (()=>updateSession)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$db_actions$2f$connection$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/db_actions/connection.ts [app-client] (ecmascript)");
;
function createSession(session_id, user_tag, song_names) {
    const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$db_actions$2f$connection$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["openDB"])();
    const song_string = JSON.stringify(song_names);
    db.prepare("INSERT INTO sessions (session_id, user_tag, song_names, created_at) VALUES (?, ?, ?,datetime('now'))").run(session_id, user_tag, song_string);
}
function updateSession(session_id, user_tag, song_names) {
    const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$db_actions$2f$connection$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["openDB"])();
    const song_string = JSON.stringify(song_names);
    db.prepare("UPDATE sessions SET user_tag = ?, song_names = ? WHERE session_id = ?").run(user_tag, song_string, session_id);
}
function getSession(sessionId) {
    const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$db_actions$2f$connection$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["openDB"])();
    return db.prepare("SELECT * FROM sessions WHERE session_id = ?").get(sessionId);
}
function deleteSession(sessionId) {
    const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$db_actions$2f$connection$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["openDB"])();
    db.prepare("DELETE FROM sessions WHERE session_id = ?").run(sessionId);
} /*
(function main() {
	createSession("rando string", "Mike W.", { songs: ["song1", "song2", "song3"] })
})()
*/ 
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/music_cont/components/search_modal/components/add_form.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$music_cont$2f$components$2f$currSongPick_modal$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/music_cont/components/currSongPick_modal/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/actions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$db_actions$2f$sessions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/db_actions/sessions.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
const AddForm = ({ song_artists, song_cover_art, song_name, uri, backFnOnClick, closeModalFn, songData, refetch })=>{
    _s();
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        errorOn: false,
        errorMessage: ""
    });
    const [userTag, setUserTag] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const handle_form_submit = async ()=>{
        /* We will set the session here, on song creation. ( But also need to check if session exist here ) */ const browser_data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["get_session_browser"])();
        if (!browser_data.hasCookie) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["set_session"])(userTag === "" ? null : userTag, {
                song_names: [
                    song_name
                ]
            });
        } else {
            console.log(await (0, __TURBOPACK__imported__module__$5b$project$5d2f$db_actions$2f$sessions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSession"])(browser_data.session));
        }
        //set_session("Test Test User Tag", { song_names: ["Test 1", "Test 2"] })
        for (const track of songData){
            if (track.song_name == song_name) {
                setError({
                    errorOn: true,
                    errorMessage: `Song of: "${song_name}" already on playlist. `
                });
                return;
            }
        }
        const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["add_track"])(uri);
        if (res && closeModalFn && refetch) {
            refetch();
            closeModalFn();
            return;
        }
        setError({
            errorOn: true,
            errorMessage: 'Error in adding to "Flavor Town" playlist try again later -or- ping me ;)'
        });
        return;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col space-y-4 w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-2xl",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                    children: "Song Selected:"
                }, void 0, false, {
                    fileName: "[project]/src/app/music_cont/components/search_modal/components/add_form.tsx",
                    lineNumber: 44,
                    columnNumber: 29
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/music_cont/components/search_modal/components/add_form.tsx",
                lineNumber: 44,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$music_cont$2f$components$2f$currSongPick_modal$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                song_name: song_name,
                song_artists: song_artists,
                song_cover_art: song_cover_art
            }, void 0, false, {
                fileName: "[project]/src/app/music_cont/components/search_modal/components/add_form.tsx",
                lineNumber: 46,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-2xl",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                    children: "Added by:"
                }, void 0, false, {
                    fileName: "[project]/src/app/music_cont/components/search_modal/components/add_form.tsx",
                    lineNumber: 48,
                    columnNumber: 29
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/music_cont/components/search_modal/components/add_form.tsx",
                lineNumber: 48,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "text",
                id: "small-input",
                className: "block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
                placeholder: "Put a Name to the Suggestion (Optional)",
                value: userTag,
                onChange: (e)=>setUserTag(e.target.value)
            }, void 0, false, {
                fileName: "[project]/src/app/music_cont/components/search_modal/components/add_form.tsx",
                lineNumber: 49,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-row justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "w-24 bg-[#302c2c] hover:bg-[#4a4545] text-white font-bold py-2 px-4 rounded text-sm md:text-base",
                        onClick: backFnOnClick,
                        children: " Back "
                    }, void 0, false, {
                        fileName: "[project]/src/app/music_cont/components/search_modal/components/add_form.tsx",
                        lineNumber: 52,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>handle_form_submit(),
                        className: "w-24 bg-[#302c2c] hover:bg-[#4a4545] text-white font-bold py-2 px-4 rounded text-sm md:text-base",
                        children: " Submit "
                    }, void 0, false, {
                        fileName: "[project]/src/app/music_cont/components/search_modal/components/add_form.tsx",
                        lineNumber: 54,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/music_cont/components/search_modal/components/add_form.tsx",
                lineNumber: 50,
                columnNumber: 4
            }, this),
            error.errorOn ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                className: "text-sm text-red-500 flex flex-row justify-center",
                children: error.errorMessage
            }, void 0, false, {
                fileName: "[project]/src/app/music_cont/components/search_modal/components/add_form.tsx",
                lineNumber: 56,
                columnNumber: 21
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/music_cont/components/search_modal/components/add_form.tsx",
        lineNumber: 43,
        columnNumber: 3
    }, this);
};
_s(AddForm, "STLkvfZo0wvbqRuuNtB3V0fefIg=");
_c = AddForm;
const __TURBOPACK__default__export__ = AddForm;
var _c;
__turbopack_context__.k.register(_c, "AddForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/music_cont/components/searchItem/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
;
function SearchItem({ className = '', name, album, artists, uri, onClick }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `w-full ${className}`,
        onClick: onClick,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-4 p-2 hover:bg-[#4B5563] rounded-lg",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative w-[50px] h-[50px] md:w-[100px] md:h-[100px] shrink-0",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        className: "rounded",
                        src: album.images[1].url,
                        fill: true,
                        alt: "album logo"
                    }, void 0, false, {
                        fileName: "[project]/src/app/music_cont/components/searchItem/index.tsx",
                        lineNumber: 15,
                        columnNumber: 6
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/music_cont/components/searchItem/index.tsx",
                    lineNumber: 14,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-xl",
                                children: name
                            }, void 0, false, {
                                fileName: "[project]/src/app/music_cont/components/searchItem/index.tsx",
                                lineNumber: 18,
                                columnNumber: 9
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/music_cont/components/searchItem/index.tsx",
                            lineNumber: 18,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-row flex-wrap space-x-1",
                            children: artists ? artists.map(({ external_urls, name }, index)=>index === artists.length - 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    target: "_blank",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                        children: name
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/music_cont/components/searchItem/index.tsx",
                                        lineNumber: 20,
                                        columnNumber: 130
                                    }, this)
                                }, name, false, {
                                    fileName: "[project]/src/app/music_cont/components/searchItem/index.tsx",
                                    lineNumber: 20,
                                    columnNumber: 100
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    target: "_blank",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                        children: [
                                            name,
                                            ","
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/music_cont/components/searchItem/index.tsx",
                                        lineNumber: 20,
                                        columnNumber: 182
                                    }, this)
                                }, name, false, {
                                    fileName: "[project]/src/app/music_cont/components/searchItem/index.tsx",
                                    lineNumber: 20,
                                    columnNumber: 152
                                }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                children: "No Artist"
                            }, void 0, false, {
                                fileName: "[project]/src/app/music_cont/components/searchItem/index.tsx",
                                lineNumber: 20,
                                columnNumber: 207
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/music_cont/components/searchItem/index.tsx",
                            lineNumber: 19,
                            columnNumber: 6
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/music_cont/components/searchItem/index.tsx",
                    lineNumber: 17,
                    columnNumber: 5
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/music_cont/components/searchItem/index.tsx",
            lineNumber: 13,
            columnNumber: 4
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/music_cont/components/searchItem/index.tsx",
        lineNumber: 12,
        columnNumber: 3
    }, this);
}
_c = SearchItem;
const __TURBOPACK__default__export__ = SearchItem;
var _c;
__turbopack_context__.k.register(_c, "SearchItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/music_cont/components/search_modal/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$query$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/react-query/es/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$query$2f$es$2f$react$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-query/es/react/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/actions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$music_cont$2f$components$2f$search_modal$2f$components$2f$add_form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/music_cont/components/search_modal/components/add_form.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$music_cont$2f$components$2f$searchBar$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/music_cont/components/searchBar/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$music_cont$2f$components$2f$searchItem$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/music_cont/components/searchItem/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
const Modal = ({ className, value, onChange, onClick, songData, refetchFn })=>{
    _s();
    const [formState, setFormState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        song_artists: null,
        song_cover_art: null,
        song_name: null,
        uri: ""
    });
    const [input, setInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(value);
    const [debounceVal, setDebounceVal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(input);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Modal.useEffect": ()=>{
            const handler = setTimeout({
                "Modal.useEffect.handler": ()=>{
                    setDebounceVal(input);
                }
            }["Modal.useEffect.handler"], 500);
            return ({
                "Modal.useEffect": ()=>clearTimeout(handler)
            })["Modal.useEffect"];
        }
    }["Modal.useEffect"], [
        input,
        value
    ]);
    const { data, isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$query$2f$es$2f$react$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'searchItems',
            debounceVal
        ],
        queryFn: {
            "Modal.useQuery": async ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["search_items"])(debounceVal)
        }["Modal.useQuery"],
        enabled: !!debounceVal
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed h-[100dvh] inset-0 bg-black/50 flex items-center justify-center z-11",
        onClick: onClick,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col w-full max-w-lg space-y-2",
            onClick: (e)=>e.stopPropagation(),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$music_cont$2f$components$2f$searchBar$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    className: "",
                    value: value,
                    onChange1: onChange,
                    onChange2: setInput,
                    placeholderText: "Search for a song"
                }, void 0, false, {
                    fileName: "[project]/src/app/music_cont/components/search_modal/index.tsx",
                    lineNumber: 43,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "modal_songList flex-col overflow-y-auto bg-[#374151] text-white-400 rounded-xl shadow-lg p-6 w-full",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex max-h-[60vh] w-full justify-center",
                        children: formState ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$music_cont$2f$components$2f$search_modal$2f$components$2f$add_form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            song_artists: formData.song_artists,
                            song_cover_art: formData.song_cover_art,
                            song_name: formData.song_name,
                            songData: songData,
                            uri: formData.uri,
                            backFnOnClick: ()=>setFormState(false),
                            closeModalFn: onClick,
                            refetch: refetchFn
                        }, void 0, false, {
                            fileName: "[project]/src/app/music_cont/components/search_modal/index.tsx",
                            lineNumber: 47,
                            columnNumber: 8
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: !isLoading && data ? data.map(({ name, album, artists, uri })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$music_cont$2f$components$2f$searchItem$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    className: "search_song_button",
                                    name: name,
                                    album: album,
                                    artists: artists,
                                    uri: uri,
                                    onClick: ()=>{
                                        setFormData({
                                            song_artists: artists,
                                            song_cover_art: album.images,
                                            song_name: name,
                                            uri: uri
                                        });
                                        setFormState(true);
                                    }
                                }, uri, false, {
                                    fileName: "[project]/src/app/music_cont/components/search_modal/index.tsx",
                                    lineNumber: 51,
                                    columnNumber: 10
                                }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                children: "No Recent Searches"
                            }, void 0, false, {
                                fileName: "[project]/src/app/music_cont/components/search_modal/index.tsx",
                                lineNumber: 56,
                                columnNumber: 10
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/music_cont/components/search_modal/index.tsx",
                            lineNumber: 49,
                            columnNumber: 8
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/music_cont/components/search_modal/index.tsx",
                        lineNumber: 45,
                        columnNumber: 6
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/music_cont/components/search_modal/index.tsx",
                    lineNumber: 44,
                    columnNumber: 5
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/music_cont/components/search_modal/index.tsx",
            lineNumber: 42,
            columnNumber: 4
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/music_cont/components/search_modal/index.tsx",
        lineNumber: 41,
        columnNumber: 3
    }, this);
};
_s(Modal, "2E6lOznRtDD0tqVMnVGXj9Qy6uI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$query$2f$es$2f$react$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
_c = Modal;
const __TURBOPACK__default__export__ = Modal;
var _c;
__turbopack_context__.k.register(_c, "Modal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/music_cont/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/actions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$query$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/react-query/es/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$query$2f$es$2f$react$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-query/es/react/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$music_cont$2f$components$2f$searchBar$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/music_cont/components/searchBar/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$music_cont$2f$components$2f$songButton$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/music_cont/components/songButton/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$music_cont$2f$components$2f$currSongPreview$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/music_cont/components/currSongPreview/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$music_cont$2f$components$2f$topItem$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/music_cont/components/topItem/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$music_cont$2f$components$2f$search_modal$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/music_cont/components/search_modal/index.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
;
;
const MusicCont = ({ id })=>{
    _s();
    const [input, setInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [showModal, setModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { data: playListSongs, isLoading: isLoadingPlaylist, refetch } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$query$2f$es$2f$react$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'playlistData'
        ],
        queryFn: {
            "MusicCont.useQuery": async ()=>await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["get_playlist"])()
        }["MusicCont.useQuery"]
    });
    const { data: currTrack, isLoading: isLoadingCurr } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$query$2f$es$2f$react$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'currTrackData'
        ],
        queryFn: {
            "MusicCont.useQuery": async ()=>await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["get_currTrack"])()
        }["MusicCont.useQuery"]
    });
    const { data: topItems, isLoading: isLoadingTopItems } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$query$2f$es$2f$react$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'topItemsData'
        ],
        queryFn: {
            "MusicCont.useQuery": async ()=>await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["get_top_items"])()
        }["MusicCont.useQuery"]
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MusicCont.useEffect": ()=>{
            if (showModal) {
                document.body.classList.add('overflow-hidden');
            } else {
                document.body.classList.remove('overflow-hidden');
            }
            return ({
                "MusicCont.useEffect": ()=>document.body.classList.remove('overflow-hidden')
            })["MusicCont.useEffect"];
        }
    }["MusicCont.useEffect"], [
        showModal
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        id: id,
        className: "md:min-h-screen md:scroll-mt-32",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-6xl font-bold mx-2 mb-1 md:ml-6",
                children: "Music ♫"
            }, void 0, false, {
                fileName: "[project]/src/app/music_cont/index.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col md:flex-row flex-wrap mx-2 md:mx-6 rounded-lg",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full w-1/2 md:w-4/6 flex flex-col max-h-[75vh]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$music_cont$2f$components$2f$searchBar$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                value: input,
                                readonly: true,
                                inputMode: "none",
                                className: "w-full mb-2 cursor-pointer select-none",
                                onChange1: setInput,
                                onClick: ()=>setModal(true)
                            }, void 0, false, {
                                fileName: "[project]/src/app/music_cont/index.tsx",
                                lineNumber: 46,
                                columnNumber: 11
                            }, this),
                            showModal && playListSongs ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$music_cont$2f$components$2f$search_modal$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                value: input,
                                onChange: setInput,
                                songData: playListSongs,
                                onClick: ()=>setModal(false),
                                refetchFn: refetch
                            }, void 0, false, {
                                fileName: "[project]/src/app/music_cont/index.tsx",
                                lineNumber: 47,
                                columnNumber: 41
                            }, this) : null,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "songList custom_bg overflow-auto w-full border-2 border-transparent rounded-lg flex-1",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "list-group border-black",
                                    children: !isLoadingPlaylist && playListSongs ? playListSongs.map(({ song_name, song_url, album_cover, artists_data })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$music_cont$2f$components$2f$songButton$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            className: "py-2 px-2 break-words song_button",
                                            song_name: song_name,
                                            song_url: song_url,
                                            album_cover: album_cover,
                                            artists_data: artists_data
                                        }, song_name, false, {
                                            fileName: "[project]/src/app/music_cont/index.tsx",
                                            lineNumber: 52,
                                            columnNumber: 19
                                        }, this)) : null
                                }, void 0, false, {
                                    fileName: "[project]/src/app/music_cont/index.tsx",
                                    lineNumber: 49,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/music_cont/index.tsx",
                                lineNumber: 48,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/music_cont/index.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full md:w-2/6 md:pl-4 mb-6 flex flex-col h-[75vh]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col flex-1 h-full",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "py-2 flex flex-col flex-1 h-full md:px-2 md:py-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-4xl font-bold mb-1",
                                        children: "In My Ears"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/music_cont/index.tsx",
                                        lineNumber: 72,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-lg custom_bg w-full p-4 mb-4 text-white",
                                        children: !isLoadingCurr && currTrack ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$music_cont$2f$components$2f$currSongPreview$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            ...currTrack
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/music_cont/index.tsx",
                                            lineNumber: 76,
                                            columnNumber: 48
                                        }, this) : null
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/music_cont/index.tsx",
                                        lineNumber: 75,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-4xl font-bold mb-2",
                                        children: "Top 10 Most Played"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/music_cont/index.tsx",
                                        lineNumber: 79,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "topTenList custom_bg border-transparent border-2 rounded-lg w-full text-white overflow-auto flex-1 mb-1",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "list-group w-full",
                                            children: !isLoadingTopItems && topItems ? topItems.map((elem)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$music_cont$2f$components$2f$topItem$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    className: "w-full py-2 px-2 break-words song_button",
                                                    ...elem
                                                }, elem.name, false, {
                                                    fileName: "[project]/src/app/music_cont/index.tsx",
                                                    lineNumber: 86,
                                                    columnNumber: 23
                                                }, this)) : null
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/music_cont/index.tsx",
                                            lineNumber: 83,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/music_cont/index.tsx",
                                        lineNumber: 82,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/music_cont/index.tsx",
                                lineNumber: 71,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/music_cont/index.tsx",
                            lineNumber: 70,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/music_cont/index.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/music_cont/index.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/music_cont/index.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
};
_s(MusicCont, "BKv8opfhKZQz9Ur4c9IEFCCDRYc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$query$2f$es$2f$react$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$query$2f$es$2f$react$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$query$2f$es$2f$react$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
_c = MusicCont;
const __TURBOPACK__default__export__ = MusicCont;
var _c;
__turbopack_context__.k.register(_c, "MusicCont");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/music_cont/index.tsx [app-client] (ecmascript, next/dynamic entry)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/music_cont/index.tsx [app-client] (ecmascript)"));
}}),
}]);

//# sourceMappingURL=_2f0772ab._.js.map