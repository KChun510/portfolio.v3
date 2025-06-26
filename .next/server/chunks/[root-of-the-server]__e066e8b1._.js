module.exports = {

"[project]/.next-internal/server/app/api/spotify/remove_track_from_playlist/route/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

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
"[externals]/path [external] (path, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}}),
"[externals]/url [external] (url, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}}),
"[externals]/fs [external] (fs, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}}),
"[project]/src/app/spotify_utils/json_actions.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "get_local_token": (()=>get_local_token),
    "write_token_data": (()=>write_token_data)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$url__$5b$external$5d$__$28$url$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/url [external] (url, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs [external] (fs, cjs)");
const __TURBOPACK__import$2e$meta__ = {
    get url () {
        return `file://${__turbopack_context__.P("src/app/spotify_utils/json_actions.ts")}`;
    }
};
;
;
;
// Fix for __dirname in ESM (like tsx or native ES modules)
const __filename = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$url__$5b$external$5d$__$28$url$2c$__cjs$29$__["fileURLToPath"])(__TURBOPACK__import$2e$meta__.url);
const __dirname = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].dirname(__filename);
// Always resolve relative to the current file
const tokenPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(__dirname, 'token_data.json');
async function get_local_token() {
    const file_cont = await __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["promises"].readFile(tokenPath, 'utf8');
    return file_cont ? JSON.parse(file_cont) : null;
}
async function write_token_data(file_cont) {
    await __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["promises"].writeFile(tokenPath, JSON.stringify(file_cont));
}
}}),
"[project]/src/app/spotify_utils/api_endpoints.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "add_track_to_playlist": (()=>add_track_to_playlist),
    "extract_data_curr_song": (()=>extract_data_curr_song),
    "get_current_track": (()=>get_current_track),
    "get_playlist": (()=>get_playlist),
    "get_top_items": (()=>get_top_items),
    "remove_track_from_playlist": (()=>remove_track_from_playlist),
    "search_spotify": (()=>search_spotify)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$spotify_utils$2f$json_actions$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/spotify_utils/json_actions.ts [app-route] (ecmascript)");
;
const playlist_id = '1w7opBRG814H7CMZaMOCN7';
async function add_track_to_playlist(uri) {
    const token_data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$spotify_utils$2f$json_actions$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["get_local_token"])();
    const url = new URL(`https://api.spotify.com/v1/playlists/${playlist_id}/tracks`);
    console.log(uri);
    try {
        if (!token_data) {
            throw new Error("Unable to get access token from file");
        }
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + token_data.access_token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                uris: [
                    uri
                ]
            })
        });
        if (!res.ok) {
            console.error(`Error: ${res.status} ${res.statusText}`);
            return false;
        }
        console.log(`Success, track added to playlist`);
        return true;
    } catch (err) {
        console.error('Failed to add to playlist: ', err);
        return false;
    }
}
async function remove_track_from_playlist(uri) {
    const token_data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$spotify_utils$2f$json_actions$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["get_local_token"])();
    const url = new URL(`https://api.spotify.com/v1/playlists/${playlist_id}/tracks`);
    try {
        if (!token_data) {
            throw new Error("Unable to get access token from file");
        }
        const res = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Authorization': 'Bearer ' + token_data.access_token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                tracks: uri
            })
        });
        if (!res.ok) {
            console.error(`Error: ${res.status} ${res.statusText}`);
            return false;
        }
        console.log(`Success, track removed from playlist`);
        return true;
    } catch (err) {
        console.error('Failed to remove from playlist: ', err);
        return false;
    }
}
async function search_spotify(search_string) {
    const token_data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$spotify_utils$2f$json_actions$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["get_local_token"])();
    const search_q = search_string;
    const type = 'track';
    const market = 'US';
    const limit = '10';
    const url = new URL(`https://api.spotify.com/v1/search?`);
    url.searchParams.append('q', search_q);
    url.searchParams.append('type', type);
    url.searchParams.append('market', market);
    url.searchParams.append('limit', limit);
    try {
        if (!token_data) {
            throw new Error("Unable to get access token from file");
        }
        const res = await fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + token_data.access_token
            }
        });
        if (!res.ok) {
            console.error(`Error: ${res.status} ${res.statusText}`);
            return null;
        }
        const data = await res.json();
        const track_data = data.tracks.items;
        const filtered_data = track_data.map(({ name, album, artists, uri })=>({
                name,
                album,
                artists,
                uri
            }));
        return filtered_data;
    } catch (err) {
        console.error('Failed to fetch search: ', err);
        return null;
    }
}
async function get_playlist() {
    const token_data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$spotify_utils$2f$json_actions$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["get_local_token"])();
    const market = 'US';
    const url = new URL(`https://api.spotify.com/v1/playlists/${playlist_id}`);
    url.searchParams.append('market', market);
    try {
        if (!token_data) {
            throw new Error("Unable to get access token from file");
        }
        const res = await fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + token_data.access_token
            }
        });
        if (!res.ok) {
            console.error(`Error: ${res.status} ${res.statusText}`);
            return null;
        }
        const data = await res.json();
        const song_data = data.tracks.items;
        const final_song_data = song_data.map((elem)=>({
                song_name: elem.track.name,
                uri: elem.track.uri,
                song_url: elem.track.external_urls,
                album_cover: elem.track.album.images,
                artists_data: elem.track.artists
            }));
        return final_song_data.reverse();
    } catch (err) {
        console.error('Failed to fetch playlist: ', err);
        return null;
    }
}
async function get_current_track() {
    const token_data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$spotify_utils$2f$json_actions$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["get_local_token"])();
    const market = 'US';
    const url = new URL('https://api.spotify.com/v1/me/player/currently-playing');
    url.searchParams.append('market', market);
    try {
        if (!token_data) {
            throw new Error("Unable to get access token from file");
        }
        const res = await fetch(url.toString(), {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + token_data.access_token
            }
        });
        if (!res.ok) {
            console.error(`Error: ${res.status} ${res.statusText}`);
            return null;
        }
        const data = await res.json();
        const final_data = await extract_data_curr_song(data);
        return final_data;
    } catch (err) {
        console.error('Failed to fetch current track: ', err);
        return null;
    }
}
async function extract_data_curr_song(data) {
    const progress_ms = data.progress_ms;
    const is_playing = data.is_playing;
    const item_data = data.item;
    let song_artists = null;
    let song_cover_art = null;
    let song_duration = null;
    let song_name = null;
    let song_direct_link = null;
    if (item_data) {
        song_artists = item_data.artists;
        song_cover_art = item_data.album.images;
        song_duration = item_data.duration_ms;
        song_name = item_data.name;
        song_direct_link = item_data.external_urls.spotify;
    }
    return {
        is_playing,
        progress_ms,
        item_data,
        song_artists,
        song_cover_art,
        song_duration,
        song_name,
        song_direct_link
    };
}
async function get_top_items() {
    const token_data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$spotify_utils$2f$json_actions$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["get_local_token"])();
    const url = new URL(`https://api.spotify.com/v1/me/top/tracks`);
    url.searchParams.append("type", "tracks");
    url.searchParams.append("time_range", "medium_term");
    url.searchParams.append("limit", "10");
    try {
        if (!token_data) {
            throw new Error("Unable to get access token from file");
        }
        const res = await fetch(url, {
            method: "GET",
            headers: {
                'Authorization': 'Bearer ' + token_data.access_token
            }
        });
        if (!res.ok) {
            console.error(`Error: ${res.status} ${res.statusText}`);
            return null;
        }
        const data = (await res.json()).items;
        const filteredData = data.map(({ name, external_urls, artists, album })=>({
                name,
                external_urls,
                artists,
                album
            }));
        return filteredData;
    } catch (err) {
        console.error('Failed to get top items: ', err);
        return null;
    }
}
(async function main() {})();
}}),
"[project]/src/app/api/spotify/remove_track_from_playlist/route.tsx [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "POST": (()=>POST)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$spotify_utils$2f$api_endpoints$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/spotify_utils/api_endpoints.ts [app-route] (ecmascript)");
;
;
async function POST(req) {
    const body = await req.json();
    console.log(body);
    try {
        const success = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$spotify_utils$2f$api_endpoints$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["remove_track_from_playlist"])([
            {
                uri: body
            }
        ]);
        if (!success) {
            throw new Error("Failed to remove track from playlist");
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            status: 200
        });
    } catch (err) {
        console.error(err);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Internal Server Error'
        }, {
            status: 500
        });
    }
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__e066e8b1._.js.map