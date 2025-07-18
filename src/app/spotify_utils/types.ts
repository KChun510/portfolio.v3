export type token_res = {
	access_token: string,
	token_type: string,
	expires_in: number,
	refresh_token: string
}

export type SpotifyCurrentlyPlayingResponse = {
	timestamp: number;
	context?: {
		external_urls: {
			spotify: string;
		};
		href: string;
		type: string;
		uri: string;
	};
	progress_ms: number | null;
	item: {
		album: {
			album_type: string;
			artists: Array<{
				external_urls: { spotify: string };
				href: string;
				id: string;
				name: string;
				type: string;
				uri: string;
			}>;
			external_urls: { spotify: string };
			href: string;
			id: string;
			images: Array<{
				height: number;
				url: string;
				width: number;
			}>;
			is_playable: boolean;
			name: string;
			release_date: string;
			release_date_precision: string;
			total_tracks: number;
			type: string;
			uri: string;
		};
		artists: Array<{
			external_urls: { spotify: string };
			href: string;
			id: string;
			name: string;
			type: string;
			uri: string;
		}>;
		disc_number: number;
		duration_ms: number;
		explicit: boolean;
		external_ids: {
			isrc: string;
		};
		external_urls: {
			spotify: string;
		};
		href: string;
		id: string;
		is_local: boolean;
		is_playable: boolean;
		name: string;
		popularity: number;
		preview_url: string | null;
		track_number: number;
		type: string;
		uri: string;
	} | null,
	currently_playing_type: 'track' | 'episode' | 'ad' | string;
	actions: {
		disallows: {
			[action: string]: boolean;
		};
	};
	is_playing: boolean;
};

export type SpotifyPlaylist = {
	collaborative: boolean;
	description: string;
	external_urls: {
		spotify: string;
	};
	followers: {
		href: string | null;
		total: number;
	};
	href: string;
	id: string;
	images: Array<{
		height: number;
		url: string;
		width: number;
	}>;
	name: string;
	owner: {
		display_name: string;
		external_urls: {
			spotify: string;
		};
		href: string;
		id: string;
		type: string;
		uri: string;
	};
	primary_color: string | null;
	public: boolean;
	snapshot_id: string;
	tracks: {
		href: string;
		items: any[]; // Replace `any` with a proper `SpotifyTrackItem` type if needed
		limit: number;
		next: string | null;
		offset: number;
		previous: string | null;
		total: number;
	};
	type: string;
	uri: string;
};

export type filteredPlaylistData = {
	song_name: string,
	song_url: { spotify: string },
	uri: string,
	album_cover: { url: string, width: number, height: number }[],
	artists_data: { external_urls: { spotify: string }, name: string }[],
}

export type CurrentSongData = {
	progress_ms: number | null;
	is_playing: boolean;
	item_data?: any; // You can replace `any` with a more specific type if known

	song_artists: {
		external_urls: { spotify: string };
		href: string;
		id: string;
		name: string;
		type: string;
		uri: string;
	}[] | null;

	song_cover_art: {
		height: number;
		url: string;
		width: number;
	}[] | null;

	song_duration: number | null;
	song_name: string | null;
	song_direct_link: string | null;
};

export type songPickModalProps = {
	backFnOnClick?: () => void;
	closeModalFn?: () => void;
	className?: string | null;
	refetch1?: () => void;
	refetch2?: () => void;
	refetch3?: () => void;
	setSongAdded?: () => void;
	song_name: string | null;
	songData?: filteredPlaylistData[];
	uri?: string;
	song_artists: {
		external_urls: { spotify: string };
		href: string;
		id: string;
		name: string;
		type: string;
		uri: string;
	}[] | null;

	song_cover_art: {
		height: number;
		url: string;
		width: number;
	}[] | null;
}

export type topTracks = {
	album: {
		album_type: string;
		total_tracks: number;
		available_markets: string[];
		external_urls: { spotify: string };
		href: string;
		id: string;
		images: { height: number; url: string; width: number }[];
		name: string;
		release_date: string;
		release_date_precision: string;
		type: string;
		uri: string;
	};
	artists: {
		external_urls: { spotify: string };
		href: string;
		id: string;
		name: string;
		type: string;
		uri: string;
	}[];
	available_markets: string[];
	disc_number: number;
	duration_ms: number;
	explicit: boolean;
	external_ids: {
		isrc?: string;
		ean?: string;
		upc?: string;
	};
	external_urls: { spotify: string };
	href: string;
	id: string;
	is_local: boolean;
	is_playable: boolean;
	name: string;
	popularity: number;
	preview_url: string | null;
	track_number: number;
	type: string;
	uri: string;
}

export type filtered_data_basic = {
	name: string;
	artists: {
		external_urls: { spotify: string };
		href: string;
		id: string;
		name: string;
		type: string;
		uri: string;
	}[];
	album: {
		album_type: string;
		total_tracks: number;
		available_markets: string[];
		external_urls: { spotify: string };
		href: string;
		id: string;
		images: { height: number; url: string; width: number }[];
		name: string;
		release_date: string;
		release_date_precision: string;
		type: string;
		uri: string;
	};
}

export type filtered_top_data = filtered_data_basic & {
	external_urls: { spotify: string };
}

export type filtered_search_data = filtered_data_basic & {
	uri: string;
}

export type CurrSongProps = CurrentSongData & {
	className?: string
}







