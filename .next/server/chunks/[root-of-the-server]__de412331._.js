module.exports = {

"[project]/.next-internal/server/app/api/session/update_session/route/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
}}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/better-sqlite3 [external] (better-sqlite3, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("better-sqlite3", () => require("better-sqlite3"));

module.exports = mod;
}}),
"[externals]/path [external] (path, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}}),
"[project]/db_actions/connection.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "openDB": (()=>openDB)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$better$2d$sqlite3__$5b$external$5d$__$28$better$2d$sqlite3$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/better-sqlite3 [external] (better-sqlite3, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
;
;
function openDB() {
    //const dbPath = path.join(process.cwd(), "user_info.db");
    const dbPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), "db_actions", "user_info.db");
    return new __TURBOPACK__imported__module__$5b$externals$5d2f$better$2d$sqlite3__$5b$external$5d$__$28$better$2d$sqlite3$2c$__cjs$29$__["default"](dbPath, {
        verbose: ()=>{}
    });
}
}}),
"[project]/db_actions/sessions.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "createSession": (()=>createSession),
    "deleteSession": (()=>deleteSession),
    "getSession": (()=>getSession),
    "select_all_sessions": (()=>select_all_sessions),
    "updateSession": (()=>updateSession)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$db_actions$2f$connection$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/db_actions/connection.ts [app-route] (ecmascript)");
;
function createSession(session_id, user_tag, song_names) {
    const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$db_actions$2f$connection$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["openDB"])();
    const song_string = JSON.stringify(song_names);
    db.prepare("INSERT INTO sessions (session_id, user_tag, song_names, created_at) VALUES (?, ?, ?,datetime('now'))").run(session_id, user_tag, song_string);
}
function select_all_sessions() {
    const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$db_actions$2f$connection$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["openDB"])();
    const data = db.prepare("SELECT session_id, user_tag, song_names FROM sessions").all();
    const formatted_data = data.map(({ session_id, user_tag, song_names })=>({
            session: session_id,
            user_tag,
            song_names: JSON.parse(song_names)
        }));
    return formatted_data;
}
function updateSession(session_id, user_tag, song_names) {
    const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$db_actions$2f$connection$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["openDB"])();
    const song_string = JSON.stringify(song_names);
    return db.prepare("UPDATE sessions SET user_tag = ?, song_names = ? WHERE session_id = ?").run(user_tag, song_string, session_id);
}
function getSession(sessionId) {
    const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$db_actions$2f$connection$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["openDB"])();
    return db.prepare("SELECT * FROM sessions WHERE session_id = ?").get(sessionId);
}
function deleteSession(sessionId) {
    const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$db_actions$2f$connection$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["openDB"])();
    db.prepare("DELETE FROM sessions WHERE session_id = ?").run(sessionId);
}
(async function main() {
    console.log(await getSession(""));
})();
}}),
"[project]/src/app/api/session/update_session/route.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "POST": (()=>POST)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$db_actions$2f$sessions$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/db_actions/sessions.ts [app-route] (ecmascript)");
;
;
async function POST(req) {
    const body = await req.json();
    try {
        if (!body) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                message: "Error getting req body"
            }, {
                status: 500
            });
        }
        const { session_id, user_tag, song_names } = body;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$db_actions$2f$sessions$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["updateSession"])(session_id, user_tag, song_names);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            status: 200
        });
    } catch (err) {
        console.error(err);
    }
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__de412331._.js.map