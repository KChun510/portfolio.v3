import { get_local_token } from './json_actions'
import { CurrentSongData, filtered_search_data, filtered_top_data, SpotifyCurrentlyPlayingResponse, SpotifyPlaylist, topTracks } from './types';
const playlist_id = '1w7opBRG814H7CMZaMOCN7'

export async function add_track_to_playlist(uri: string) {
	const token_data = await get_local_token();
	const url = new URL(`https://api.spotify.com/v1/playlists/${playlist_id}/tracks`)

	try {
		if (!token_data) {
			throw new Error("Unable to get access token from file")
		}

		const res = await fetch(url, {
			method: 'POST',
			headers: {
				'Authorization': 'Bearer ' + token_data.access_token,
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				uris: [uri]
			})
		})
		if (!res.ok) {
			console.error(`Error: ${res.status} ${res.statusText}`)
			return false
		}
		console.log(`Success, track added to playlist`)
		return true

	} catch (err) {
		console.error('Failed to add to playlist: ', err)
		return false

	}
}

export async function remove_track_from_playlist(uri: [{ uri: string }]) {
	const token_data = await get_local_token();
	const url = new URL(`https://api.spotify.com/v1/playlists/${playlist_id}/tracks`)
	try {
		if (!token_data) {
			throw new Error("Unable to get access token from file")
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
		})
		if (!res.ok) {
			console.error(`Error: ${res.status} ${res.statusText}`)
			return false
		}
		console.log(`Success, track removed from playlist`)
		return true
	} catch (err) {
		console.error('Failed to remove from playlist: ', err)
		return false
	}
}

export async function search_spotify(search_string: string): Promise<filtered_search_data[] | null> {
	const token_data = await get_local_token();
	const search_q = search_string
	const type = 'track'
	const market = 'US'
	const limit = '10'

	const url = new URL(`https://api.spotify.com/v1/search?`)
	url.searchParams.append('q', search_q)
	url.searchParams.append('type', type)
	url.searchParams.append('market', market)
	url.searchParams.append('limit', limit)

	try {
		if (!token_data) {
			throw new Error("Unable to get access token from file")
		}
		const res = await fetch(url, {
			method: 'GET',
			headers: {
				'Authorization': 'Bearer ' + token_data.access_token
			}
		})

		if (!res.ok) {
			console.error(`Error: ${res.status} ${res.statusText}`)
			return null
		}
		const data = await res.json()
		const track_data: topTracks[] = data.tracks.items
		const filtered_data = track_data.map(({ name, album, artists, uri }) => ({ name, album, artists, uri }))
		return filtered_data
	} catch (err) {
		console.error('Failed to fetch search: ', err)
		return null
	}
}

export async function get_playlist() {
	const token_data = await get_local_token();
	const market = 'US'
	const url = new URL(`https://api.spotify.com/v1/playlists/${playlist_id}`);
	url.searchParams.append('market', market)
	try {
		if (!token_data) {
			throw new Error("Unable to get access token from file")
		}
		const res = await fetch(url, {
			method: 'GET',
			headers: {
				'Authorization': 'Bearer ' + token_data.access_token
			}
		})
		if (!res.ok) {
			console.error(`Error: ${res.status} ${res.statusText}`)
			return null
		}
		const data: SpotifyPlaylist = await res.json()
		const song_data = data.tracks.items

		const final_song_data = song_data.map(elem => ({
			song_name: elem.track.name,
			uri: elem.track.uri,
			song_url: elem.track.external_urls,
			album_cover: elem.track.album.images,
			artists_data: elem.track.artists,
		}))

		return final_song_data.reverse()

	} catch (err) {
		console.error('Failed to fetch playlist: ', err)
		return null
	}
}

export async function get_current_track(): Promise<CurrentSongData | null> {
	const token_data = await get_local_token();
	const market = 'US'
	const url = new URL('https://api.spotify.com/v1/me/player/currently-playing');
	url.searchParams.append('market', market);
	try {
		if (!token_data) {
			throw new Error("Unable to get access token from file")
		}
		const res = await fetch(url.toString(), {
			method: 'GET',
			headers: {
				'Authorization': 'Bearer ' + token_data.access_token
			},
		})
		if (!res.ok) {
			console.error(`Error: ${res.status} ${res.statusText}`)
			return null
		}
		const data: SpotifyCurrentlyPlayingResponse = await res.json()
		const final_data = await extract_data_curr_song(data)
		return final_data

	} catch (err) {
		console.error('Failed to fetch current track: ', err)
		return null
	}
}

export async function extract_data_curr_song(data: SpotifyCurrentlyPlayingResponse): Promise<CurrentSongData> {
	const progress_ms: number | null = data.progress_ms
	const is_playing = data.is_playing
	const item_data = data.item
	let song_artists: {
		external_urls: { spotify: string };
		href: string;
		id: string;
		name: string;
		type: string;
		uri: string;
	}[] | null = null;
	let song_cover_art: { height: number; url: string; width: number }[] | null = null;
	let song_duration: number | null = null;
	let song_name: string | null = null;
	let song_direct_link: string | null = null

	if (item_data) {
		song_artists = item_data.artists
		song_cover_art = item_data.album.images
		song_duration = item_data.duration_ms
		song_name = item_data.name
		song_direct_link = item_data.external_urls.spotify
	}
	return {
		is_playing, progress_ms, item_data, song_artists, song_cover_art, song_duration, song_name, song_direct_link
	}
}

export async function get_top_items(): Promise<filtered_top_data[] | null> {
	const token_data = await get_local_token();
	const url = new URL(`https://api.spotify.com/v1/me/top/tracks`)
	url.searchParams.append("type", "tracks")
	url.searchParams.append("time_range", "short_term")
	url.searchParams.append("limit", "10")

	try {
		if (!token_data) {
			throw new Error("Unable to get access token from file")
		}
		const res = await fetch(url, {
			method: "GET",
			headers: {
				'Authorization': 'Bearer ' + token_data.access_token,
			}
		})

		if (!res.ok) {
			console.error(`Error: ${res.status} ${res.statusText}`)
			return null
		}
		const data: topTracks[] = (await res.json()).items
		const filteredData = data.map(({ name, external_urls, artists, album }) => ({
			name, external_urls, artists, album
		}))
		return filteredData

	} catch (err) {
		console.error('Failed to get top items: ', err)
		return null
	}
}

(async function main() {
})()


